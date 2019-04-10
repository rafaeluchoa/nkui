import { UIComponent } from "./UIComponent";
import { Updater } from "./Updater";

export class UIXButton extends UIComponent<HTMLButtonElement> {

    constructor(up: Updater) {
        super('button', up);

        this.addChange((e) => {
            e.setAttribute("data-nk-btn", "normal");
        });
    }

    primary() {
        this.addChange((e) => {
            e.setAttribute("data-nk-btn", "primary");
        });
        return this;
    }

    link() {
        this.addChange((e) => {
            e.setAttribute("data-nk-btn", "link");
        });
        return this;
    }

}