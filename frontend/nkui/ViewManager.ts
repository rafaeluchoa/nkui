import { UI } from "./UI";
import { UIComponent } from "./UIComponent";

/**
 * Manages visible and hidden views components
 * using browser history.
 */
export class ViewManager {
    
    _ui: UI;
    _root: HTMLElement;
    _stack: HTMLElement[];

    /**
     * Create the view manager.
     * @param selector selector for root element
     * @param ui ui factory
     */
    constructor(selector: string, ui: UI) {
        this._ui = ui;
        this._root = document.querySelector(selector);
        this._stack = [];

        window.onpopstate = () => this.pop();
    }

    /**
     * Create a visible component and hidden stack components.
     * @param factory factory to component
     */
    open(factory: (onClose: () => void) => UIComponent) {

        this._ui.addChange(() => {

            let element = document.createElement("div");
            element.className = "nk-vw";

            let closeFn = () => {
                
                let pos = this._stack.lastIndexOf(element);
			    if(pos > -1) {
				    this._stack.splice(pos, 1);	
                }
                
                this._setVisible(element, false);
			    this._root.removeChild(element);
			
			    if(this._stack.length > 0) {
				    this._setVisible(this._stack[this._stack.length-1], true);
			    }

            };

            let component = factory(closeFn);
            component.addChange((e) => {

                element.appendChild(e);
			
                this._root.appendChild(
                    document.createDocumentFragment().appendChild(element)
                );
                
                if(this._stack.length > 0) {
                    this._setVisible(this._stack[this._stack.length-1], false);
                }
                this._stack.push(element);
                this._setVisible(element, true);

                history.pushState({}, "", "/");

            });

        });
    }

    /**
     * Remove the top view visible and
     * show the bottom hidden component.
     */
    pop() {
        if(this._stack.length > 0) {
            let element = this._stack.pop();
        
            this._setVisible(element, false);
            this._root.removeChild(element);
        
            if(this._stack.length > 0) {
                this._setVisible(this._stack[this._stack.length-1], true);
            }
        }
    }

    /**
     * Change the visible component.
     */
    _setVisible(e: HTMLElement, visible: boolean) {
        let cssVisible = 'nk-vw-ac';
        let cssNoVisible = 'nk-vw-in';
        if(visible) {
            e.classList.remove(cssNoVisible);
            e.classList.add(cssVisible);
        } else {
            e.classList.remove(cssVisible);
            e.classList.add(cssNoVisible);
        }
    }

}