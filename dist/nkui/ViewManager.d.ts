import { UI } from "./UI";
import { UIComponent } from "./UIComponent";
export declare class ViewManager {
    ui: UI;
    root: HTMLElement;
    stack: HTMLElement[];
    constructor(selector: string, ui: UI);
    open(factory: (onClose: () => void) => UIComponent<any>): void;
    pop(): void;
    _setVisible(e: HTMLElement, visible: boolean): void;
}
