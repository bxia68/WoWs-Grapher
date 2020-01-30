console.log("Starting up");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong');
  }
});

client.login('NjcyMjU2ODg0MTc4Mjg4NjQ4.XjJaHw.IabX1HBSPniVrYMq673ROwQDrCc');
