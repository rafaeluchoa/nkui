import { UIComponent } from "./UIComponent";
import { UI } from "./UI";
/**
 * A label, input and span for messages.
 */
export declare class UIXField extends UIComponent<HTMLDivElement> {
    _label: UIComponent<HTMLLabelElement>;
    _input: UIComponent<HTMLInputElement>;
    _span: UIComponent<HTMLSpanElement>;
    constructor(ui: UI);
    /**
     * Name of the field.
     * @param value
     */
    label(value: string): this;
    /**
     * Placeholder of th field.
     * @param value
     */
    hint(value: string): this;
    /**
     * info message.
     */
    msg(value: string): this;
    /**
     * invalid input
     */
    invalid(value: string): this;
    /**
     * changes the value of the input.
     * @param v value to change.
     */
    valued(v: string): this;
    /**
     * returns the value of input.
     */
    value(): string;
    /**
     * define the input type for password.
     */
    password(): this;
    /**
     * Adds event onchange on input.
     * @param fn action function
     */
    onChange(fn: (value: string) => void): this;
    /**
     * Adds event keydown on input.
     * @param fn
     */
    onKey(fn: (value: string) => void): this;
}
