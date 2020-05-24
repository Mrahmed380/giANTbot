const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async (bot, message, args) => {
    let replies = [
        'Robin',
        'Jorn',
        'Joeri',
        'Jeffrey',
        'Gian',
        'Steven',
        'Joeri',
        'Robin',
        'Robin',
        'Robin',
        'Robin',
        'Robin'
    ];

    let result = Math.floor((Math.random() * replies.length));
    let question = "Who is gay?";

    let embed = new Discord.MessageEmbed()
    .setTitle("Who is gay?")
    .setColor("#AA9900")
    .addField("Q:", question)
    .addField("A:", replies[result])
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
  