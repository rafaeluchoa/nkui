import express from "express";
import path from "path";

let app = express();
let port = 8022;

app.use('/', express.static(path.join(__dirname, '../frontend')));

app.use(express.json());

app.use('/hello', (req, res) => {
    res.json({ msg: 'OK...', "tt": "asdf" });
});

app.listen(port, () => console.log("listening on port " + port));
