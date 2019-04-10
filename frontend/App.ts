import { UIX } from "./nkui/UIX";
import { ViewManager } from "./nkui/ViewManager";

let div = document.createElement('div');
div.textContent = 'teste';

document.querySelector('.nk-app').appendChild(div);

let ui = new UIX();
let vm = new ViewManager('.nk-app', ui);

let name = ui.field().label('Nome');
let content = ui.vertical()
    .add(name)
    .add(ui.button().valued('Click').click(() => {
        name.valued('Hello ' + name.value());
    }))
    ;

vm.open((onClose) => content);


