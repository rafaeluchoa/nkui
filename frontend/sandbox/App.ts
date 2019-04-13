import { UIX } from "../nkui/UIX";
import { ViewManager } from "../nkui/ViewManager";
import { Requester } from "../nkui/Requester";

import { LoginView } from "./view/LoginView";
import { MainView } from "./view/MainView";

let api = new Requester('POST', '/api');
let ui = new UIX();
let vm = new ViewManager('.nk-app', ui);

vm.open((close) => new LoginView(ui, api).init((username) => {

    close();

    vm.open((close) => new MainView(ui).init(username));

}));


