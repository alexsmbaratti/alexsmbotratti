# alexsmbotratti
A simple Discord Bot used for testing features and regulating a server.

[Add to Discord](https://discordapp.com/oauth2/authorize?client_id=322245887789367306&permissions=0&scope=bot)

## Features
- Test embeds
- Host IP
- Ping relay
- A clever college pun for the game title

## Running
Note that this is just a portfolio project and is not intended to be used by the public. *That being said...*

For full functionality, run with `node app.js [IP Address] [PLATFORM]`

`[PLATFORM]` should be replaced with the platform running the bot.
- Use `Pi` for Raspberry Pi
- Use `macOS` for macOS
- Use `AWS` for Amazon Web Services

`[IP Address]` should be replaced with `$(hostname -I)` on Linux-based operating systems. This will automatically add the host IP. All IP addresses are redacted after five seconds to avoid security concerns.

## Down the Road
This is a bot that takes the hit for other bots I work on, so I can't say I know what features I want this bot to do. Here are some ideas I have.
- Automagically sort humans that join the server from bots that join the Bot Testing Server and automatically create roles and channels for each bot with appropiate permissions.
- Maybe some fun minigames?
- Make this bot public for some reason?

## Want to make your own Discord Bot?
Check out [the gist I made](https://gist.github.com/alexsmbaratti/cbf5edaec6c36a38abbc631ae0f75831) for Discord.js!

