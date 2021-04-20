const dbd = require("dbd.js");

const { token } = require("./modules/config.json");
 
const bot = new dbd.Bot({
  mobile: false,
  token: token, 
  prefix: ["$getServerVar[prefix]"]
});

bot.loadCommands(`./src/commands/`);

require("./variables/Script/Load")(bot);
 
bot.onMessage();
