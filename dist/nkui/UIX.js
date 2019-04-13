"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var UI_1 = require("./UI");
var UIXButton_1 = require("./UIXButton");
var UIXField_1 = require("./UIXField");
/**
 * Extended UI with specialized and styled
 * components.
 */
var UIX = /** @class */ (function (_super) {
    __extends(UIX, _super);
    function UIX() {
        return _super.call(this) || this;
    }
    /**
     * Organizes the elements using vertical layout.
     */
    UIX.prototype.vertical = function () {
        return _super.prototype.div.call(this).className('nk-v');
    };
    /**
     * Organizes the elements using horizontal layout.
     */
    UIX.prototype.horizontal = function () {
        return _super.prototype.div.call(this).className('nk-h');
    };
    /**
     * Create a simple text.
     */
    UIX.prototype.text = function (value) {
        return _super.prototype.span.call(this).text(value);
    };
    /**
     * Create a UIXButton component.
     */
    UIX.prototype.button = function () {
        return new UIXButton_1.UIXButton(this).className('nk-btn');
    };
    /**
     * Create a UIXField component.
     */
    UIX.prototype.field = function () {
        return new UIXField_1.UIXField(this).className('nk-fld');
    };
    /**
     * Create a element with relevant to user.
     */
    UIX.prototype.item = function () {
        return _super.prototype.div.call(this).className('nk-i');
    };
    /**
     * Create a region for contain other elements.
     */
    UIX.prototype.box = function () {
        return _super.prototype.div.call(this).className('nk-t');
    };
    /**
     * Aligns the element to left.
     * @param comp internal component.
     */
    UIX.prototype.left = function (comp) {
        return _super.prototype.div.call(this).className('nk-l').add(comp);
    };
    /**
     * Aligns the element to right.
     * @param comp internal component.
     */
    UIX.prototype.right = function (comp) {
        return _super.prototype.div.call(this).className('nk-r').add(comp);
    };
    /**
     * Header title.
     * @param value text
     */
    UIX.prototype.title = function (value) {
        return _super.prototype.h2.call(this).className('nk-hd-t').text(value);
    };
    /**
     * Organize lists.
     */
    UIX.prototype.list = function () {
        return _super.prototype.div.call(this).className('nk-lt');
    };
    /**
     * Item of the list components.
     * @param text Item of list
     */
    UIX.prototype.listItem = function (text) {
        var c = _super.prototype.div.call(this).className('nk-lt-it');
        if (text) {
            c.add(this.text(text));
        }
        return c;
    };
    return UIX;
}(UI_1.UI));
exports.UIX = UIX;
//# sourceMappingURL=UIX.js.map