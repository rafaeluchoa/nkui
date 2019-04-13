import express, { Request, Response, NextFunction } from "express";
import path from "path";

let app = express();
let port = 8022;

app.use('/', express.static(path.join(__dirname, '../frontend')));

app.use(express.json());

app.use('/api/auth/login', (req: Request, res: Response, next: NextFunction) => {
    let errors: {[key: string] : string} = {};

    if(!req.body.username || req.body.username == '') {
        errors.username = 'Username is empty';
    }

    if(!req.body.password || req.body.password == '') {
        errors.password = 'Password is empty';
    }

    res.json({ 
        success: Object.keys(errors).length == 0, 
        errors: errors
    });

    next();
});

app.listen(port, () => console.log("listening on port " + port));
