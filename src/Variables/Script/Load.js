module.exports = function(bot) {

  bot.variables(require("../Prefix.js"));
  bot.variables(require("../Economy.js"));

  console.log("Variable loaded")
};
