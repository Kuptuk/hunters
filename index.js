const Discord = require("discord.js");
const robot = new Discord.Client();
const chalk = require('chalk');
const prefix = "//"
const ms = require("ms");
const minutes = require("minutes");
const moment = require('moment');
const fs = require('fs');
const config = require('./config2.json');

const db = require('quick.db')


robot.on('ready', () => {
    let guild = robot.guilds.get("481777915596636170")
   robot.user.setPresence({
        game: {
            name: `Пользователей: ${guild.members.size}`,
             type:"PLAYING"
        }
    });

})
robot.on('message', message => {
if (message.channel.type === 'dm') return;
// rest of the code
})


const exampleEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('')
    .setAuthor('Hunters - новости','https://images-ext-2.discordapp.net/external/2yraxW7ItdqJNzKv0Rjh5MC8uqujz786zHk6GfUsACY/https/media.discordapp.net/attachments/511169984790134785/522324773447925760/Hunters_Happy_New_Year.jpg')
    .setThumbnail('')
    .addField('**Новогоднее обновление запланировано на 16.12.2018**','**Сообщение отправлено администрацией сервера**')

robot.on('message', msg => {


let answers = ['#FF0000','#C71585','#FF4500','#FFFF00','#4B0082','#00FF00','#00FFFF','#000080','#000000','#00FF00','#006400','#1E90FF','#FF4500','#FFFF00','#800080']; //массив ответов
let rand = Math.floor(Math.random()*answers.length);


if(msg.content.startsWith(prefix + 'invite')){
const exampleEmbed = new Discord.RichEmbed()
    .setColor(answers[rand])
    .setTitle('')
    .setThumbnail('')
    .addField('**Пригласительная ссылка**','**Приглашайте друзей на сервер по ссылке — https://discord.gg/7tF5E5g **')

   .setThumbnail('https://cdn.discordapp.com/attachments/484745571903471628/523192065270480913/2.png')
    
    msg.channel.send(exampleEmbed)
}


});



robot.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift();
    if (command === 'say') {
        let channel;
        if (message.mentions.channels.size < 1) channel = message.channel;
        else {
            channel = message.mentions.channels.first();
            args.shift();
        }
        message.delete()
             const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor('#ffc13b')
        channel.send(embed);
    }
});
robot.on('message', msg => {
if(msg.content.startsWith(prefix + 'unmute')) {
let user = msg.mentions.members.first();
if(msg.member.permissions.has('MANAGE_ROLES')){
let muteuser = msg.mentions.members.first();
let muterole = msg.guild.roles.find('name',"Muted");
muteuser.removeRole(muterole);
msg.reply(`С пользователя ${user} был снят мут!`)
console.log(`С пользователя ${user} был снят мут! ` )
} else {
  msg.reply(`Вы не имеете право снимать мут!`);
    console.log(`Пользователь не имеет право снимать мут!`);
}

}
});
robot.on('message', msg => {
 if (msg.content === '//server-info') {
let answers = ['#FF0000','#C71585','#FF4500','#FFFF00','#4B0082','#00FF00','#00FFFF','#000080','#000000','#00FF00','#006400','#1E90FF','#FF4500','#FFFF00','#800080']; //массив ответов
let rand = Math.floor(Math.random()*answers.length);

const exampleEmbed = new Discord.RichEmbed()
    .setColor(answers[rand])
    .setAuthor(`Информация сервера ${msg.guild.name}`)
    .addField('Основатель', '• Tigran662\n• MrLeonardos', true)

     .addField('Администрация','• <@295468625240915968>\n •<@465036445984358402>\n •<@414119169504575509>', true)
     .addField(' Создан', moment(msg.guild.createdAt).format('HH:MM DD-MM-YY',true))
     .addField('Платные роли','<@&507942537453895705> - 10.000\n <@&523799456097894411> - 15.000\n <@&482189882580664336> - 50.000\n <@&482506949141856256> - 70.000\n <@&491578284144984089> - 100.000', true)
          .addField('Количество ролей', `${msg.guild.roles.size}`,true)
    .addBlankField()
    .addField(' Участники', `${msg.guild.members.size} человек(а)`, true)
    .setImage()

msg.channel.send(exampleEmbed);
}
if(msg.content === '//help'){
  let answers = ['#FF0000','#C71585','#FF4500','#FFFF00','#4B0082','#00FF00','#00FFFF','#000080','#000000','#00FF00','#006400','#1E90FF','#FF4500','#FFFF00','#800080']; //массив ответов
let rand = Math.floor(Math.random()*answers.length);
const exampleEmbed = new Discord.RichEmbed()

.setColor(answers[rand])
    .setAuthor('Комманды')
    .setDescription(`Список доступных команд сервера ${msg.guild.name}`)
    .addField('//server-info','Информация о сервере', true)
 
     .addField(`//invite`,'Пригласительная ссылка на сервер!', true)
     .addField(`//user-info (ник)`,'Получить информацию о пользователе!', true)
     .addBlankField()
     .addField(`**Экономика**`,`Комманды экономики сервера`)
     .addField(`//daily`,`Получить ежедневные коины`)
     .addField(`//coins`,`Просмотреть свой баланс`, true)
         .addField('Скоро...','Скоро будет ещё больше интересных комманд!')
    .setImage();
    msg.channel.send(exampleEmbed);
}
if(msg.content === '//admincmd'){
  if(msg.member.permissions.has('ADMINISTRATOR')){
  let answers = ['#FF0000','#C71585','#FF4500','#FFFF00','#4B0082','#00FF00','#00FFFF','#000080','#000000','#00FF00','#006400','#1E90FF','#FF4500','#FFFF00','#800080']; //массив ответов
let rand = Math.floor(Math.random()*answers.length);
const exampleEmbed = new Discord.RichEmbed()

.setColor(answers[rand])
    .setAuthor('Комманды администрации',`${msg.author.displayAvatarURL}`)
    .setDescription(`Список доступных команд для администраторов сервера ${msg.guild.name}`)
    .addField('//say','Отправить сообщение на канал,используется: **//say #канал Текст**')
    .addField(`//usend`,`Отправить личное сообщение игроку,используется :**//usend @Ник Текст**`)
    .addField('//kick','Кикнуть игрока,используется: **//kick @user**')
 
     .addField(`//ban`,'Забанить игрока,используется: **//ban @user**')
.addField('//giveall','Выдать всем роль Тех-работы')
.addField('//removeall','Забрать у всех роль Тех-работы')
         .addField('Скоро...','Скоро будет ещё больше интересных комманд!')

         .setThumbnail(msg.guild.iconURL)
    .setImage();
    msg.channel.send(exampleEmbed);
}
}
if(msg.content === '//modercmd'){
  if(msg.member.permissions.has('MANAGE_GUILD')){
  let answers = ['#FF0000','#C71585','#FF4500','#FFFF00','#4B0082','#00FF00','#00FFFF','#000080','#000000','#00FF00','#006400','#1E90FF','#FF4500','#FFFF00','#800080']; //массив ответов
let rand = Math.floor(Math.random()*answers.length);
const exampleEmbed = new Discord.RichEmbed()

.setColor(answers[rand])
    .setAuthor('Комманды модераторов',`${msg.author.displayAvatarURL}`)
    .setDescription(`Список доступных команд для модераторов сервера ${msg.guild.name}`)
    .addField('//mute','Отправить сообщение на канал,используется: **//mute @user time(10s,10m,10h)**')
    .addField(`//unmute`,`Отправить личное сообщение игроку,используется :**//unmute @user**`)

         .addField('Скоро...','Скоро будет ещё больше интересных комманд!')
         .setThumbnail(msg.guild.iconURL)
    .setImage();
    msg.channel.send(exampleEmbed);
}
}
});

