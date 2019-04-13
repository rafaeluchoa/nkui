import { UI } from "./UI";
import { UIXButton } from "./UIXButton";
import { UIXField } from "./UIXField";
import { UIComponent } from "./UIComponent";

/**
 * Extended UI with specialized and styled
 * components.
 */
export class UIX extends UI {

    constructor() {
        super();
    }

    /**
     * Organizes the elements using vertical layout.
     */
    vertical() {
        return super.div().className('nk-v');
    }

    /**
     * Organizes the elements using horizontal layout.
     */
    horizontal() {
        return super.div().className('nk-h');
    }

    /**
     * Create a simple text.
     */
    text(value: string) {
        return super.span().text(value);
    }

    /**
     * Create a UIXButton component.
     */
    button() {
        return new UIXButton(this).className('nk-btn');
    }
    
    /**
     * Create a UIXField component.
     */
    field() {
        return new UIXField(this).className('nk-fld');
    }

    /**
     * Create a element with relevant to user.
     */
    item() {
        return super.div().className('nk-i');
    }

    /**
     * Create a region for contain other elements.
     */
    box() {
        return super.div().className('nk-t');
    }

    /**
     * Aligns the element to left.
     * @param comp internal component.
     */
    left(comp: UIComponent) {
        return super.div().className('nk-l').add(comp);
    }

    /**
     * Aligns the element to right.
     * @param comp internal component.
     */
    right(comp: UIComponent<any>) {
        return super.div().className('nk-r').add(comp);
    }

    /**
     * Header title.
     * @param value text
     */
    title(value: string) {
        return super.h2().className('nk-hd-t').text(value);
    }

    /**
     * Organize lists.
     */
    list() {
        return super.div().className('nk-lt');
    }

    /**
     * Item of the list components.
     * @param text Item of list
     */
    listItem(text: string) {
        let c = super.div().className('nk-lt-it');
        if(text) {
            c.add(this.text(text));
        }
        return c;
    }
}