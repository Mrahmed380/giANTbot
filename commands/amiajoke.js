const Discord = require('discord.js');
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
  let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
  let link = `https://api.alexflipnote.dev/amiajoke?image=${avatar}`
  const embed = new Discord.MessageEmbed()
  .setColor("#ff9900")
  .setImage(link) 
  .setFooter(`© giANTbot by ${customisation.ownername}`);
  message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'amiajoke',
    description: 'Am I A Joke to You?',
    usage: 'amiajoke (w or w/o @mention)'
  };
   