robot.on('message',msg =>{

  
 if (msg.content.startsWith("//usend")) {
  if(msg.member.permissions.has('ADMINISTRATOR')){
let args = msg.content.split(" ").slice(1);
      let sendu = msg.mentions.users.first();
      let mesg = args.join(" ");
      try {
        sendu.send(mesg)
      } catch (e) {
        return msg.channel.send(`\`\`\`${e.stack}\`\`\``)
      }
    }
}
});
robot.on('message',msg =>{
if (msg.content.startsWith("//donate")) {
  let answers = ['#FF0000','#C71585','#FF4500','#FFFF00','#4B0082','#00FF00','#00FFFF','#000080','#000000','#00FF00','#006400','#1E90FF','#FF4500','#FFFF00','#800080']; //массив ответов
let rand = Math.floor(Math.random()*answers.length);
let em = new Discord.RichEmbed()
.setTitle('Реквизиты для пожертвований')
.addField('<:WebM:561559501002768384> **WebMoney**','**Z101183426891**')
.addField('<:QiWi:561559491150348288> **Qiwi**','**+998915287885**')
msg.channel.send(em)
}
});






robot.on('message', msg => {


  // If the message content starts with "!kick"
  if (msg.content.startsWith(prefix + "kick")) {
      if(msg.member.permissions.has('KICK_MEMBERS')){
  // Ignore messages that aren't from a guild
  if (!msg.guild) return;
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = msg.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = msg.guild.member(user);
      // If the member is in the guild
      if (member) {

        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          msg.channel.send(`Вы кикнули ${user.tag} !`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          msg.channel.send('Я не могу кикнуть пользователя!');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        msg.channel.send('Этого пользователя не существует!');
      }
    // Otherwise, if no user was mentioned
    } else {
      msg.channel.send('Используется: //kick @Ник');
    }
  }
  }
});

