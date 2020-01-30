console.log("Starting up");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in!`);
});

client.on('message', (m) => {
  var content = m.content;
  if (content.startsWith("-")) {
    content = content.replace("-","")
    command(content.split(" "), m);
  }
});

function command(args, m) {
  m.channel.send(args.length);
  for (i=0;i<args.length;i++) {
    m.channel.send(args[i]);
  }
}

client.login('NjcyMjU2ODg0MTc4Mjg4NjQ4.XjJaHw.IabX1HBSPniVrYMq673ROwQDrCc');
