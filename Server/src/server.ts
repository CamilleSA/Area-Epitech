import express from "express";
import * as router from "./router";
import * as db from "./database/db";
import * as loop from "./loop";

export class server {
    private _port: number;
    private _app: express.Application;
    private _router: router.router;
    private _dbh: db.database;
    public constructor(port: number) {
        this._port = port;
        this._app = express();
        this._router = new router.router();
        this._dbh = new db.database();
    }
    public async init() {
        await this._router.init();
    }
    public async launch() {
        await this._router.launch(this._dbh, this._app);
        setInterval(loop.loopServices, 10000, this._dbh);
        this._app.listen(this._port);
    }
}