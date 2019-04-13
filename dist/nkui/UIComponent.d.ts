import { Updater } from "./Updater";
/**
 * Classe base for all components with standard
 * way to add UI changes in batch.
 */
export declare class UIComponent<T extends HTMLElement = HTMLElement> {
    _up: Updater;
    _element: T;
    constructor(tag: string, up: Updater);
    /**
     * Adds an UI change using the enclose
     * element of this component.
     * @param action IU change
     */
    addChange(action: (e: T) => void): this;
    /**
     * Adds a event listener for click.
     * @param fn
     */
    click(fn: () => void): this;
    /**
     * Change the textContent attribute
     * of the element.
     * @param value textContent
     */
    text(value: string): this;
    /**
     * Appends other component within this.
     * @param c component
     */
    add(c: UIComponent): this;
    /**
     * Remove all elements contained
     * in this component.
     */
    clear(): void;
    /**
     * Appends a style class name a
     * classList of the element.
     * @param value an class name
     */
    className(value: string): this;
}
