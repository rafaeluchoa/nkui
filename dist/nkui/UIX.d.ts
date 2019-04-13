import { UI } from "./UI";
import { UIXButton } from "./UIXButton";
import { UIXField } from "./UIXField";
import { UIComponent } from "./UIComponent";
/**
 * Extended UI with specialized and styled
 * components.
 */
export declare class UIX extends UI {
    constructor();
    /**
     * Organizes the elements using vertical layout.
     */
    vertical(): UIComponent<HTMLDivElement>;
    /**
     * Organizes the elements using horizontal layout.
     */
    horizontal(): UIComponent<HTMLDivElement>;
    /**
     * Create a simple text.
     */
    text(value: string): UIComponent<HTMLSpanElement>;
    /**
     * Create a UIXButton component.
     */
    button(): UIXButton;
    /**
     * Create a UIXField component.
     */
    field(): UIXField;
    /**
     * Create a element with relevant to user.
     */
    item(): UIComponent<HTMLDivElement>;
    /**
     * Create a region for contain other elements.
     */
    box(): UIComponent<HTMLDivElement>;
    /**
     * Aligns the element to left.
     * @param comp internal component.
     */
    left(comp: UIComponent): UIComponent<HTMLDivElement>;
    /**
     * Aligns the element to right.
     * @param comp internal component.
     */
    right(comp: UIComponent<any>): UIComponent<HTMLDivElement>;
    /**
     * Header title.
     * @param value text
     */
    title(value: string): UIComponent<HTMLHeadingElement>;
    /**
     * Organize lists.
     */
    list(): UIComponent<HTMLDivElement>;
    /**
     * Item of the list components.
     * @param text Item of list
     */
    listItem(text: string): UIComponent<HTMLDivElement>;
}
