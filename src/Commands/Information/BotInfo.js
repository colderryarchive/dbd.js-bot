module.exports = {
  name: "botinfo",
  aliases: ["info"],
  code: 
  `
  $thumbnail[$replaceText[$userAvatar[$findUser[823989416309293077]];size=2048;size=1024]]
  $color[#48eaf8]
  $addField[Uptime;\`\`\`$uptime\`\`\`;no]
  $addField[Memory;$ram MB;yes]
  $addField[Cpu;$cpu%;yes]
  $addField[Channels;$channelCount;yes]
  $addField[Users;$membersCount;yes]
  $addField[Servers;$serverCount;yes]
  $addField[Dbd.js Version;$packageVersion]
  $addField[Created At;$formatDate[$creationDate[$findUser[823989416309293077]];ddd, MMM Do YYYY LT]
  $addField[Name;Hina]
  `
}
