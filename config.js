module.exports = {
  bot: {
    owners: [ "704183699603849266", "979472022243541023", "1018207834833432689", ""],// owners id
    botID: "1126261529076051968",// bot id
    GuildId: "1114299870442946665", // Your Server Id
    ClientId: "1126261529076051968", // Clietn Id
    serverinvte: "https://discord.gg/rolex1", // Server invite url
    clientSECRET: process.env.client , // Client Secret
    callbackURL: "https://shikaprove.shikahandom4.repl.co/login", // Call Back Url
    inviteBotUrl: "https://discord.com/api/oauth2/authorize?client_id=1126261529076051968&permissions=8&scope=bot",
    TOKEN: (process.env.token) // Bot Token
  },
  website: {
    PORT: "3001",//website port
  }
}