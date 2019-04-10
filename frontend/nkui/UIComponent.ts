import { Updater } from "./Updater";

export class UIComponent<T extends HTMLElement> {

    _up: Updater;
    _element: T;

    constructor(tag: string, up: Updater) {
        this._up = up;
        this._element = null;

        this._up.addChange(() => {
            this._element = document.createElement(tag) as T;
        });
    }

    addChange(action: (e: T) => void) {
        this._up.addChange(() => {
            action(this._element);
        });
        return this;
    }

    click(fn: () => void) {
        this.addChange((e) => {
            e.addEventListener("click", () => {
                fn();
            });
        });
        return this;
    }

    text(value: string) {
        this.addChange((e) => {
            e.textContent = value;
        });
        return this;
    }

    add(c: UIComponent<any>) {
        this.addChange((e) => {
            c.addChange((ce) => {
                e.appendChild(ce);
            });
        });
        return this;
    }

    clear() {
        this.addChange((e) => {
            while(e.childNodes.length > 0) {
                e.removeChild(e.firstChild);
            }	
        });
    }

    className(value: string) {
        let v = value;
        this.addChange((e) => {
            e.classList.add(v);
        });
        return this;
    }

}