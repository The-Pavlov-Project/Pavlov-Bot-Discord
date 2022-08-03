import express from "express";
import { getScheduledEvents, createScheduleEvent, deleteScheduleEvent } from "../../bot/core/schedule.js"

export const scheduleRouter = express.Router();

/**
 List all the available events inside that guild
 */
scheduleRouter.get("/:guildId", async (req, res) => {
  res.send(await getScheduledEvents(req.params.guildId));
});


/**
 Create a new schedule
 {
  "title": "Big Event",
  "description": "Cool description",
  "startDate": "2022-09-17T10:00:00",
  "endDate": "2022-09-17T11:00:00",
  metadata: {"location": "here"}
 }

 */
scheduleRouter.post("/:guildId/create", async (req, res) => {
    res.send(
       await createScheduleEvent(
          req.params.guildId,
          req.body.title,
          req.body.description,
          req.body.startDate,
          req.body.endDate,
          req.body.metadata
      )
   );
});

/**
 Delete an existing schedule by id
 */
scheduleRouter.delete("/:guildId/delete/:eventId", async (req, res) => {
  res.send(
      await deleteScheduleEvent(
          req.params.guildId,
          req.params.eventId
      ),
  );
});
