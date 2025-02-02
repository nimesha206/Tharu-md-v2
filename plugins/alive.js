const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let des = `*HEY DEAR* ,${pushname}\n *I Am THARU MD AlIVE NOW....! 🖐🏻*

╭════════════⊷❍ 
┊
┊FOR MORE DETAILS  ,   TYPE ( *.menu*) 🔐
┊
╰════════════⊷❍

*- I AM THARU - MD V1 WHATSAPP USER BOT 🇱🇰*


> POWERED BY THE NIMA CODER `
return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/rnjlel.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
