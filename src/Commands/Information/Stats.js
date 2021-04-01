module.exports = {
  name: "stats",
  code: 
  `
  $title[Stats]
  $color[BLUE]
  $thumbnail[$replaceText[$userAvatar[$findUser[823989416309293077]];size=2048;size=1024]]
  $description[> Hina is a open source discord bot made with dbd.js wrapper.]
  $addField[Develoer; <@!538627730921619486>]
  $addField[Uptime; \`\`\`$uptime\`\`\`]
  $addField[Users; \`\`\`$membersCount\`\`\`;yes]
  $addField[Servers; \`\`\`$serverCount\`\`\`;yes]
  $cooldown[10s;
  Command is on a \`%time%\` cooldown!
  ]
  `
}
