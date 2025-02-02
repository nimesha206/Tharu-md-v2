const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO 👨‍💻* 

*🔥 ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: 𝐓𝐇𝐀𝐑𝐔-ᴍᴅ*
🔥 *ɴᴜᴍʙᴇʀ* -: 94789549564
🔥 *ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://chat.whatsapp.com/J085BIRq2F614d44rWS4Co

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐓𝐇𝐀𝐑𝐔-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/rnjlel.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
