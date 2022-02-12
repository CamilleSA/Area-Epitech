import * as mysql from "mysql";

export class database {
    private _conn: mysql.Connection;
    public constructor() {
        this._conn = mysql.createConnection({
            host: process.env.DB_HOST,
            //port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        });
        this._conn.connect();
    }
    public query(query: string, values: any) {
        return new Promise((resolve, reject) => {
            this._conn.query(query, values, async function (error: any, result: any, fields: any) {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                else
                    resolve(result);
            });
        });
    }
}