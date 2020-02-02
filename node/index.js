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
    request.open('GET', 'https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=2162639654e42bd90a76343ad68b3c23&nation=USA&ship_id=4074682352');
    request.onreadystatechange = function() {
      console.log(this.status);
      if (this.status == 200 && this.readyState == 4) {
        var apidata = JSON.parse(this.responseText);
        m.channel.send("Status: " + apidata.status);
        var api = JSON.parse('{"description":"The world\'s largest light cruiser. She carried 152 mm dual-purpose artillery as her main battery, supplemented by a great number of automatic 76 mm guns. She had the most powerful AA defense among ships of her type.","price_gold":0,"ship_id_str":"PASC210","has_demo_profile":false,"images":{"small":"https:\/\/glossary-wows-global.gcdn.co\/icons\/\/vehicle\/small\/PASC210_9458d9cdb708b6e713ccd2e0ddc0b51381ddf3957c9c265f22e7af352ecac785.png","large":"https:\/\/glossary-wows-global.gcdn.co\/icons\/\/vehicle\/large\/PASC210_213441d204a03dc87729c2bd1d73efcf3af1ccafb658b1da678eabe3b990dd01.png","medium":"https:\/\/glossary-wows-global.gcdn.co\/icons\/\/vehicle\/medium\/PASC210_f6f8a7492e7a6c7a78d7e0d181b2e8b0bf9845b8d394f7795f320e0405e5e5d1.png","contour":"https:\/\/glossary-wows-global.gcdn.co\/icons\/\/vehicle\/contour\/PASC210_7eb55fe77bdc957ed4292c07666623dacd1c2468ec2390a06e193a1e376c98ae.png"},"modules":{"engine":[3345854448],"torpedo_bomber":[],"fighter":[],"hull":[3347853296],"artillery":[3347034096],"torpedoes":[],"fire_control":[3346444272],"flight_control":[],"dive_bomber":[]},"modules_tree":{"3346444272":{"name":"Mk10 mod. 1","next_modules":null,"is_default":true,"price_xp":0,"price_credit":2100000,"next_ships":null,"module_id":3346444272,"type":"Suo","module_id_str":"PAUS904"},"3345854448":{"name":"Propulsion: 120,000 hp","next_modules":null,"is_default":true,"price_xp":0,"price_credit":1600000,"next_ships":null,"module_id":3345854448,"type":"Engine","module_id_str":"PAUE905"},"3347034096":{"name":"152 mm\/47 Mk16","next_modules":null,"is_default":true,"price_xp":0,"price_credit":2000000,"next_ships":null,"module_id":3347034096,"type":"Artillery","module_id_str":"PAUA904"},"3347853296":{"name":"Worcester (A)","next_modules":null,"is_default":true,"price_xp":0,"price_credit":2600000,"next_ships":null,"module_id":3347853296,"type":"Hull","module_id_str":"PAUH903"}},"nation":"usa","is_premium":false,"ship_id":4074682352,"price_credit":19900000,"default_profile":{"engine":{"engine_id_str":"PAUE905","max_speed":33.0,"engine_id":3345854448},"torpedo_bomber":null,"anti_aircraft":{"slots":{"0":{"distance":0.1,"avg_damage":228,"caliber":76,"name":"76.2 mm\/50 Mk33","guns":11},"1":{"distance":0.1,"avg_damage":39,"caliber":76,"name":"76.2 mm\/50 Mk34","guns":2},"2":{"distance":0.1,"avg_damage":73,"caliber":20,"name":"20 mm Oerlikon Mk20","guns":12},"3":{"distance":0.2,"avg_damage":121,"caliber":152,"name":"152 mm\/47 Mk16","guns":6}},"defense":96},"mobility":{"rudder_time":8.1,"total":55,"turning_radius":740,"max_speed":33.0},"hull":{"hull_id":3347853296,"hull_id_str":"PAUH903","torpedoes_barrels":0,"anti_aircraft_barrels":31,"range":{"max":127,"min":6},"health":45400,"planes_amount":0,"artillery_barrels":6,"atba_barrels":0},"atbas":null,"artillery":{"max_dispersion":148,"shells":{"AP":{"burn_probability":null,"bullet_speed":762,"name":"152 mm AP 130 lb Mk35","damage":3200,"bullet_mass":59,"type":"AP"},"HE":{"burn_probability":12.0,"bullet_speed":812,"name":"152 mm HE Mk39","damage":2200,"bullet_mass":48,"type":"HE"}},"shot_delay":4.0,"rotation_time":7.2,"distance":16.7,"artillery_id":3347034096,"artillery_id_str":"PAUA904","slots":{"0":{"barrels":2,"name":"152 mm\/47 Mk16","guns":6}},"gun_rate":13.0},"torpedoes":null,"fighters":null,"fire_control":{"fire_control_id":3346444272,"distance":16.7,"distance_increase":0,"fire_control_id_str":"PAUS904"},"weaponry":{"anti_aircraft":96,"aircraft":0,"artillery":57,"torpedoes":0},"battle_level_range_max":10,"battle_level_range_min":10,"flight_control":null,"concealment":{"total":53,"detect_distance_by_plane":8.5,"detect_distance_by_ship":12.4},"armour":{"casemate":{"max":-1,"min":-1},"flood_prob":19,"deck":{"max":-1,"min":-1},"flood_damage":25,"range":{"max":127,"min":6},"health":45400,"extremities":{"max":-1,"min":-1},"total":63,"citadel":{"max":-1,"min":-1}},"dive_bomber":null},"upgrades":[4260548528,4268937136,4262645680,4278374320,4265791408,4269985712,4267888560,4282568624,4266839984,4271034288,4275228592,4257402800,4259499952,4273131440,4287811504,4272082864,4261597104,4280471472],"tier":10,"next_ships":{},"mod_slots":6,"type":"Cruiser","is_special":false,"name":"Worcester"}');
        m.channel.send(api.nation);
        m.channel.send(api.type);
        m.channel.send(api.name);
        m.channel.send(api.description);
      }
    }
    request.send();
  }
}

client.login('kek');
