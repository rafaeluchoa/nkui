"use strict";
exports.__esModule = true;
var MainView = /** @class */ (function () {
    function MainView(_ui) {
        this._ui = _ui;
    }
    MainView.prototype.init = function (username) {
        var ui = this._ui;
        return ui.item().add(ui.box().text('Welcome, ' + username));
    };
    return MainView;
}());
exports.MainView = MainView;
//# sourceMappingURL=MainView.js.map