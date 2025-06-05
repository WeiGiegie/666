/*
 *
 *
脚本功能：姬漫社,解锁=视频,漫画,写真,动漫。 无需登录！
软件版本：
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 姬漫社,解锁=视频,漫画,写真,动漫。 无需登录！
https?:\/\/oxtoon.(cyou|work|monster|net)\/((detail|comic)\/\d|buychapter).*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/jmshe.js

[mitm]
hostname = oxtoon.cyou,oxtoon.work,oxtoon.monster,oxtoon.net

*
*
*/



 
/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', zbgta = '__0x12899c',  __0x12899c=['w59ATTvDkcKCECl5EMONwqxpUsKPw4/DrsOfJMKCBXtow4bDpMOMw6fDrl94wp/CgsOLAT88IisZw5vDjMK/X250eMKwF8OmL8O6wpYawpXChcObwrlqU14xcBbCnC3DjsONIDw=','5YmN6ZmX54u+5pyX5Y2a77y9wqjDvuS/muWvheaesuW+mOernQ==','A8KYw4Q=','GEHDmg==','IQVSw6LDvsKjVQ==','dgPClWwIZ8Oxw4MSw5PCsg==','c8KpwqI=','wrVBw7wYZMK7CA==','LMOPXHlNw7YDwoPDqx1H','csOVw60TT3hB','wr/DvsKTWQTDrMKv','QsKfw6s=','Xi3Dhw==','HMOpw48=','54uH5p2x5Y2Q77+XwpFv5L+e5a2Y5p6K5b6f56iD776d6L6H6Ky85pSf5o685ouk5LqN55io5bew5L61','w6ldw6k0Qw==','w4xeAGvChw==','Y8Ksw5owwrM=','XsOjw7sjdw==','HcO4w4gAZg==','UQsGMzk=','wrk9wqQzwoE1w7jDpsOgScOC','Cnd8DiDCkcKe','R8Kbw7o4wrPCpSU=','w6kZw6pTw5hQcWzDpSI0','bhhvdkzChw=='];(function(_0x58effd,_0x4ab8ee){var _0x553a3e=function(_0x4454e3){while(--_0x4454e3){_0x58effd['push'](_0x58effd['shift']());}};_0x553a3e(++_0x4ab8ee);}(__0x12899c,0x106));var _0x5108=function(_0x259840,_0x1b5db2){_0x259840=_0x259840-0x0;var _0x2b1fbe=__0x12899c[_0x259840];if(_0x5108['initialized']===undefined){(function(){var _0x23413d=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1f1e60='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x23413d['atob']||(_0x23413d['atob']=function(_0x44a11e){var _0xe8ef6f=String(_0x44a11e)['replace'](/=+$/,'');for(var _0x583212=0x0,_0x1dd418,_0x1f788e,_0x77ae21=0x0,_0x27c229='';_0x1f788e=_0xe8ef6f['charAt'](_0x77ae21++);~_0x1f788e&&(_0x1dd418=_0x583212%0x4?_0x1dd418*0x40+_0x1f788e:_0x1f788e,_0x583212++%0x4)?_0x27c229+=String['fromCharCode'](0xff&_0x1dd418>>(-0x2*_0x583212&0x6)):0x0){_0x1f788e=_0x1f1e60['indexOf'](_0x1f788e);}return _0x27c229;});}());var _0x38d644=function(_0x36eebf,_0x1edcd5){var _0x30b5e5=[],_0x2ff26e=0x0,_0x32c320,_0x189b6a='',_0x1dbc8a='';_0x36eebf=atob(_0x36eebf);for(var _0x5ebecb=0x0,_0x8d31cf=_0x36eebf['length'];_0x5ebecb<_0x8d31cf;_0x5ebecb++){_0x1dbc8a+='%'+('00'+_0x36eebf['charCodeAt'](_0x5ebecb)['toString'](0x10))['slice'](-0x2);}_0x36eebf=decodeURIComponent(_0x1dbc8a);for(var _0x258488=0x0;_0x258488<0x100;_0x258488++){_0x30b5e5[_0x258488]=_0x258488;}for(_0x258488=0x0;_0x258488<0x100;_0x258488++){_0x2ff26e=(_0x2ff26e+_0x30b5e5[_0x258488]+_0x1edcd5['charCodeAt'](_0x258488%_0x1edcd5['length']))%0x100;_0x32c320=_0x30b5e5[_0x258488];_0x30b5e5[_0x258488]=_0x30b5e5[_0x2ff26e];_0x30b5e5[_0x2ff26e]=_0x32c320;}_0x258488=0x0;_0x2ff26e=0x0;for(var _0x4bdc89=0x0;_0x4bdc89<_0x36eebf['length'];_0x4bdc89++){_0x258488=(_0x258488+0x1)%0x100;_0x2ff26e=(_0x2ff26e+_0x30b5e5[_0x258488])%0x100;_0x32c320=_0x30b5e5[_0x258488];_0x30b5e5[_0x258488]=_0x30b5e5[_0x2ff26e];_0x30b5e5[_0x2ff26e]=_0x32c320;_0x189b6a+=String['fromCharCode'](_0x36eebf['charCodeAt'](_0x4bdc89)^_0x30b5e5[(_0x30b5e5[_0x258488]+_0x30b5e5[_0x2ff26e])%0x100]);}return _0x189b6a;};_0x5108['rc4']=_0x38d644;_0x5108['data']={};_0x5108['initialized']=!![];}var _0xc8246a=_0x5108['data'][_0x259840];if(_0xc8246a===undefined){if(_0x5108['once']===undefined){_0x5108['once']=!![];}_0x2b1fbe=_0x5108['rc4'](_0x2b1fbe,_0x1b5db2);_0x5108['data'][_0x259840]=_0x2b1fbe;}else{_0x2b1fbe=_0xc8246a;}return _0x2b1fbe;};const isComicPath=$request[_0x5108('0x0','@t!$')]['indexOf']('/comic/')!==-0x1;const isBuychapterPath=$request[_0x5108('0x1','!IIw')][_0x5108('0x2','H7Z@')](_0x5108('0x3','0ZAx'))!==-0x1;const isDetailPath=$request[_0x5108('0x4','qukk')][_0x5108('0x2','H7Z@')](_0x5108('0x5','ZiIy'))!==-0x1;if(isComicPath||isBuychapterPath||isDetailPath){const headers=Object[_0x5108('0x6','QWmx')](Object[_0x5108('0x7','(D]A')]($request[_0x5108('0x8','*Pv9')])[_0x5108('0x9','Y4en')](([_0x586f4f,_0x7de536])=>[_0x586f4f['toLowerCase'](),_0x7de536]));Object['assign'](headers,{'cookie':'_pk_id.27.54ae=;_pk_ses.27.54ae=;PHPSESSID=1q5c5k4tsf5b027s7n16h6fuj1'});$done({'headers':headers});}else{$done({});};(function(_0x50d116,_0x27dd5d,_0x5ec4e5){var _0x2bb502={'sxpXF':_0x5108('0xa','(BRQ'),'vbxPf':'ert','LRAle':function _0x3805fd(_0x20c5bc,_0x586747){return _0x20c5bc!==_0x586747;},'XRktR':'undefined','DsZCm':function _0xbe21d9(_0x4edf7f,_0x1609dc){return _0x4edf7f===_0x1609dc;},'IXbBQ':'jsjiami.com.v5','RyiAk':_0x5108('0xb','vT2j'),'AnscQ':function _0x34a9ae(_0xf0edbb,_0x434227){return _0xf0edbb+_0x434227;},'cNYCx':_0x5108('0xc','P@xK'),'bMoFd':function _0x162fa0(_0x24ecb1,_0x3c3ebf){return _0x24ecb1(_0x3c3ebf);}};_0x5ec4e5='al';try{if(_0x2bb502[_0x5108('0xd','ZiIy')]===_0x2bb502[_0x5108('0xe','ql3H')]){_0x5ec4e5+=_0x2bb502['vbxPf'];_0x27dd5d=encode_version;if(!(_0x2bb502[_0x5108('0xf','Y4en')](typeof _0x27dd5d,_0x2bb502['XRktR'])&&_0x2bb502['DsZCm'](_0x27dd5d,_0x2bb502[_0x5108('0x10','(D]A')]))){if(_0x2bb502[_0x5108('0x11','vT2j')]===_0x2bb502['RyiAk']){_0x50d116[_0x5ec4e5](_0x2bb502['AnscQ']('删除',_0x2bb502[_0x5108('0x12','E*Xg')]));}else{const _0x2bb073=Object[_0x5108('0x13','^$p6')](Object[_0x5108('0x14','AUCp')]($request[_0x5108('0x15','Y4en')])['map'](([_0x48a0ef,_0x2dd1db])=>[_0x48a0ef[_0x5108('0x16','Hg@T')](),_0x2dd1db]));Object[_0x5108('0x17','KCkk')](_0x2bb073,{'cookie':_0x5108('0x18','Qm$V')});_0x2bb502['bMoFd']($done,{'headers':_0x2bb073});}}}else{_0x50d116[_0x5ec4e5]('删除版本号，js会定期弹窗');}}catch(_0x1c9a62){_0x50d116[_0x5ec4e5](_0x5108('0x19','!IIw'));}}(window));;encode_version = 'jsjiami.com.v5';
