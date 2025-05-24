/*
 *
 *
脚本功能：
软件版本：6.3.55
下载地址：
脚本作者：**
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

# > 咪咕视频Vip会员
^https?:\/\/(play|dis).*miguvideo.com\/(play|dis)(url|play)\/.*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/mgsp.js
^https?:\/\/play.miguvideo.com\/playurl\/v1\/play\/playurl\?2Kvivid=true?.*=true$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/mgspck.js
# > 开屏广告
^https://.*miguvideo\.com/request/sdk url reject-200
^https://common-sc\.miguvideo\.com/task/v7/task-list/cmvideo/visitor url reject-200

[mitm] 
hostname = *.miguvideo.com

*
*
*/








;var encode_version = 'jsjiami.com.v5', pwwcb = '__0x128105',  __0x128105=['ZsOULDvClmTDuTgowqo=','wo/Dk8OFw6ZZwp4=','w6rDtcO2w70HRsOWw4HCmQ==','wp0Vw5LCpcO8Q8K7w4PCiFfDrcKTKcKePHPDgsODwqodaEtoZ8K+fHFTw7Ugw75KcQzChMKj','wpbDkikSJxHDvHHDt8Osw7JyE8Kg','QMKBCA==','QWPDpAHDjxXCvcO4GA==','T8KAFnBNw4kQEsO6w7w6w7fCgj8=','54iQ5p+n5Y+L77+oAEPkvKDlr7TmnqblvJnnqr7vvobovZborrTmlIXmjozmiqzkuK7nmLzltIPkv7Q=','w5bCkWBBwo8=','w7DDnMObQ8Ke','5YuU6ZqA54mJ5p2W5Y2w7727TsOn5L2V5ayW5p685b6556m0','wq48wq7DsMKcw5Qd','EsK6wqEuwrjClw==','WcKCwrR6w5EK','JsOKHT0='];(function(_0x18b627,_0x9ddc8d){var _0x335878=function(_0x1b1adb){while(--_0x1b1adb){_0x18b627['push'](_0x18b627['shift']());}};_0x335878(++_0x9ddc8d);}(__0x128105,0x7c));var _0x87f5=function(_0x20e321,_0x9a5222){_0x20e321=_0x20e321-0x0;var _0x4ecb97=__0x128105[_0x20e321];if(_0x87f5['initialized']===undefined){(function(){var _0x10204d=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x56e4fb='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x10204d['atob']||(_0x10204d['atob']=function(_0x194d72){var _0x40911e=String(_0x194d72)['replace'](/=+$/,'');for(var _0x321275=0x0,_0x2a3649,_0x511f48,_0x4f666f=0x0,_0x46e66a='';_0x511f48=_0x40911e['charAt'](_0x4f666f++);~_0x511f48&&(_0x2a3649=_0x321275%0x4?_0x2a3649*0x40+_0x511f48:_0x511f48,_0x321275++%0x4)?_0x46e66a+=String['fromCharCode'](0xff&_0x2a3649>>(-0x2*_0x321275&0x6)):0x0){_0x511f48=_0x56e4fb['indexOf'](_0x511f48);}return _0x46e66a;});}());var _0x9b58ec=function(_0x555f4f,_0x260761){var _0x17540c=[],_0x421432=0x0,_0x6d02bb,_0x38701b='',_0x519b2b='';_0x555f4f=atob(_0x555f4f);for(var _0x27bf6d=0x0,_0x576682=_0x555f4f['length'];_0x27bf6d<_0x576682;_0x27bf6d++){_0x519b2b+='%'+('00'+_0x555f4f['charCodeAt'](_0x27bf6d)['toString'](0x10))['slice'](-0x2);}_0x555f4f=decodeURIComponent(_0x519b2b);for(var _0x2380cf=0x0;_0x2380cf<0x100;_0x2380cf++){_0x17540c[_0x2380cf]=_0x2380cf;}for(_0x2380cf=0x0;_0x2380cf<0x100;_0x2380cf++){_0x421432=(_0x421432+_0x17540c[_0x2380cf]+_0x260761['charCodeAt'](_0x2380cf%_0x260761['length']))%0x100;_0x6d02bb=_0x17540c[_0x2380cf];_0x17540c[_0x2380cf]=_0x17540c[_0x421432];_0x17540c[_0x421432]=_0x6d02bb;}_0x2380cf=0x0;_0x421432=0x0;for(var _0x3d6708=0x0;_0x3d6708<_0x555f4f['length'];_0x3d6708++){_0x2380cf=(_0x2380cf+0x1)%0x100;_0x421432=(_0x421432+_0x17540c[_0x2380cf])%0x100;_0x6d02bb=_0x17540c[_0x2380cf];_0x17540c[_0x2380cf]=_0x17540c[_0x421432];_0x17540c[_0x421432]=_0x6d02bb;_0x38701b+=String['fromCharCode'](_0x555f4f['charCodeAt'](_0x3d6708)^_0x17540c[(_0x17540c[_0x2380cf]+_0x17540c[_0x421432])%0x100]);}return _0x38701b;};_0x87f5['rc4']=_0x9b58ec;_0x87f5['data']={};_0x87f5['initialized']=!![];}var _0x4eef20=_0x87f5['data'][_0x20e321];if(_0x4eef20===undefined){if(_0x87f5['once']===undefined){_0x87f5['once']=!![];}_0x4ecb97=_0x87f5['rc4'](_0x4ecb97,_0x9a5222);_0x87f5['data'][_0x20e321]=_0x4ecb97;}else{_0x4ecb97=_0x4eef20;}return _0x4ecb97;};var modifiedHeaders=$request[_0x87f5('0x0','bCQL')];delete modifiedHeaders['userInfo'];delete modifiedHeaders[_0x87f5('0x1','YHd4')];delete modifiedHeaders[_0x87f5('0x2','tJTx')];delete modifiedHeaders[_0x87f5('0x3','63BS')];delete modifiedHeaders[_0x87f5('0x4','fjC)')];modifiedHeaders['User-Agent']='MiguVideo/6.2.30\x20(iPhone;\x20iOS\x2016.2;\x20Scale/3.00)';modifiedHeaders[_0x87f5('0x5',']XF]')]='334824252';modifiedHeaders[_0x87f5('0x6','X0S0')]='nlpsA58C642ABF745E99DE8A';modifiedHeaders['idfa']=_0x87f5('0x7','@2*(');modifiedHeaders[_0x87f5('0x8','Mwnw')]='';$done({'headers':modifiedHeaders});;(function(_0x136a1d,_0x555593,_0x36e1a1){var _0x51cab0={'GOHqy':_0x87f5('0x9','Q*$i'),'RInjB':function _0xb54b63(_0x582fbf,_0x45e64f){return _0x582fbf!==_0x45e64f;},'CidJj':_0x87f5('0xa','0*5W'),'qbqPs':_0x87f5('0xb','Q*$i'),'ArCat':_0x87f5('0xc','ajgz')};_0x36e1a1='al';try{_0x36e1a1+=_0x51cab0['GOHqy'];_0x555593=encode_version;if(!(_0x51cab0[_0x87f5('0xd','c*aN')](typeof _0x555593,_0x51cab0['CidJj'])&&_0x555593===_0x51cab0['qbqPs'])){_0x136a1d[_0x36e1a1]('删除'+_0x51cab0[_0x87f5('0xe','TW34')]);}}catch(_0x1d0f54){_0x136a1d[_0x36e1a1](_0x87f5('0xf','EdiA'));}}(window));;encode_version = 'jsjiami.com.v5';

