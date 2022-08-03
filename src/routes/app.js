// create express app
import express from "express";

import { channelsRouter } from "./channels/channels.js";


export const app = express();
app.use('/api/channels', channelsRouter);

app.get('/', (req, res) => {
    res.send('Api-Root');
})
