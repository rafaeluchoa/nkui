"use strict";
exports.__esModule = true;
var HeaderPart = /** @class */ (function () {
    function HeaderPart(ui) {
        this._ui = ui;
    }
    HeaderPart.prototype.init = function () {
        var ui = this._ui;
        return ui.vertical()
            .add(ui.text('nkui sandbox').className('header'));
        ;
    };
    return HeaderPart;
}());
exports.HeaderPart = HeaderPart;
//# sourceMappingURL=HeaderPart.js.map