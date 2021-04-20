module.exports = {
  name: "balance",

  description: "Check your economy balance.",

  aliases: ["bal", "cash"],

  usage: "$getServerVar[prefix]balance",

  category: "Economy",

  code: 
  `
  $title[$username[$authorID]'s balance]
  $thumbnail[$replaceText[$userAvatar[$authorID];size=2048;size=1024]]
  $color[#65daff]
  $addField[Bank;$getGlobalUserVar[bank;$authorID];no]
  $addField[Wallet;$getGlobalUserVar[wallet;$authorID];no]
  $cooldown[5s;
  {description: Command is currently on \`%time%\` cooldown!}
  {color: #ff7165}]
  `
}
