const { Message, Client, MessageEmbed } = require("discord.js");


module.exports = {
    name: "unbanall",
    aliases: ['ub'],
    category: 'mod',
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
     if (!message.member.permissions.has("BAN_MEMBERS")) {
        message.reply("You don't have the permissions to unban all");
         return;
     }
        message.guild.bans.fetch().then((bans) => {
            if (bans.size == 0) {
              {
                const embed = new MessageEmbed()
                  .setDescription(`<:xross:1170036290511700008> ! There are no banned users.`)
                  .setColor("ff0000");
                message.reply({embeds: [embed]}).then(m => {
                    setTimeout(() => {
                      m.delete().catch(() => {});
                    }, 10);
                  });
            
              }
            } else {
              bans.forEach((ban) => {
                message.guild.members.unban(ban.user.id);
                const sai = new MessageEmbed()
                  .setDescription(`<:tixk:1170038492819099768> ** Unbaning all **`)
                  .setColor("ff0000");
                message.reply({embeds: [sai]}).then(m => {
                    setTimeout(() => {
                      m.delete().catch(() => {});
                    }, 10);
                  });
                
              });
      
            }})}}