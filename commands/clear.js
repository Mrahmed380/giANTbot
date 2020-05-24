const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async (bot, message, args) => {

    // !clear aantal
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You dont have permission for this command!");

    if (!args[0]) return message.reply("Specify the number of messages");

    if (Number.isInteger(parseInt(args[0]))) {

        var aantal = parseInt(args[0]) + 1;

        message.channel.bulkDelete(aantal).then(() => { 

            if (args[0] == 0) {

                message.reply(`Cant delete 0 messages.`).then(msg => msg.delete({timeout: 3000}));
            
            } else if (args[0] == 1) {
            
                message.reply(`Deleted 1 message!`).then(msg => msg.delete({timeout: 3000}));
            
            } else {
            
                message.reply(`Deleted ${args[0]} messages!`).then(msg => msg.delete({timeout: 3000}));
            
            }

        });

    } else {
        return message.reply("Specify a number!");
    }

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: 'clear',
    description: 'Clear messages',
    usage: 'clear #'
  };
  