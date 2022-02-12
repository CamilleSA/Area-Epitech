export async function about(request: any, response: any) {;
    return response.json({
        "client": {
            "host": request.ip
        },
        "server": {
            "current_time": (new Date()).getTime(),
            "services": [{
                "name": "github",
                "actions": [{
                    "name": "getNewRepo",
                    "description": ""
                }, {
                    "name": "getNewBranch",
                    "description": ""
                }, {
                    "name": "getOrganization",
                    "description": ""
                }, {
                    "name": "getCommit",
                    "description": ""
                }, {
                    "name": "getRepoInvit",
                    "description": ""
                }],
                "reactions": [{
                    "name": "createIssue",
                    "description": ""
                }, {
                    "name": "deleteRepo",
                    "description": ""
                }, {
                    "name": "createRepo",
                    "description": ""
                }, {
                    "name": "createComment",
                    "description": ""
                }, {
                    "name": "acceptRepoInvit",
                    "description": ""
                }]
            }, {
                "name": "discord",
                "actions": [],
                "reactions": [{
                    "name": "sendMessage",
                    "description": ""
                }, {
                    "name": "addRole",
                    "description": ""
                }, {
                    "name": "removeRole",
                    "description": ""
                }, {
                    "name": "renameChannel",
                    "description": ""
                }]
            }, {
                "name": "gmail",
                "actions": [{
                    "name": "getMail",
                    "description": ""
                }],
                "reactions": [{
                    "name": "sendMail",
                    "description": ""
                }, {
                    "name": "respondMail",
                    "description": ""
                }]
            }, {
                "name": "reddit",
                "actions": [],
                "reactions": [{
                    "name": "postMessage",
                    "description": ""
                }]
            }, {
                "name": "weather",
                "actions": [{
                    "name": "getWeather",
                    "description": ""
                }, {
                    "name": "getBadWeather",
                    "description": ""
                }],
                "reactions": []
            }, {
                "name": "youtube",
                "actions": [{
                    "name": "newVideoInChannel",
                    "description": ""
                }, {
                    "name": "newVideoInPlaylist",
                    "description": ""
                }, {
                    "name": "newVideoInPopular",
                    "description": ""
                }],
                "reactions": []
            }, {
                "name": "clock",
                "actions": [],
                "reactions": []
            }, {
                "name": "pornhub",
                "actions": [{
                    "name": "searchVideoByTitle",
                    "description": ""
                }, {
                    "name": "searchGifByTitle",
                    "description": ""
                }, {
                    "name": "searchVideoByAuthor",
                    "description": ""
                }, {
                    "name": "searchGifByAuthor",
                    "description": ""
                }, {
                    "name": "searchVideoByCategory",
                    "description": ""
                }, {
                    "name": "searchGifByCategory",
                    "description": ""
                }],
                "reactions": []
            }, {
                "name": "spotify",
                "actions": [{
                    "name": "searchTracks",
                    "description": ""
                }, {
                    "name": "searchArtists",
                    "description": ""
                }, {
                    "name": "searchPlaylists",
                    "description": ""
                }],
                "reactions": []
            }]
        }
    });
}