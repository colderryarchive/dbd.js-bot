const dbd = require("dbd.js");

const { token, prefix } = require("../Modules/config.json")

const client = new dbd.Bot({
  token: token,
  prefix: prefix
})

module.exports = {
  client
}

