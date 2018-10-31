const Discord = require("discord.js");
var config = require('./config.json');
const client = new Discord.Client();
const https = require("https");
var fs = require("fs");

const build = "1.4.0";
var host_ip = "0.0.0.0";
var platform = "undefined";
var testChannel;
var botTestingGuild;
var allAccessRole;

const alexsmbaratti = config.CLIENT_ID;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: 'online',
    afk: false,
    game: {
      name: "asu!",
      url: "https://www.asu.edu"
    }
  });
  host_ip = process.argv[2];
  if (process.argv[3] != "undefined") {
    platform = process.argv[3];
    if (platform == "Pi") {
      platform = "Raspberry Pi";
    }

    testChannel = client.channels.get("353426319188688910");
    botTestingGuild = client.guilds.get("338028357058822145");
    allAccessRole = botTestingGuild.roles.get("338859406965866497");

    testChannel.send({
      embed: {
        title: "Client Restarted!",
        color: 0xFF0000,
        fields: [{
            name: "Build",
            value: build
          },
          {
            name: "Platform",
            value: platform
          }
        ],
        footer: {
          text: "This message was automatically generated because an instance of alexsmbotratti was started. This message is intended for development and debugging purposes and should only appear in a specific server."
        }
      }
    });
  } else {
    testChannel.send({
      embed: {
        title: "Client Restarted!",
        color: 0xFF0000,
        fields: [{
            name: "Build",
            value: build
          },
          {
            name: "Platform",
            value: "Undefined"
          }
        ],
        footer: {
          text: "This message was automatically generated because an instance of alexsmbotratti was started. This message is intended for development and debugging purposes and should only appear in a specific server."
        }
      }
    });
  }
  if (process.env.USER == "travis") {
    console.log("Compilation successful! Exiting with code 0.")
    process.exit(0);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase().substring(0, 2) == `a!`) {
    switch (msg.content.toLowerCase().substring(2)) {
      case `embed`:
        msg.channel.send({
          embed: {
            title: "This is an embed",
            color: 0xFF0000,
            description: "A very simple Embed!",
            footer: {
              text: "Footer"
            }
          }
        });
        break;
      case `ip`:
        msg.channel.send("Host IP: " + host_ip)
          .then(message => {
            setTimeout(function() {
              message.edit("Host IP: REDACTED");
            }, 5000);
          });
        break;
      case `build`:
        msg.channel.send("Build: `" + build + "`");
        break;
      case `profile`:
        var isBot = "A humanistic human with human-like features";
        if (msg.author.bot) {
          isBot = "A very humble bot";
        }
        msg.channel.send({
          embed: {
            author: {
              name: msg.author.username + "'s Profile",
              icon_url: msg.author.avatarURL
            },
            title: isBot,
            fields: [{
                name: "ID",
                value: msg.author.id
              },
              {
                name: "Highest Role",
                value: msg.member.highestRole.name
              }
            ],
            color: msg.member.displayColor
          }
        });
        break;
      case `roles`:
        var roleArray = msg.guild.roles.array();
        for (var i = 1; i < roleArray.length; i++) {
          msg.channel.send(roleArray[i].name + ": " + roleArray[i].id);
          console.log(roleArray[i].name + ": " + roleArray[i].id);
        }
        break;
      case `help`:
        msg.channel.send("**Command List**\nBasic command structure is `a![command]`. All commands are **not** case-sensitive.\n**Debug** - `ping`, `build`, `ip`, `embed`\n**Tools** - `profile`");
        break;
      case `tournament`:
        const url =
          "https://alexsmbaratti:" + config.CHALLONGE_KEY + "@api.challonge.com/v1/tournaments/i7za05pq.json";
        https.get(url, res => {
          res.setEncoding("utf8");
          let body = "";
          res.on("data", data => {
            body += data;
          });
          res.on("end", () => {
            body = JSON.parse(body);
            console.log(body);
            msg.channel.send({
              embed: {
                title: body.tournament.name,
                url: body.tournament.full_challonge_url,
                fields: [{
                    name: "Participants",
                    value: body.tournament.participants_count
                  },
                  {
                    name: "Tournament Type",
                    value: body.tournament.tournament_type
                  }
                ],
                color: 0xFC5C1D,
                footer: {
                  text: "Powered by Challonge",
                  icon_url: "https://1stopesports.com/uploads/monthly_2017_05/challonge.png.645efb3df2745589ca26820ab7f99b75.png"
                }
              }
            });
          });
        });
        break;
      case 'winner':
        msg.channel.send({
          embed: {
            title: msg.author.username,
            description: "Tournament Winner",
            thumbnail: msg.author.avatarURL,
            fields: [{
              name: "Final Round",
              value: "3-2"
            }],
            color: 0xFC5C1D,
            footer: {
              text: "Powered by Challonge",
              icon_url: "https://1stopesports.com/uploads/monthly_2017_05/challonge.png.645efb3df2745589ca26820ab7f99b75.png"
            }
          }
        });
        break;
      case `ping`:
        let start = msg.createdTimestamp;
        console.log("Start: " + start);
        msg.channel.send('Pong')
          .then(message => {
            let diff = (message.createdTimestamp - start);
            message.edit(`Pong \`in ${diff}ms\``);
          })
          .catch(console.error);
        break;
      default:
        if (msg.content.toLowerCase().includes("a!init <@") && msg.member.user.id == alexsmbaratti) {
          console.log("Request to initialize channel");
          const initID = msg.content.toLowerCase().substring(9, msg.content.length - 1);
          if (botTestingGuild.members.has(initID) && botTestingGuild.members.get(initID).user.bot == true) {
            const initMember = botTestingGuild.members.get(initID);
            const initName = initMember.displayName;
            var initRole;
            var initChannel;
            botTestingGuild.createRole({
              name: initName
            }).then(role => {
              initRole = role;
              initMember.addRole(initRole);
            });
            if (initName.toLowerCase().includes("bot")) {} else {
              initName = initName + "Bot";
            }
            botTestingGuild.createChannel(initName.toLowerCase(), "text")
              .then(channel => {
                channel.overwritePermissions(initRole, {
                  READ_MESSAGES: true,
                  SEND_MESSAGES: true,
                  SEND_TTS_MESSAGES: true,
                  MANAGE_MESSAGES: true,
                  EMBED_LINKS: true,
                  ATTACH_FILES: true,
                  READ_MESSAGE_HISTORY: true,
                  MENTION_EVERYONE: true,
                  USE_EXTERNAL_EMOJIS: true,
                  ADD_REACTIONS: true
                });
                channel.overwritePermissions(allAccessRole, {
                  READ_MESSAGES: true,
                  SEND_MESSAGES: true,
                  SEND_TTS_MESSAGES: true,
                  MANAGE_MESSAGES: true,
                  EMBED_LINKS: true,
                  ATTACH_FILES: true,
                  READ_MESSAGE_HISTORY: true,
                  MENTION_EVERYONE: true,
                  USE_EXTERNAL_EMOJIS: true,
                  ADD_REACTIONS: true
                });
                channel.send("Channel was successfully created!");
                channel.overwritePermissions(botTestingGuild.defaultRole, {
                  READ_MESSAGES: false,
                  SEND_MESSAGES: false,
                  SEND_TTS_MESSAGES: false,
                  MANAGE_MESSAGES: false,
                  EMBED_LINKS: false,
                  ATTACH_FILES: false,
                  READ_MESSAGE_HISTORY: false,
                  MENTION_EVERYONE: false,
                  USE_EXTERNAL_EMOJIS: false,
                  ADD_REACTIONS: false
                });
              });
          }
        }
    }
  }
});

client.on('guildMemberAdd', m => {
  if (m.guild.id == "338028357058822145") { // Checks if member is joining Bot Testing
    if (m.user.bot == false) {
      m.addRole("338028455419445249");
      botTestingGuild.defaultChannel.send("Welcome to the Bot Testing server " + m.displayName + "! You have successfully been added to the Human role!");
    } else {
      m.addRole("338028497278861333");
      botTestingGuild.defaultChannel.send("Bot Testing welcomes " + m.displayName + " to our growing list of bots!");
    }
  }
});

client.login(config.TOKEN);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
