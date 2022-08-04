import {discordClient} from "../client.js";

discordClient.on('guildScheduledEventCreate', async (guild, event) => {
    console.log(guild);
    console.log(event);
});

discordClient.on('guildScheduledEventDelete', async (guild, event) => {
    console.log(guild);
    console.log(event);
});
