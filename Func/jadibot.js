function _0x28f1(_0x2d211f,_0xe22328){const _0x12a68a=_0x12a6();return _0x28f1=function(_0x28f17a,_0x27bf5e){_0x28f17a=_0x28f17a-0x16d;let _0x44e551=_0x12a68a[_0x28f17a];return _0x44e551;},_0x28f1(_0x2d211f,_0xe22328);}const _0x21dd07=_0x28f1;(function(_0xc98267,_0x42b8fd){const _0x3356f7=_0x28f1,_0x3fbfa2=_0xc98267();while(!![]){try{const _0x226eb5=-parseInt(_0x3356f7(0x17d))/0x1*(parseInt(_0x3356f7(0x190))/0x2)+-parseInt(_0x3356f7(0x176))/0x3*(-parseInt(_0x3356f7(0x16d))/0x4)+-parseInt(_0x3356f7(0x181))/0x5*(parseInt(_0x3356f7(0x177))/0x6)+-parseInt(_0x3356f7(0x174))/0x7*(-parseInt(_0x3356f7(0x171))/0x8)+-parseInt(_0x3356f7(0x178))/0x9*(-parseInt(_0x3356f7(0x175))/0xa)+-parseInt(_0x3356f7(0x186))/0xb*(parseInt(_0x3356f7(0x17b))/0xc)+parseInt(_0x3356f7(0x188))/0xd*(parseInt(_0x3356f7(0x18d))/0xe);if(_0x226eb5===_0x42b8fd)break;else _0x3fbfa2['push'](_0x3fbfa2['shift']());}catch(_0x14602e){_0x3fbfa2['push'](_0x3fbfa2['shift']());}}}(_0x12a6,0xbde9f));const {MessageType}=require(_0x21dd07(0x183)),{WAConnection}=require(_0x21dd07(0x183)),qrcodes=require(_0x21dd07(0x187)),fs=require('fs'),conn=new WAConnection();conn[_0x21dd07(0x185)]=[0x2,0x847,0x6];const base64ToImage=require(_0x21dd07(0x191));exports[_0x21dd07(0x18e)]=async function(_0x3d6ba4,_0x199372,_0x569249,_0x50653e,_0x47505c){const _0x12d7d2=_0x21dd07;conn['on']('qr',async _0x3fe54e=>{const _0x16b050=_0x28f1;url=await qrcodes[_0x16b050(0x17a)](_0x3fe54e),auth=!![],buff=await Buffer[_0x16b050(0x173)](url[_0x16b050(0x180)](_0x16b050(0x17e))[0x1],'base64'),await fs[_0x16b050(0x189)](_0x16b050(0x18a),buff);let _0x55dae5=await _0x3d6ba4[_0x16b050(0x184)](_0x199372,fs[_0x16b050(0x170)](_0x16b050(0x18a)),MessageType[_0x16b050(0x18c)],{'quoted':_0x47505c,'caption':'Scan\x20QR\x20ini\x20untuk\x20jadi\x20bot\x20sementara!\x0a1.\x20Klik\x20titik\x20tiga\x20di\x20pojok\x20kanan\x20atas\x0a2.\x20Ketuk\x20WhatsApp\x20Web\x0a3.\x20Scan\x20QR\x20ini\x20\x0a\x0aQR\x20Expired\x20dalam\x2020\x20detik'});setTimeout(()=>{const _0x214363=_0x16b050;_0x3d6ba4['deleteMessage'](_0x199372,_0x55dae5[_0x214363(0x18f)]);},0x7530);}),conn['on']('open',()=>{const _0x561014=_0x28f1;console['log'](_0x561014(0x172));const _0x43d7eb=conn['base64EncodedAuthInfo']();fs[_0x561014(0x189)]('.'+_0x569249+_0x561014(0x18b),JSON[_0x561014(0x16e)](_0x43d7eb,null,'\x09'));}),conn['on']('chat-update',async _0x265288=>{require('./Manik.js')(conn,_0x265288);}),await conn[_0x12d7d2(0x17f)]()['then'](async({user:_0x549597})=>{const _0x46e975=_0x12d7d2;_0x50653e('Berhasil\x20tersambung\x20dengan\x20WhatsApp\x20-\x20mu.\x0a*NOTE:\x20Ini\x20cuma\x20numpang*\x0a'+JSON[_0x46e975(0x16e)](_0x549597,null,0x2));});},exports['stopjadibot']=async function(_0x5f2303,_0x5a9b6b,_0x23b4c3){const _0x393e05=_0x21dd07;_0x5f2303[_0x393e05(0x184)](_0x5a9b6b,_0x393e05(0x16f),MessageType[_0x393e05(0x179)]),await fs[_0x393e05(0x17c)]('.'+_0x23b4c3+_0x393e05(0x18b)),conn[_0x393e05(0x182)]();};function _0x12a6(){const _0x5f2d14=['toDataURL','8172Mqcfwl','unlinkSync','13bPXXjq','data:image/png;base64,','connect','split','739985GhsDOb','close','@adiwajshing/baileys','sendMessage','version','18106ntFBsf','qrcode','1405729UjbTZa','writeFileSync','./jadibot.jpg','.json','image','42IMbjeD','jadibot','key','58422XTQPhz','base64-js','784468FUiNWA','stringify','Kamu\x20tidak\x20terdaftar\x20di\x20ListBot!','readFileSync','2728248IuqkzS','credentials\x20update','from','28GjHSrW','12818980aBjjnt','3QWrigQ','36MaZFfU','9urpvfq','text'];_0x12a6=function(){return _0x5f2d14;};return _0x12a6();}