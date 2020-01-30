console.log("Starting up");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjcyMjU2ODg0MTc4Mjg4NjQ4.XjJReg.rH7gNOJuGjUeqA0id67DtqkjN7U');
//dddddd
