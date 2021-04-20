module.exports = {
  name: "daily",

  description: "Claim your daily cus why not?",

  aliases: [],

  usage: "$getServerVar[prefix]daily",

  category: "Economy",

  code: 
  `
  $title[Daily <:heart:833723389436493835>]
  $description[<@$authorID>, You have collected your daily!\n New Balance: \`$getGlobalUserVar[wallet]\` dollars]
  $color[#42dfb3]
  $setGlobalUserVar[wallet;$sum[$getGlobalUserVar[wallet];$random[250;1500]]]
  $cooldown[1d;{title: Error}{description: <@$authorID>, You already collected your daily.\nTry again in \`%time%\`}{color: #ff7165}]
  `
};
