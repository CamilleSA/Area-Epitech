enum areaServices {
    GITHUB = "github",
    DISCORD = "discord",
    GMAIL = "gmail",
    YOUTUBE = "youtube",
    REDDIT = "reddit",
    WEATHER = "weather",
    CLOCK = "clock",
    PORNHUB = "pornhub",
    SPOTIFY = "spotify"
}

export enum areaAction {
    SENDMESSAGE = "sendMessage",
    RENAMECHANNEL = "renameChannel",
    GETWEATHER = "getWeather",
    GETCOMMIT = "getCommit",
    GETNEWREPO = "getNewRepo",
    GETNEWBRANCH = "getNewBranch",
    GETORGANIZATION = "getOrganization",
    CREATEISSUE = "createIssue",
    CREATEREPO = "createRepo",
    DELETEREPO = "deleteRepo",
    CREATECOMMENT = "createComment",
    SENDMAIL = "sendMail",
    GETMAIL = "getMail",
    RESPONDMAIL = "respondMail",
    NEWVIDEOCHANNEL = "newVideoInChannel",
    NEWVIDEOPLAYLIST = "newVideoInPlaylist",
    NEWVIDEOPOPULAR = "newVideoInPopular",
    POSTMESSAGE = "postMessage",
    GETBADWEATHER = "getBadWeather",
    ADDROLE = "addRole",
    REMOVEROLE = "removeRole",
    ACCEPTREPOINVIT = "acceptRepoInvit",
    GETREPOINVIT = "getRepoInvit",
    SEARCHVIDEOBYTITLE = "searchVideoByTitle",
    SEARCHGIFBYTITLE = "searchGifByTitle",
    SEARCHVIDEOBYAUTHOR = "searchVideoByAuthor",
    SEARCHGIFBYAUTHOR = "searchGifByAuthor",
    SEARCHVIDEOBYCATEGORY = "searchVideoByCategory",
    SEARCHGIFBYCATEGORY = "searchGifByCategory",
    SEARCHTRACKS = "searchTracks",
    SEARCHARTISTS = "searchArtists",
    SEARCHPLAYLISTS = "searchPlaylists"
}

export const areaConfig: {service: areaServices, actions: areaAction[]}[] = [
    {service: areaServices.GITHUB, actions: [areaAction.GETCOMMIT, areaAction.GETNEWREPO, areaAction.GETNEWBRANCH,
        areaAction.GETORGANIZATION, areaAction.CREATEISSUE, areaAction.CREATEREPO, areaAction.DELETEREPO,
        areaAction.CREATECOMMENT, areaAction.ACCEPTREPOINVIT, areaAction.GETREPOINVIT]},
    {service: areaServices.DISCORD, actions: [areaAction.RENAMECHANNEL, areaAction.SENDMESSAGE,
        areaAction.ADDROLE, areaAction.REMOVEROLE]},
    {service: areaServices.GMAIL, actions: [areaAction.SENDMAIL, areaAction.GETMAIL, areaAction.RESPONDMAIL]},
    {service: areaServices.YOUTUBE, actions: [areaAction.NEWVIDEOCHANNEL, areaAction.NEWVIDEOPLAYLIST, areaAction.NEWVIDEOPOPULAR]},
    {service: areaServices.REDDIT, actions: [areaAction.POSTMESSAGE]},
    {service: areaServices.WEATHER, actions: [areaAction.GETWEATHER, areaAction.GETBADWEATHER]},
    {service: areaServices.CLOCK, actions: []},
    {service: areaServices.PORNHUB, actions: [areaAction.SEARCHVIDEOBYTITLE, areaAction.SEARCHGIFBYTITLE, areaAction.SEARCHVIDEOBYAUTHOR,
        areaAction.SEARCHGIFBYAUTHOR, areaAction.SEARCHVIDEOBYCATEGORY, areaAction.SEARCHGIFBYCATEGORY]},
    {service: areaServices.SPOTIFY, actions: [areaAction.SEARCHTRACKS, areaAction.SEARCHARTISTS, areaAction.SEARCHPLAYLISTS]}
];

export async function createArea(request: any, response: any) {
    if (!Object.values(areaServices).includes(request.body.serviceAction))
        return response.status(465).end();
    if (!Object.values(areaServices).includes(request.body.serviceReaction))
        return response.status(466).end();
    if (!Object.values(areaAction).includes(request.body.action))
        return response.status(467).end();
    if (!Object.values(areaAction).includes(request.body.reaction))
        return response.status(468).end();
    if (false === (Object(areaConfig.find(p => p.service === request.body.serviceAction))["actions"]).includes(request.body.action))
        return response.status(469).end();
    if (false === (Object(areaConfig.find(p => p.service === request.body.serviceReaction))["actions"]).includes(request.body.reaction))
        return response.status(470).end();
    request.dbh.query("SELECT users.userId FROM users WHERE users.username = ?;", request.body.username).then((result: any) => {
        if (result.length == 0)
            return response.status(476).end();
        else {
            let userId = result[0].userId;
            request.dbh.query("SELECT * FROM areas WHERE areas.userId = ? AND areas.placeholder = ?;",
                [userId, request.body.placeholder]).then((result: any) => {
                if (result.length != 0)
                    return response.status(480).end();
                else {
                    request.dbh.query("INSERT INTO areas(userId, placeholder, running, serviceAction, action, serviceActionConfig, "
                        + "serviceReaction, reaction, serviceReactionConfig) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);",
                        [userId, request.body.placeholder, false, request.body.serviceAction, request.body.action, JSON.stringify(request.body.serviceActionConfig),
                        request.body.serviceReaction, request.body.reaction, JSON.stringify(request.body.serviceReactionConfig)]).then((result: any) => {
                        return response.status(200).end();
                    }).catch((error: any) => { return response.status(490).end(); });
                }
            }).catch((error: any) => { return response.status(490).end(); });
        }
    }).catch((error: any) => { return response.status(490).end(); });
}

