import { ViewManager } from "../../nkui/ViewManager";
import { UIX } from "../../nkui/UIX";
import { Requester } from "../../nkui/Requester";
import { HeaderPart } from "../parts/HeaderPart";
import { FooterPart } from "../parts/FooterPart";
import { UIXField } from "../../nkui/UIXField";

export class LoginView {

    _ui: UIX;
    _api: Requester;

    constructor(ui: UIX, api: Requester) {
        this._ui = ui;
        this._api = api;
    }

    init(onReturn: (username: string) => void) {
        let ui = this._ui;

        return ui.vertical()
            .add(new HeaderPart(this._ui).init())
            .add(this._createForm(onReturn))
            .add(new FooterPart(this._ui).init())
        ;
    }

    _createForm(onReturn: (username: string) => void) {
        let ui = this._ui;

        let username = ui.field().label('Username');
        let password = ui.field().label('Password').password();

        return ui.item().add(ui.vertical()
            .add(username)
            .add(password)
            .add(ui.box())
            .add(ui.button().primary().text('Login').click(() => {
                this._login(username, password, onReturn);
            })))
        ;
    }

    _login(
        username : UIXField, 
        password: UIXField, 
        onReturn: (username: string) => void) {

        this._api.path("/auth/login")
            .json({ 
                username: username.value(), 
                password: password.value() 
            }, 
            (response) => {

                username.invalid(response.errors.username);
                password.invalid(response.errors.password);

                if(response.success) {
                    onReturn(username.value());   
                }
                
        });
    }

}