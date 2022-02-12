var {google} = require("googleapis");

const token: any = {
    "access_token": "ya29.a0AfH6SMBqora0qdaYKN-aFYbw8y-frMql6RJz6GJ9SMlRDHeZ9mgEbWZv_fEqR59bjgFzWFQnbjgFZr72nxvsuFF3EfR9QWhpVb5SLOAjt3FAQL4uZrYEFxIf_77DcLkSAjF60-JoQ25no1WnG2FcmDrNe3Kp",
    "refresh_token": "1//03kGgNgLCM8NsCgYIARAAGAMSNwF-L9Ir1Ab19OLVNJIW1FmtMg4lO1OmTo1Vxc2l7EUjnpOUP4rlL5NipkY9Qa97vS7MO6zHwVk",
    "scope": "https://www.googleapis.com/auth/youtube.readonly",
    "token_type": "Bearer",
    "expiry_date": 1615056038227
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

export namespace Youtube {
    export var newVideoInChannel = async (params: any) => {
        const {client_secret, client_id, redirect_uris} = credentials.installed;
        const oAuth2Client: any = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        console.log('newVideoInChannel');
        oAuth2Client.setCredentials(token);
        let service: any = google.youtube('v3');
        let res: any = await service.channels.list({
            auth: oAuth2Client,
            part: 'contentDetails, statistics',
            forUsername: params.channelName
        });
        if (res.data.items.length != 0)
            return ({"result": params.channelName + ": " +
                res.data.items[0].statistics.videoCount});
    };
    export var newVideoInPlaylist = async (params: any) => {
        const {client_secret, client_id, redirect_uris} = credentials.installed;
        const oAuth2Client: any = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        console.log('newVideoInPlaylist');
        oAuth2Client.setCredentials(token);
        let service: any = google.youtube('v3');
        let res: any = await service.playlists.list({
            auth: oAuth2Client,
            part: 'contentDetails',
            id: params.id
        });
        if (res.data.items.length != 0)
            return ({"result": params.id + ": " +
                res.data.items[0].contentDetails.itemCount});
    };
    export var newVideoInPopular = async (params: any) => {
        const {client_secret, client_id, redirect_uris} = credentials.installed;
        const oAuth2Client: any = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        console.log('newVideoInPopular');
        oAuth2Client.setCredentials(token);
        let service: any = google.youtube('v3');
        let res: any = await service.videos.list({
            auth: oAuth2Client,
            part: 'contentDetails, snippet',
            chart: "mostPopular"
        });
        if (res.data.items.length != 0)
            return ({"result": "popular: " + res.data.items[0].snippet.title});
    };
}