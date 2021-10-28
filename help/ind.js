const fs = require('fs')


exports.ok = () => {
    return `Ok desu~`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Command *${cmd}* tidak terdaftar di *${prefix}menu*`
}

exports.hadis = (command) => {
    return `*── 「 HADIS 」 ──*

Daftar hadis:
1. Hadis Bukhari ada 6638 hadis
    _usage_: ${command} bukhari 1
2. Hadis Muslim ada 4930 hadis
    _usage_: ${command} muslim 25
3. Hadis Tirmidzi ada 3625 hadis
    _usage_: ${command} tirmidzi 10
4. Hadis nasai ada 5364 hadis
    _usage_: ${command} nasai 6
5. Hadis Ahmad ada 4305 hadis
    _usage_: ${command} ahmad 5
6. Hadis Abu Daud ada 4419 hadis
    _usage_: ${command} abu-daud 45
7. Hadis Malik ada 1587 hadis
    _usage_: ${command} malik 45
8. Hadis Ibnu Majah ada 4285 hadis
    _usage_: ${command} ibnu-majah 8
9. Hadis Darimi ada 2949 hadis
    _usage_: ${command} darimi 3`
}

exports.groupBot = (sender) => {
    return `
Link Group Fenst : https://chat.whatsapp.com/ChDmgKcqXQV7EL9Pzgou8E
Link Group Fenst V2 : https://chat.whatsapp.com/CG6tM3disoYErg5xhhGr9m


Jangan lupa join ya kak @${sender.split('@')[0]}`
}

exports.BlockBan = (ownerNumber, prefix) => {
    return `*Sepertinya kamu telah diblok/diban. Hubungi untuk mengetahui cara membuka blok!*\n\n Owner: wa.me/${ownerNumber}`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner-sama!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-sama~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.stickerDel = () => {
    return `Stiker berhasil dihapus dari database!`
}

exports.stickerAdd = () => {
    return `Stiker berhasil ditambahkan ke database!`
}

exports.stickerAddAlready = (q) => {
    return `Stiker dengan keyword "${q}" sudah ada di database!`
}

exports.stickerNotFound = () => {
    return `Stiker tidak ditemukan!`
}

exports.vnDel = () => {
    return `Vn berhasil dihapus dari database!`
}

exports.vnAdd = () => {
    return `Vn berhasil ditambahkan ke database!`
}

exports.vnAddAlready = (q) => {
    return `Vn dengan keyword "${q}" sudah ada di database!`
}

exports.vnNotFound = () => {
    return `Vn tidak ditemukan!`
}

exports.imageAdd = () => {
    return `image berhasil ditambahkan ke database!`
}

exports.imageAddAlready = (q) => {
    return `image dengan keyword "${q}" sudah ada di database!`
}

exports.imageNotFound = () => {
    return `image tidak ditemukan!`
}

exports.respon = (ketikan, respt) => {
    return `
*── 「 AUTO RESPON 」 ──*

Auto-Respon berhasil dibuat dengan:

➸ *Text*: ${ketikan}
➸ *Akan Merespon*: ${respt}`
}

exports.responAlready = (ketikan) => {
    return `
Maaf, autorespon untuk teks "${ketikan}" sudah ada sebelumnya,harap memasukkan teks lain.`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.claimOn = (yo) => {
    return `
*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *10000Xp* dan *$${yo}* balance
Dari claim harian`
}

exports.claimOnAlready = () => {
    return `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.menu = (prefix, ucap, pushname2, jumlahUser, timebot, owner, jumlahHarian, jumlahCommand, sender, time, public, levelMenu, xpMenu, reqXp, uangku, role, Limitnya) => {
    return `\`\`\`Selamat ${ucap} Kak @${sender.split('@')[0]} 😳\`\`\`

╭── 「 *BOT INFO* 」 ──
│
│❒͡  _*Queenyz Bot*_ 
│❒͡ *Contact My Owner*
│ *https://wa.me/${owner}*
│❒͡ *Time: ${time}*
│❒͡ *STATUS* :「 ${public} 」
│
╰── 「 *Queenyz Bot* 」 ──

❉──────────────────❉  
*Name* : *${pushname2}* 
*Your API* : *https://wa.me/${sender.split('@')[0]}*
*Limit* : *${Limitnya}*


*Your Progress*:
*Level: ${levelMenu}*
*XP: ${xpMenu} / ${reqXp}*
*Role: ${role}*
*Your Balance: $${uangku}*
❉──────────────────❉  

*── 「 BOT STATUS 」 ──*

 ❏ *${timebot}*

 𒍮 *Auto-Regis User: ${jumlahUser}*

 𒍮 *Total Hit Bot : ${jumlahCommand}*

 𒍮 *Total Hit Today : ${jumlahHarian}*

*── 「 Queenyz 」 ──*


*Official BOT By @0*`
}

exports.menuDownloader = (prefix) => {
    return `
*── 「 DOWNLOADER 」 ──*

1. *!facebook*
Download Facebook video.
Aliases: *fb*
Usage: *!facebook* link_video

2. *!joox*
Mencari dan men-download lagu dari Joox.
Aliases: -
Usage: *!joox* judul_lagu

3. *!tiktok*
Mendownload video TikTok.
Aliases: -
Usage: *!tiktok* link_video

4. *!twitter*
Download Twitter media.
Aliases: *twt*
Usage: *!twiter* link

5. *!tiktokmusic*
Download source music dari tiktokvideo.
Aliases: -
Usage: *!tiktokmusic* link_video

6. *!igdl*
Download video dari Source Instagram.
Aliases: *instagramdl*, *ig*
Usage: *!ig* link_video

7. *!igstory*
Download video Story user di Instagram
Aliases: *storyig*
Usage: *!igstory* username

8. *!mediafire*
Info dan direct link mediafire.
Aliases: -
Usage: *!mediafire* link

9. *!gdrive*
Info dan direct link google drive.
Aliases: googledrive
Usage: *!gdrive* link

10. *!soundcloud*
Download soundcloud music.
Aliases: -
Usage: *!souncloud* link_music

11. *!linedl*
Download sticker line via link.
Aliases: -
Usage: *!linedl* link_sticker

12. *!cocofun*
Download video cocofun.
Aliases: -
Usage: *!cocofun* link

13. *!smule*
Download video atau audio smule.
Aliases: -
Usage: *!smule* link

14. *!starmaker*
Download video starmaker.
Aliases: -
Usage: *!starmaker* link

15. *!teledl*
Download sticker Telegram via Link..
Aliases: -
Usage: *!teledl* link

16. *!pindl*
Download file pinterest via Link..
Aliases: -
Usage: *!pindl* link

17. *!zippyshare*
Info dan direct link zippyshare.
Aliases: -
Usage: *!zippyshare* link
    
    `
}

exports.menuText = (prefix) => {
    return `
*── 「 TEXT MAKER 」 ──*

1. *!retro*
Membuat gambar retro teks.
Aliases: *retrotext*
Usage: *!retrotext* teks_atas | teks_tengah | teks_bawah

2. *!firemaker*
Membuat gambar teks fire.
Aliases: -
Usage: *!firemaker* teks

3. *!mlmaker*
Membuat gambar karakter hero ML dengan teks.
Aliases: -
Usage: *!mlmaker* nama_hero | teks

4. *!balloonmaker*
Membuat gambar couple balloon.
Aliases: *blmaker*
Usage: *!balloonmaker* nama1 | nama2

5. *!sliding*
Membuat GIF sliding text.
Aliases: -
Usage: *!sliding* teks

6. *!ffbanner*
Membuat banner Free Fire.
Aliases: -
Usage: *!ffbanner* teks1 | teks2

7. *!fflogo*
Membuat logo karakter Free Fire.
Aliases: -
Usage: *!fflogo* nama_karakter | teks

8. *!hartatahta*
Membuat gambar Harta Tahta Nama.
Aliases: -
Usage: *!hartatahta* nama

9. *!glitchtext*
Membuat gambar teks glitch.
Aliases: *glitext*
Usage: *!glitchtext* teks1 | teks2

10. *!blackpink*
Membuat teks dengan style logo Blackpink.
Aliases: -
Usage: *!blackpink* teks

11. *!phmaker*
Membuat teks dengan style logo Pornhub.
Aliases: -
Usage: *!phmaker* teks_kiri | teks_kanan

12. *!galaxy*
Membuat gambar teks galaxy.
Aliases: -
Usage: *!galaxy* teks

13. *!pubgbanner*
Membuat banner PUBG.
Aliases: -
Usage: *!pubgbanner* teks1 | teks2

14. *!covertext*
Membuat banner cover.
Aliases: -
Usage: *!covertext* teks

15. *!narutobanner*
Membuat banner Naruto.
Aliases: -
Usage: *!narutobanner* teks

16. *!kanna*
Membuat gambar teks kanna.
Aliases: -
Usage: *!kanna* teks

17. *!changemymind*
Membuat gambar teks changemy mind.
Aliases: mymind
Usage: *!mymind* teks

18. *!trumptweet*
Membuat gambar teks caption trump.
Aliases: -
Usage: *!trumptweet* teks

19. *!lovetext*
Membuat gambar teks love.
Aliases: -
Usage: *!lovetext* teks

20. *!shadow*
Membuat gambar teks shadow.
Aliases: -
Usage: *!shadow* teks

21. *!sarah*
Membuat gambar teks fandom sarah.
Aliases: -
Usage: *!sarah* teks

22. *!cosplay*
Membuat gambar yg anu lo( ͡° ͜ʖ ͡°).
Aliases: -
Usage: *!cosplay* teks

23. *!glow*
Membuat text glow.
Aliases: glowtext
Usage: *!glow* teks

24. *!thunder*
Membuat text efek thunder/petir :v.
Aliases: thundertext
Usage: *!thunder* teks

25. *!carbon*
Membuat text efek carbon.
Aliases: -
Usage: *!carbon* teks

26. *!metal*
Membuat text bergaya metal.
Aliases: -
Usage: *!metal* teks

27. *!gmlogo*
Membuat text logo.
Aliases: gaminglogo
Usage: *!gmlogo* teks

28. *!water*
Membuat text efek water.
Aliases: watertext
Usage: *!water* teks

29. *!silk*
Membuat text efek silk.
Aliases: -
Usage: *!silk* teks

30. *!smoke*
Membuat text efek smoke.
Aliases: -
Usage: *!smoke* teks

31. *!goglemaker*
Membuat gambar efek google search.
Aliases: -
Usage: *!googlemaker* teks_utama | teks_1 | teks_2

32. *!burnpaper*
Membuat text efek kertas terbakar :v.
Aliases: -
Usage: *!burnpaper* text

33. *!8bit*
Membuat teks format 8bit.
Aliases: -
Usage: *!8bit* text1 | text2

34. *!harrypotter*
Membuat teks efek film harrypotter.
Aliases: -
Usage: *!harrypotter* teks

35. *!metallic*
Teks dengan efek metal.
Aliases: -
Usage: *!metallic* teks

36. *!hacker*
Teks dengan efek hekelmen.
Aliases: -
Usage: *!hacker* teks

37. *!quotemaker*
Buat quotemaker text.
Aliases: -
Usage: *!quotemaker* teks

38. *!quotemaker2*
Buat quotemaker text.
Aliases: -
Usage: *!quotemaker2* teks

39. *!goldbutton*
Teks dengan fake goldplay button.
Aliases: -
Usage: *!playbutton* teks

40. *!silverbutton*
Teks dengan fake silverplay button.
Aliases: -
Usage: *!silverbutton* teks

41. *!marvel*
Teks dengan efek marvel logo.
Aliases: -
Usage: *!marvel* teks1 | teks2

42. *!ninjalogo*
Teks dengan logo ninja
Aliases: -
Usage: *!ninjalogo* teks1 | teks2

43. *!lionlogo*
Teks dengan efek lion logo.
Aliases: -
Usage: *!lionlogo* teks1 | teks2

44. *!steel3d*
Teks dengan efek 3d steel.
Aliases: -
Usage: *!steel3d teks1 | teks2

45. *!labtext*
Teks dengan efek laboratorium.
Aliases: *lab*
Usage: *!lab* teks

46. *!sandwriting*
Teks dengan efek pantai.
Aliases: -
Usage: *!sandwriting* teks

47. *!sandengraved*
Teks dengan efek pantai.
Aliases: -
Usage: *!sandengraved* teks

48. *!metaldark*
Teks dengan efek metal.
Aliases: -
Usage: *!metaldark* teks

49. *!miniontext*
Teks dengan efek minion.
Aliases: -
Usage: *!miniontext* teks

50. *!deluxesilver*
Teks dengan efek deluxe.
Aliases: -
Usage: *!deluxesilver* teks

51. *!neon*
Teks dengan efek neon.
Aliases: -
Usage: *!neon* teks

52. *!greenneon*
Teks dengan efek neon hijau.
Aliases: -
Usage: *!greenneon* teks

53. *!newyear*
Teks dengan efek tahunbaru.
Aliases: -
Usage: *!newyear* teks

54. *!bloodtext*
Teks dengan efek blood.
Aliases: -
Usage: *!bloodtext* teks

55. *!halloweentext*
Teks dengan efek halloween.
Aliases: -
Usage: *!halloweentext* teks

56. *!jokerlogo*
Teks dengan jokerlogo.
Aliases: -
Usage: *!jokerlogo* teks

57. *!firework*
Teks dengan efek kembangapi.
Aliases: -
Usage: *!firework* teks

58. *!leavestext*
Teks maker effect.
Aliases: -
Usage: *!leavestext* teks

59. *!bokeh*
Teks dengan efek bokeh.
Aliases: -
Usage: *!bokeh* teks

60. *!toxictext*
Teks dengan efek toxic.
Aliases: -
Usage: *!toxictext* teks

61. *!strawberrytext*
Teks dengan efek buah strawberry.
Aliases: -
Usage: *!strawberrytext* teks

62. *!box3d*
Teks dengan 3d effect.
Aliases: -
Usage: *!box3d* teks

63. *!roadtext*
Teks dengan efek road jalanan.
Aliases: -
Usage: *!roadtext* teks

64. *!breakwall*
Teks effect.
Aliases: -
Usage: *!breakwall* teks

65. *!icetext*
Teks dengan efek ice.
Aliases: -
Usage: *!icetext* teks

66. *!summersand*
Teks dengan efek pantai.
Aliases: -
Usage: *!summersand* teks

67. *!horrortext*
Teks dengan efek darah.
Aliases: -
Usage: *!horrortext* teks

68. *!skytext*
Teks dengan efek awan sky.
Aliases: -
Usage: *!skytext* teks

69. *!luxury*
Teks dengan efek luxury.
Aliases: -
Usage: *!luxury* teks

70. *!christmastext*
Teks dengan efek natal.
Aliases: -
Usage: *!christmastext* teks

71. *!watercolor*
Teks dengan efek wc.
Aliases: -
Usage: *!watercolor* teks

72. *!tololstf*
Sertifikat Tolol.
Aliases: -
Usage: *!watercolor* teks

73. *!wetglass*
Teks dengan efek drop air.
Aliases: -
Usage: *!wetglass* teks

74. *!luxurygold*
Teks maker effect.
Aliases: -
Usage: *!luxurygold* teks

75. *!galaxywall*
Teks dengan efek galaxy.
Aliases: -
Usage: *!galaxywall* teks

76. *!valentine*
Teks dengan efek love valentine.
Aliases: -
Usage: *!valentine* teks

77. *!heartshaped*
Teks dengan efek.
Aliases: -
Usage: *!heartshaped* teks

78. *!caketext*
Teks dengan efek kue.
Aliases: -
Usage: *!caketext* teks

79. *!konsertext*
Teks dengan efek asap konser..
Aliases: -
Usage: *!konsertext* teks

80. *!galaxystyle*
Teks dengan efek.
Aliases: -
Usage: *!galaxystyle* teks

81. *!hologram3d*
Teks dengan efek 3d hologram.
Aliases: -
Usage: *!hologram3d* teks

82. *!glussytext*
Teks dengan efek.
Aliases: -
Usage: *!glussytext* teks

83. *!greenbush*
Teks dengan efek.
Aliases: -
Usage: *!greenbush* teks

84. *!metallogo*
Teks dengan efek metal.
Aliases: -
Usage: *!metallogo* teks

85. *!noellogo*
Teks dengan efek noel.
Aliases: -
Usage: *!noellogo* teks

86. *!glittertext*
Teks dengan efek pisau.
Aliases: -
Usage: *!glittertext* teks

87. *!cookiestext*
Teks dengan efek biskuit.
Aliases: -
Usage: *!cookiestext* teks

88. *!startext*
Teks dengan efek rasi bintang.
Aliases: -
Usage: *!startext* teks

89. *!woodentext*
Teks dengan efek pahatan kayu.
Aliases: -
Usage: *!woodentext* teks

90. *!snow3d*
Teks dengan efek salju.
Aliases: -
Usage: *!snow3d* teks

91. *!ff*
Teks dengan efek logo freefire random.
Aliases: -
Usage: *!ff* teks

92. *!textname*
Teks dengan efek.
Aliases: -
Usage: *!textname* teks

93. *!galaxywtr*
Teks dengan efek galaxy.
Aliases: -
Usage: *!galaxywtr* teks

94. *!galaxybat*
Teks dengan efek galaxy.
Aliases: -
Usage: *!galaxybat* teks

95. *!birthdaytext*
Teks dengan efek perayaan ulang tahun.
Aliases: -
Usage: *!birthdaytext* teks

96. *!candlemug*
Teks dengan efek permen.
Aliases: -
Usage: *!candlemug* teks

97. *!mugflower*
Teks dengan efek bunga.
Aliases: -
Usage: *!mugflower* teks

98. *!romancetext*
Teks latar love.
Aliases: -
Usage: *!romancetext* teks

99. *!grass*
Teks dengan efek.
Aliases: -
Usage: *!grass* teks

100. *!lovepaper*
Teks dengan efek.
Aliases: -
Usage: *!lovepaper* teks

101. *!coffee*
Teks dengan efek.
Aliases: -
Usage: *!coffee* teks

102. *!woodheart*
Teks dengan efek.
Aliases: -
Usage: *!woodheart* teks

103. *!wolfmetal*
Teks dengan efek metal
Aliases: -
Usage: *!wolfmetal* teks

104. *!summer3d*
Teks dengan efek hutan.
Aliases: -
Usage: *!summer3d* teks

105. *!glowingneon*
Teks dengan efek.
Aliases: -
Usage: *!glowingneon* teks

106. *!summernature*
Teks dengan efek.
Aliases: -
Usage: *!summernature* teks

107. *!ukir*
Teks dengan efek ukiran.
Aliases: -
Usage: *!ukir* teks

108. *!flamming*
Teks dengan efek flamming fire.
Aliases: -
Usage: *!flamming* teks

109. *!fallleaves*
Teks dengan efek musim gugur.
Aliases: -
Usage: *!fallleaves* teks

110. *!lolbanner*
Teks dengan efek banner game LoL.
Aliases: -
Usage: *!lolbanner* teks

111. *!woodenflower*
Teks dengan efek bunga.
Aliases: -
Usage: *!woodenflower* teks

112. *!underwater*
Teks dengan efek air laut.
Aliases: -
Usage: *!underwater* teks

113. *!nature3d*
Teks dengan efek nature.
Aliases: -
Usage: *!nature3d* teks

114. *!battlefield4*
Membuat teks dengan style logo game b4.
Aliases: -
Usage: *!battlefield4* teks_atas | teks_bawah

115. *!gravity*
Membuat teks dengan style gravity.
Aliases: -
Usage: *!gravity* teks_atas | teks_bawah

116. *!codwarzone*
Membuat teks dengan style logo game CoD.
Aliases: -
Usage: *!codwarzone* teks_1 | teks_2

117. *!juventus*
Membuat teks dengan style juventus jersey.
Aliases: -
Usage: *!juventus* teks_nama | teks_angka

118. *!valorant*
Membuat teks dengan style logo game valorant.
Aliases: -
Usage: *!valorant* teks | nama_fb | nama_twt

119. *!goldrose*
Teks dengan efek mawar emas.
Aliases: -
Usage: *!goldrose* teks

120. *!erodedtext*
Teks dengan efek.
Aliases: -
Usage: *!erodedtext* teks

121. *!wings*
Teks dengan efek sayap galaxy.
Aliases: -
Usage: *!wings* teks

122. *!cartoongraffiti*
Teks dengan efek graffiti.
Aliases: -
Usage: *!cartoongraffiti* teks

123. *!graffiti*
Membuat teks dengan style graffiti.
Aliases: -
Usage: *!graffiti* teks_atas | teks_bawah

124. *!foil*
Teks dengan efek.
Aliases: -
Usage: *!foil* teks

125. *!matrix*
Teks dengan efek matrix.
Aliases: -
Usage: *!matrix* teks

126. *!browntext*
Teks dengan efek gelap.
Aliases: -
Usage: *!browntext* teks

127. *!padlock*
Membuat teks dengan style gembok.
Aliases: -
Usage: *!padlock* teks_1 | teks_2
    
    `
}

exports.menuPremi = (prefix) => {
    return `
*── 「 PREMIUM 」 ──*
Halo premium users ヽ(・∀・)ﾉ!

1. *!tiktoknowm*
Download Tiktok video tanpa WM.
Aliases: *tktoknowm*
Usage: *!tiktoknowm* link_video

2. *!stickerwm*
Buat stiker dengan WM.
Aliases: *stcwm*
Usage: Kirim gambar dengan caption *!stickerwm* pack_name | author_name atau reply gambar dengan caption *!stickerwm* pack_name | author_name.

3. *!takestick*
Merubah watermark sticker.
Aliases: -
Usage: Reply stiker dengan caption *!takestick* pack_name | author_name

4. *!asupan*
Asupan video cewek-cewek.
Aliases: -
Usage: *!asupan*

5. *!multilewds*
Mengirim up to 5 anime lewd pics.
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *!multilewds*

6. *!nhdl*
Mendownload doujin dari nHentai sebagai file PDF.
Aliases: -
Usage: *!nhdl* kode

7. *!nekosearch*
Nekopoi search.
Aliases: -
Usage: *!nekosearch* query

8. *!multifetish*
Mengirim up to 5 fetish pics.
Aliases: *mfetish*
Usage: *!multifetish* <ecchi/lewdanimegirls/hentai/hentaifemdom/hentaiparadise/hentai4everyone/animearmpits/animefeets/animethighss/animebooty/biganimetiddies/animebellybutton/sideoppai/ahegao/hentaianal/anal/pussy/animepussy/yaoi/yuri/hentaiblowjob/blowjob/futanari/kitsunehentai/midriffhentai/erohentai/cumhentai/paizuri>


9. *!brainly*
Mencari Jawaban dari Source Brainly
Aliases: -
Usage: *!brainly* pertanyaan

10. *!brainlysearch*
Mencari result brainly.
Aliases: -
Usage: *!brainlysearch* pertanyaan

11. *!spamcall*
Spam call.
Aliases: -
Usage: *!spamcall* 812xxxxxxxx

12. *!bokep*
Mengirim random bokep.
Aliases: randombokep
Usage: *!bokep*

13. *!pinterest*
Mengirim gambar source pinterest.
Aliases: -
Usage: *!pinterest* query

14. *!ytmp3*
Download YouTube audio.
Aliases: -
Usage: *!ytmp3* link

15. *!ytmp4*
Download YouTube video.
Aliases: -
Usage: *!ytmp4* link

16. *!oadd*
Menambah user ke dalam group.
Aliases: -
Usage: *!oadd* 628xxxxxxxxxx

17. *!okick*
Mengeluarkan member dari grup.
Aliases: -
Usage: *!okick* @member1

18. *!opromote*
Promote member menjadi admin.
Aliases: -
Usage: *!opromote* @member1

19. *!odemote*
Demote member dari admin.
Aliases: -
Usage: *!odemote* @member1

20. *!oleave*
Bot akan meninggalkan grup.
Aliases: -
Usage: *!oleave*

21. *!otagall*
Mention semua member group.
Aliases: -
Usage: *!otagall*

22. *!odelete*
Hapus pesan dari bot.
Aliases: *odel*
Usage: Reply pesan yang dihapus dengan caption *!odelete*.

23. *!spamsms*
Spam OTP SMS.
Aliases: -
Usage: *!spamsms* 0812xxxxxxxx 

24. *!googleimg*
Search gambar source google.com.
Aliases: -
Usage: *!googleimg* query

25. *!getmusic*
Mengambil music dari database list.
Aliases: -
Usage: Reply pesan bot yg berisikan data audio dan command *!getvideo* angka

26. *!delvn*
Menghapus vn dari database bot.
Aliases: -
Usage: *!delvn* query

27. *!getvideo*
Mengambil Video dari database list.
Aliases: -
Usage: Reply pesan yg berisikan data video dan gunakan *!getvideo* angka

28. *!delsticker*
Menghapus sticker dari database bot.
Aliases: -
Usage: *!delsticker* query

29. *!addimage*
Menambah image ke database bot.
Aliases: -
Usage: Reply/kirim image beriringan dengan command *!imagesticker* query

30. *!delimage*
Menghapus image dari database bot.
Aliases: -
Usage: *!delsticker* query

31. *!addrespon*
Menambah respon ke database bot.
Aliases: -
Usage: *!addrespon* query | responnya

32. *!delrespon*
Menghapus respon dari database bot.
Aliases: -
Usage: *!delrespon* query

33. *!addcmd*
Custom add cmd untuk sticker.
Aliases: -
Usage: reply sticker dengan command *!addcmd* cmdnya

34. *!delcmd*
Custom delete cmd untuk sticker.
Aliases: -
Usage: reply sticker dengan command *!delcmd* cmdnya
    
`
}

exports.menuSticker = (prefix) => {
    return `

*── 「 STICKER 」 ──*

1. *!sticker*
Membuat stiker dari gambar yang dikirim atau di-reply.
Aliases: *stiker*
Usage: Kirim gambar dengan caption *!sticker* atau reply gambar dengan caption *!sticker*.

2. *!stickergif*
Membuat stiker dari video MP4 atau GIF yang dikirim atau di-reply.
Aliases: *stikergif*, *sgif*
Usage: Kirim video/GIF dengan caption *!stickergif* atau reply video/GIF dengan caption *!stickergif*.

3. *!ttg*
Membuat stiker text to GIF.
Aliases: -
Usage: *!ttg* teks

4. *!stickertoimg*
Konversi stiker ke foto.
Aliases: *stikertoimg toimg*
Usage: Reply sticker dengan caption *!stickertoimg*.

5. *!emojisticker*
Konversi emoji ke stiker.
Aliases: *emojistiker*
Usage: *!emojisticker* emoji

6. *!findsticker*
Untuk mencari sticker yang kamu cari
Aliases: *findstiker*
Usage: *!findsticker* teks

7. *!stickermeme*
Buat sticker meme.
Aliases: *stcmeme*
Usage: Kirim gambar dengan caption *!stickermeme* teks_atas | teks_bawah atau reply gambar dengan caption *!stickermeme* teks_atas | teks_bawah.

8. *!ttp*
Membuat stiker text.
Aliases: -
Usage: *!ttp* teks

9. Random Sticker.
Mengirim sticker dengan random.
Aliases: -
List: 
*!nimestick*
*!patrik*
*!doge*
*!bucinstick*
*!gurastick*


10. *!stickerp*
Membuat stiker tanpa crop.
Aliases: -
Usage: Kirim atau reply gambar dengan caption *!stickerp*

11. *!stickernobg*
Membuat stiker dengan menghapus background.
Aliases: -
Usage: Kirim atau reply gambar dengan caption *!stickernobg*

12. *!ttp2*
Membuat stiker text.
Aliases: -
Usage: *!ttp2* teks

13. *!ttp3*
Membuat stiker text.
Aliases: -
Usage: *!ttp3* teks

14. *!attp*
Membuat stiker text gif.
Aliases: -
Usage: *!attp* teks

15. *!sfire*
Membuat stiker gif efek fire.
Aliases: -
Usage: Kirim atau reply gambar dengan caption *!sfire*

16. *!circle*
Membuat stiker dengan crop lingkaran.
Aliases: -
Usage: Kirim atau reply gambar dengan caption *!circle*
    `
}

exports.menuWeeaboo = (prefix) => {
    return `
*── 「 WEEABOO 」 ──*

1. *!neko*
Mengirim foto neko girl.
Aliases: -
Usage: *!neko*

2. *!wallpaper*
Mengirim wallpaper anime.
Aliases: *wp*
Usage: *!wallpaper*

3. *!kemono*
Mengirim foto kemonomimi girl.
Aliases: -
Usage: *!kemono*

4. *!kusonime*
Mencari info anime dan link download batch di Kusonime.
Aliases: -
Usage: *!kusonime* judul_anime

5. *!kusonimedl*
link download di kusonime.
Aliases: -
Usage: *!kusonimedl* link

6. *!wait*
Mencari source anime dari screenshot scene.
Aliases: -
Usage: Kirim screenshot dengan caption *!wait* atau reply screenshot dengan caption *!wait*.

7. *!source*
Mencari source dari panel doujin, ilustrasi, dan gambar yang berhubungan dengan anime.
Aliases: *sauce*
Usage: Kirim gambar dengan caption *!source* atau reply gambar dengan caption *!source*.

8. *!waifu*
Mengirim random foto waifu.
Aliases: -
Usage: *!waifu*

9. *!otakudesu*
Cek update terbaru otakudesu.
Aliases: -
Usage: *!otakudesu*

10. *!anime*
Cari anime.
Aliases: -
Usage: *!anime* judul

11. *!otakudesudl*
Link downnload otakudesu 
Aliases: -
Usage: *!otakudesudl* link

12. *!husbu*
Mengirim random pict husbu.
Aliases: -
Usage: *!husbu*

13. *!manga*
Cari manga.
Aliases: -
Usage: *!manga* judul

14. *!loli*
Mengirim random pict loli.
Aliases: -
Usage: *!loli*

15. *!elf*
Mengirim random pict elf.
Aliases: -
Usage: *!elf*

16. *!shota*
Mengirim random pict shota.
Aliases: -
Usage: *!shota*

17. *!fanart*
Mengirim random pict fanart.
Aliases: -
Usage: *!fanart*

18. *!pixivsearch*
Mencari pict from pixiv.
Aliases: -
Usage: *!pixivsearch* query

19. *!genshininfo*
Mencari informasi karakter genshin.
Aliases: -
Usage: *!genshininfo* nama_chara

20. *!quotesnime*
Random quotes anime.
Aliases: -
Usage: *!quotesnime*

21. *!konachan*
Cari random pict konnachan.
Aliases: -
Usage: *!konnachan* query
   `
}

exports.menuFun = (prefix) => {
    return `
*── 「 FUN FEATURE 」 ──*

1. *!partner*
Weton jodoh.
Aliases: *pasangan*
Usage: *!partner* nama | pasangan

3. *!zodiac*
Ramalan zodiak Mingguan.
Aliases: *zodiak*
Usage: *!zodiac* zodiak

4. *!write*
Membuat catatan tulisan di buku.
Aliases: *nulis*
Usage: *!write* teks

5. *!simi*
Chat SimiSimi.
Aliases: -
Usage: *!simi* teks

6. *!tod*
Bermain truth or dare.
Aliases: -
Usage: *!tod*

7. *!weton*
Kirim ramalan weton.
Aliases: -
Usage: *!weton* tanggal | bulan | tahun

8. *!citacita*
Meme cita-cita.
Aliases: -
Usage: *!citacita*

9. *!readmore*
Generate teks baca selengkapnya.
Aliases: -
Usage: *!readmore* teks1 | teks2

10. *!reminder*
Pengingat. 
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *!reminder* 10s | pesan_pengingat

11. *!purba*
Generate purba text.
Aliases: -
Usage: *!purba* text

12. *!toxic*
Random toxic.
Aliases: -
Usage: *!toxic*

13. *!motivasi*
Kata-kata motivasi.
Aliases: -
Usage: *!motivasi*

14. *!afk*
Set akun kamu ke mode AFK, aku akan mengirim pesan ke orang yang me-mention kamu.
Aliases: -
Usage: *!afk* alasan. Kirim pesan ke grup untuk menonaktifkan mode AFK.

15. *!kbbi*
Mengirim definisi kata dari KBBI.
Aliases: -
Usage: *!kbbi* teks

16. *!say*
Bot akan mengulang pesan mu.
Aliases: -
Usage: *!say* teks

17. *!meme*
Bot akan mengirim meme secara random.
Aliases: -
Usage: *!meme*

18. *!memeindo*
Bot akan mengirim meme indo secara random.
Aliases: -
Usage: *!meme*

19. *!darkjoke*
Bot akan mengirim dark joke alay versi tiktok secara random.
Aliases: darkjokes
Usage: *!darkjoke*

20. *!caklontong*
Random kuis caklontong.
Aliases: -
Usage: *!caklontong*

21. *!univ*
Mencari info universitas
Aliases: university, universitas
Usage: *!univ* query

22. *!ganteng*
Bot akan mentag random member grup.
Aliases: -
Usage: *!ganteng*

23. *!Sange*
Bot akan mentag random member grup.
Aliases: -
Usage: *!sange*

24. *!babi*
Bot akan mentag random member grup.
Aliases: -
Usage: *!babi*

25. *!cerpen*
Bot akan mengirim random cerpen.
Aliases: -
Usage: *!cerpen

26. *!puisi*
Bot akan mengirim random puisi.
Aliases: -
Usage: *!puisi

27. *!email*
Spam Email.
Aliases: -
Usage: *!email* contact.olabdev.my.id | subjek | pesan

28. *!tebakbendera*
Random kuis tebak bendera*
Aliases: -
Usage: *!tebakbendera*

29. *!jamdunia*
Bot akan mengkonversi jam dunia sesuai query.
Aliases: -
Usage: *!jamdunia* kota

30. *!fckmylife*
Bot akan mengirim random fuckmylife.
Aliases: fml
Usage: *!fckmylife*

31. *!nickepep*
Bot akan mengirim random nickname game ff.
Aliases: nickff
Usage: *!nickepep*

32. *!tebakgambar*
Random kuis tebak gambar*
Aliases: -
Usage: *!tebakgambar*

33. *!family100
Random kuis family100
Aliases: -
Usage: *!family100

34. *!alay*
mengubah tulisan menjadi mock font.
Aliases: mock
Usage: *!alay* text

35. *!hilih*
Giti iji gi pihim.
Aliases: -
Usage: *!hilih* text

36. *!bucin*
Random kata kata bucin.
Aliases: -
Usage: *!bucin*

37. *!katabijak*
Kata-kata random.
Aliases: -
Usage: *!katabijak*

38. *!bapakfont*
Mengubah tulisan menjadi cirikhas bApack BaPacK.
Aliases: -
Usage: *!bapakfont* text

39. *!artinama*
Mencari artinama seseorang.
Aliases: -
Usage: *!artinama* nama

40. *!joke*
Random joke.
Aliases: -
Usage: *!joke*

41. *!creepyfact*
Mengambil random fakta creepy.
Aliases: -
Usage: *!creepyfact*

42. *!jumlahhuruf*
Menghitung huruf.
Aliases: -
Usage: *!jumlahhuruf* teks

43. *!balikhuruf*
Bot akan membalik huruf.
Aliases: -
Usage: *!balikhuruf* teks

44. *!howgay*
Rate gay member.
Aliases: -
Usage: *!howgay* nama

45. *!whipped*
Rate kebucinan seseorang
Aliases: -
Usage: *!whipped* nama

46. *!hidetag*
Hidetag versi lawack.
Aliases: -
Usage: *!hidetag* teks

47. *!onecak*
Random onecak meme.
Aliases: -
Usage: *!onecak*

48. *!ramaljadian*
Kirim ramalan tanggal jadian.
Aliases: -
Usage: *!ramaljadian* tanggal | bulan | tahun

49. *!fakename*
Random nama palsu.
Aliases: -
Usage: *!fakename*

50. *!namaninja*
Random nama ninja.
Aliases: -
Usage: *!namaninja* nama   
    `
}
exports.menuImage = (prefix) => {
    return `
*── 「 EFFECT AND MANIPULATION 」 ──*

1. *.phcomment*
Membuat capton ala PH comment., nantinya akan membutuhkan image profil whatsapp.
Aliases: -
Usage: *.phcomment* username | teks

2. *.triggered*
Membuat efek triggered dari gambar.
Aliases: -
Usage: Kirim gambar dengan caption *.triggered* atau reply pesan orang dengan *.triggered* atau bisa gunakan command *.triggered* langsung.

3. *.kiss*
Kiss someone ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Kirim gambar dengan caption *.kiss* atau reply gambar dengan *.kiss*.

4. *.wasted*
Membuat gambar Wasted GTA V.
Aliases: -
Usage: Upload foto dengan caption *.wasted*

5. *.gay*
Membuat gambar efek rainbow.
Aliases: -
Usage: Upload foto dengan caption *.gay*

6. *.wanted*
Membuat gambar efek wanted.
Aliases: -
Usage: Upload foto dengan caption *.wanted*

7. *.wasted*
Membuat gambar This is Beautiful.
Aliases: -
Usage: Upload foto dengan caption *.beautiful*

8. *.hitler*
Membuat gambar There was Hitler :3.
Aliases: -
Usage: Upload foto dengan caption *.hitler*

9. *.trash*
Membuat gambar Sampah/Trash.
Aliases: -
Usage: Upload foto dengan caption *.trash*

10. *.spank*
Spank Someone.
Aliases: -
Usage: Upload foto atau tag gambar dengan caption *.spank*

11. *.threats*
Memanipulasi gambar efek threats.
Aliases: -
Usage: Upload foto dengan caption *.threats*

12. *.glass*
Memanipulasi gambar efek glass.
Aliases: -
Usage: Upload foto dengan caption *.glass*

13. *.greyscale*
Filter gambar efek greyscale.
Aliases: -
Usage: Upload foto dengan caption *.greyscale*

14. *.invert*
Filter gambar efek invert.
Aliases: -
Usage: Upload foto dengan caption *.invert*

15. *.invertgrey*
Filter gambar efek kombinasi invert dan greyscale.
Aliases: -
Usage: Upload foto dengan caption *.invertgrey*

16. *.brightness*
Filter gambar efek brightness.
Aliases: -
Usage: Upload foto dengan caption *.brightness*

17. *.threshold*
Filter gambar.
Aliases: -
Usage: Upload foto dengan caption *.threshold*

18. *.sepia*
Filter gambar.
Aliases: -
Usage: Upload foto dengan caption *.sepia*

19. *.buriq*
Menurunkan kualitas gambar.
Aliases: -
Usage: Upload foto dengan caption *.buriq*

20. *.deepfry*
Memanipulasi Gambar deep.
Aliases: -
Usage: Upload foto dengan caption *.deepfry*

22. *.magik*
Filter Gambar effect.
Aliases: -
Usage: Upload foto dengan caption *.magik*

23. *.chaptcha*
Filter Gambar effect.
Aliases: -
Usage: Upload foto dengan caption *.chaptcha* text

24. *.ytcomment*
Membuat capton ala YT command , nantinya akan membutuhkan image profil whatsapp.
Aliases: -
Usage: *.ytcomment* username | teks

25. *.fisheye*
Membuat gambar efek fisheye.
Aliases: -
Usage: Upload foto dengan caption *.fisheye*

26. *.pencil*
Membuat gambar efek.
Aliases: -
Usage: Upload foto dengan caption *.pencil*


    
`
}
exports.menuKerang = (prefix) => {
    return `
*── 「 KERANG 」 ──*

1. *${prefix}kapankah*
Mengambil jawaban random dari bot.
Aliases: -
Usage: *${prefix}kapankah* text

2. *${prefix}bisakah*
Mengambil jawaban random dari bot.
Aliases: -
Usage: *${prefix}bisakah* text

3. *${prefix}rate*
Mengambil jawaban random dari bot
Aliases: nilai
Usage: *${prefix}rate* pertanyaan
    `
}

exports.menuModeration = (prefix) => {
    return `
*── 「 MODERATION GROUP 」 ──*

1. *!add*
Menambah user ke dalam group.
Aliases: -
Usage: *!add* 628xxxxxxxxxx

2. *!kick*
Mengeluarkan member dari grup.
Aliases: -
Usage: *!kick* @member1

3. *!promote*
Promote member menjadi admin.
Aliases: -
Usage: *!promote* @member1

4. *!demote*
Demote member dari admin.
Aliases: -
Usage: *!demote* @member1

5. *!leave*
Bot akan meninggalkan grup.
Aliases: -
Usage: *!leave*

6. *!tagall*
Mention semua member group.
Aliases: *everyone*
Usage: *!tagall*

7. *!nsfw*
Mematikan/menyalakan mode NSFW.
Aliases: -
Usage: *!nsfw* enable/disable

8. *!groupicon*
Mengganti icon grup.
Aliases: -
Usage: Kirim gambar dengan caption *!groupicon* atau reply gambar dengan caption *!groupicon*.

9. *!antilink*
Mematikan/menyalakan fitur anti-group link.
Aliases: -
Usage: *!antilink* enable/disable

10. *!welcome*
Mematikan/menyalakan fitur welcome di grup agar menyambut setiap kedatangan member.
Aliases: -
Usage: *!welcome* enable/disable

11. *!autosticker*
Mematikan/menyalakan fitur auto-stiker. Setiap foto yang dikirim akan selalu diubah ke stiker.
Aliases: *autostiker, autostik*
Usage: *!autostiker* enable/disable

12. *!antinsfw*
Mematikan/menyalakan fitur anti-NSFW link.
Aliases: -
Usage: *!antinsfw* enable/disable

13. *!group*
Mematikan/menyalakan group.
Aliases: -
Usage: *!group* enable/disable

14. *!linkgroup*
Cek link invite group.
Aliases: -
Usage: *!linkgroup*

15. *!ownergroup*
Memberikan/tag pembuat grup.
Aliases: -
Usage: *!ownergrup*

16. *!mute*
Membisukan bot di grup.
Aliases: -
Usage: *!mute* enable/disable

17. *!revoke*
Setel ulang link invite group.
Aliases: -
Usage: *!revoke*

18. *!antivirtex*
Detector Virtex.
Aliases: -
Usage: *!antivirtex* enable/disable
    on  `
}


exports.menuNsfw = (prefix) => {
    return `
*── 「 NSFW 」 ──*

1. *!lewds*
Mengirim pict anime lewd.
Aliases: *lewd*
Usage: *!lewds*

2. *!nhentai*
Mengirim info doujinshi dari nHentai.
Aliases: *nh*
Usage: *!nhentai* kode

3. *!nekoinfo*
Mengirim info nekopoi via link.
Aliases: -
Usage: *!nekoinfo* link_nekopoi

4. *!waifu18*
Mengirim random foto waifu NSFW.
Aliases: -
Usage: *!waifu18*

5. *!fetish*
Mengirim fetish pics.
Aliases: -
Usage: *!fetish* <ecchi/lewdanimegirls/hentai/hentaifemdom/hentaiparadise/hentai4everyone/animearmpits/animefeets/animethighss/animebooty/biganimetiddies/animebellybutton/sideoppai/ahegao/hentaianal/anal/pussy/animepussy/yaoi/yuri/hentaiblowjob/blowjob/futanari/kitsunehentai/midriffhentai/erohentai/cumhentai/paizuri>

6. *!xhamstersearch*
xhamster search
Aliases: -
Usage *!xhamstersearch* link

7. *!lewdavatar*
Mengirim random avatar lewd.
Aliases: -
Usage: *!lewdavatar*

8. *!femdom*
Mengirim random foto ero femdom.
Aliases: -
Usage: *!femdom*

9. *!xnxxsearch*
xnxxsearch search.
Aliases: -
Usage: *!xnxxsearch* query

10. *!cersex*
Random cersex.
Aliases: ceritasex
Usage: *!cersex*

11. *!lewdholo*
Mengirim random hololive lewd.
Aliases: -
Usage: *!lewdholo*

12. *!ecchi*
Mengirim random pict ecchi(-soft hentai).
Aliases: -
Usage: *!ecchi*

13. *!xnxxdl*
Download video xnxx.
Aliases: -
Usage: *!xnxxdl* link_nya

14. *!xhamsterdl*
Download video xvideos.
Aliases: -
Usage: *!xhamsterdl* link_nya
    `
}

exports.menuOwner = (prefix) => {
    return `
*── 「 OWNER MENU 」 ──*
Halo Owner-sama ヽ(・∀・)ﾉ!

1. *!bc*
Membuat broadcast.
Aliases: -
Usage: *!bc* <teks> 

2. *!clearall*
Menghapus semua chat di akun bot.
Aliases: -
Usage: *!clearall*

3. *!ban*
Menambah/menghapus user yang diban.
Aliases: -
Usage: *!ban* add/del 62812xxxxxxxx

4. *!leaveall*
Keluar dari semua grup.
Aliases: -
Usage: *!leaveall*

5. *>*
Evaluate kode JavaScript.
Aliases: -
Usage: *>* kode eval

6. *!shutdown*
Men-shutdown bot.
Aliases: -
Usage: *!shutdown*

7. *!premium*
Menambah/menghapus user premium.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *!premium* add/del 62812xxxxxxxx 30d

8. *!setstatus*
Mengganti status about me.
Aliases: *setstats setstat*
Usage: *!status* teks

9. *!exif*
Atur WM stiker bot.
Aliases: -
Usage: *!exif* pack_name | author_name

10. *!join*
Join grup via link.
Aliases: -
Usage: *!join* link_group

11. *!setname*
Mengganti status nama.
Aliases: *setnama*
Usage: *!setnama* teks

12. *!give*
Give Level ke member.
Aliases: -
Usage: *!give* 62812xxxx  jumlah_xp

13. *!addupdate*
Nambah list update bot.
Aliases: -
Usage: *!addupdate* query

14. *!sewa*
Menambah/menghapus group sewa.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *!sewa* add/del 30d.

15. *!reset*
Reset database bot.
Aliases: -
Usage: *!reset*
    
   `
}

exports.menuLeveling = (prefix) => {
    return `
*── 「 LEVELING 」 ──*

1. *!level*
Untuk melihat level kamu.
Aliases: -
Usage: *!level*

2. *!leaderboard*
Untuk melihat leaderboard.
Aliaases: -
Usage: *!leaderboard*

3. *!limit*
Cek Limit Kamu.
Aliases: *ceklimit*
Usage: *!limit*

4. *!dadu*
Bot akan mengirim dadu dan dapatkan sejumlah Xp.
Aliases: -
Usage: *!dadu*

5. *!slot*
Game Slot hadiah Xp.
Aliases: -
Usage: *!slot*

6. *!suit*
Bot akan mengirim suit dan dapatkan sejumlah Xp.
Aliases: -
Usage: *!suit*

7. *!balance*
Cek Uang Kamu.
Aliases: *atm*, *bal*, *uangku*
Usage: *!balance*

8. *!buylimit*
Beli Limit Kamu.
Aliases: *-*
Usage: *!buylimit* jumlah limit

9. *!buyglimit*
Beli Limit Game Kamu.
Aliases: *-*
Usage: *!buyglimit* jumlah limit
    
    `
}

exports.menuPray = (prefix) => {
    return `
*── 「 PRAY 」 ──*

1. *!listsurah*
Melihat list surah Al-Qur'an.
Aliases: -
Usage: *!listsurah*

2. *!surah*
Mengirim surah Al-Qur'an.
Aliases: -
Usage: *!surah* nomor_surah

3. *!js*
Mengetahui jadwal shalat di daerah kalian
Aliases: jadwalshalat
Usage: *!js* namadaerah

4. *!alkitab*
Al-Kitab search.
Aliases: -
Usage: *!alkitab* nama_injil

5. *!hadis*
Hadis search.
Aliases: -
Usage: *!hadis* nama no_hadis

6. *!kisahnabi*
Cerita kisah 25 nabi.
Aliases: -
Usage: *!kisahnabi* nama_nabi


_Index of [13]_
    
    `
}

exports.menuMisc = (prefix) => {
    return `

*── 「 MEDIA AND MISC 」 ──*

1. *!lirik*
Mencari lirik lagu.
Aliases: -
Usage: *!lirik* judul_lagu

2. *!shortlink*
Membuat shortlink.
Aliases: -
Usage: *!shortlink* link

3. *!wikipedia*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wiki*
Usage: *!wikipedia* teks

4. *!igstalk*
Stalk akun Instagram.
Aliases: -
Usage: *!igstalk* username

5. *!gsmarena*
Mengirim info spesifikasi HP dari GSMArena.
Aliases: -
Usage: *!gsmarena* model_hp

6. *!receipt*
Mengirim resep makanan.
Aliases: *resep*
Usage: *!receipt* nama_makanan

7. *!ytsearch*
Mengirim hasil pencarian di YouTube.
Aliases: *yts*
Usage: *!ytsearch* query

8. *!tts*
Membuat Text to Speech. Kalian perlu kode bahasa setiap menggunakan, cek di sini https://id.wikipedia.org/wiki/Daftar_bahasa_menurut_ISO_639-2
Aliases: -
Usage: *!tts* kode_bahasa | teks


9. *!distance*
Untuk mengetahui jarak dari kotamu ke kota yang kamu tuju
Aliases: -
Usage: *!distance* kota_asal | kota_tujuan

10. *!math*
Kalkulator.
* = Perkalian
+ = Pertambahan
- = Pengurangan
/ = Pembagian
Aliases: -
Usage: *!math* 12*12

11. *!mutual*
Dapatkan kontak WA random.
Aliases: -
Usage: *!mutual*

12. *!whois*
IP look-up.
Aliases: -
Usage: *!whois* ip_address

13. *!play*
Play audio dari YouTube.
Aliases: - 
Usage: *!play* judul_video


14. *!linesticker*
Sticker Line terbaru.
Aliases: *linestiker*
Usage: *!linesticker*


15. *!cekongkir*
Cek ongkos kirim.
Aliases: -
Usage: *!ongkir* kurir | asal | tujuan

16. *!movie*
Cari film.
Aliases: -
Usage: *!movie* judul

17. *!imagetourl*
Image uploader.
Aliases: *imgtourl*
Usage: Kirim gambar dengan caption *!imagetourl* atau reply gambar dengan caption *!imagetourl*.

18. *!infohoax*
Cek update info hoax.
Aliases: -
Usage: *!infohoax*

19. *!trending*
Cek trending di Twitter suatu negara.
Aliases: -
Usage: *!trending* namanegara

20. *!jobseek*
Mencari info lowongan kerja.
Aliases: -
Usage: *!jobseek*

21. *!fakta*
Memberikan ranfom fakna unik.
Aliases: fact
Usage: *!fact*

22. *!quote*
Memberikan quotes random dari tokoh terkenal.
Aliases: quotes
Usage: *!quotes*

23. *!jadwalbola*
Memberikan Informasi Jadwal bola terbaru.
Aliases: jbola
Usage: *!jadwalbola*

23. *!berita*
Memberikan Info berita terbaru.
Aliases: news
Usage: *!berita*

24. *!pantun*
Memberikan pantun random .
Aliases: -
Usage: *!pantun*

25. *!cat*
Memberikan gambar random kucing.
Aliases: kucing
Usage: *!cat*

26. *!pict*
Memberikan gambar random pict sesuai query.
Aliases: -
Usage: *!pict* query

31. *!cuaca*
Prediksi cuaca bersumber bmkg.
Aliases: weather
Usage: *!cuaca* namadaerah

32. *!tiktokhastag*
Mencari tiktok berdasarkan hastag.
Aliases: tiktoksearch
Usage: *!tiktokhastag* query

35. *!infoalamat*
Dapatkan info alamat.
Aliases: -
Usage: *!infoalamat* query

36. *!gitstalk*
Stalk akun Github.
Aliases: gitprofile
Usage: *!gitstalk* username

37. *!happymod*
Memberikan link download apk mod dari happymod.
Aliases: -
Usage: *!happymod* namaapk

38. *!moddroid*
Dapatkan aplikasi mod dari moddroid.
Aliases: -
Usage: *!moddroid* namaapk

39. *!corona*
Dapatkan info kasus corona suatu daerah.
Aliases: coronavirus
Usage: *!corona* negara

40. *!wikien*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wikien*
Usage: *!wikien* teks

41. *!tiktokstalk*
Stalk akun Tiktok.
Aliases: -
Usage: *!tiktokstalk* username

42. *!shortlink2*
Membuat shortlink alternatif. ( Bit.ly )
Aliases: -
Usage: *!shortlink2* link

43. *!shortlink3*
Membuat shortlink alternatif. ( schd.co )
Aliases: -
Usage: *!shortlink3* link

44. *!kurs*
Info kurs update Indonesia.
Aliases: -
Usage: *!kurs* mata_uang_negara

45. *!readqr*
Membaca kode qr.
Aliases: -
Usage: Upload gambar qr yang akan dibaca dengan caption *!readqr*

46. *!wpsearch*
Mencari wallpaper berdasarkan query
Aliases: *wallpapersearch*
Usage: *!wpsearch* query

47. *!wattpadsearch*
Mencari novel.
Aliases: -
Usage: *!wattpadsearch* judul

48. *!wattpadinfo*
Mengambil Informasi wattpad berdasarkan link.
Aliases: -
Usage: *!wattpadinfo* link

49. *!twtstalk*
Stalk akun Twitter.
Aliases: -
Usage: *!twtstalk* username

50. *!google*
Mencari query from google.
Aliases: -
Usage: *!google* query

51. *!freepik*
Mengirim gambar source freepik.
Aliases: -
Usage: *!freepik* query

52. *!translate*
Menerjemahkan teks.
Aliases: -
Usage: *!translate* teks_nya | kode_bahasa

53. *Animal Fact*
Mencari Fakta Hewan.
Tersedia: 
1.*!dogfact*
2.*!catfact*
3.*!pandafact*
4.*!foxfact*
5.*!birdfact*
6.*!koalafact*
7.*!racoonfact*
8.*!kangaroofact*

54. *!kelpersegi*
Menghitung keliling persegi.
Aliases: -
Usage: *!kelpersegi* angka

55. *!luaspersegi*
Menghitung Luas persegi.
Aliases: -
Usage: *!luaspersegi* angka

56. *!kuadrat*
Menghitung kuadrat.
Aliases: -
Usage: *!kuadrat* angka

57. *!kubik*
Menghitung kubik.
Aliases: -
Usage: *!kubik* angka

58. *!apkpure*
Mencari apk dari source apkpure.
Aliases: -
Usage: *!apkpure* teks

59. *!chord*
Mencari chord lagu.
Aliases: -
Usage: *!chord* judul_lagu

60. *!jadwaltv*
Mencari jadwal tv setempat.
Aliases: -
Usage: *!jadwaltv* nama_siaran

61. *!qrmaker*
Buat qr.
Aliases: -
Usage: *!qrmaker* text

62. *!colourviewer*
Mengirim warna sesuai kode hex 
Aliases: -
Usage: *!colourviewer* kode_hex

63. *!rgbtohex*
Mengubah rgb ke format hex.
Aliases: -
Usage: *!tgbtohex* kode_rgb

64. *!hextorgb*
Mengubah kode hex ke rgb.
Aliases: -
Usage: *!hextorgb* kode_hex

65. *!texttobinary*
Mengubah text ke format binary.
Aliases: -
Usage: *!texttobinary* teks

66. *!binarytotext*
Mengubah text format binnary ke text biasa.
Aliases: -
Usage: *!binarytotext* tes

67. *!base64totext*
Recode base64 ke teks.
Aliases: -
Usage: *!base64totext* base64_format

68. *!texttobase64*
Encode teks ke base64.
Aliases: -
Usage: *!texttobase64* teks

69. *!ccgenerator*
Generate cc.
Aliases: -
Usage: *!ccgenerator*

70. *!playmp4*
Play video dari YouTube.
Aliases: *mp4*
Usage: *!playmp4* judul_video

71. *!imagetopdf*
Convert to pdf.
Aliases: -
Usage: Kirim gambar atau reply gambar dengan caption *!imagetopdf*

72. *!ssweb*
Screenshot web via link.
Aliases: -
Usage: *!ssweb* link

73. *!imagetopdf*
Image convert.
Aliases: *imgtopdf*
Usage: Kirim gambar dengan caption *!imagetopdf* atau reply gambar dengan caption *!imagetopdf*.

74. *!jadwaltvnow*
Mencari jadwal tv setempat langsung.
Aliases: -
Usage: *!jadwaltvnow* nama_siaran

75. *!liststicker*
Memberikan list sticker yang ada di database bot.
Aliases: -
Usage: *!liststicker*

76. *!listvn*
Memberikan list vn yang terdaftar di database bot.
Aliases: -
Usage: *!listvn*

77. *!listimage*
Memberikan list image yang terdaftar di database bot.
Aliases: -
Usage: *!listimage*

78. *!getimage*
Mengambil gambar yang terdaftar di database bot.
Aliases: -
Usage: *!getimage* query

79. *!listrespon*
Memberikan list respon yang terdaftar di database bot.
Aliases: -
Usage: *!listrespon*

80. *!shortlink4*
Membuat shortlink alternatif ( Cuttly )
Aliases: -
Usage: *!shortlink4* link

81. *!shortlink5*
Membuat shortlink alternatif ( Shorturl-at )
Aliases: -
Usage: *!shortlink5* link

82. *!ytstalk*
Stalk akun youtube channel.
Aliases: -
Usage: *!ytstalk* nama_channel
    `
}

exports.menuBot = (prefix) => {
    return `
*── 「 BOT STAT 」 ──*

1. *!rules*
Wajib baca.
Aliases: *rule*
Usage: *!rules*

2. *menu*
Menampilkan commands yang tersedia.
Aliases: *help*
Usage: *menu*

3. *!status*
Menampilkan status bot.
Aliases: *stats*
Usage: *!status*

4. *!listblock*
Cek nomor yang diblokir.
Aliases: -
Usage: *!listblock*

5. *!ping*
Cek speed bot.
Aliases: *p*
Usage: *!ping*

6. *!delete*
Hapus pesan dari bot.
Aliases: *del*
Usage: Reply pesan yang dihapus dengan caption *!delete*.

7. *!report*
Laporkan bug ke dev.
Aliases: -
Usage: *!report* pesan

8. *!tos*
Syarat dan ketentuan. (TOS)
Aliases: -
Usage: *!tos*

9. *!owner*
Mengirim kontak owner.
Aliases: -
Usage: *!owner*

10. *!getpic*
Mengirim foto profil user.
Aliases: -
Usage: *!getpic* @user/group

11. *!premiumcheck*
Cek masa aktif premium.
Aliases: *cekpremium*
Usage: *!premiumcheck*

12. *!premiumlist*
Cek list user premium.
Aliases: *listpremium*
Usage: *!premiumlist*

13. *!runtime*
Memberikan berapa jam bot aktif.
Aliases: -
Usage: *!runtime*

14. *!listgroup*
Memberikan list group bot.
Aliases: -
Usage: *!listgroup*

15. *!sider*
Memberikan member yang sudah membaca pesan bot.
Aliases: *chatinfo*
Usage: *!sider*

16. *!uptopremium*
Memberikan informasi manfaat dan harga upgrade ke premium.
Aliases: -
Usage: *!uptopremium*

17. *!update*
Memberikan list update bot.
Aliases: -
Usage: *!update*

18. *!ceksewa*
Cek masa aktif group sewa.
Aliases: *-*
Usage: *!ceksewa*

19. *!sewalist*
Cek list group sewa.
Aliases: *listsewa*
Usage: *!sewalist*

    
    `
}

exports.menuPrice = (owner, pushname) => {
    return `
*── 「 PRICE LIST 」 ──*
 
*Hai kak  ${pushname}*
*Harga Sewa Bot*
*15K/Group Selama 1 Bulan*

*Pembayaran Bisa Melalui Metode Pembayaran di Bawah:*
*XL = 085692949920*
*Dana = 085692949920*

*_note_*:
*Jika kalian ingin menjadi owner bot,bisa chat owner untuk price nya :D*
wa.me/6285692949920

    `
}

exports.UpToPremi = (ownerNumber, prefix) => {
    return `
*── 「 UPGRADE PREMIUM 」 ──*

*Tarif Premium User adalah 10K Perbulan*
*Keuntungan Premium Diantaranya:*
♲ *Bebas memakai fitur premium*
♲ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*

*Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*
*XL = 085692949920*
*DANA = 085692949920*

*Info Lebih Lengkap Chat Owner, Ketik ${prefix}owner
*_note_*:
*Pembelian Premium yang disertai SewaBot hanya akan membayar 20K (Diskon 5K)*

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
085692949920 (Dana/Xl)


Terima kasih!

Contact person Owner:
wa.me/${ownerNumber} (Owner)

Untuk melihat script yang bot gunakan,ketik ${prefix}sc
    `
}
