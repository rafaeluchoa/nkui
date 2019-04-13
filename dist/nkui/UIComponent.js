"use strict";
exports.__esModule = true;
/**
 * Classe base for all components with standard
 * way to add UI changes in batch.
 */
var UIComponent = /** @class */ (function () {
    function UIComponent(tag, up) {
        var _this = this;
        this._up = up;
        this._element = null;
        this._up.addChange(function () {
            _this._element = document.createElement(tag);
        });
    }
    /**
     * Adds an UI change using the enclose
     * element of this component.
     * @param action IU change
     */
    UIComponent.prototype.addChange = function (action) {
        var _this = this;
        this._up.addChange(function () {
            action(_this._element);
        });
        return this;
    };
    /**
     * Adds a event listener for click.
     * @param fn
     */
    UIComponent.prototype.click = function (fn) {
        this.addChange(function (e) {
            e.addEventListener("click", function () {
                fn();
            });
        });
        return this;
    };
    /**
     * Change the textContent attribute
     * of the element.
     * @param value textContent
     */
    UIComponent.prototype.text = function (value) {
        this.addChange(function (e) {
            e.textContent = value;
        });
        return this;
    };
    /**
     * Appends other component within this.
     * @param c component
     */
    UIComponent.prototype.add = function (c) {
        this.addChange(function (e) {
            c.addChange(function (ce) {
                e.appendChild(ce);
            });
        });
        return this;
    };
    /**
     * Remove all elements contained
     * in this component.
     */
    UIComponent.prototype.clear = function () {
        this.addChange(function (e) {
            while (e.childNodes.length > 0) {
                e.removeChild(e.firstChild);
            }
        });
    };
    /**
     * Appends a style class name a
     * classList of the element.
     * @param value an class name
     */
    UIComponent.prototype.className = function (value) {
        var v = value;
        this.addChange(function (e) {
            e.classList.add(v);
        });
        return this;
    };
    return UIComponent;
}());
exports.UIComponent = UIComponent;
//# sourceMappingURL=UIComponent.js.map