// create express app
import express from "express";

import { channelsRouter } from "./routes/channels.js";
import { scheduleRouter } from "./routes/schedule.js";


export const api = express();

// body and url encoding parser
api.use(express.urlencoded({ extended: true }));
api.use(express.json());

// express default error handler
api.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});


api.use('/api/channels', channelsRouter);
api.use('/api/schedule', scheduleRouter);


api.get('/', (req, res) => {
    res.send('Discord-Api-Root');
})
