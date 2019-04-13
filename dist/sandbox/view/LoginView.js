"use strict";
exports.__esModule = true;
var HeaderPart_1 = require("../parts/HeaderPart");
var FooterPart_1 = require("../parts/FooterPart");
var LoginView = /** @class */ (function () {
    function LoginView(ui, api) {
        this._ui = ui;
        this._api = api;
    }
    LoginView.prototype.init = function (onReturn) {
        var ui = this._ui;
        return ui.vertical()
            .add(new HeaderPart_1.HeaderPart(this._ui).init())
            .add(this._createForm(onReturn))
            .add(new FooterPart_1.FooterPart(this._ui).init());
    };
    LoginView.prototype._createForm = function (onReturn) {
        var _this = this;
        var ui = this._ui;
        var username = ui.field().label('Username');
        var password = ui.field().label('Password').password();
        return ui.item().add(ui.vertical()
            .add(username)
            .add(password)
            .add(ui.box())
            .add(ui.button().primary().text('Login').click(function () {
            _this._login(username, password, onReturn);
        })));
    };
    LoginView.prototype._login = function (username, password, onReturn) {
        this._api.path("/auth/login")
            .json({
            username: username.value(),
            password: password.value()
        }, function (response) {
            username.invalid(response.errors.username);
            password.invalid(response.errors.password);
            if (response.success) {
                onReturn(username.value());
            }
        });
    };
    return LoginView;
}());
exports.LoginView = LoginView;
//# sourceMappingURL=LoginView.js.map