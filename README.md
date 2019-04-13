# nkui - @naskar/nkui

Create complex components using the simple component without performance issues using typescrypt.

### example

```javascript
let ui = new UIX();

let username = ui.field().label('Username');
let password = ui.field().label('Password').password();

return ui.item().add(ui.vertical()
    .add(username)
    .add(password)
    .add(ui.button().primary().text('Login').click(() => {
        this.apiLogin(username, password, onReturn);
    })))
;
```

## install

```
npm install

npm run build
```
