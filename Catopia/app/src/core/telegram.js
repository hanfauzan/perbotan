const a4_0x492198=a4_0x1c91;(function(_0x1dc5d3,_0x4f3ad0){const _0x275867=a4_0x1c91,_0x4b6278=_0x1dc5d3();while(!![]){try{const _0x37da6a=-parseInt(_0x275867(0x111))/0x1*(-parseInt(_0x275867(0x127))/0x2)+parseInt(_0x275867(0x134))/0x3+-parseInt(_0x275867(0x13a))/0x4*(parseInt(_0x275867(0x116))/0x5)+-parseInt(_0x275867(0x145))/0x6*(-parseInt(_0x275867(0x137))/0x7)+-parseInt(_0x275867(0x10f))/0x8*(-parseInt(_0x275867(0x124))/0x9)+-parseInt(_0x275867(0x148))/0xa*(parseInt(_0x275867(0x11e))/0xb)+-parseInt(_0x275867(0x12f))/0xc;if(_0x37da6a===_0x4f3ad0)break;else _0x4b6278['push'](_0x4b6278['shift']());}catch(_0x59bf4b){_0x4b6278['push'](_0x4b6278['shift']());}}}(a4_0x421e,0x9c4e2));import a4_0x1a648f from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';import a4_0x59ace8 from'../utils/logger.js';import{FloodWaitError}from'telegram/errors/RPCErrorList.js';import{Config}from'../../config/config.js';function a4_0x1c91(_0x402f77,_0x255b34){const _0x421e3d=a4_0x421e();return a4_0x1c91=function(_0x1c9197,_0x12c0d1){_0x1c9197=_0x1c9197-0x10f;let _0x1621ec=_0x421e3d[_0x1c9197];return _0x1621ec;},a4_0x1c91(_0x402f77,_0x255b34);}import{HttpsProxyAgent}from'https-proxy-agent';function a4_0x421e(){const _0x235d32=['\x20-\x20Resolving\x20Peer','157356GQdQcT','serverAddress','Session\x20','110082JnkURr','destroy','error','8BziPZj','getTelegramQuery','Your\x20session\x20List\x20:\x0a\x20\x0a','\x20|\x20FloodWait\x20','init','sessions','\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a','\x20-\x20Created','save','\x0a\x20\x0a1.\x20Create\x20Session.\x20\x0a2.\x20Reset\x20Sessions\x20\x0a3.\x20Start\x20Bot\x20\x0a\x20\x0aInput\x20your\x20choice\x20:','TELEGRAM_APP_ID','330oCHNLp','Welcome\x20to\x20Cowtopia\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x0aYour\x20Session\x20List:\x0a','stringify','3236430UGeOHO','sessionCreation','messages','url','getEntity','delay','RequestWebView','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','agent','start','invoke','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:','info','session','16OyTjUp','You\x20don\x27t\x20have\x20any\x20sessions,\x20please\x20create\x20first','545bGmFWl','client','resetSession','sessionName','text','3054785VLSzJb','Enter\x20your\x20Telegram\x20Phone\x20Number\x20?','Invalid\x20input,\x20Please\x20try\x20again','initWebView','\x0a\x20\x0aYou\x20alreay\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:','Enter\x20your\x20Telegram\x20Password?','length','peer','11bfqnrZ','resolvePeer','bot','\x20-\x20Webview\x20Connected','createDir','useSession','4984929aqmWfg','seconds','indexOf','2274WOGtMn','storeSession','warn','getSession','disconnect','\x20|\x20Sleep\x20','android','log','5508312VPAHsw','onBoarding','https://cowtopia-prod.tonfarmer.com/','proxy'];a4_0x421e=function(){return _0x235d32;};return a4_0x421e();}export class Telegram{['storeSession'];constructor(){const _0x57863b=a4_0x1c91;this[_0x57863b(0x114)]=_0x57863b(0x13f),this[_0x57863b(0x14b)]=_0x57863b(0x131),this[_0x57863b(0x120)]='catopia_game_bot';}async[a4_0x492198(0x13e)](){const _0x41e55f=a4_0x492198;try{await this[_0x41e55f(0x130)]();}catch(_0x466503){console[_0x41e55f(0x12e)](_0x466503),a4_0x59ace8[_0x41e55f(0x139)](''+JSON[_0x41e55f(0x147)](_0x466503));throw _0x466503;}}async[a4_0x492198(0x130)](){const _0x20e287=a4_0x492198;try{let _0x2a1208=_0x20e287(0x146);const _0x560c78=Helper[_0x20e287(0x12a)](_0x20e287(0x13f));if(_0x560c78['length']==0x0)_0x2a1208+=_0x20e287(0x153);else for(const _0x1fa98c of _0x560c78){_0x2a1208+='-\x20'+_0x1fa98c+'\x0a';}_0x2a1208+=_0x20e287(0x140),_0x2a1208+=_0x20e287(0x143);const _0x195feb=await a4_0x1a648f[_0x20e287(0x115)](_0x2a1208);if(_0x195feb==0x1)await this[_0x20e287(0x149)]();else{if(_0x195feb==0x2)Helper[_0x20e287(0x113)](this[_0x20e287(0x114)]),await Helper[_0x20e287(0x14d)](0xbb8),await this['onBoarding']();else _0x195feb==0x3?Helper[_0x20e287(0x12a)](this[_0x20e287(0x114)])?.[_0x20e287(0x11c)]==0x0&&(console[_0x20e287(0x154)](_0x20e287(0x110)),await this[_0x20e287(0x130)]()):(console[_0x20e287(0x139)](_0x20e287(0x118)),await this['onBoarding']());}}catch(_0x325c54){throw _0x325c54;}}async[a4_0x492198(0x149)](){const _0x141230=a4_0x492198;try{const _0x5e7c7f=Helper[_0x141230(0x12a)](_0x141230(0x13f));let _0x3c0772=_0x141230(0x13c);for(const _0x2045a3 of _0x5e7c7f){_0x3c0772+=_0x5e7c7f[_0x141230(0x126)](_0x2045a3)+0x1+'.\x20'+_0x2045a3+'\x0a';}_0x5e7c7f[_0x141230(0x11c)]==0x0?_0x3c0772+=_0x141230(0x153):_0x3c0772+=_0x141230(0x11a);const _0x41a242=await a4_0x1a648f['text'](_0x3c0772);this[_0x141230(0x114)]=Helper[_0x141230(0x122)](_0x41a242),await this[_0x141230(0x123)](this[_0x141230(0x114)]),await this[_0x141230(0x12b)](),a4_0x59ace8[_0x141230(0x154)](_0x141230(0x136)+this['sessionName']+'\x20-\x20Created'),console[_0x141230(0x12e)](_0x141230(0x136)+this['sessionName']+_0x141230(0x141)),this[_0x141230(0x128)][_0x141230(0x142)](),await Helper[_0x141230(0x14d)](0xbb8),await this['init']();}catch(_0x3b5608){throw _0x3b5608;}}async[a4_0x492198(0x123)](_0x3647c4,_0x3e6c6e){const _0x62c79=a4_0x492198;try{this[_0x62c79(0x132)]=_0x3e6c6e;const _0x38c1b4={'connectionRetries':0x5};this[_0x62c79(0x132)]&&(_0x38c1b4[_0x62c79(0x150)]=new HttpsProxyAgent(this[_0x62c79(0x132)])),this[_0x62c79(0x128)]=new StoreSession(_0x3647c4),this[_0x62c79(0x112)]=new TelegramClient(this[_0x62c79(0x128)],Config[_0x62c79(0x144)],Config['TELEGRAM_APP_HASH'],_0x38c1b4),this[_0x62c79(0x128)][_0x62c79(0x142)](),await this[_0x62c79(0x112)][_0x62c79(0x151)]({'phoneNumber':async()=>await a4_0x1a648f[_0x62c79(0x115)](_0x62c79(0x117)),'password':async()=>await a4_0x1a648f['text'](_0x62c79(0x11b)),'phoneCode':async()=>await a4_0x1a648f[_0x62c79(0x115)](_0x62c79(0x14f)),'onError':_0x249f58=>{const _0x527f1f=_0x62c79;console[_0x527f1f(0x12e)](_0x249f58['message']);}}),console[_0x62c79(0x12e)]();}catch(_0x3670e9){throw _0x3670e9;}}async[a4_0x492198(0x11f)](){const _0x387f5e=a4_0x492198;try{a4_0x59ace8['info'](_0x387f5e(0x136)+this[_0x387f5e(0x155)]+_0x387f5e(0x133));while(this[_0x387f5e(0x11d)]==undefined){try{this[_0x387f5e(0x11d)]=await this[_0x387f5e(0x112)][_0x387f5e(0x14c)](this[_0x387f5e(0x120)]);break;}catch(_0x4261de){if(_0x4261de instanceof FloodWaitError){const _0x2ed8fd=_0x4261de[_0x387f5e(0x125)];a4_0x59ace8[_0x387f5e(0x129)](this[_0x387f5e(0x112)]['session'][_0x387f5e(0x135)]+_0x387f5e(0x13d)+_0x4261de),a4_0x59ace8[_0x387f5e(0x154)](this[_0x387f5e(0x112)][_0x387f5e(0x155)][_0x387f5e(0x135)]+_0x387f5e(0x12c)+_0x2ed8fd+'s'),await Helper[_0x387f5e(0x14d)]((_0x2ed8fd+0x3)*0x3e8);}else throw _0x4261de;}}}catch(_0x1d1773){throw _0x1d1773;}}async[a4_0x492198(0x12b)](){const _0x56b3d5=a4_0x492198;await this[_0x56b3d5(0x112)][_0x56b3d5(0x12b)](),await this[_0x56b3d5(0x112)][_0x56b3d5(0x138)](),this['peer']=undefined,this[_0x56b3d5(0x114)]=undefined;}async[a4_0x492198(0x119)](){const _0x20b7b4=a4_0x492198;try{const _0x4cb96f=await this['client'][_0x20b7b4(0x152)](new Api[(_0x20b7b4(0x14a))][(_0x20b7b4(0x14e))]({'peer':this['peer'],'bot':this[_0x20b7b4(0x11d)],'fromBotMenu':!![],'url':this[_0x20b7b4(0x14b)],'platform':_0x20b7b4(0x12d)}));a4_0x59ace8[_0x20b7b4(0x154)](_0x20b7b4(0x136)+this[_0x20b7b4(0x155)]+_0x20b7b4(0x121));const _0x3b7f0b=_0x4cb96f[_0x20b7b4(0x14b)];return Helper[_0x20b7b4(0x13b)](_0x3b7f0b,0x3);}catch(_0xfd9670){throw _0xfd9670;}}}