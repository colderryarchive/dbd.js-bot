const dbd = require("dbd.js")

const { token } = require("./modules/config.json")

const bot = new dbd.Bot({
  mobile: false, 
  token: token, 
  prefix: ["d!"] 
})
 
bot.onMessage() 
bot.loadCommands(`./src/commands/`)
