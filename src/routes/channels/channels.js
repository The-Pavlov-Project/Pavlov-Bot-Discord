import express from "express";
import { discordClient } from "../../bot/client.js"

export const channelsRouter = express.Router();

channelsRouter.get("/", (req, res) => {
  res.send("Hello World!");
});
