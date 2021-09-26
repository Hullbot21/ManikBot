exports.gameMenu = (prefix) => {
    return `
 * GAME-MENU *
 
> ${prefix}slot
> ${prefix}limitgame
> ${prefix}gelud @tag
> ${prefix}tictactoe @tag
> ${prefix}siapaaku
> ${prefix}family100
> ${prefix}kuismath
> ${prefix}asahotak
> ${prefix}tebaklirik
> ${prefix}tebaklagu
> ${prefix}tebakkata
> ${prefix}susunkata
> ${prefix}kimiakuis
> ${prefix}caklontong
> ${prefix}tebakjenaka
> ${prefix}tebakanime
> ${prefix}tebaktebakan
> ${prefix}tebakgambar
> ${prefix}tebakbendera
> ${prefix}suit *batu/kertas/gunting*
`
}
exports.funMenu = (prefix) => {
    return `
   # FUN-MENU

> ${prefix}mining
> ${prefix}togel
> ${prefix}cekwatak
> ${prefix}cekmati [nama]
> ${prefix}wangy [nama]
> ${prefix}citacita
> ${prefix}toxic
> ${prefix}truth
> ${prefix}dare
> ${prefix}apakah
> ${prefix}bisakah
> ${prefix}kapankah
> ${prefix}rate
> ${prefix}jadian
> ${prefix}cantik
> ${prefix}ganteng
> ${prefix}beban
> ${prefix}babi
> ${prefix}cekganteng
> ${prefix}cekcantik

`
}
exports.otherMenu = (prefix) => {
    return `
  #  OTHER-MENU 

> ${prefix}brainly *query*
> ${prefix}shopee *product*
> ${prefix}playstore *query*
> ${prefix}ssweb *query*
> ${prefix}google *query*
> ${prefix}image *query*
> ${prefix}pinterest *query*
> ${prefix}nulis *teks*
> ${prefix}iguser *ussername*
> ${prefix}igstalk *username*
> ${prefix}githubstalk *username*
> ${prefix}tiktokstalk *ussername*
> ${prefix}img2url *reply foto*
> ${prefix}ytsearch *query*

`
}
exports.stickerMenu = (prefix) => {
    return `
  # STICKER-MENU

> ${prefix}dadu
> ${prefix}doge
> ${prefix}toimg
> ${prefix}patrick
> ${prefix}garwgura
> ${prefix}ttg *teks*
> ${prefix}attp *teks*
> ${prefix}stickeranime
> ${prefix}semoji *emoji*
> ${prefix}sticker *reply foto/video*
> ${prefix}smeme *teks|teks*
> ${prefix}swm *pack|author*
> ${prefix}take *pack|author* 
> ${prefix}tovideo *reply sgif*

`
}
exports.wibuMenu = (prefix) => {
    return `
  # WIBU-MENU

> ${prefix}loli
> ${prefix}manga
> ${prefix}anime 
> ${prefix}lolivideo
> ${prefix}husbu
> ${prefix}waifu
> ${prefix}milf
> ${prefix}neko
> ${prefix}kanna
> ${prefix}sagiri
> ${prefix}hentai
> ${prefix}cosplay
> ${prefix}wallnime
> ${prefix}kusonime
> ${prefix}megumin
> ${prefix}otakudesu
> ${prefix}doujindesu
> ${prefix}storyanime
> ${prefix}nakanomiku
> ${prefix}nakanonino
> ${prefix}nakanoitsuki
> ${prefix}otakuongoing
> ${prefix}nhentai *code*
> ${prefix}nekopoi *link*
> ${prefix}nekopoi3d
> ${prefix}nekopoicosplay
> ${prefix}nekopoisearch

`
}

exports.ownerMenu = (prefix) => {
    return `
  # OWNER-MENU

> ${prefix}bc *teks*
> ${prefix}term
> ${prefix}eval
> ${prefix}reset
> ${prefix}clearall
> ${prefix}leaveall
> ${prefix}join *link gc*
> ${prefix}shutdown
> ${prefix}getquoted
> ${prefix}addupdate *fiturnya*
> ${prefix}exif *nama|author*
> ${prefix}sewa add/del *waktunya*
> ${prefix}premium add @tag|nomor
> ${prefix}premium del @tag|nomor

`
}

exports.groupMenu = (prefix) => {
    return`
  # GROUP-MENU

> ${prefix}groupsetting
> ${prefix}afk *alasan*
> ${prefix}ceksewa
> ${prefix}kickall
> ${prefix}infogrup
> ${prefix}promote
> ${prefix}demote
> ${prefix}listonline
> ${prefix}tagall *teks*
> ${prefix}leave
> ${prefix}kick *reply*
> ${prefix}add *+62xxxxxx*
> ${prefix}setgrupname
> ${prefix}setppgrup
> ${prefix}setdesc
> ${prefix}sider *reply chat bot*
> ${prefix}hidetag *teks/reply teks*

`
}

