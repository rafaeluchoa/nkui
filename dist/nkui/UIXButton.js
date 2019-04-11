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
var UIComponent_1 = require("./UIComponent");
var UIXButton = /** @class */ (function (_super) {
    __extends(UIXButton, _super);
    function UIXButton(up) {
        var _this = _super.call(this, 'button', up) || this;
        _this.addChange(function (e) {
            e.setAttribute("data-nk-btn", "normal");
        });
        return _this;
    }
    UIXButton.prototype.primary = function () {
        this.addChange(function (e) {
            e.setAttribute("data-nk-btn", "primary");
        });
        return this;
    };
    UIXButton.prototype.link = function () {
        this.addChange(function (e) {
            e.setAttribute("data-nk-btn", "link");
        });
        return this;
    };
    return UIXButton;
}(UIComponent_1.UIComponent));
exports.UIXButton = UIXButton;
//# sourceMappingURL=UIXButton.js.map