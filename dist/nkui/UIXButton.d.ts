import { UIComponent } from "./UIComponent";
import { Updater } from "./Updater";
/**
 * Specialized component button.
 */
export declare class UIXButton extends UIComponent<HTMLButtonElement> {
    constructor(up: Updater);
    /**
     * Primary action for user.
     */
    primary(): this;
    /**
     * Secundary action for user
     */
    link(): this;
}
