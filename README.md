# alexsmbotratti
A simple Discord Bot used for testing features and regulating a server. If you are looking at this GitHub, it serves as a example/template for new Discord bots.

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
- For any other platform, just type whatever you want (remove any spaces in the platform's name)

`[IP Address]` should be replaced with `$(hostname -I)` on Linux-based operating systems. This will automatically add the host IP. All IP addresses are redacted after five seconds to avoid security concerns.

So, for example, on a Raspberry Pi running this bot, the following command would be used (after navigating to the project folder):
 `node app.js $(hostname -I) Pi`

## Down the Road
This is a bot that takes the hit for other bots I work on, so I can't say I know what features I want this bot to do. Here are some ideas I have.
- Automagically sort humans that join the server from bots that join the Bot Testing Server and automatically create roles and channels for each bot with appropiate permissions.
- Maybe some fun minigames?
- Music Player
- JSON example
- Make this bot public for some reason?

## Want to make your own Discord Bot?
Check out [the repository I made](https://github.com/alexsmbaratti/Discord.js-Template) for Discord.js!

