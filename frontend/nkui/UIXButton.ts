import { UIComponent } from "./UIComponent";
import { Updater } from "./Updater";

/**
 * Specialized component button.
 */
export class UIXButton extends UIComponent<HTMLButtonElement> {

    constructor(up: Updater) {
        super('button', up);

        this.addChange((e) => {
            e.setAttribute("data-nk-btn", "normal");
        });
    }

    /**
     * Primary action for user.
     */
    primary() {
        this.addChange((e) => {
            e.setAttribute("data-nk-btn", "primary");
        });
        return this;
    }

    /**
     * Secundary action for user
     */
    link() {
        this.addChange((e) => {
            e.setAttribute("data-nk-btn", "link");
        });
        return this;
    }

}