"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
let app = express_1.default();
let port = 8022;
app.use('/', express_1.default.static(path_1.default.join(__dirname, '../frontend')));
app.use(express_1.default.json());
app.use('/hello', (req, res) => {
    res.json({ msg: 'OK...', "tt": "asdf" });
});
app.listen(port, () => console.log("listening on port " + port));
//# sourceMappingURL=Server.js.map