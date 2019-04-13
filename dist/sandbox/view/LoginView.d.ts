import { UIX } from "../../nkui/UIX";
import { Requester } from "../../nkui/Requester";
import { UIXField } from "../../nkui/UIXField";
export declare class LoginView {
    _ui: UIX;
    _api: Requester;
    constructor(ui: UIX, api: Requester);
    init(onReturn: (username: string) => void): import("../..").UIComponent<HTMLDivElement>;
    _createForm(onReturn: (username: string) => void): import("../..").UIComponent<HTMLDivElement>;
    _login(username: UIXField, password: UIXField, onReturn: (username: string) => void): void;
}