robot.on('message', msg => {
  
  // Ignore messages that aren't from a guild
  if (!msg.guild) return;

  // If the message content starts with "!kick"
  if (msg.content.startsWith(prefix + 'ban')) {
    if(msg.member.permissions.has('BAN_MEMBERS')){
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = msg.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = msg.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.ban('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          msg.channel.send(`Вы забанили ${user.tag} !`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          msg.channel.send('Я не могу забанить пользователя!');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        msg.channel.send('Этого пользователя не существует!');
      }
    // Otherwise, if no user was mentioned
    } else {
      msg.channel.send('Используется: //ban @Ник');
    }
  }
  }
});



let invites = {};
let serverID = '481777915596636170';

robot.on('ready', () => setTimeout(() => {
  robot.guilds.get(serverID).fetchInvites().then(guildInvites => {
    invites = guildInvites;
  });
}, 1000));

robot.on('guildMemberAdd', member => {

  if (!invites) return;
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites;
    invites = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const exampleEmbed = new Discord.RichEmbed()
      .setColor('#0099ff')
      .setTitle('Добро пожаловать на сервер Hunters!')
      .setAuthor(`${member.user.username}`,`${member.user.avatarURL}`)
      .setDescription(`Вас пригласил ${(invite.inviter) ? invite.inviter : 'Не удалось определить пригласившего'}`)
    robot.guilds.get(serverID).channels.get('561924294410502164').send(exampleEmbed);
  });
});
 robot.on("message", msg => {
let answers = ['#FF0000','#C71585','#FF4500','#FFFF00','#4B0082','#00FF00','#00FFFF','#000080','#000000','#00FF00','#006400','#1E90FF','#FF4500','#FFFF00','#800080']; //массив ответов
let rand = Math.floor(Math.random()*answers.length);

  
    if (msg.content.startsWith(prefix + 'mute')) {
      if(msg.member.permissions.has('MANAGE_GUILD')){
      let muteuser = msg.mentions.members.first();
const exampleEmbeda = new Discord.RichEmbed()
    .setColor(answers[rand])
    .setAuthor('Вы не указали пользователя!','https://www.emoji.co.uk/files/twitter-emojis/symbols-twitter/11144-double-exclamation-mark.png')
    .addField(`Используйте:`,`//mute @user time(10s,10m,10h)`)
      if(!muteuser) return msg.channel.send(exampleEmbeda);


let muterole = msg.guild.roles.find('name',"Muted");
      if(!muterole) return msg.reply('Мы не может замутить игрока!Не найдена роль "Muted"');
      let params = msg.content.split(" ").slice(1);
      let time = params[1];

const exampleEmbedb = new Discord.RichEmbed()
    .setColor(answers[rand])
    .setAuthor('Вы не указали время мута!','https://www.emoji.co.uk/files/twitter-emojis/symbols-twitter/11144-double-exclamation-mark.png')
    .addField(`Используйте:`,`//mute @user time(10s,10m,10h)`)
    
      if(!time) return msg.channel.send(exampleEmbedb);
      muteuser.addRole(muterole);


const exampleEmbedc = new Discord.RichEmbed()
    .setColor(answers[rand])
    .setAuthor('Пользователю был выдан мут','https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/White_check_mark_in_dark_green_rounded_square.svg/1024px-White_check_mark_in_dark_green_rounded_square.svg.png')
    .setThumbnail('https://cdn.discordapp.com/attachments/484745571903471628/523392935740440578/-_.png')
    .addField(`Модератором ${msg.author.username}`,`Пользователь ${muteuser.user.tag} был заткнут на ** ${ms(ms(time), {long: true})}**`)
    msg.channel.send(exampleEmbedc);

      setTimeout(function(){
        muteuser.removeRole(muterole);
        msg.channel.send(`С пользователя ${muteuser.user.tag} был снят мут!`)

      }, ms(time));
    }
  }
});

robot.on('message', msg => {


  // If the message content starts with "!kick"
  if (msg.content.startsWith(prefix + "giveall")) {
      if(msg.member.permissions.has('ADMINISTRATOR')){
let role = msg.guild.roles.find('name', 'Тех-работы');

if (!role) return msg.channel.send(`**${msg.author.username}**, роль не найдена`);

msg.guild.members.filter(m => !m.user.bot).map(async member => await member.addRole(role));
msg.channel.send(`**${msg.author.username}**, роль **${role.name}** была выдана всем!`);


      }
    }
  });
