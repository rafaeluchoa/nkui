"use strict";
exports.__esModule = true;
var UIX_1 = require("../nkui/UIX");
var ViewManager_1 = require("../nkui/ViewManager");
var Requester_1 = require("../nkui/Requester");
var LoginView_1 = require("./view/LoginView");
var MainView_1 = require("./view/MainView");
var api = new Requester_1.Requester('POST', '/api');
var ui = new UIX_1.UIX();
var vm = new ViewManager_1.ViewManager('.nk-app', ui);
vm.open(function (close) { return new LoginView_1.LoginView(ui, api).init(function (username) {
    close();
    vm.open(function (close) { return new MainView_1.MainView(ui).init(username); });
}); });
//# sourceMappingURL=App.js.map