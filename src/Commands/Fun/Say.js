module.exports = {
  name: "say",
  code: 
  `
  $title[$userTag]
  $description[**Said:** \`$message\`]
  $color[BLUE]
  $onlyIf[$message!=;{description: **Give a text to say**!} {color: #F65B5B}]
  $cooldown[10s;
  Command is on a \`%time%\` cooldown!
  ]
  `
}
