import { api } from "./src/api/api.js";
import { discordClient } from "./src/bot/client.js";


// Start express server
await api.listen(3000);

// Start discord client
await discordClient.login(process.env.TOKEN);
