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
/**
 * A label, input and span for messages.
 */
var UIXField = /** @class */ (function (_super) {
    __extends(UIXField, _super);
    function UIXField(ui) {
        var _this = _super.call(this, 'div', ui) || this;
        _super.prototype.className.call(_this, 'nk-fld');
        _this._label = ui.label();
        _this._input = ui.input();
        _this._span = ui.span();
        _super.prototype.add.call(_this, _this._label);
        _super.prototype.add.call(_this, _this._input);
        _super.prototype.add.call(_this, _this._span);
        return _this;
    }
    /**
     * Name of the field.
     * @param value
     */
    UIXField.prototype.label = function (value) {
        this._label.text(value);
        return this;
    };
    /**
     * Placeholder of th field.
     * @param value
     */
    UIXField.prototype.hint = function (value) {
        this._input.addChange(function (e) {
            e.placeholder = value;
        });
        return this;
    };
    /**
     * info message.
     */
    UIXField.prototype.msg = function (value) {
        this.addChange(function (e) {
            e.classList.add('nk-fld-m');
        });
        this._span.addChange(function (e) {
            e.textContent = value;
        });
        return this;
    };
    /**
     * invalid input
     */
    UIXField.prototype.invalid = function (value) {
        if (!value || value == '') {
            this.addChange(function (e) {
                e.classList.remove('nk-fld-iv');
            });
            this._span.addChange(function (e) {
                e.textContent = '';
            });
        }
        else {
            this.addChange(function (e) {
                e.classList.add('nk-fld-iv');
            });
            this._span.addChange(function (e) {
                e.textContent = value;
            });
        }
        return this;
    };
    /**
     * changes the value of the input.
     * @param v value to change.
     */
    UIXField.prototype.valued = function (v) {
        this._input.addChange(function (e) {
            e.value = v;
        });
        return this;
    };
    /**
     * returns the value of input.
     */
    UIXField.prototype.value = function () {
        return this._input._element.value;
    };
    /**
     * define the input type for password.
     */
    UIXField.prototype.password = function () {
        this._input.addChange(function (e) {
            e.type = 'password';
        });
        return this;
    };
    /**
     * Adds event onchange on input.
     * @param fn action function
     */
    UIXField.prototype.onChange = function (fn) {
        var _this = this;
        this.addChange(function (e) {
            e.onchange = function (event) {
                fn(_this._input._element.value);
            };
        });
        return this;
    };
    /**
     * Adds event keydown on input.
     * @param fn
     */
    UIXField.prototype.onKey = function (fn) {
        var _this = this;
        this.addChange(function (e) {
            e.onkeydown = function (event) {
                fn(_this._input._element.value);
            };
        });
        return this;
    };
    return UIXField;
}(UIComponent_1.UIComponent));
exports.UIXField = UIXField;
//# sourceMappingURL=UIXField.js.map