import { UIX } from "../../nkui/UIX";

export class MainView {

    _ui : UIX;

    constructor(_ui: UIX) {
        this._ui = _ui;
    }

    init(username: string) {
        let ui = this._ui;
        return ui.item().add(ui.box().text('Welcome, ' + username));
    }

}