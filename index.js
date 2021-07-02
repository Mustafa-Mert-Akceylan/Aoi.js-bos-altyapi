const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
  mobile: false, //Botun Durumunda Telefon Görünmesini İstiyorsanız true İstemiyorsanız false yazın
  token: "", //Tokeni Grin
  prefix: ["PREFIX"] //Buraya Prefixiniz Girin
})

bot.readyCommand({
    channel: "",
    code: `
         $log[------------------------------------------]
         $wait[1s]
         $log[Toplam Sunucu Sayısı: $serverCount]
         $wait[1s]
         $log[Toplam Kullanıcı Sayısı: $allMembersCount]
         $wait[1s]
         $log[Botun İsmi: $userTag[$clientID]]]
         $wait[1s]
         $log[----------------Bot-Açıldı----------------]
        
 ` 
})//Bot Açılınca Konsola Hoş Bi İstatistik Atıcak


bot.onMessage() //Bunu Silmeyin Bot Çalışmaz
bot.loadCommands(`./komutlar/`) //Command Handlerimizi Ayarladık

bot.command({
name: "Selam", 
code: `Merhaba Dünya !` 
})
//Deneme Komutudur <3
//Bear Development
//M²#0001
