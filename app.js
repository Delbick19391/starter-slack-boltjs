const mineflayer = require('mineflayer');
function createBot()
{
  let bot = mineflayer.createBot({
    host: '46.4.94.213',
    username: "SlimeShield_BOT",
    port: 38302,
    version: "1.18.2"
        })
        
        bot.on('error', (err) => console.log(err))
        bot.on('end', createBot)
    
        bot.once('spawn', () =>{
            bot.chat("/login dk19kaZo3mA")
        })
    
    }
    createBot()