robot.on('message', msg => {


  // If the message content starts with "!kick"
  if (msg.content.startsWith(prefix + "removeall")) {
      if(msg.member.permissions.has('ADMINISTRATOR')){
let role = msg.guild.roles.find('name', 'Тех-работы');

if (!role) return msg.channel.send(`**${msg.author.username}**, роль не найдена`);

msg.guild.members.filter(m => !m.user.bot).map(async member => await member.removeRole(role));
msg.channel.send(`**${msg.author.username}**, роль **${role.name}** была отобрана у всех!`);


      }
    }

    if (msg.content.startsWith(prefix + "user-info")){
let answers = ['#FF0000','#C71585','#FF4500','#FFFF00','#4B0082','#00FF00','#00FFFF','#000080','#000000','#00FF00','#006400','#1E90FF','#FF4500','#FFFF00','#800080']; //массив ответов
let rand = Math.floor(Math.random()*answers.length);

let infouser = msg.mentions.members.first();
if(!infouser) return msg.channel.send("Вы не указали пользователя!")
const exampleEmbed = new Discord.RichEmbed()
    .setColor(answers[rand])
    .setAuthor(`Информация о пользователе ${infouser.user.username}`,`${infouser.user.displayAvatarURL}`)
    .addField(`Никнейм:`,`${infouser.user.username}`,true)

    if (infouser.presence.status === 'idle') {exampleEmbed.addField('Статус:', 'Нет на месте', true)}
      if (infouser.presence.status === 'online') {exampleEmbed.addField('Статус:','Онлайн :white_check_mark:  ', true)}
        if (infouser.presence.status === 'offline') {exampleEmbed.addField('Статус:','Оффлайн :white_circle:', true)}
          if (infouser.presence.status === 'dnd') {exampleEmbed.addField('Статус:','Не беспокоить :red_circle: ', true)}
if(infouser.roles.has('507942537453895705')){exampleEmbed.addField(`Привелегия`,`<@&507942537453895705>`,true)}
if(infouser.roles.has('523799456097894411')){exampleEmbed.addField(`Привелегия`,`<@&523799456097894411>`,true)}
  if(infouser.roles.has('482189882580664336')){exampleEmbed.addField(`Привелегия`,`<@&482189882580664336>`,true)}
if(infouser.roles.has('482506949141856256')){exampleEmbed.addField(`Привелегия`,`<@&482506949141856256>`,true)}
    if(infouser.roles.has('491578284144984089')){exampleEmbed.addField(`Привелегия`,`<@&491578284144984089>`,true)}
            
    exampleEmbed.addField(`Роли[${infouser.roles.size - 1}]`, `**   **${infouser.roles.map(r => `<@&${r.id}>`).slice(1).join("  |  ")}`)
  exampleEmbed.addField(`Вошёл на сервер:`,`${infouser.joinedAt}`)
      msg.channel.send(exampleEmbed)
    }
   
  });

