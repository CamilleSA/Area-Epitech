var reddit: any = require("reddit-oauth");

const app: any = {
    "app_id": "DO9UDSH0obTiLw",
    "app_secret": "Jqc_1I8Tz4d-BuMRONs4KuAOGy7G-A",
    "redirect_uri": "http://localhost:8080/about.json"
}

export namespace Reddit {
    export var postMessage = async (params: any) => {
        const rd = new reddit(app);
        console.log('postMessage');
        await rd.passAuth(params.username, params.password, function(success: any) {
            if (success)
                rd.post('/api/submit', {
                    sr: params.subreddit,
                    kind: 'self',
                    resubmit: true,
                    title: params.title,
                    text: params.message
                }, (err: any, res: any, body: any) => {
                    if (err)
                        console.log(err);
                });
        });
    };
    /*
    export var newHotPostInSubreddit = async (params: any) => {
    };
    export var newPostInSubreddit = async (params: any) => {
    };
    */
    /*
    export var newComment = async (params: any) => {
        const rd = new reddit(app);
    };
    */
}