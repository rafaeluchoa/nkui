import { Updater } from "./Updater";

/** 
 * Classe base for all components with standard 
 * way to add UI changes in batch.
 */
export class UIComponent<T extends HTMLElement = HTMLElement> {

    _up: Updater;
    _element: T;

    constructor(tag: string, up: Updater) {
        this._up = up;
        this._element = null;

        this._up.addChange(() => {
            this._element = document.createElement(tag) as T;
        });
    }

    /**
     * Adds an UI change using the enclose 
     * element of this component.
     * @param action IU change
     */
    addChange(action: (e: T) => void) {
        this._up.addChange(() => {
            action(this._element);
        });
        return this;
    }

    /**
     * Adds a event listener for click.
     * @param fn 
     */
    click(fn: () => void) {
        this.addChange((e) => {
            e.addEventListener("click", () => {
                fn();
            });
        });
        return this;
    }

    /**
     * Change the textContent attribute 
     * of the element.
     * @param value textContent
     */
    text(value: string) {
        this.addChange((e) => {
            e.textContent = value;
        });
        return this;
    }

    /**
     * Appends other component within this.
     * @param c component
     */
    add(c: UIComponent) {
        this.addChange((e) => {
            c.addChange((ce) => {
                e.appendChild(ce);
            });
        });
        return this;
    }

    /**
     * Remove all elements contained 
     * in this component.
     */
    clear() {
        this.addChange((e) => {
            while(e.childNodes.length > 0) {
                e.removeChild(e.firstChild);
            }	
        });
    }

    /**
     * Appends a style class name a 
     * classList of the element.
     * @param value an class name
     */
    className(value: string) {
        let v = value;
        this.addChange((e) => {
            e.classList.add(v);
        });
        return this;
    }

}