
module.exports = {
  name: "serverinfo",
  aliases: ["si"],
  code: 
  `
  $title[Server Info]
  $color[BLUE]
  $addField[Security; $serverVerificationLevel]
  $addField[Created At; $formatDate[$creationDate[$guildID];LLLL]]
  $addField[Total Members; $membersCount]
  $addField[ID; $serverIDs[$guildID]]
  $addField[Region; $serverRegion;yes]
  $addField[Name; $serverName[$guildID];yes]
  `
}
