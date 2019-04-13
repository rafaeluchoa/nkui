"use strict";
exports.__esModule = true;
var FooterPart = /** @class */ (function () {
    function FooterPart(ui) {
        this._ui = ui;
    }
    FooterPart.prototype.init = function () {
        var ui = this._ui;
        return ui.vertical().className('footer')
            .add(ui.text('v1.0.0'));
    };
    return FooterPart;
}());
exports.FooterPart = FooterPart;
//# sourceMappingURL=FooterPart.js.map