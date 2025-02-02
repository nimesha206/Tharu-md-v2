const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `👋 HEY ${pushname} THIS IS MY MENU 📍

*© OWNER*  : NIMA CODER
                      
*© SUPPORTER* : THARUSHI SANJANA

*© NUMBER* : +94789549564
                        
*© SUPPORTER NUMBER* : +94*********

╭──────────●●►
│📌 LIST MENU
╰──────────●●►

╭════════════⊷❍ 
┊ 1 || MAIN  MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .alive
┊ .menu
┊ .ping
┊ .system

╭════════════⊷❍ 
┊ 2 || DOWNLOAD MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .song
┊ .video
┊ .fb
┊ .mediafire

╭════════════⊷❍ 
┊ 3 || SEARCH MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .yts

╭════════════⊷❍ 
┊ 4 || GROUP MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .promote
┊ .demote
┊ .add
┊ .remove / .kick
┊ .setgoodbye
┊ .setwelcome
┊ .getpic


╭════════════⊷❍ 
┊ 5 || OWNER MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .shutdown
┊ .setpp
┊ .block
┊ .unblock
┊ .clearchats
┊ .restart
┊ .broadcast

╭════════════⊷❍ 
┊ 5 || OTHER MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .ai
┊ .news

I AM THARU - MD V1 WHATSAPP USER BOT 🇱🇰


> POWERED BY THE NIMA CODER`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/rnjlel.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
