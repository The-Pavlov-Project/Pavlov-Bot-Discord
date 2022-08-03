import express from "express";

export const channelsRouter = express.Router();

channelsRouter.get("/", (req, res) => {
  res.send("Hello World!");
});
