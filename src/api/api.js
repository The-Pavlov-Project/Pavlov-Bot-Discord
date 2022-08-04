// create express app
import express from "express";

import { channelsRouter } from "./routes/channels.js";
import { scheduleRouter } from "./routes/schedule.js";


export const api = express();

// body and url encoding parser
api.use(express.urlencoded({ extended: true }));
api.use(express.json());

// express default error handler, to avo
api.use(async (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

// use token Bearer verification middleware
api.use(async (req, res, next) => {
    const token = req.headers["authorization"];
    if (token === "Bearer " + process.env.API_TOKEN) {
        next();
    }
    res.status(401).send("Unauthorized");
});


api.use('/api/channels', channelsRouter);
api.use('/api/schedule', scheduleRouter);


api.get('/', (req, res) => {
    res.send('Discord-Bot-Api-Root');
})
