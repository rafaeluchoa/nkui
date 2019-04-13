import { UIX } from "../../nkui/UIX";

export class FooterPart {

    _ui: UIX;

    constructor(ui: UIX) {
        this._ui = ui;
    }

    init() {
        let ui = this._ui;

        return ui.vertical().className('footer')
            .add(ui.text('v1.0.0'))
        ;
    }

}