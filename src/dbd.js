const dbd = require("dbd.js");

const { token } = require("./modules/config.json");
 
const bot = new dbd.Bot({
  mobile: false,
  token: token, 
  prefix: ["$getServerVar[prefix]"]
});

bot.loadCommands(`./src/Commands/`);

require("./Variables/Script/Load")(bot);
 
bot.onMessage();
