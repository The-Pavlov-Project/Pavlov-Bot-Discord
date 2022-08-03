import { app } from "./routes/app.js";
import { discordClient } from "./bot/client.js";


// Start express server
app.listen(3000, () => {});

// Start discord client
discordClient.login(process.env.TOKEN).then(() => {});
