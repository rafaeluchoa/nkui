import { UIComponent } from "./UIComponent";
import { Updater } from "./Updater";

/**
 * Create the HTML base elements 
 * scheduling the UI changes in batch.
 */
export class UI implements Updater {

    /**
     * List the UI changes (functions) 
     */
    _changes: {() : void}[];

    /**
     * Initialize the batch changes.
     */
    constructor() {
        this._changes = [];
        this._applyChanges();
    }

    /**
     * Adds a ui change on queue.
     * @param action 
     */
    addChange(action: () => void) {
        this._changes.push(action);
        return this;
    }

    /**
     * Applies the ui change
     */
    _applyChanges() {
        while (this._changes.length > 0) {
            this._changes.shift()();
        }
        window.requestAnimationFrame((time) => {
            this._applyChanges();
        });
        return this;
    }

    div() {
        return new UIComponent<HTMLDivElement>('div', this);
    }

    span() {
        return new UIComponent<HTMLSpanElement>('span', this);
    }

    h2() {
        return new UIComponent<HTMLHeadingElement>('h2', this);
    }

    section() {
        return new UIComponent('section', this);
    }

    aside() {
        return new UIComponent('aside', this);
    }

    p() {
        return new UIComponent<HTMLParagraphElement>('p', this);
    }

    ul() {
        return new UIComponent<HTMLUListElement>('ul', this);
    }

    li() {
        return new UIComponent<HTMLLIElement>('li', this);
    }

    a() {
        return new UIComponent<HTMLAnchorElement>('a', this);
    }

    button() {
        return new UIComponent<HTMLButtonElement>('button', this);
    }

    input() {
        return new UIComponent<HTMLInputElement>('input', this);
    }

    label() {
        return new UIComponent<HTMLLabelElement>('label', this);
    }

}
