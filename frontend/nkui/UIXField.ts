import { UIComponent } from "./UIComponent";
import { UI } from "./UI";

/**
 * A label, input and span for messages.
 */
export class UIXField extends UIComponent<HTMLDivElement> {

    _label: UIComponent<HTMLLabelElement>;
    _input: UIComponent<HTMLInputElement>;
    _span: UIComponent<HTMLSpanElement>;

    constructor(ui: UI) {
        super('div', ui);

        super.className('nk-fld');

        this._label = ui.label();
        this._input = ui.input();
        this._span = ui.span();

        super.add(this._label);
        super.add(this._input);
        super.add(this._span);
    }

    /**
     * Name of the field.
     * @param value 
     */
    label(value: string) {
        this._label.text(value);
        return this;
    }

    /**
     * Placeholder of th field.
     * @param value 
     */
    hint(value: string) {
        this._input.addChange((e) => {
            e.placeholder = value;
        });
        return this;
    }

    /**
     * info message.
     */
    msg(value: string) {
        this.addChange((e) => {
            e.classList.add('nk-fld-m');
        });
        this._span.addChange((e) => {
            e.textContent = value;
        });
        return this;
    }

    /** 
     * invalid input
     */
    invalid(value: string) {
        if(!value || value == '') {
            this.addChange((e) => {
                e.classList.remove('nk-fld-iv');
            });
            this._span.addChange((e) => {
                e.textContent = '';
            });
        } else {
            this.addChange((e) => {
                e.classList.add('nk-fld-iv');
            });
            this._span.addChange((e) => {
                e.textContent = value;
            });
        }
        
        return this;
    }

    /**
     * changes the value of the input.
     * @param v value to change.
     */
    valued(v: string) {
        this._input.addChange((e) => {
            e.value = v;
        });
        return this;
    }

    /**
     * returns the value of input.
     */
    value() : string {
        return this._input._element.value;
    }

    /**
     * define the input type for password.
     */
    password() {
        this._input.addChange((e) => {
            e.type = 'password';
        });
        return this;
    }

    /**
     * Adds event onchange on input.
     * @param fn action function
     */
    onChange(fn: (value: string) => void) {
        this.addChange((e) => {
            e.onchange = (event) => {
                fn(this._input._element.value);
            };
        });
        return this;
    }

    /**
     * Adds event keydown on input.
     * @param fn 
     */
    onKey(fn: (value: string) => void) {
        this.addChange((e) => {
            e.onkeydown = (event) => {
                fn(this._input._element.value);
            };
        });
        return this;
    }
}