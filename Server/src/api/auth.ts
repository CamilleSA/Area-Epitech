var md5: any = require("md5");

export async function createUser(request: any, response: any) {
    if (request.body.action === "register") {
        if (request.body.connectionMethod === 'email') {
            request.dbh.query("SELECT * FROM users WHERE users.username = ?", request.body.username).then((result: any) => {
                if (result.length != 0)
                    return response.status(470).end();
                else {
                    request.dbh.query("SELECT * FROM emails WHERE emails.email = ?", request.body.email).then((result: any) => {
                        if (result.length != 0)
                            return response.status(471).end();
                        else {
                            request.dbh.query("INSERT INTO users(type, username) VALUES (?, ?)", ['email', request.body.username]).then((result: any) => {
                                request.dbh.query("INSERT INTO passwords(userId, password) VALUES (?, MD5(?))", [result.insertId, request.body.password]).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
                                request.dbh.query("INSERT INTO emails(userId, email) VALUES (?, ?)", [result.insertId, request.body.email]).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
                                return response.status(200).end();
                            }).catch((error: any) => { return response.status(490).end(); });
                        }
                    }).catch((error: any) => { return response.status(490).end(); });
                }
            }).catch((error: any) => { return response.status(490).end(); });
        }
        else if (request.body.connectionMethod === 'facebook') {
            request.dbh.query("SELECT * FROM users WHERE users.username = ?", request.body.username).then((result: any) => {
                if (result.length != 0)
                    return response.status(470).end();
                else {
                    request.dbh.query("SELECT * FROM facebookIds WHERE facebookIds.facebookId = ?", request.body.facebookId).then((result: any) => {
                        if (result.length != 0)
                            return response.status(472).end();
                        else {
                            request.dbh.query("INSERT INTO users(type, username) VALUES (?, ?)", ['facebook', request.body.username]).then((result: any) => {
                                request.dbh.query("INSERT INTO facebookIds(userId, facebookId) VALUES (?, ?)", [result.insertId, request.body.facebookId]).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
                                return response.status(200).end();
                            }).catch((error: any) => { return response.status(490).end(); });
                        }
                    }).catch((error: any) => { return response.status(490).end(); });
                }
            }).catch((error: any) => { return response.status(490).end(); });
        }
        else if (request.body.connectionMethod === 'google') {
            request.dbh.query("SELECT * FROM users WHERE users.username = ?", request.body.username).then((result: any) => {
                if (result.length != 0)
                    return response.status(470).end();
                else {
                    request.dbh.query("SELECT * FROM googleIds WHERE googleIds.googleId = ?", request.body.googleId).then((result: any) => {
                        if (result.length != 0)
                            return response.status(472).end();
                        else {
                            request.dbh.query("INSERT INTO users(type, username) VALUES (?, ?)", ['google', request.body.username]).then((result: any) => {
                                request.dbh.query("INSERT INTO googleIds(userId, googleId) VALUES (?, ?)", [result.insertId, request.body.googleId]).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
                                return response.status(200).end();
                            }).catch((error: any) => { return response.status(490).end(); });
                        }
                    }).catch((error: any) => { return response.status(490).end(); });
                }
            }).catch((error: any) => { return response.status(490).end(); });
        }
        else
            return response.status(461).end();
    }
    else if (request.body.action === "connect") {
        if (request.body.connectionMethod === 'email') {
            request.dbh.query("SELECT users.userId, users.username, emails.email, passwords.password FROM users "
                + "JOIN emails ON users.userId=emails.userId JOIN passwords ON users.userId=passwords.userId WHERE "
                + "emails.email = ?;", request.body.email).then((result: any) => {
                    if (result.length == 0)
                        return response.status(475).end();
                    else {
                        if (result[0].password === md5(request.body.password))
                            return response.status(200).json({
                                "username": result[0].username
                            });
                        else
                            return response.status(480).end();
                    }
                }).catch((error: any) => { return response.status(490).end(); });
        }
        else if (request.body.connectionMethod === 'username') {
            request.dbh.query("SELECT users.userId, users.username, emails.email, passwords.password FROM users "
            + "JOIN emails ON users.userId=emails.userId JOIN passwords ON users.userId=passwords.userId WHERE "
            + "users.username = ?;", request.body.username).then((result: any) => {
                    if (result.length == 0)
                        return response.status(476).end();
                    else {
                        if (result[0].password === md5(request.body.password))
                            return response.status(200).json({
                                "username": result[0].username
                            });
                        else
                            return response.status(480).end();
                    }
                }).catch((error: any) => { return response.status(490).end(); });
        }
        else if (request.body.connectionMethod === 'facebook') {
            request.dbh.query("SELECT users.userId, users.username, facebookIds.facebookId FROM users "
            + "JOIN facebookIds ON users.userId=facebookIds.userId WHERE facebookIds.facebookId = ?;",
                request.body.facebookId).then((result: any) => {
                    if (result.length == 0)
                        return response.status(477).end();
                    else
                        return response.status(200).json({
                            "username": result[0].username
                        });
                }).catch((error: any) => { return response.status(490).end(); });
        }
        else if (request.body.connectionMethod === 'google') {
            request.dbh.query("SELECT users.userId, users.username, googleIds.googleId FROM users "
            + "JOIN googleIds ON users.userId=googleIds.userId WHERE googleIds.googleId = ?;",
                request.body.googleId).then((result: any) => {
                    if (result.length == 0)
                        return response.status(477).end();
                    else
                        return response.status(200).json({
                            "username": result[0].username
                        });
                }).catch((error: any) => { return response.status(490).end(); });
        }
        else
            return response.status(461).end();
    }
    else
        return response.status(460).end();
}

export async function deleteUser(request: any, response: any) {
    request.dbh.query("SELECT users.userId FROM users WHERE users.username = ?", request.body.username).then((result: any) => {
        if (result.length == 0)
            return response.status(455).end();
        else {
            request.dbh.query("DELETE FROM users WHERE users.userId = ?", result[0].userId).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
            request.dbh.query("DELETE FROM passwords WHERE passwords.userId = ?", result[0].userId).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
            request.dbh.query("DELETE FROM emails WHERE emails.userId = ?", result[0].userId).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
            request.dbh.query("DELETE FROM facebookIds WHERE facebookIds.userId = ?", result[0].userId).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
            request.dbh.query("DELETE FROM googleIds WHERE googleIds.userId = ?", result[0].userId).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
            request.dbh.query("DELETE FROM areas WHERE areas.userId = ?", result[0].userId).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
            return response.status(200).end();
        }
    }).catch((error: any) => { return response.status(490).end(); });
}