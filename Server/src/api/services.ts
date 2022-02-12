export async function addServiceToken(request: any, response: any) {
    request.dbh.query("SELECT * FROM serviceTokens WHERE serviceTokens.placeholder = ?;", request.body.placeholder).then((result: any) => {
        if (result.length != 0)
            return response.status(485).end();
        else {
            request.dbh.query("INSERT INTO serviceTokens (placeholder, service, serviceToken) VALUES (?, ?, ?);",
                [request.body.placeholder, request.body.service, request.body.token]).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
            return response.status(200).end();
        }
    }).catch((error: any) => { return response.status(490).end(); });
}

export async function deleteServiceToken(request: any, response: any) {
    request.dbh.query("SELECT * FROM serviceTokens WHERE serviceTokens.placeholder = ?;",
        request.body.placeholder).then((result: any) => {
        if (result.length == 0)
            return response.status(477).end();
        else {
            request.dbh.query("DELETE FROM serviceTokens WHERE serviceTokens.placeholder = ?;",
                request.body.placeholder).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
            return response.status(200).end();
        }
    }).catch((error: any) => { return response.status(490).end(); });
}