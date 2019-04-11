import { UIComponent } from "./UIComponent";
import { Updater } from "./Updater";
export declare class UIXButton extends UIComponent<HTMLButtonElement> {
    constructor(up: Updater);
    primary(): this;
    link(): this;
}
