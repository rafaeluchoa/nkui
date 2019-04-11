"use strict";
exports.__esModule = true;
var UIComponent_1 = require("./UIComponent");
var UI = /** @class */ (function () {
    function UI() {
        this.changes = [];
        this.applyChanges();
    }
    UI.prototype.addChange = function (action) {
        this.changes.push(action);
        return this;
    };
    UI.prototype.applyChanges = function () {
        var _this = this;
        while (this.changes.length > 0) {
            this.changes.shift()();
        }
        window.requestAnimationFrame(function (time) {
            _this.applyChanges();
        });
        return this;
    };
    UI.prototype.div = function () {
        return new UIComponent_1.UIComponent('div', this);
    };
    UI.prototype.span = function () {
        return new UIComponent_1.UIComponent('span', this);
    };
    UI.prototype.h2 = function () {
        return new UIComponent_1.UIComponent('h2', this);
    };
    UI.prototype.section = function () {
        return new UIComponent_1.UIComponent('section', this);
    };
    UI.prototype.aside = function () {
        return new UIComponent_1.UIComponent('aside', this);
    };
    UI.prototype.p = function () {
        return new UIComponent_1.UIComponent('p', this);
    };
    UI.prototype.ul = function () {
        return new UIComponent_1.UIComponent('ul', this);
    };
    UI.prototype.li = function () {
        return new UIComponent_1.UIComponent('li', this);
    };
    UI.prototype.a = function () {
        return new UIComponent_1.UIComponent('a', this);
    };
    UI.prototype.button = function () {
        return new UIComponent_1.UIComponent('button', this);
    };
    UI.prototype.input = function () {
        return new UIComponent_1.UIComponent('input', this);
    };
    UI.prototype.label = function () {
        return new UIComponent_1.UIComponent('label', this);
    };
    return UI;
}());
exports.UI = UI;
//# sourceMappingURL=UI.js.map