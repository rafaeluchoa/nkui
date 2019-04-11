import { UI } from "./UI";
import { UIXButton } from "./UIXButton";
import { UIXField } from "./UIXField";
import { UIComponent } from "./UIComponent";
export declare class UIX extends UI {
    constructor();
    vertical(): UIComponent<HTMLDivElement>;
    horizontal(): UIComponent<HTMLDivElement>;
    text(value: string): UIComponent<HTMLSpanElement>;
    button(): UIXButton;
    field(): UIXField;
    item(): UIComponent<HTMLDivElement>;
    box(): UIComponent<HTMLDivElement>;
    left(comp: UIComponent<any>): UIComponent<HTMLDivElement>;
    right(comp: UIComponent<any>): UIComponent<HTMLDivElement>;
    title(value: string): UIComponent<HTMLHeadingElement>;
    list(): UIComponent<HTMLDivElement>;
    listItem(text: string): UIComponent<HTMLDivElement>;
}
