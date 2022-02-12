import * as dashboard from"./api/dashboard";
import * as serviceClock from "./services/clock";
import * as serviceDiscord from "./services/discord";
import * as serviceGithub from "./services/github";
import * as serviceGmail from "./services/gmail";
import * as serviceYoutube from "./services/youtube";
import * as serviceReddit from "./services/reddit";
import * as serviceWeather from "./services/weather";
import * as servicePornhub from "./services/pornhub";
import * as serviceSpotify from "./services/spotify";

const actionFcn: {action: dashboard.areaAction, fcn: any}[] = [
    {action: dashboard.areaAction.SENDMESSAGE, fcn: serviceDiscord.Discord.sendMessage},
    {action: dashboard.areaAction.RENAMECHANNEL, fcn: serviceDiscord.Discord.renameChannel},
    {action: dashboard.areaAction.GETWEATHER, fcn: serviceWeather.Weather.getWeather},
    {action: dashboard.areaAction.GETCOMMIT, fcn: serviceGithub.Github.getCommit},
    {action: dashboard.areaAction.GETNEWREPO, fcn: serviceGithub.Github.getNewRepo},
    {action: dashboard.areaAction.GETNEWBRANCH, fcn: serviceGithub.Github.getNewRepo},
    {action: dashboard.areaAction.GETORGANIZATION, fcn: serviceGithub.Github.getOrganization},
    {action: dashboard.areaAction.CREATEISSUE, fcn: serviceGithub.Github.createIssue},
    {action: dashboard.areaAction.CREATEREPO, fcn: serviceGithub.Github.createRepo},
    {action: dashboard.areaAction.DELETEREPO, fcn: serviceGithub.Github.deleteRepo},
    {action: dashboard.areaAction.CREATECOMMENT, fcn: serviceGithub.Github.createComment},
    {action: dashboard.areaAction.SENDMAIL, fcn: serviceGmail.Gmail.sendMail},
    {action: dashboard.areaAction.GETMAIL, fcn: serviceGmail.Gmail.getMail},
    {action: dashboard.areaAction.RESPONDMAIL, fcn: serviceGmail.Gmail.respondMail},
    {action: dashboard.areaAction.NEWVIDEOCHANNEL, fcn: serviceYoutube.Youtube.newVideoInChannel},
    {action: dashboard.areaAction.NEWVIDEOPLAYLIST, fcn: serviceYoutube.Youtube.newVideoInPlaylist},
    {action: dashboard.areaAction.NEWVIDEOPOPULAR, fcn: serviceYoutube.Youtube.newVideoInPopular},
    {action: dashboard.areaAction.POSTMESSAGE, fcn: serviceReddit.Reddit.postMessage},
    {action: dashboard.areaAction.GETBADWEATHER, fcn: serviceWeather.Weather.getBadWeather},
    {action: dashboard.areaAction.ADDROLE, fcn: serviceDiscord.Discord.addRole},
    {action: dashboard.areaAction.REMOVEROLE, fcn: serviceDiscord.Discord.removeRole},
    {action: dashboard.areaAction.ACCEPTREPOINVIT, fcn: serviceGithub.Github.acceptRepoInvit},
    {action: dashboard.areaAction.GETREPOINVIT, fcn: serviceGithub.Github.getRepoInvit},
    {action: dashboard.areaAction.SEARCHVIDEOBYTITLE, fcn: servicePornhub.Pornhub.searchVideoByTitle},
    {action: dashboard.areaAction.SEARCHGIFBYTITLE, fcn: servicePornhub.Pornhub.searchGifByTitle},
    {action: dashboard.areaAction.SEARCHVIDEOBYAUTHOR, fcn: servicePornhub.Pornhub.searchVideoByAuthor},
    {action: dashboard.areaAction.SEARCHGIFBYAUTHOR, fcn: servicePornhub.Pornhub.searchGifByAuthor},
    {action: dashboard.areaAction.SEARCHVIDEOBYCATEGORY, fcn: servicePornhub.Pornhub.searchVideoByCategory},
    {action: dashboard.areaAction.SEARCHGIFBYCATEGORY, fcn: servicePornhub.Pornhub.searchGifByCategory},
    {action: dashboard.areaAction.SEARCHTRACKS, fcn: serviceSpotify.Spotify.searchTracks},
    {action: dashboard.areaAction.SEARCHARTISTS, fcn: serviceSpotify.Spotify.searchArtists},
    {action: dashboard.areaAction.SEARCHPLAYLISTS, fcn: serviceSpotify.Spotify.searchPlaylists}
];

async function middlewareArea(params: any, tmp: any, result: any) {
    if (params.reaction === dashboard.areaAction.SENDMAIL ||
        params.reaction === dashboard.areaAction.RESPONDMAIL ||
        params.reaction === dashboard.areaAction.POSTMESSAGE)
        tmp.subject = "Area - " + params.serviceAction;
    tmp.message = result;
    return tmp;
}

async function parseArea(dbh: any, params: any) {
    let objAct: any = Object(actionFcn.find(p => p.action === params.action));
    let act: any = await objAct.fcn(JSON.parse(params.serviceActionConfig));
    let tmp: any = JSON.parse(params.serviceReactionConfig);
    if(act === undefined)
        return ;
    let res: any = tmp;
    if (!(params.reaction === dashboard.areaAction.ADDROLE) &&
        !(params.reaction === dashboard.areaAction.REMOVEROLE) &&
        !(params.reaction === dashboard.areaAction.DELETEREPO) &&
        !(params.reaction === dashboard.areaAction.CREATEREPO) &&
        !(params.reaction === dashboard.areaAction.ACCEPTREPOINVIT)) {
        res = await middlewareArea(params, tmp, act.result)
        if (res === undefined)
            return ;
    }
    if (params.oldValue === act.result)
        return ;
    dbh.query("UPDATE areas SET oldValue = ? WHERE areas.userId = ? AND areas.placeholder = ?;",
        [act.result, params.userId, params.placeholder]).then((result: any) => {}).catch((error: any) => {});
    let objReact: any = Object(actionFcn.find(p => p.action === params.reaction));
    await objReact.fcn(res);
}

export async function loopServices(dbh: any) {
    dbh.query("SELECT userId, placeholder, serviceAction, action, serviceActionConfig, serviceReaction, "
        + "reaction, serviceReactionConfig, oldValue from areas WHERE areas.running = ?;", Number(true)).then((result: any) => {
        result.forEach((ar: any) => { parseArea(dbh, ar); });
    }).catch((error: any) => {
        console.log(error);
    });
}