import { UIComponent } from "./UIComponent";

export class UI {

    changes: any[];

    constructor() {
        this.changes = [];
        this.applyChanges();
    }

    addChange(action: () => void) {
        this.changes.push(action);
        return this;
    }

    applyChanges() {
        while (this.changes.length > 0) {
            this.changes.shift()();
        }
        window.requestAnimationFrame((time) => {
            this.applyChanges();
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
