import { UI } from "./UI";
import { UIComponent } from "./UIComponent";
/**
 * Manages visible and hidden views components
 * using browser history.
 */
export declare class ViewManager {
    _ui: UI;
    _root: HTMLElement;
    _stack: HTMLElement[];
    /**
     * Create the view manager.
     * @param selector selector for root element
     * @param ui ui factory
     */
    constructor(selector: string, ui: UI);
    /**
     * Create a visible component and hidden stack components.
     * @param factory factory to component
     */
    open(factory: (onClose: () => void) => UIComponent): void;
    /**
     * Remove the top view visible and
     * show the bottom hidden component.
     */
    pop(): void;
    /**
     * Change the visible component.
     */
    _setVisible(e: HTMLElement, visible: boolean): void;
}
