import {discordClient} from "../client.js";

discordClient.on('messageCreate', async message => {
    console.log(message);
    if (message.content === "hello"){
        await message.reply('Pong!');
    }
});
