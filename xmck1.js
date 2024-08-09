/*
 *
 *
脚本功能：
软件版本：9.2.71
下载地址：
脚本作者：@Crispian1_bot
更新时间：2024-8.09
电报频道：https://t.me/GieGie777
注意事项：需要xmly会员数据请联系作者。有大量会员数据
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
*
*
*/




















































































const COOKIES=[{"\u0063\u006b":'channel=ios-b1;\x201&_device=iPhone&157905B3-4A5F-487E-AAFF-0AC3E6157905&9.2.71;\x20net-mode=WIFI;1&_token=517054037&318383A9-FC23-4B7C-B4D6-5008789075B0;\x20device_model=VGVsZWdyYW06aHR0cHM6Ly90Lm1lL0dpZUdpZTc3Nw%3D%3D',"\u0074\u0069\u006d\u0065":"\u0030\u002d\u0038"},{"\u0063\u006b":'channel=ios-b1;\x201&_device=iPhone&371560B3-4A5F-487E-AAFF-0AC3E6371560&9.2.71;\x20net-mode=WIFI;1&_token=517054079&24AD555E-1EAF-4CBA-97F5-79429EB4F712;\x20device_model=VGVsZWdyYW06aHR0cHM6Ly90Lm1lL0dpZUdpZTc3Nw%3D%3D',"\u0074\u0069\u006d\u0065":"\u0038\u002d\u0031\u0032"},{"\u0063\u006b":'channel=ios-b1;\x201&_device=iPhone&763944B3-4A5F-487E-AAFF-0AC3E6763944&9.2.71;\x20net-mode=WIFI;1&_token=517054102&A203CA69-EB5D-4C6A-839B-C4AB51087387;\x20device_model=VGVsZWdyYW06aHR0cHM6Ly90Lm1lL0dpZUdpZTc3Nw%3D%3D',"\u0074\u0069\u006d\u0065":"\u0031\u0032\u002d\u0031\u0035"},{'ck':'channel=ios-b1;\x201&_device=iPhone&727168B3-4A5F-487E-AAFF-0AC3E6727168&9.2.71;\x20net-mode=WIFI;1&_token=517054141&67D59972-E97E-4E1E-B243-59505B2C199C;\x20device_model=VGVsZWdyYW06aHR0cHM6Ly90Lm1lL0dpZUdpZTc3Nw%3D%3D',"\u0074\u0069\u006d\u0065":"\u0031\u0035\u002d\u0031\u0038"},{'ck':'channel=ios-b1;\x201&_device=iPhone&993284B3-4A5F-487E-AAFF-0AC3E6993284&9.2.71;\x20net-mode=WIFI;1&_token=517054178&6F837811-6F54-4364-9EF7-F14E1C25AAEF;\x20device_model=VGVsZWdyYW06aHR0cHM6Ly90Lm1lL0dpZUdpZTc3Nw%3D%3D',"\u0074\u0069\u006d\u0065":"\u0031\u0038\u002d\u0032\u0030"},{"\u0063\u006b":'channel=ios-b1;\x201&_device=iPhone&889107B3-4A5F-487E-AAFF-0AC3E6889107&9.2.71;\x20net-mode=WIFI;1&_token=517054229&71040A3F-83B7-479F-B711-56F0BD45A5B1;\x20device_model=VGVsZWdyYW06aHR0cHM6Ly90Lm1lL0dpZUdpZTc3Nw%3D%3D','time':"\u0032\u0030\u002d\u0032\u0033"}];const tk="".split("").reverse().join("");const headers=Object['fromEntries'](Object['entries']($request['headers'])['map'](([_0x34eb70,_0x51dedd])=>[_0x34eb70['toLowerCase'](),_0x51dedd]));const GET_LOCAL_TIME=_0x14aafd=>{if(typeof _0x14aafd!=='number')return;var _0x137bd4=new Date();var _0x6d57dc=_0x137bd4['getTime']();var _0x35aebc=_0x137bd4['getTimezoneOffset']()*(0xe8e37^0xe6457);var _0x4cb836=_0x6d57dc+_0x35aebc;return new Date(_0x4cb836+0x36ee80*_0x14aafd);};const CUR_TIME=GET_LOCAL_TIME(0x7869e^0x78696)["\u0067\u0065\u0074\u0048\u006f\u0075\u0072\u0073"]();const IS_IN_TIME_RANGE=_0x4274cf=>{if(_0x4274cf['includes']("\u002d")){return CUR_TIME>=parseInt(_0x4274cf['split']('-')[0x33316^0x33316])&&CUR_TIME<=parseInt(_0x4274cf['split']('-')[0x29135^0x29134]);}else{return CUR_TIME===parseInt(_0x4274cf);}};const GET_COOKIE=()=>{const{ck:_0x49a399}=COOKIES["\u0066\u0069\u006e\u0064"](_0x2274a5=>IS_IN_TIME_RANGE(_0x2274a5['time']));return{"\u0063\u006f\u006f\u006b\u0069\u0065":_0x49a399,'x-tk':tk};};Object['assign'](headers,GET_COOKIE());$done({"\u0068\u0065\u0061\u0064\u0065\u0072\u0073":headers});
