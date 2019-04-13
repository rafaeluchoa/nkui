import { UIX } from "../../nkui/UIX";

export class HeaderPart {

    _ui: UIX;

    constructor(ui: UIX) {
        this._ui = ui;
    }

    init() {
        let ui = this._ui;

        return ui.vertical()
            .add(ui.text('nkui sandbox').className('header'));
        ;
    }

}