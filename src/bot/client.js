import {Client, Intents} from "discord.js";

export const discordClient = new Client({ intents: [Intents.FLAGS.GUILDS] });

discordClient.on('ready', () => {
    console.log(`Logged in as ${discordClient.user.tag}!`);
});

discordClient.on('messageCreate', async message => {
    console.log(message);
    if (message.content === "hello"){
        await message.reply('Pong!');
    }
});


discordClient.on('interactionCreate', async interaction => {
    console.log(interaction);
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

