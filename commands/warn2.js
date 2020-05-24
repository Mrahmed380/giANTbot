const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
//const mysql = require('mysql');
//const file = require('../mysql.json');
const customisation = require('../customisation.json');
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async (client, message, args) => {

	// Nakijken als deze persoon wel toestemming heeft om dit te kunnen doen.
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

	// Nakijken als er een gebruiker is meegegeven.
    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

	// Nakijken als er een redenen is meegegeven.
    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

	// Nakijken als de bot perms heeft.
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

	// User ophalen.
    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

	// Redenen aan elkaar koppelen die met een spatie zijn gesplitst.
    var reason = args.slice(1).join(" ");

	// Nakijken als de user kan gevonden worden.
    if (!warnUser) return message.reply("Kan de gebruiker niet vinden.");

	// Nakijken als je geen staff waarschuwt.
    if (warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry je kan deze persoon niet waarschuwen.");

	// We gaan kijken als deze user nog geen warns heeft.
	// Heeft deze er geen dan maken we eentje aan met 0 waarschuwingen in het bestand.
    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

	// Toevoegen van een waarschuwing.
    warns[warnUser.id].warns++;

	// Document updaten.
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
        **Warning door:** ${message.author}
        **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[warnUser.id].warns);

	// Kanaal opzoeken.
    const channel = message.member.guild.channels.cache.get('KanaalID');

    if (!channel) return;

    channel.send(embed);

	// Als 3 waarschuwingen doe dan iets.
    if (warns[warnUser.id].warns == 3) {

        var mes = new Discord.MessageEmbed()
            .setDescription("PAS OP " + warnUser)
            .setColor("#ee0000")
            .addField("Bericht", "Nog één warn en je hebt een ban!!");

        message.channel.send(mes);

    } else if (warns[warnUser.id].warns == 4) {

        message.guild.member(warnUser).ban(reason);
        message.channel.send(`${warnUser} is verbannen door de bot wegens te veel warns`);

    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["smolyeet"],
  permLevel: 2
};

exports.help = {
  name: 'warn2',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn2 [mention] [reason]'
};
