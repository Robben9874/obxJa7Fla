const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('======================================')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=======================================')

});
let bane = JSON.parse(fs.readFileSync("./alpha.json", "utf8"));
let banse = new Set();
client.on('guildBanAdd', function(guild) {
  guild.fetchAuditLogs().then(logs => {
    const ser = logs.entries.first().executor;
    if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
      bans: 2
    }
    let boner = bane[ser.id+guild.id]
banse.add(ser.id)
boner.bans = Math.floor(boner.bans+1)


setTimeout(() => {
  boner.bans = 2
  banse.delete(ser.id)
},8000)

if(boner.bans > 2) {
  let roles = guild.members.get(ser.id).roles.array()
guild.members.get(ser.id).removeRoles(roles)
}

    })
    fs.writeFile('./alpha.json', JSON.stringify(bane), (err) => {
if (err) console.error(err);
})

})

client.login(process.env.BOT_TOKEN); 
