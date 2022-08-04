import {Client, Intents} from "discord.js";
import axios from "axios";

export const discordClient = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_SCHEDULED_EVENTS
    ]
});

discordClient.on('ready', () => {
    console.log(`Logged in as ${discordClient.user.tag}!`);
});

discordClient.on('guildScheduledEventCreate', async (guild, event) => {
    // make a post request via axios to the server, sending the event and the guild id
    await axios.post( `${process.env.PAVLOV_CORE_URI}/api/schedule/` , {
        event: event,
        guildId: guild.id
    });
    console.log(guild);
    console.log(event);

});

discordClient.on('guildScheduledEventDelete', async (guild, event) => {
    console.log(guild);
    console.log(event);
});

discordClient.on('interactionCreate', async interaction => {
    console.log(interaction);
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});
