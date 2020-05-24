const Discord = require('discord.js');
const boobs = require('../data/boobs.json');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if(!message.channel.nsfw) return message.reply("NSFW is not enabled in this channel");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`take some boobies`)
    .setImage(`${boobs[Math.floor(Math.random() * boobs.length)]}`) 
    .setFooter(`© giANTbot by ${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'boobs',
    description: 'what do you think this is?',
    usage: 'boobs'
  };