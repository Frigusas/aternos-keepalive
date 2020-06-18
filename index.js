//---------------------------------------------------------------------
// Glitch 24/7
// Required to let uptime robot waving our bot.
//---------------------------------------------------------------------

const express = require("express");
const http = require("http");

const app = express();

app.use(express.json());

app.get("/", (_, res) => res.send("hi"));
app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 224000);

// End of Glitch 24/7

const mineflayer = require("mineflayer");

const config = { 
  host: "servername.aternos.me", //mc.hypixel.net for example
  port: 25565, //server port (leave it as is unless you know what you're doing!)
  username: "your@email.com", //username only for cracked/offline mode servers, email for premium
  password: "password123", //only for premium
  version: false //version of the server (false = auto detect)
}

const bot = mineflayer.createBot({ //creates a new bot from the config above
  host: config.host, //imported from config
  port: config.version, //imported from config
  username: config.username, //imported from config
  password: config.password, //imported from config
  version: config.version //imported from config
});

console.log("Connecting...") //logs "Connecting..." into the console

bot.on("move", () => { //triggers when the bot moves

  bot.setControlState("jump", true); //continuously jumps
  setTimeout(() => { //sets a delay
    bot.setControlState("jump", false); //stops jumping
  }, 1000); //delay time

  setTimeout(() => { //sets a delay
    bot.setControlState("forward", true); //continuously walks forward
    setTimeout(() => { //sets a delay
      bot.setControlState("forward", false); //stops walking forward
    }, 500); //delay time
  }, 1000); //delay time

  setTimeout(() => { //sets a delay
    bot.setControlState("back", true); //continuously walks backwards
    setTimeout(() => { //sets a delay
      bot.setControlState("back", false); //stops walking backwards
    }, 500); //delay time
  }, 2000); //delay time

  setTimeout(() => { //sets a delay
    bot.setControlState("right", true); //continuously walks right
    setTimeout(() => { //sets a delay
      bot.setControlState("right", false); //stops walking right
    }, 2000); //delay time
  }, 500); //delay time

  setTimeout(() => { //sets a delay
    bot.setControlState("left", true); //continuously walks lefz
    setTimeout(() => { //sets a delay
      bot.setControlState("left", false); //stops walking left
    }, 2000); //delay time
  }, 500); //delay time
});

bot.on("error", err => console.log(err)); //triggers when there's an error and logs it into the console

bot.on("login", () => { //triggers when the bot joins the server
console.log(bot.username + " is online") //logs the username of the bot when the bot is online
});
bot.on("end", () => { //triggers when the bot leaves/gets kicked
console.log("The bot disconnected, reconnecting...") //says "The bot disconnected, reconnecting... in console
process.exit(0) //exits the process (glitch will make it go online automaticly)
});
