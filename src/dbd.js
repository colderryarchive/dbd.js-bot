require("./Utils/Client");
const { client } = require("./Utils/Client");
const fs = require("fs");
const glob = require('glob')
const path = require("path")

client.onMessage()

const commands = glob.sync("./src/Commands/**/**/*.js");

for (const files of commands) {

    const command = require(path.resolve(files))
    client.command({
      name: command.name,
      aliases: command.aliases,
      code: command.code,
    })

}
