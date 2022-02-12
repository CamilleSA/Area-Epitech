import { gmail } from "googleapis/build/src/apis/gmail";

var {google} = require("googleapis");

const token: any = {
    "access_token": "ya29.a0AfH6SMDKGbBRQEtB59qIsi9I2Y09NGQARHP3QJw432cwQXswczOEONuD6YZKCEEcxypbhXAJ93ANmUtI-OKa010K_OE594NvAXQHV43RXxM9DVqjzI0XS8x28TCo1KbXEzn9aLk2GizLrpAjOMAxQcyRVq6a",
    "refresh_token": "1//03dh7EqVzpsdqCgYIARAAGAMSNwF-L9Ir9TkK2ChlGBRIOzuL6FEd1_m0K-JWs6EQc_xmDtieilgOvpxDpGjj6xi1wARgdIvXhQo",
    "scope": "https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.modify https://mail.google.com/ https://www.googleapis.com/auth/gmail.send",
    "token_type": "Bearer",
    "expiry_date": 1614999923222
};

const credentials: any = {
    "installed": {
        "client_id": "321647347347-f4lmb3bnr806p3l1sc7c52o6gvqrt4ti.apps.googleusercontent.com",
        "project_id": "quickstart-1614967082560",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_secret": "osWUyyYOt0f-jBRxw9YMWknb",
        "redirect_uris": [
            "http://127.0.0.1:4444"
        ]
    }
};

const sender: any = "areatest20@gmail.com";

var sendMailTo: any = (auth: any, params: any) => {
    const gmail: any = google.gmail({version: 'v1', auth});
    const data: any = [
        'From: ',
        'To: <' + params.mail + '>',
        'Date: ',
        'Subject: ' + params.subject,
        '',
        params.message
    ].join('\r\n');
    const buff: any = Buffer.alloc(data.length, data);
    const raw: any = buff.toString('base64');
    gmail.users.messages.send({
        auth, userId: 'me', resource: { raw }
    }, (err: any, res: any) => {
        if (err)
            return console.log(err);
    });
};

var getMailFrom: any = async (auth: any) => {
    const gmail = google.gmail({version: 'v1', auth});
    let res: any = await gmail.users.messages.list({userId: 'me'});
    const messages: any = res.data.messages;
    if (messages.length) {
        const snippet: any = await gmail.users.messages
            .get({userId: 'me', id: messages[0].id});
        return {"result": "mail: " + snippet.data.snippet};
    }
};

export namespace Gmail {
    export var sendMail = async (params: any) => {
        const {client_secret, client_id, redirect_uris} = credentials.installed;
        const oAuth2Client: any = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        console.log('sendMail');
        oAuth2Client.setCredentials(token);
        return sendMailTo(oAuth2Client, params);
    };
    export var respondMail = async (params: any) => {
        const {client_secret, client_id, redirect_uris} = credentials.installed;
        const oAuth2Client: any = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        console.log('respondMail');
        oAuth2Client.setCredentials(token);
        params.mail = sender;
        return sendMailTo(oAuth2Client, params);
    };
    export var getMail = async (params: any) => {
        const {client_secret, client_id, redirect_uris} = credentials.installed;
        const oAuth2Client: any = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        console.log('getMail');
        oAuth2Client.setCredentials(token);
        const gmail = google.gmail({version: 'v1', oAuth2Client});
        return getMailFrom(oAuth2Client);
    };
    /*
    export var createLabel = async (params: any) => {
        const {client_secret, client_id, redirect_uris} = credentials.installed;
        const oAuth2Client: any = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        console.log('createLabel');
        oAuth2Client.setCredentials(token);
        const gmail = google.gmail({version: 'v1', oAuth2Client});
        await gmail.users.labels.create({
            oAuth2Client,
            userId: params.idUser,
            ressource: {
                name: params.name,
                labelListVisibility: 'labelShow',
                messageListVisibility: 'show'
            }
        });
    };
    export var deleteLabel = async (params: any) => {
        const {client_secret, client_id, redirect_uris} = credentials.installed;
        const oAuth2Client: any = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        console.log('deleteLabel');
        oAuth2Client.setCredentials(token);
        const gmail = google.gmail({version: 'v1', oAuth2Client});
        //idUser
        //idLabel
    };
    */
}
/*
function getLabels(auth: any) {
    const gmail = google.gmail({version: 'v1', auth});
    gmail.users.labels.list({
      userId: 'me',
    }, (err: any, res: any) => {
      if (err)
        return console.log('The API returned an error: ' + err);
      const labels = res.data.labels;
      if (labels.length) {
        var i = 0; 
        labels.forEach((label: any) => {
          if (i == labels.length-1)
            console.log(`${label.name}`);
          i++;
        });
      }
    });
  }
*/