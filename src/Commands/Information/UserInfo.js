
module.exports = {
  name: "userinfo",
  aliases: ["ui", "whois"],
  code:
    `
  $author[$userTag[$findUser[$message]]]
  $color[BLUE]
  $thumbnail[$replaceText[$userAvatar[$findUser[$message]];size=2048;size=1024]]
  $addField[Highest Role; <@&$highestRole[$findUser[$message]]>]
  $addField[Joined At; $formatDate[$memberJoinedDate[$findUser[$message]];ddd, MMM Do YYYY LT]]
  $addField[Created At; $formatDate[$creationDate[$findUser[$message]];ddd, MMM Do YYYY LT]]
  $addField[Discriminator;$discriminator[$findUser[$message]];yes]
  $addField[Nickname;$nickname[$findUser[$message]];yes]
  $addField[Badges: $getUserBadges[$findUser[$message]];** **]
  $cooldown[10s;
  Command is on a \`%time%\` cooldown!
  ]
  `
}
