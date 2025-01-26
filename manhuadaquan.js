/*
 *
 *
脚本功能：漫画大全-高清漫画阅读
软件版本：6.0.2
下载地址：美区App Store
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >
http:\/\/server.007manhua.com\/daquan2_rest.action\?(type=(mine5&userId|restore)|manhua) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/manhuadaquan.js



[mitm]
hostname = 
*
*
*/






 
;var encode_version = 'jsjiami.com.v5', rswfn = '__0x1239f1',  __0x1239f1=['NcOCNRnDog==','djLDiGLDsw==','KkDDnDhV','WQ09YMOL','w73DrVPDmsK9','dMOiw6EBGQ==','dMOeVA==','S1vDssOxwrgVw6lONljCvsOhw4bCkkcMwqrDr1FWQsKbBEHCvjDCjA==','woJowrBHC0s=','wqjCu8KKwpTCmXPDkw==','w4IOCGQs','XnEswr3DpcK1WQ==','w5fCtcKGO8KU','RGs6wrHDs8KdVmQm','YcKZB8OP','D2XDqghGwqjDu0Q=','w5HCtsKPIA==','IcOFw4g5Tw7DrA==','E1Nhw4EXw6TCvsOE','w4zCscKeIsKTU8KmecOiByvCscOCwo1Gw6HCt8O0eQjDnQk=','BcOmV3Q=','w6UyfEzDvMOVdzABw6DCiQo=','5rCQ5LmYAsOXBA==','wqnCh24H','KsO/CwXDuUBXw5rDkGHCqcKBw43DoA==','EMK5wq5XWMOvPn1Vbw==','diTDgGY=','ZMK9w6vCvVV5BWFS','C2DCnn5sBBrDskXDnjfCk8OBTGTDoRXDqD01E8OpScKveMK6P8OJRcOZw7zDssKkW8Klw43DtMOIDMO6w6IoZlxywqvCocOUU8KLS8KBSFIBwq7DjMOuV8OVw6k1dsO+','wqbCqCw=','wovChsKhwr/Dgeinn+acpemUreittcKGKA==','McOzCDPDoFdb','w6PDkGfDr8KOw5XCowDCkQ==','fsKZCMOUPsK5ZsKufsK8Y8OfFMKj','54m35p215Y6m77yow6IR5L615a2y5p2v5b6O56mq77yb6LyC6K685pSi5oyN5omn5Lq+55qM5bSN5L6Q'];(function(_0x3d5b46,_0x56debf){var _0x7550a9=function(_0x2bbfae){while(--_0x2bbfae){_0x3d5b46['push'](_0x3d5b46['shift']());}};_0x7550a9(++_0x56debf);}(__0x1239f1,0x141));var _0x554e=function(_0x19033c,_0x19fc2b){_0x19033c=_0x19033c-0x0;var _0x588ba4=__0x1239f1[_0x19033c];if(_0x554e['initialized']===undefined){(function(){var _0x303098=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x10b0a7='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x303098['atob']||(_0x303098['atob']=function(_0x3a4e02){var _0x26af8b=String(_0x3a4e02)['replace'](/=+$/,'');for(var _0x4547f0=0x0,_0x4246b3,_0x564e6a,_0x3b9a8b=0x0,_0x32dc6a='';_0x564e6a=_0x26af8b['charAt'](_0x3b9a8b++);~_0x564e6a&&(_0x4246b3=_0x4547f0%0x4?_0x4246b3*0x40+_0x564e6a:_0x564e6a,_0x4547f0++%0x4)?_0x32dc6a+=String['fromCharCode'](0xff&_0x4246b3>>(-0x2*_0x4547f0&0x6)):0x0){_0x564e6a=_0x10b0a7['indexOf'](_0x564e6a);}return _0x32dc6a;});}());var _0x193922=function(_0x246767,_0x2be0c7){var _0x23bf8c=[],_0x816fdd=0x0,_0x35eda1,_0x419cb4='',_0x2e5f30='';_0x246767=atob(_0x246767);for(var _0x35661f=0x0,_0x4a702e=_0x246767['length'];_0x35661f<_0x4a702e;_0x35661f++){_0x2e5f30+='%'+('00'+_0x246767['charCodeAt'](_0x35661f)['toString'](0x10))['slice'](-0x2);}_0x246767=decodeURIComponent(_0x2e5f30);for(var _0x8fe0f7=0x0;_0x8fe0f7<0x100;_0x8fe0f7++){_0x23bf8c[_0x8fe0f7]=_0x8fe0f7;}for(_0x8fe0f7=0x0;_0x8fe0f7<0x100;_0x8fe0f7++){_0x816fdd=(_0x816fdd+_0x23bf8c[_0x8fe0f7]+_0x2be0c7['charCodeAt'](_0x8fe0f7%_0x2be0c7['length']))%0x100;_0x35eda1=_0x23bf8c[_0x8fe0f7];_0x23bf8c[_0x8fe0f7]=_0x23bf8c[_0x816fdd];_0x23bf8c[_0x816fdd]=_0x35eda1;}_0x8fe0f7=0x0;_0x816fdd=0x0;for(var _0x39f729=0x0;_0x39f729<_0x246767['length'];_0x39f729++){_0x8fe0f7=(_0x8fe0f7+0x1)%0x100;_0x816fdd=(_0x816fdd+_0x23bf8c[_0x8fe0f7])%0x100;_0x35eda1=_0x23bf8c[_0x8fe0f7];_0x23bf8c[_0x8fe0f7]=_0x23bf8c[_0x816fdd];_0x23bf8c[_0x816fdd]=_0x35eda1;_0x419cb4+=String['fromCharCode'](_0x246767['charCodeAt'](_0x39f729)^_0x23bf8c[(_0x23bf8c[_0x8fe0f7]+_0x23bf8c[_0x816fdd])%0x100]);}return _0x419cb4;};_0x554e['rc4']=_0x193922;_0x554e['data']={};_0x554e['initialized']=!![];}var _0x35c692=_0x554e['data'][_0x19033c];if(_0x35c692===undefined){if(_0x554e['once']===undefined){_0x554e['once']=!![];}_0x588ba4=_0x554e['rc4'](_0x588ba4,_0x19fc2b);_0x554e['data'][_0x19033c]=_0x588ba4;}else{_0x588ba4=_0x35c692;}return _0x588ba4;};var body=$response['body'];var url=$request[_0x554e('0x0','AO57')];const p1=_0x554e('0x1','Exk7');const p2='?type=';if(typeof body===_0x554e('0x2','tH5T')){if(url[_0x554e('0x3','1ccL')](p1)!==-0x1){body=body['replace'](/"coinPrice":\d+/g,'\x22coinPrice\x22\x20:\x200');}var obj;try{obj=JSON[_0x554e('0x4','ovXT')](body);if(url[_0x554e('0x5','g((g')](p2)!==-0x1){var _0x3cff62='3|6|5|4|2|1|0'[_0x554e('0x6','rgHt')]('|'),_0x57d37d=0x0;while(!![]){switch(_0x3cff62[_0x57d37d++]){case'0':body=JSON[_0x554e('0x7','g((g')](obj);continue;case'1':obj[_0x554e('0x8','%nv*')][_0x554e('0x9','T7*o')]=0x1;continue;case'2':obj[_0x554e('0xa','rgHt')][_0x554e('0xb','5tnS')]='永久VIP';continue;case'3':obj['user'][_0x554e('0xc','vkQE')]=_0x554e('0xd','rgHt');continue;case'4':obj[_0x554e('0xe','7Csf')][_0x554e('0xf','@2wC')]=_0x554e('0x10','Dt32');continue;case'5':obj[_0x554e('0x11','@5jo')][_0x554e('0x12','2qxz')]=_0x554e('0x13','bVxV');continue;case'6':obj[_0x554e('0x14','L5ew')][_0x554e('0x15','xMxj')]=_0x554e('0x16','kT7C');continue;}break;}}}catch(_0xa67507){console[_0x554e('0x17','DJlF')](_0x554e('0x18','1ccL')+_0xa67507[_0x554e('0x19','2qxz')]);}}$done({'body':body});;(function(_0x4ff265,_0x2a41e5,_0x3b11c2){var _0x5e7673={'iTNYc':'ert','uemvA':function _0x5ddffe(_0x14cfb4,_0x31de30){return _0x14cfb4!==_0x31de30;},'PVSBG':_0x554e('0x1a','TsSX'),'FStzZ':_0x554e('0x1b','%nv*'),'fTlDC':function _0x358175(_0x2cea61,_0x4e84b4){return _0x2cea61+_0x4e84b4;},'kSPPU':_0x554e('0x1c','6F&1'),'Vbvol':'删除版本号，js会定期弹窗'};_0x3b11c2='al';try{_0x3b11c2+=_0x5e7673[_0x554e('0x1d','2qxz')];_0x2a41e5=encode_version;if(!(_0x5e7673[_0x554e('0x1e','L5ew')](typeof _0x2a41e5,_0x5e7673[_0x554e('0x1f','T7*o')])&&_0x2a41e5===_0x5e7673['FStzZ'])){_0x4ff265[_0x3b11c2](_0x5e7673[_0x554e('0x20','6F&1')]('删除',_0x5e7673[_0x554e('0x21','TsSX')]));}}catch(_0x3eb9d7){_0x4ff265[_0x3b11c2](_0x5e7673[_0x554e('0x22','bVxV')]);}}(window));;encode_version = 'jsjiami.com.v5';