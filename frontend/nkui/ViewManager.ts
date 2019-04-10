import { UI } from "./UI";
import { UIComponent } from "./UIComponent";

export class ViewManager {
    
    ui: UI;
    root: HTMLElement;
    stack: HTMLElement[];

    constructor(selector: string, ui: UI) {
        this.ui = ui;
        this.root = document.querySelector(selector);
        this.stack = [];

        window.onpopstate = () => this.pop();
    }

    open(factory: (onClose: () => void) => UIComponent<any>) {

        this.ui.addChange(() => {

            let element = document.createElement("div");
            element.className = "nk-vw";

            let closeFn = () => {
                
                let pos = this.stack.lastIndexOf(element);
			    if(pos > -1) {
				    this.stack.splice(pos, 1);	
                }
                
                this._setVisible(element, false);
			    this.root.removeChild(element);
			
			    if(this.stack.length > 0) {
				    this._setVisible(this.stack[this.stack.length-1], true);
			    }

            };

            let component = factory(closeFn);
            component.addChange((e) => {

                element.appendChild(e);
			
                this.root.appendChild(
                    document.createDocumentFragment().appendChild(element)
                );
                
                if(this.stack.length > 0) {
                    this._setVisible(this.stack[this.stack.length-1], false);
                }
                this.stack.push(element);
                this._setVisible(element, true);

                history.pushState({}, "", "/");

            });

        });
    }

    pop() {
        if(this.stack.length > 0) {
            let element = this.stack.pop();
        
            this._setVisible(element, false);
            this.root.removeChild(element);
        
            if(this.stack.length > 0) {
                this._setVisible(this.stack[this.stack.length-1], true);
            }
        }
    }

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