import express from "express";
import bodyParser from "body-parser";

import * as about from "./about";
import * as authApi from "./api/auth";
import * as servicesApi from "./api/services";
import * as dashboardApi from "./api/dashboard";

export class router {
    private _router: express.Router;
    public constructor() {
        this._router = express.Router();
    }
    public async init() {
        this._router.route('/about.json')
            .get(about.about);
        this._router.route('/auth')
            .post(authApi.createUser)
            .delete(authApi.deleteUser);
        this._router.route('/services')
            .post(servicesApi.addServiceToken)
            .delete(servicesApi.deleteServiceToken);
        this._router.route('/dashboard')
            .post(dashboardApi.createArea)
            .patch(dashboardApi.editArea)
            .delete(dashboardApi.deleteArea);
        this._router.route('/dashboard/list')
            .post(dashboardApi.getArea);
        this._router.route('/dashboard/execute')
            .post(dashboardApi.executeArea);
        this._router.route('/dashboard/stop')
            .post(dashboardApi.stopArea);
    }
    public async launch(dbh:any, app: express.Application) {
        app.use(function(req: any, res: any, next: any) {
            res.header('Access-Control-Allow-Methods', "*");
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            next();
        });
        app.use(function(req: any, res: any, next: any) {
            req.dbh = dbh;
            next();
        });
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(this._router);
    }
}