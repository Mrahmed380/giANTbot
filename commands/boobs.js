const Discord = require('discord.js');
const boobs = require('../data/boobs.json');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if(!message.channel.nsfw) return message.reply("NSFW is not enabled in this channel");
    const { body } = await superagent
    .get("https://cdn.imagefap.com/images/full/44/765/765304600.jpg?end=1590418224&secure=04c2c3ec08e3c0d677db4");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`take some boobies`)
    .setImage(body.url) 
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