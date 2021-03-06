# alexsmbotratti

[![Build Status](https://travis-ci.org/alexsmbaratti/alexsmbotratti.svg?branch=master)](https://travis-ci.org/alexsmbaratti/alexsmbotratti) ![alt text](https://img.shields.io/badge/version-1.4.0-red.svg "Version") [![alt text](https://img.shields.io/badge/add%20to-Discord-7289DA.svg "Add to Discord")](https://discordapp.com/oauth2/authorize?client_id=322245887789367306&permissions=0&scope=bot)

A simple Discord Bot used for testing features and regulating a server. If you are looking at this GitHub, it serves as a example for basic Discord bots. Looking for a template? Check out my [template bot](https://github.com/alexsmbaratti/Discord.js-Template). 

## Features
- Test embeds
- Host IP
- Ping relay
- A clever college pun for the game title

In the end, this bot just works as a quick way for me to test scripts in Node.js pertaining to Discord.js. Think of it like a mostly blank canvas. It also works as a way for me to test new features for other bots without giving them downtime. See the diagram below.

![alt text](misc/concept.png)

## Running
Note that this is just a personal project and is not intended to be used by the public. *That being said...*

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
- Give some fun facts about me?

## Want to make your own Discord Bot?
Check out [the repository I made](https://github.com/alexsmbaratti/Discord.js-Template) for Discord.js!