export async function editArea(request: any, response: any) {
    request.dbh.query("SELECT users.userId FROM users WHERE users.username = ?;", request.body.username).then((result: any) => {
        if (result.length == 0)
            return response.status(476).end();
        else {
            let userId = result[0].userId;
            request.dbh.query("SELECT * FROM areas WHERE areas.userId = ? AND areas.placeholder = ?;",
                [result[0].userId, request.body.placeholder]).then((result: any) => {
                if (result.length == 0)
                    return response.status(481).end();
                else {
                    request.dbh.query("UPDATE areas SET serviceActionConfig = ?, serviceReactionConfig = ? "
                        + "WHERE areas.userId = ? AND areas.placeholder = ?;",
                        [JSON.stringify(request.body.serviceActionConfig), JSON.stringify(request.body.serviceReactionConfig),
                        result[0].userId, request.body.placeholder]).then((result: any) => {
                    }).catch((error: any) => { return response.status(490).end(); });
                    return response.status(200).end();
                }
            }).catch((error: any) => { return response.status(490).end(); });
        }
    }).catch((error: any) => { return response.status(490).end(); });
}

export async function deleteArea(request: any, response: any) {
    request.dbh.query("SELECT users.userId FROM users WHERE users.username = ?;", request.body.username).then((result: any) => {
        if (result.length == 0)
            return response.status(476).end();
        else {
            request.dbh.query("SELECT * FROM areas WHERE areas.userId = ? AND areas.placeholder = ?;",
                [result[0].userId, request.body.placeholder]).then((result: any) => {
                if (result.length == 0)
                    return response.status(481).end();
                else {
                    request.dbh.query("DELETE FROM areas WHERE areas.userId = ? AND areas.placeholder = ?",
                        [result[0].userId, request.body.placeholder]).then((result: any) => {}).catch((error: any) => { return response.status(490).end(); });
                    return response.status(200).end();
                }
            }).catch((error: any) => { return response.status(490).end(); });
        }
    }).catch((error: any) => { return response.status(490).end(); });
}

export async function getArea(request: any, response: any) {
    request.dbh.query("SELECT users.userId FROM users WHERE users.username = ?;", request.body.username).then((result: any) => {
        if (result.length == 0)
            return response.status(476).end();
        else {
            request.dbh.query("SELECT placeholder, IF(running, 'true', 'false') as running, "
                + "serviceAction, action, serviceReaction, reaction FROM areas WHERE areas.userId = ?;",
                result[0].userId).then((result: any) => {
                return response.status(200).json(result);
            }).catch((error: any) => { return response.status(490).end(); });
        }
    }).catch((error: any) => { return response.status(490).end(); });
}

export async function executeArea(request: any, response: any) {
    request.dbh.query("SELECT users.userId FROM users WHERE users.username = ?;", request.body.username).then((result: any) => {
        if (result.length == 0)
            return response.status(476).end();
        else {
            request.dbh.query("SELECT * FROM areas WHERE areas.userId = ? AND areas.placeholder = ?;",
                [result[0].userId, request.body.placeholder]).then((result: any) => {
                if (result.length == 0)
                    return response.status(477).end();
                else {
                    if (result[0].running === Number(true))
                        return response.status(480).end();
                    else {
                        request.dbh.query("UPDATE areas SET running = true WHERE areas.userId = ? AND areas.placeholder = ?;",
                            [result[0].userId, request.body.placeholder]).then((result: any) => {
                        }).catch((error: any) => { return response.status(490).end(); });
                        return response.status(200).end();
                    }
                }
            }).catch((error: any) => { return response.status(490).end(); });
        }
    }).catch((error: any) => { return response.status(490).end(); });
}

export async function stopArea(request: any, response: any) {
    request.dbh.query("SELECT users.userId FROM users WHERE users.username = ?;", request.body.username).then((result: any) => {
        if (result.length == 0)
            return response.status(476).end();
        else {
            request.dbh.query("SELECT * FROM areas WHERE areas.userId = ? AND areas.placeholder = ?;",
                [result[0].userId, request.body.placeholder]).then((result: any) => {
                if (result.length == 0)
                    return response.status(477).end();
                else {
                    if (result[0].running === Number(false))
                        return response.status(481).end();
                    else {
                        request.dbh.query("UPDATE areas SET running = false WHERE areas.userId = ? AND areas.placeholder = ?;",
                            [result[0].userId, request.body.placeholder]).then((result: any) => {
                        }).catch((error: any) => { return response.status(490).end(); });
                        return response.status(200).end();
                    }
                }
            }).catch((error: any) => { return response.status(490).end(); });
        }
    }).catch((error: any) => { return response.status(490).end(); });
}