import { discordClient } from "../client.js";


export const getScheduledEvents = async (guildId) => {
    const guild = await discordClient.guilds.cache.get(guildId);
    if (guild) {
        return await guild.scheduledEvents.fetch()
    }
}

export const createScheduleEvent = async (guildId, title, description, startDate, endDate, metadata) => {

    const guild = await discordClient.guilds.cache.get(guildId);
    if (guild) {
        try {
            return await guild.scheduledEvents.create({
                name: title,
                entityType: 3,
                privacyLevel: 2,
                scheduledStartTime: new Date(startDate),
                scheduledEndTime: new Date(endDate),
                description: description,
                entityMetadata: metadata
            });
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
}

// update a schedule event
export const updateScheduleEvent = async (guildId, eventId, options) => {

    const guild = await discordClient.guilds.cache.get(guildId);
    if (guild) {
        try {
            return await guild.scheduledEvents.edit(eventId, options);
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
}


export const deleteScheduleEvent = async (guildId, eventId) => {
    const guild = await discordClient.guilds.cache.get(guildId);
    if (guild) {
        return await guild.scheduledEvents.delete(eventId)
    }
}
