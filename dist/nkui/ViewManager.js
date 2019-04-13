"use strict";
exports.__esModule = true;
/**
 * Manages visible and hidden views components
 * using browser history.
 */
var ViewManager = /** @class */ (function () {
    /**
     * Create the view manager.
     * @param selector selector for root element
     * @param ui ui factory
     */
    function ViewManager(selector, ui) {
        var _this = this;
        this._ui = ui;
        this._root = document.querySelector(selector);
        this._stack = [];
        window.onpopstate = function () { return _this.pop(); };
    }
    /**
     * Create a visible component and hidden stack components.
     * @param factory factory to component
     */
    ViewManager.prototype.open = function (factory) {
        var _this = this;
        this._ui.addChange(function () {
            var element = document.createElement("div");
            element.className = "nk-vw";
            var closeFn = function () {
                var pos = _this._stack.lastIndexOf(element);
                if (pos > -1) {
                    _this._stack.splice(pos, 1);
                }
                _this._setVisible(element, false);
                _this._root.removeChild(element);
                if (_this._stack.length > 0) {
                    _this._setVisible(_this._stack[_this._stack.length - 1], true);
                }
            };
            var component = factory(closeFn);
            component.addChange(function (e) {
                element.appendChild(e);
                _this._root.appendChild(document.createDocumentFragment().appendChild(element));
                if (_this._stack.length > 0) {
                    _this._setVisible(_this._stack[_this._stack.length - 1], false);
                }
                _this._stack.push(element);
                _this._setVisible(element, true);
                history.pushState({}, "", "/");
            });
        });
    };
    /**
     * Remove the top view visible and
     * show the bottom hidden component.
     */
    ViewManager.prototype.pop = function () {
        if (this._stack.length > 0) {
            var element = this._stack.pop();
            this._setVisible(element, false);
            this._root.removeChild(element);
            if (this._stack.length > 0) {
                this._setVisible(this._stack[this._stack.length - 1], true);
            }
        }
    };
    /**
     * Change the visible component.
     */
    ViewManager.prototype._setVisible = function (e, visible) {
        var cssVisible = 'nk-vw-ac';
        var cssNoVisible = 'nk-vw-in';
        if (visible) {
            e.classList.remove(cssNoVisible);
            e.classList.add(cssVisible);
        }
        else {
            e.classList.remove(cssVisible);
            e.classList.add(cssNoVisible);
        }
    };
    return ViewManager;
}());
exports.ViewManager = ViewManager;
//# sourceMappingURL=ViewManager.js.map