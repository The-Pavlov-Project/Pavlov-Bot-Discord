# Pavlov-Discord-Bot

## Development

Before start the server set as environment variables the following variables:

 - `DISCORD_TOKEN`: The token of the discord bot
 - `API_TOKEN`: The token of the API to receive the calls

### Docker Compose
Define a .env file in the root of the project as follow

``` text
DISCORD_TOKEN=your_token
API_TOKEN=your_token
```

### Publish the image 

`docker tag pavlov-bot-discord-bot docker.pkg.github.com/the-pavlov-project/pavlov-bot-discord/pavlov-discord-bot:latest`
`docker login docker.pkg.github.com -u <username> -p <token>`
`docker push docker.pkg.github.com/the-pavlov-project/pavlov-bot-discord/pavlov-discord-bot:latest`

