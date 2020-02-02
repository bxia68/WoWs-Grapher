console.log("Starting up");
const Discord = require('discord.js');
const client = new Discord.Client();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();

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
  if (args[0] == 'wg') {
    console.log("Trying to acces WG API")
    request.open('GET', 'https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=2162639654e42bd90a76343ad68b3c23&nation=USA&ship_id=3666786288');
    request.onreadystatechange = function() {
      console.log(this.status);
      if (this.status == 200) {
        var apidata = JSON.parse(this.responseText);
        m.channel.send(apidata.status);
        var metaa = apidata.meta;
        m.channel.send(metaa.count);
        m.channel.send(metaa.limit);
      }
    }
    request.send();
  }
}

client.login('ping me');
