import { UIComponent } from "./UIComponent";
import { UI } from "./UI";

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

    label(value: string) {
        this._label.text(value);
        return this;
    }

    hint(value: string) {
        this._input.addChange((e) => {
            e.placeholder = value;
        });
        return this;
    }

    msg(value: string) {
        this.addChange((e) => {
            e.classList.add('nk-fld-m');
        });
        this._span.addChange((e) => {
            e.textContent = value;
        });
        return this;
    }

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

    valued(v: string) {
        this._input.addChange((e) => {
            e.value = v;
        });
        return this;
    }

    value() : string {
        return this._input._element.value;
    }

    password() {
        this._input.addChange((e) => {
            e.type = 'password';
        });
        return this;
    }

    onChange(fn: (value: string) => void) {
        this.addChange((e) => {
            e.onchange = (event) => {
                fn(this._input._element.value);
            };
        });
        return this;
    }

    onKey(fn: (value: string) => void) {
        this.addChange((e) => {
            e.onkeydown = (event) => {
                fn(this._input._element.value);
            };
        });
        return this;
    }
}