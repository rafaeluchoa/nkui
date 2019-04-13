import { UIComponent } from "./UIComponent";
import { Updater } from "./Updater";
/**
 * Create the HTML base elements
 * scheduling the UI changes in batch.
 */
export declare class UI implements Updater {
    /**
     * List the UI changes (functions)
     */
    _changes: {
        (): void;
    }[];
    /**
     * Initialize the batch changes.
     */
    constructor();
    /**
     * Adds a ui change on queue.
     * @param action
     */
    addChange(action: () => void): this;
    /**
     * Applies the ui change
     */
    _applyChanges(): this;
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
