"use strict";
exports.__esModule = true;
var UIComponent = /** @class */ (function () {
    function UIComponent(tag, up) {
        var _this = this;
        this._up = up;
        this._element = null;
        this._up.addChange(function () {
            _this._element = document.createElement(tag);
        });
    }
    UIComponent.prototype.addChange = function (action) {
        var _this = this;
        this._up.addChange(function () {
            action(_this._element);
        });
        return this;
    };
    UIComponent.prototype.click = function (fn) {
        this.addChange(function (e) {
            e.addEventListener("click", function () {
                fn();
            });
        });
        return this;
    };
    UIComponent.prototype.text = function (value) {
        this.addChange(function (e) {
            e.textContent = value;
        });
        return this;
    };
    UIComponent.prototype.add = function (c) {
        this.addChange(function (e) {
            c.addChange(function (ce) {
                e.appendChild(ce);
            });
        });
        return this;
    };
    UIComponent.prototype.clear = function () {
        this.addChange(function (e) {
            while (e.childNodes.length > 0) {
                e.removeChild(e.firstChild);
            }
        });
    };
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