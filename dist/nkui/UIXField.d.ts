import { UIComponent } from "./UIComponent";
import { UI } from "./UI";
export declare class UIXField extends UIComponent<HTMLDivElement> {
    _label: UIComponent<HTMLLabelElement>;
    _input: UIComponent<HTMLInputElement>;
    _span: UIComponent<HTMLSpanElement>;
    constructor(ui: UI);
    label(value: string): this;
    hint(value: string): this;
    msg(value: string): this;
    invalid(value: string): this;
    valued(v: string): this;
    value(): string;
    password(): this;
    onChange(fn: (value: string) => void): this;
    onKey(fn: (value: string) => void): this;
}
