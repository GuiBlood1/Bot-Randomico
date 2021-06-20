const discord = require('discord.js')
const bot = new discord.Client()
const token = '' // Digite aqui seu token do bot
bot.login(token)
const config = require('./package.json')
const prefix = "!"

bot.on('ready',()=>{
    console.log('Bot On')
})

bot.on('message', async message =>{
    if(message.author.bot)return
    if(message.channel.type === 'dm')return
    if (!message.content.startsWith(prefix)) return

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'sorteio'){
        Array.prototype.random = function () {
            return this[Math.floor((Math.random()*this.length))];
          }
        let escolhido = args.random()
        message.reply(`O sorteado foi ${escolhido}, parabéns.`)
    }
})