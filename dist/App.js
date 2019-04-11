"use strict";
exports.__esModule = true;
var UIX_1 = require("./nkui/UIX");
var ViewManager_1 = require("./nkui/ViewManager");
var div = document.createElement('div');
div.textContent = 'teste';
document.querySelector('.nk-app').appendChild(div);
var ui = new UIX_1.UIX();
var vm = new ViewManager_1.ViewManager('.nk-app', ui);
var name = ui.field().label('Nome');
var content = ui.vertical()
    .add(name)
    .add(ui.button().text('Click').click(function () {
    name.valued('Hello ' + name.value());
}));
vm.open(function (onClose) { return content; });
//# sourceMappingURL=App.js.map