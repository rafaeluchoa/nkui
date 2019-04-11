import { Updater } from "./Updater";
export declare class UIComponent<T extends HTMLElement = HTMLElement> {
    _up: Updater;
    _element: T;
    constructor(tag: string, up: Updater);
    addChange(action: (e: T) => void): this;
    click(fn: () => void): this;
    text(value: string): this;
    add(c: UIComponent<any>): this;
    clear(): void;
    className(value: string): this;
}
