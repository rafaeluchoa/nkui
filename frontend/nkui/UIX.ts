import { UI } from "./UI";
import { UIXButton } from "./UIXButton";
import { UIXField } from "./UIXField";
import { UIComponent } from "./UIComponent";

export class UIX extends UI {

    constructor() {
        super();
    }

    vertical() {
        return super.div().className('nk-v');
    }

    horizontal() {
        return super.div().className('nk-h');
    }

    text(value: string) {
        return super.span().text(value);
    }

    button() {
        return new UIXButton(this).className('nk-btn');
    }

    field() {
        return new UIXField(this).className('nk-fld');
    }

    item() {
        return super.div().className('nk-i');
    }

    box() {
        return super.div().className('nk-t');
    }

    left(comp: UIComponent<any>) {
        return super.div().className('nk-l').add(comp);
    }

    right(comp: UIComponent<any>) {
        return super.div().className('nk-r').add(comp);
    }

    title(value: string) {
        return super.h2().className('nk-hd-t').text(value);
    }

    list() {
        return super.div().className('nk-lt');
    }

    listItem(text: string) {
        let c = super.div().className('nk-lt-it');
        if(text) {
            c.add(this.text(text));
        }
        return c;
    }
}