exports.changeAudio = (prefix) => {
    return`
  # AUDIO MENU
> ${prefix}hode
> ${prefix}nightcore
> ${prefix}tempo
> ${prefix}gemes
> ${prefix}fast
> ${prefix}imut
> ${prefix}tempo-v
`
}
exports.downloadMenu = (prefix) => {
    return `
  *DOWNLOAD-MENU*

> ${prefix}fb 
> ${prefix}igdl 
> ${prefix}igdl2 
> ${prefix}twitter 
> ${prefix}tiktok 
> ${prefix}play 
> ${prefix}ythd 
> ${prefix}ytmp3 
> ${prefix}ytmp4 
> ${prefix}soundcloud 
> ${prefix}tiktoknowm 
> ${prefix}tiktokaudio
> ${prefix}mediafire 
> ${prefix}nhentaipdf *code*

`
}
exports.rulesBot = (prefix) => {
    return `
 ManikBot merupakan suatu program bot whatsapp, yang menggunakan engine nodejs v14.x.x
Adapun ketentuan untuk memakai ManikBot. :
*1.* Pengguna dapat menggunakan semua perintah/command dengan batasan limit sebanyak 25 setiap pengguna terkecuali user premium dengan limit tanpa batas/unlimited, dan tidak melakukan spam terhadap bot.
*2.* Limit akan di reset oleh owner satu kali 24 jam
*3.* Bot dapat memblokir pengguna/user melanggar rules yang ada di bot ini, rules yang harus dipatuhi oleh pengguna antara lain :
  • Tidak melakukan panggilan telepon/video call terhadap Bot
  • Tidak melakukan spam perintah/command yang ada dalam bot ini
*4.* Dilarang keras mengirim pesan V dan semacamnya yang membuat server down ataupun bot crash
*5.* Pengguna yang mengirim hal atau data pribadi tidak akan disimpan oleh bot ini, dan tidak akan bertanggung jawab atas data pribadi tersebut!

_Note : Bot ini menggunakan autoread atau langsung membaca pesan yang pengguna kirim_

Regards : AryaManik
Owner  Bot:
wa.me/6285737134572
`
}
exports.infoMenu = (prefix) => {
return `
  # INFO-MENU
  
> ${prefix}update
> ${prefix}level
> ${prefix}rules
> ${prefix}profile
> ${prefix}waktu
> ${prefix}botstat
> ${prefix}sewabot
> ${prefix}listsewa
> ${prefix}owner
> ${prefix}ping
> ${prefix}runtime
> ${prefix}donasi
> ${prefix}leaderboard
> ${prefix}cekpremium
> ${prefix}listpremium
> ${prefix}sourcecode
> ${prefix}bugreport *keluhan*

`
} 
exports.makemenu = (prefix) => {
return `
  # MAKER-MENU
「 text Pro Me 」
> ${prefix}blackpink text
> ${prefix}neon text
> ${prefix}greenneon text
> ${prefix}advanceglow text
> ${prefix}futureneon text
> ${prefix}sandwriting text
> ${prefix}sandsummer text
> ${prefix}sandengraved text
> ${prefix}metaldark text
> ${prefix}neonlight text
> ${prefix}holographic text
> ${prefix}text1917 text
> ${prefix}minion text
> ${prefix}deluxesilver text
> ${prefix}newyearcard text
> ${prefix}bloodfrosted text
> ${prefix}halloween text
> ${prefix}jokerlogo text
> ${prefix}fireworksparkle text
> ${prefix}natureleaves text
> ${prefix}bokeh text
> ${prefix}toxic text
> ${prefix}strawberry text
> ${prefix}box3d text
> ${prefix}roadwarning text
> ${prefix}breakwall text
> ${prefix}icecold text
> ${prefix}luxury text
> ${prefix}cloud text
> ${prefix}summersand text
> ${prefix}horrorblood text
> ${prefix}thunder text
> ${prefix}pornhub text1 text2
> ${prefix}glitch text1 text2
> ${prefix}avenger text1 text2
> ${prefix}space text1 text2
> ${prefix}ninjalogo text1 text2
> ${prefix}marvelstudio text1 text2
> ${prefix}lionlogo text1 text2
> ${prefix}wolflogo text1 text2
> ${prefix}steel3d text1 text2
> ${prefix}wallgravity text1 text2

「 Photo Oxy 」
> ${prefix}shadow text
> ${prefix}cup text
> ${prefix}cup1 text
> ${prefix}romance text
> ${prefix}smoke text
> ${prefix}burnpaper text
> ${prefix}lovemessage text
> ${prefix}undergrass text
> ${prefix}love text
> ${prefix}coffe text
> ${prefix}woodheart text
> ${prefix}woodenboard text
> ${prefix}summer3d text
> ${prefix}wolfmetal text
> ${prefix}nature3d text
> ${prefix}underwater text
> ${prefix}golderrose text
> ${prefix}summernature text
> ${prefix}letterleaves text
> ${prefix}glowingneon text
> ${prefix}fallleaves text
> ${prefix}flamming text
> ${prefix}harrypotter text
> ${prefix}carvedwood text
> ${prefix}tiktok text1 text2
> ${prefix}arcade8bit text1 text2
> ${prefix}battlefield4 text1 text2
> ${prefix}pubg text1 text2

「 Ephoto 360 」
> ${prefix}wetglass text
> ${prefix}multicolor3d text
> ${prefix}watercolor text
> ${prefix}luxurygold text
> ${prefix}galaxywallpaper text
> ${prefix}lighttext text
> ${prefix}beautifulflower text
> ${prefix}puppycute text
> ${prefix}royaltext text
> ${prefix}heartshaped text
> ${prefix}birthdaycake text
> ${prefix}galaxystyle text
> ${prefix}hologram3d text
> ${prefix}greenneon text
> ${prefix}glossychrome text
> ${prefix}greenbush text
> ${prefix}metallogo text
> ${prefix}noeltext text
> ${prefix}glittergold text
> ${prefix}textcake text
> ${prefix}starsnight text
> ${prefix}wooden3d text
> ${prefix}textbyname text
> ${prefix}writegalacy text
> ${prefix}galaxybat text
> ${prefix}snow3d text
> ${prefix}birthdayday text
> ${prefix}goldplaybutton text
> ${prefix}silverplaybutton text
> ${prefix}freefire text
`
}
