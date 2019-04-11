"use strict";
exports.__esModule = true;
var ViewManager = /** @class */ (function () {
    function ViewManager(selector, ui) {
        var _this = this;
        this.ui = ui;
        this.root = document.querySelector(selector);
        this.stack = [];
        window.onpopstate = function () { return _this.pop(); };
    }
    ViewManager.prototype.open = function (factory) {
        var _this = this;
        this.ui.addChange(function () {
            var element = document.createElement("div");
            element.className = "nk-vw";
            var closeFn = function () {
                var pos = _this.stack.lastIndexOf(element);
                if (pos > -1) {
                    _this.stack.splice(pos, 1);
                }
                _this._setVisible(element, false);
                _this.root.removeChild(element);
                if (_this.stack.length > 0) {
                    _this._setVisible(_this.stack[_this.stack.length - 1], true);
                }
            };
            var component = factory(closeFn);
            component.addChange(function (e) {
                element.appendChild(e);
                _this.root.appendChild(document.createDocumentFragment().appendChild(element));
                if (_this.stack.length > 0) {
                    _this._setVisible(_this.stack[_this.stack.length - 1], false);
                }
                _this.stack.push(element);
                _this._setVisible(element, true);
                history.pushState({}, "", "/");
            });
        });
    };
    ViewManager.prototype.pop = function () {
        if (this.stack.length > 0) {
            var element = this.stack.pop();
            this._setVisible(element, false);
            this.root.removeChild(element);
            if (this.stack.length > 0) {
                this._setVisible(this.stack[this.stack.length - 1], true);
            }
        }
    };
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