robot.on('message', message => {
if(message.content.startsWith(prefix + "update2")){
  const exampleEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Скоро...', `Скоро...`, true)
    .setThumbnail('https://media.discordapp.net/attachments/484745571903471628/523549596128116747/3.png?width=193&height=178')
    .setColor('RANDOM')
    message.channel.send(exampleEmbed)
}

});
robot.on('message', async message => {
  const args = message.content.slice(prefix.length).split(' ');
  if(message.content.startsWith(prefix + "warn")){

let wUser = message.guild.member(message.mentions.members.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("Вы не уазали пользователя!")
let reason = args.slice(2);


let warnEmbed = new Discord.RichEmbed()
.setAuthor(`Пользователю был выдан варн`, message.author.displayAvatarURL)
.setColor("RANDOM")
.addField("Выдан Пользователю:", ` ${wUser}`)
.addField("Выдан кем:", `**${message.author}**`)
.addField("Причина:", reason)

let warchannel = message.guild.channels.find('name', "администраторы")
if(!warchannel) return message.reply("Не могу найти канал!")

  warchannel.send(warnEmbed)

let wUserEmbed = new Discord.RichEmbed()
.setAuthor(`Вам был выдан варн`, message.author.displayAvatarURL)
.setColor("RANDOM")
.addField("Выдан кем:", `**${message.author}**`)
.addField("Причина:", reason)
.addField("Не нарушайте правила сервера!",`Комманда сервера Hunters`)
wUser.send(wUserEmbed)


}
if(message.content.startsWith(prefix + "clancreate")){

let clan = args[1]
if(!clan) return message.channel.send('Укажите название клана')
  let color = args[2]
  if(!color) return message.channel.send('Укажите цвет!')
let answers = ["#a1cc2b","#7cf7af","#ffde59","#88c5f7"]; //массив ответов
let rand = Math.floor(Math.random()*answers.length);


if(message.member.roles.some(r=>["Наблюдатель [Lvl 5]","Адепт  [Lvl 10]","Активный [Lvl 15]","Начинающий писатель [Lvl 20]","Оракул [Lvl 30]","Магистр [Lvl 40]","Мастер [Lvl 50]","Чернокнижник [Lvl 60]"].includes(r.name)) ) {
 message.guild.createRole({
        name: `[Клан] ${clan}`,
        color: color,
        position: message.guild.roles.find("name","[Clan Leader]").position -1
}).then(r =>{
 
 message.member.addRole(r)
     message.member.addRole(message.guild.roles.find("name","[Clan Leader]").id)
 let clanEmbed = new Discord.RichEmbed()

.setAuthor(`Клан успешно создан`, `https://banner2.kisspng.com/20180403/lxq/kisspng-check-mark-emoji-computer-icons-emoticon-clip-art-tick-5ac3fed4b9d0a9.8582330115227941967611.jpg`)
.addField(`Название: `, `${clan}`)
.addField(`Глава:`, `${message.author.username}`)
.setColor(`${answers[rand]}`)

 message.channel.send(clanEmbed)

})

} else {
  message.channel.send('Вы не можете создать клан!')
}
}


});
robot.on('message', message => {
  const money = require('discord-money');
        // Prefix
 
        // Example: Fetching Balance
        if (message.content.toUpperCase() === `${prefix}COINS`) {
  
            money.fetchBal(message.author.id).then((i) => { // money.fetchBal grabs the userID, finds it, and puts it into 'i'.
                
                message.channel.send({embed: {
                  color : 3447003,
                  description: `**Ваш баланс:** ${i.money} \n *Зарабатывайте <:coins:563357051053408286> за активность, и обменивайте их на роли* `,
                  author: {
                                name: `${message.author.username}`,
                                icon_url: `https://media.discordapp.net/attachments/484745571903471628/524252526451884043/2b9801_3b99d53b24c9413282ed9ba2c6cabeaa.png?width=269&height=269` 
                            }
                        }});
            })
 
 
        }
 
 
        // Example: Getting a daily reward
       if (message.content.toUpperCase() === prefix + `DAILY`) {
               let answers = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1','1','1','1','1','1','1','1','1','1','2','2','2','2','2','2','2','3','3','3','3']; //массив ответов
               let rand = Math.floor(Math.random()*answers.length);
                if (money[message.author.username + message.guild.name] != moment().format('L')) {
                    money[message.author.username + message.guild.name] = moment().format('L')
                 
                    money.updateBal(message.author.id, 200).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
                        message.channel.send({embed: {
                            color: 3447003,
                            description: '**Вы получили 200 ежедневных <:coins:563357051053408286>! \nВы можете просмотреть свой баланс коммандой //balance **.',
                            author: {
                                name: `${message.author.username}`,
                                icon_url: `https://media.discordapp.net/attachments/484745571903471628/524252526451884043/2b9801_3b99d53b24c9413282ed9ba2c6cabeaa.png?width=269&height=269` 
                            }
                        }});
                        
                          if(answers[rand] === '1'){
                            money.updateBal(message.author.id, 500).then(i => {
message.channel.send('Вам выпал обычный сундук!')
})
}
                          if(answers[rand] === '2'){
                            money.updateBal(message.author.id, 1000).then(i => {
message.channel.send('Вам выпал редкий сундук!')

})
}
                          if(answers[rand] === '3'){
                            money.updateBal(message.author.id, 2000).then(i => {
message.channel.send('Вам выпал легендарный сундук!')
})
}
                    })
                } else {
                   return message.channel.send({embed: {
                        color: 3447003,
                        description: 'Вы уже получили свои ежедневные <:coins:563357051053408286> \`//balance`\. Подождите **' + moment().endOf('day').fromNow() + '**.', // When you got your daily already, this message will show up.
                        author: {
                            name: `${message.author.username}`,
                            icon_url: `https://media.discordapp.net/attachments/484745571903471628/524252526451884043/2b9801_3b99d53b24c9413282ed9ba2c6cabeaa.png?width=269&height=269`
                        }
                    }});
                }
                
            
if(message.content.startsWith(prefix + "inf")) {

money.updateBal('344422627244376065', +7500)

 }

 if (message.content === `//buy-premium`) {

money.fetchBal(message.author.id).then((i) => {
if (i.money >= 15000){
  message.delete()
  money.updateBal(message.author.id, -15000)
  message.member.addRole('523799456097894411')
  message.channel.send(`${message.author.username},поздравляю с покупкой Premium!`)
}else{
  message.channel.send(`У вас недостаточно <:coins:563357051053408286>!Требуется **30,000** \nВаш баланс: **${i.money}** <:coins:563357051053408286>!`)
}
})
 }

 if (message.content === `//buy-vip`) {
money.fetchBal(message.author.id).then((i) => {
if (i.money >= 15000){
  money.updateBal(message.author.id, -15000)
  message.member.addRole('507942537453895705')
  message.channel.send(`${message.author.username},поздравляю с покупкой Vip!`)
}else{
  message.channel.send(`У вас недостаточно <:coins:563357051053408286>!Требуется **15,000** \nВаш баланс: **${i.money}** <:coins:563357051053408286>!`)
}
})
}


 if (message.content === `//buy-elite`) {
money.fetchBal(message.author.id).then((i) => {
if (i.money >= 50000){
  money.updateBal(message.author.id, -50000)
  message.member.addRole('482189882580664336')
  message.channel.send(`${message.author.username},поздравляю с покупкой Elite!`)
}else{
  message.channel.send(`У вас недостаточно <:coins:563357051053408286>!Требуется **50.000** \nВаш баланс: **${i.money}** <:coins:563357051053408286>!`)
}
})
}
 if (message.content ===  `//buy-luxury`) {
money.fetchBal(message.author.id).then((i) => {
if (i.money >= 70000){
  money.updateBal(message.author.id, -70000)
  message.member.addRole('482506949141856256')
  message.channel.send(`${message.author.username},поздравляю с покупкой Luxury!`)
}else{
  message.channel.send(`У вас недостаточно <:coins:563357051053408286>!Требуется **70.000** \nВаш баланс: **${i.money}**<:coins:563357051053408286>!`)
}
})


 }}

 
})

