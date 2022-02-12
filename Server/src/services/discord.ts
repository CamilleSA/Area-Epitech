var discord: any = require('discord.js');
var fetch: any = require('node-fetch');

const bot: any = "ODEwNTE4MzUyNTIzMDM0NjU0.YCk0CQ.mafMZ5LY8hMtJ-f1wLTMf_FozvY";

export namespace Discord {
    export var sendMessage = async (params: any) => {
        let client: any = new discord.Client();
        client.login(bot);
        console.log('sendMessage');
        client.once('ready', async () => {
            let guild: any = await client.guilds.fetch(params.idServer);
            guild.channels.cache.get(params.idChannel).send(params.message);
        });
    };
    export var addRole = async (params: any) => {
        let client: any = new discord.Client();
        client.login(bot);
        console.log('addRole');
        client.once('ready', async () => {
            var guild: any = client.guilds.cache.get(params.idServer);
            var role: any = await guild.roles.cache.find((role: any) => role.id === params.idRole);
            var user: any = (await guild.members.fetch(params.idUser)).roles.add(role.id);
        });
    };
    export var removeRole = async (params: any) => {
        let client: any = new discord.Client();
        client.login(bot);
        console.log('removeRole');
        client.once('ready', async () => {
            var guild: any = client.guilds.cache.get(params.idServer);
            var role: any = await guild.roles.cache.find((role: any) => role.id === params.idRole);
            var user: any = (await guild.members.fetch(params.idUser)).roles.remove(role.id);
        });
    };
    export var renameChannel = async (params: any) => {
        let client: any = new discord.Client();
        client.login(bot);
        console.log('renameChannel');
        client.once('ready', async () => {
            let guild: any = await client.guilds.fetch(params.idServer);
            guild.channels.cache.get(params.idChannel).setName(params.name);
        });
    };
}