import { UIComponent } from "./UIComponent";
export declare class UI {
    changes: any[];
    constructor();
    addChange(action: () => void): this;
    applyChanges(): this;
    div(): UIComponent<HTMLDivElement>;
    span(): UIComponent<HTMLSpanElement>;
    h2(): UIComponent<HTMLHeadingElement>;
    section(): UIComponent<HTMLElement>;
    aside(): UIComponent<HTMLElement>;
    p(): UIComponent<HTMLParagraphElement>;
    ul(): UIComponent<HTMLUListElement>;
    li(): UIComponent<HTMLLIElement>;
    a(): UIComponent<HTMLAnchorElement>;
    button(): UIComponent<HTMLButtonElement>;
    input(): UIComponent<HTMLInputElement>;
    label(): UIComponent<HTMLLabelElement>;
}