robot.on("message", message => {
const money = require("discord-money")
 if(message.content.startsWith(prefix + `bal`)){
money.fetchBal(message.author.id).then((i) => {
  
let baluser = message.mentions.members.first();
if(!baluser){
let embed3 = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setDescription(`**Ваш баланс состовлят:** ***${i.money}*** \n *Зарабатывайте <:coins:563357051053408286> за активность, и обменивайте их на роли*`)

message.channel.send(embed3)
}
})
let baluser = message.mentions.members.first();
if(!baluser) return
money.fetchBal(baluser.id).then((b) => {
let embed2 = new Discord.RichEmbed()
.setAuthor(baluser.user.username)
.setDescription(`**Баланс состовляет:** ***${b.money}*** \n *Зарабатывайте <:coins:563357051053408286> за активность, и обменивайте их на роли*`)
.setThumbnail()
 message.channel.send(embed2)
 })
}




if(message.content.startsWith(prefix + "pay")){
const money = require('discord-money');

const args = message.content.slice(prefix.length).split(' ');
let monc = args[2]
let payuser = message.mentions.members.first();
if(!payuser) return message.channel.send("Вы не указали пользователя!")
    if(payuser.id === message.author.id) return message.channel.send('Вы не можете передать самому себе <:coins:563357051053408286>!')
  if(monc <= 0) return message.channel.send('Вы не можете передать отрицательное количество <:coins:563357051053408286>!')
money.updateBal(message.author.id, -monc)
money.updateBal(payuser.id, monc)
message.channel.send(`Вы успешно передали игроку ${payuser} ${monc} <:coins:563357051053408286>`)

}

if(message.content.startsWith(prefix + "restart")){
  robot.destroy().then(() => robot.login(config.token))
}
if(message.content.startsWith(prefix + "ping")){
     message.reply(`Pong! **\`${robot.pings[0]}ms\`**`);
}
const chalk = require('chalk');

})
robot.on('message',message =>{
  if(message.content.startsWith("//report")){
    const args = message.content.slice(prefix.length).split(' ');
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.slice(2);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Жалоба")
    .setColor('RANDOM')
    .addField("На:", `${rUser}`)
    .addField("От:", `${message.author}`)
    .addField("В канале:", message.channel)
    .addField("Время:", moment(message.createdAt).format('HH:MM DD-MM-YY'))
    .addField("Причина:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "модераторы");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
  }
})
robot.on('message', async (message) =>{
  if(message.content.startsWith(prefix + "eval")){
      if(message.author.id === '564360467666042885' || message.author.id === '354958324355039233'){
    const args = message.content.slice(7).split(' ');
const code = args.join(" ")
        .replace(/robot\.token|robot\[.token.\]/ig, 'kthxbai')
    try {
        let evaled = eval(code);
        if (!code) {
            return message.channel.send("нужна больше кода!");
        }

        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);

        const embed = new Discord.RichEmbed()
            .setTitle(`EVAL ✅`)

            .setColor("0x4f351")
            .addField(`📥 Input:`, `\`\`\`${code}\`\`\` \n`)
            .addField(`📤Output:`, `\`\`\`${(evaled)}\`\`\`\n `)
            .addField(`🛒Type:`, `\`\`\`${(typeof evaled)}\`\`\`\n`);
        message.channel.send({
            embed
        });
    } catch (err) {
 console.log(err)
    }
  }
}
})
robot.on('message',async (message) =>{
const money = require('discord-money');
if(message.content.startsWith(prefix + 'infpay')){
  if(message.author.id === '389712270860615681'){
const args = message.content.slice(prefix.length).split(' ');
let monc = args[2]
let payuser = message.mentions.members.first();
if(!payuser) return message.channel.send("Вы не указали пользователя!")

money.updateBal(payuser.id , monc)
if(monc >= 0){
message.channel.send(`Вы выдали пользователю ${payuser} ${monc} <:coins:563357051053408286>!`)}
if(monc < 0){message.channel.send(`Вы забрали у пользователя ${payuser} ${monc} <:coins:563357051053408286>!`)}
}else{
  message.channel.send('Вы не являетесь пользователем 𝓜𝓻𝓛𝓮𝓸𝓷𝓪𝓻𝓭𝓸𝓼!')
}
}
if(message.content.startsWith(prefix + 123)){
  message.delete()
const embed = new Discord.RichEmbed()
.setAuthor("Донат")
.addField('Вип','**Возможности:** \n \n После покупки роли вы получите:\n Роль вип\n Доступ к скрытому VIP каналу\nОтображение вашей роли выше чем у обычных пользователей \n **Стоимость ```fix \n 10.000 коинов/месяц```')
.setThumbnail("http://kamenkarp.ulcraft.com/uploads/s/1/a/l/1alvi9juk2mx/img/full_Q7M4UYn8.png")
}

if(message.content.startsWith(prefix + 'vote')){
message.channel.send('*Гендерные роли*\n:me: - @Парень \n:be: - @Девушка \n**Взять роли вы сможете нажав на реацию. Иметь можно только одну роль , при попытке взять другую роль , все остальные будут сниматься автоматически**')

}

})
robot.on('ready', () => {
setInterval(() => {
         const money = require('discord-money');
money.updateBal('496306590371151882', 500)
money.updateBal('465036445984358402', 500)
money.updateBal('344422627244376065', 1000)

    }, 10800000);
})

