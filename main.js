import { Client, Intents } from 'discord.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.fetch(process.env.LOG_CHANNEL).then(channel => {
    channel.send("Hello here!");
  })
});

client.on('messageCreate', async message => {
  console.log(message);
  if (message.content === "hello"){
    await message.reply('Pong!');
  }
});


client.on('interactionCreate', async interaction => {
  console.log(interaction);
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(process.env.TOKEN);
