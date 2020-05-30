const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async (bot, message, args) => {

  let user = message.guild.members.cache.random();

  let question = "Who is gay?";

  let embed = new Discord.MessageEmbed()
  .setColor("#AA9900")
  .addField("Q:", question)
  .addField("A:", user.displayName)
  .setFooter(`© giANTbot by ${customisation.ownername}`);

  message.channel.send({embed});

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'whosgay',
  description: 'Ask the bot who is gay',
  usage: 'whosgay'
};