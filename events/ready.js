const client = require("../index"),
  db = require("../core/db.js"),
  { bot } = require("../core/settings.js"),
  chalk = require("chalk");

function logAscii(bot, mode) {
  const x = `\n{!} :: Logged in as ${bot}\n{!} :: Leaked by Venom & snoww.\n\n`;
  console.log(`${x}`);
}
module.exports = async (client) => {
  client.once("ready", async () => {
    client.user.setPresence({
      activities: [
        {
          name: `.help - snoww & Venom`,
          type: `LISTENING`,
        },
      ],
      status: `idle`,
    });
    logAscii(client.user.tag);
  });
};