const CacheBase = require('cache-base');
const app = new CacheBase();
app.set('a.b', 'Тест');
 
console.log(app.cache.a);    //=> { b: 'c' }
console.log(app.cache.a.b);  //=> 'c'
 
console.log(app.get('a'));   //=> { b: 'c' }
console.log(app.get('a.b'));

robot.on('message',async(message) =>{
let client = robot






let msg = message
if(message.content.startsWith(prefix + 'shop')){
    const embed9 = new Discord.RichEmbed() 
    .setTitle("Магазин сервера Hunters | Обмен валюты.")
    .addField('**👑 Vip**','**После покупки вы получите:\n• Роль Vip;\n• Скрытый текстовый Vip канал;\n• Отображение вашей роли выше, чем у обычных пользователей;\n• 10 бонусных коинов //daily;\nСтоимость: 8.000 <:coins:563357051053408286> **',true)
    const embed8 = new Discord.RichEmbed()
    .setTitle("Магазин сервера Hunters | Обмен валюты.")
  .addField('**👑 Premium**','**После покупки вы получите:\n• Роль Premium;\n• Скрытый текстовый Premium + Vip канал;\n• Отображение вашей роли выше, чем у обычных пользователей;\n• Три уникальных цвета роли;\n• 40 бонусных коинов //daily;\nСтоимость: 12.000 <:coins:563357051053408286> **',true)
   const embed7 = new Discord.RichEmbed()
   .setTitle("Магазин сервера Hunters | Обмен валюты.")
   .addField('**👑 Elite**','**После покупки вы получите:\n• Роль Elite;\n• Скрытый текстовый Elite + Premium канал;\n•Отображение вашей роли выше, чем у обычных пользователей;\n• Пять уникальных цвета роли;\n• 80 бонусных коинов //daily;\nСтоимость: 45.000 <:coins:563357051053408286> **',true)
    const embed6 = new Discord.RichEmbed()
    .setTitle("Магазин сервера Hunters | Обмен валюты.")
    .addField('**👑 Luxury**','**После покупки вы получите:\n• Роль Luxury;\n• Скрытый текстовый Luxury + Elite канал;\n• Отображение вашей роли выше, чем у обычных пользователей;\n• Восемь уникальных цвета роли;\n• 130 бонусных коинов //daily;\n• Доступ к заполненым голосовым каналам;\nСтоимость: 65.000 <:coins:563357051053408286> **',true)
    const embed5 = new Discord.RichEmbed()
    .setTitle("Магазин сервера Hunters | Обмен валюты.")
   .addField('**👑 Deluxe**','**После покупки вы получите:\n• Роль Deluxe;\n• Доступ ко всем скрытым каналам;\n• Отображение вашей роли выше, чем у обычных пользователей;\n• Разноцветная роль;\n• 180 бонусных коинов //daily;\n• Доступ к заполненым голосовым каналам;\n• Доступ к логам сервера;\nСтоимость: 90.000 <:coins:563357051053408286> ** ',true) 
const embed4 = new Discord.RichEmbed()
    .setTitle("Магазин сервера Hunters | Обмен валюты.")    
  .addField('**🔰 Личный клан**','**После покупки вы получите:\n• Роль <@&561777651472269312>(Только для купившего)\n• Возможность создать клановую комнату\n• Отображение клана в листе среди ролей.\n\nКоманда для покупки //clancreate <название> <цвет> \nСтоимость: 6000 <:coins:563357051053408286>**')
const embed3 = new Discord.RichEmbed()
.setTitle('Магазин сервера Hunters| Обмен валюты')
.addField('**🚩 Личная роль**','**После покупки вы получите:\n• Возможность выбрать цвет и название роли\n• //rolecreate <HEX-цвет> <Название роли>\nСтоимость:  160.000 <:coins:563357051053408286> **')
    
    // Define a new embed, if you are on the `stable` branch it will be new Discord.RichEmbed()
let embed = new Discord.RichEmbed()
.setTitle("Магазин сервера Hunters | Обмен валюты.")
                  embed.setDescription(`**Для выбора наших услуг нажмите на реакции под этим сообщением**`)
    message.channel.send(embed).then(msg => { // Now, we will send the embed and pass the new msg object

      msg.react('1⃣').then(r => { // We need to make sure we start the first two reactions, this is the first one
        msg.react('2⃣').then(r => {
          msg.react('3⃣').then(r => { // This is the second one, it will run this one after the first one
            msg.react('4⃣').then(r => {
              msg.react('5⃣').then(r => {
                msg.react('6⃣').then(r => {
                   msg.react('7⃣')
          // Filters - These make sure the variables are correct before running a part of code
          const backwardsFilter = (reaction, user) => reaction.emoji.name === '1⃣' && user.id === message.author.id;
          const stopFiler = (reaction, user) => reaction.emoji.name === '2⃣' && user.id === message.author.id;
          const forwardsFilter = (reaction, user) => reaction.emoji.name === '3⃣' && user.id === message.author.id; // We need two filters, one for forwards and one for backwards
          const servakFilter = (reaction, user) => reaction.emoji.name === '4⃣' && user.id === message.author.id;

               
const servakFilter1 = (reaction, user) => reaction.emoji.name === '5⃣' && user.id === message.author.id;
      const servakFilter2 = (reaction, user) => reaction.emoji.name === '6⃣' && user.id === message.author.id
const servakFilter3 = (reaction, user) => reaction.emoji.name === '7⃣' && user.id === message.author.id
                  const backwards = msg.createReactionCollector(backwardsFilter, {
            time: 60000
          }); // This creates the collector, which has the filter passed through it. The time is in milliseconds so you can change that for however you want the user to be able to react

          const stops = msg.createReactionCollector(stopFiler, {
            time: 120000
          })

          const forwards = msg.createReactionCollector(forwardsFilter, {
            time: 60000
          });
          const servak = msg.createReactionCollector(servakFilter, {
            time: 60000
          });
const servak1 = msg.createReactionCollector(servakFilter1, {
            time: 60000
     });
                  
       const servak2 = msg.createReactionCollector(servakFilter2, {
            time: 60000
          });   
const servak3 = msg.createReactionCollector(servakFilter3, {
            time: 60000
          })        
                  // This is the second collector, collecting for the forwardsFilter
          // Next, we need to handle the collections
          backwards.on('collect', r => { // This runs when the backwards reaction is found
            r.remove(message.author.id) // We want to make sure if they are on the first page, they cant go back a page.
          
            msg.edit(embed9) // Then, we can push the edit to the message
          })

          stops.on('collect', r => {
            r.remove(message.author.id) // We can use copy and paste since it is basically the same thing, although now it checks if the page is currently on the highest possible, so it can't go any higher
                   msg.edit(embed8)
          })

          forwards.on('collect', r => { // This runs when the forwards reaction is found
            r.remove(message.author.id) // We can use copy and paste since it is basically the same thing, although now it checks if the page is currently on the highest possible, so it can't go any higher.

             
            msg.edit(embed7) // Then, we can push the edit to the message
          })
          servak.on('collect', r => { // This runs when the forwards reaction is found
            r.remove(message.author.id) // We can use copy and paste since it is basically the same thing, although now it checks if the page is currently on the highest possible, so it can't go any higher.

    msg.edit(embed6) // Then, we can push the edit to the message
          })
servak1.on('collect', r => { // This runs when the forwards reaction is found
            r.remove(message.author.id) // We can use copy and paste since it is basically the same thing, although now it checks if the page is currently on the highest possible, so it can't go any higher.

          msg.edit(embed5) // Then, we can push the edit to the message
          })
servak2.on('collect', r => { // This runs when the forwards reaction is found
            r.remove(message.author.id) // We can use copy and paste since it is basically the same thing, although now it checks if the page is currently on the highest possible, so it can't go any higher.

          msg.edit(embed4) // Then, we can push the edit to the message
          })
servak3.on('collect', r => { // This runs when the forwards reaction is found
            r.remove(message.author.id) // We can use copy and paste since it is basically the same thing, although now it checks if the page is currently on the highest possible, so it can't go any higher.

          msg.edit(embed3) // Then, we can push the edit to the message
          })

})
        }).catch(error => {
          console.log(error)
        })
      }).catch(error => {
        console.log(error)
      })
    }).catch(error => {
      console.log(error)
    })
}).catch(error => {
      console.log(error)
    })
}).catch(error => {
      console.log(error)
    })
}).catch(error => {
      console.log(error)
    })


}


})





robot.login(process.env.BOT_TOKEN);


