# nkui - @naskar/nkui

Create complex components using the simple component without performance issues using typescrypt.

### example

```typescript
let ui = new UIX();

let username = ui.field().label('Username');
let password = ui.field().label('Password').password();

return ui.item().add(ui.vertical()
    .add(username)
    .add(password)
    .add(ui.button().primary().text('Login').click(() => {
        this.apiLogin(username.value(), password.value());
    })))
;
```

![sandbox image](docs/sandbox-login.png?raw=true "Sandbox Login")

## install

```
npm install @naskar/nkui
```
