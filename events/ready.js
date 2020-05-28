const chalk = require('chalk');
const Discord = require("discord.js");
const activities = require('../data/activities.json');
const fs = require('fs');
module.exports = client => {

    const activities_list = [
        "Online and ready to serve",
        "/help",
        "discord.gg/SJthYce",
        "/invite"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.

    console.log(chalk.bgGreen.black(`Online and ready to serve.`));
    let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    client.guilds.cache.forEach((guild) => {
        if (!blacklist[guild.ownerID]) {
            return;
        } else {
            if (blacklist[guild.ownerID].state === true) {
                message.guild.leave(guild.id)
            }
        }
    })
};
