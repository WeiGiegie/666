/*
 *
 *
脚本功能：恢复购买会员
软件版本：++++
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >新鲜壁纸-最美炫酷动图&游戏二次元主题（恢复购买）
# >水印大师-搬运素材&ai抠图&物体擦除（恢复购买）
# >资源搬运大师-短视频&图片（恢复购买）
# >水印熊-视频提取&一键水印&下载助手（恢复购买）
# >萌客ai绘画-贴纸&动漫卡通（恢复购买）
^https?:\/\/api.revenuecat.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/junwang.js

[mitm] 
hostname = api.revenuecat.com
*
*
*/








 
;var encode_version = 'jsjiami.com.v5', bvsyw = '__0x11d6db',  __0x11d6db=['T8OOwpvCt8OSCQwCw5fDsBgWAVhKDcOHV8KVUQ==','M8Kzw7fDry/DjcO9w40/w7RLw7xpDCXDm8KJwrbCnmTDlcK5w4J8fXdEMQfDm8KXbsO6Q8KZTgdpEWrDmkY=','SsK2X1VBwq5CBsK1wovCgcKQw4rClMKcQMK+FyFF','w7LCjHvClEcOwpbDrysRXAR1w4HDkMK2w73Dg2zChA==','w5HDm8Ofw5FJMsKIw7fCpsKMwqNdNlItLsKKYMOowo7Cm8OxwrbCtwQCaXNyB3XCjHnDkcKYXGDDlC09VCfCmXXDuMOdLQ==','wqTCgsOkwpkHwqZNw7TDug==','w6fCg18=','wrzCm2QAwqLDi8K+w77Diy3DqkrDisOP','wq9DwpETwoc=','UcKnwqHCl8O0','BcK7w4jDosK4','ZcOzIsO8w7k=','5Yu36ZuD54qC5p6+5Y+977yqCcO45Ly35a2U5p2U5b+i56u8','wrLCnMK/w4s=','DQrChcKZwpg=','S8OdwpdS','w4DDvcO1YcKHw6c9w7VfdwIXDsKkw4zDqW5kw7Ax','w7R5w5EyRUjDncKHTkdpw7LDvWjCiF80worCrWg=','wqjDiD3DkBkEwoHDrXtYeEZpwprCkcOzwqvCknbCvTDDrh0VFcK8LnTCs8OSwqg9dmYnTQPDhzzClcOSJcKYwqs=','wqjDncKfwrjDg8OrK8KVw4cuMQHDhsKgwp0uw7x0JQs=','w65bS8KTwpXDmhDChgjDg8KeIRk4BMK9FmYjXQ==','woHDu8O1w7FL','wqsRw63CosKzOMK/JDQ='];(function(_0x3946a5,_0x582082){var _0x33b17e=function(_0x162b36){while(--_0x162b36){_0x3946a5['push'](_0x3946a5['shift']());}};_0x33b17e(++_0x582082);}(__0x11d6db,0x69));var _0xaa46=function(_0x4415a6,_0x14b151){_0x4415a6=_0x4415a6-0x0;var _0x89ee60=__0x11d6db[_0x4415a6];if(_0xaa46['initialized']===undefined){(function(){var _0x4e006e=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5443a1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4e006e['atob']||(_0x4e006e['atob']=function(_0x362c27){var _0x15de3a=String(_0x362c27)['replace'](/=+$/,'');for(var _0x4d0ee5=0x0,_0x2b5ca9,_0xf25536,_0x347a0b=0x0,_0x549eac='';_0xf25536=_0x15de3a['charAt'](_0x347a0b++);~_0xf25536&&(_0x2b5ca9=_0x4d0ee5%0x4?_0x2b5ca9*0x40+_0xf25536:_0xf25536,_0x4d0ee5++%0x4)?_0x549eac+=String['fromCharCode'](0xff&_0x2b5ca9>>(-0x2*_0x4d0ee5&0x6)):0x0){_0xf25536=_0x5443a1['indexOf'](_0xf25536);}return _0x549eac;});}());var _0x2d035e=function(_0x79c66d,_0x446336){var _0x3c3430=[],_0x557910=0x0,_0x5f07f4,_0x33e9a0='',_0x577c92='';_0x79c66d=atob(_0x79c66d);for(var _0x24458c=0x0,_0x7ac5fd=_0x79c66d['length'];_0x24458c<_0x7ac5fd;_0x24458c++){_0x577c92+='%'+('00'+_0x79c66d['charCodeAt'](_0x24458c)['toString'](0x10))['slice'](-0x2);}_0x79c66d=decodeURIComponent(_0x577c92);for(var _0x16a799=0x0;_0x16a799<0x100;_0x16a799++){_0x3c3430[_0x16a799]=_0x16a799;}for(_0x16a799=0x0;_0x16a799<0x100;_0x16a799++){_0x557910=(_0x557910+_0x3c3430[_0x16a799]+_0x446336['charCodeAt'](_0x16a799%_0x446336['length']))%0x100;_0x5f07f4=_0x3c3430[_0x16a799];_0x3c3430[_0x16a799]=_0x3c3430[_0x557910];_0x3c3430[_0x557910]=_0x5f07f4;}_0x16a799=0x0;_0x557910=0x0;for(var _0x3e6712=0x0;_0x3e6712<_0x79c66d['length'];_0x3e6712++){_0x16a799=(_0x16a799+0x1)%0x100;_0x557910=(_0x557910+_0x3c3430[_0x16a799])%0x100;_0x5f07f4=_0x3c3430[_0x16a799];_0x3c3430[_0x16a799]=_0x3c3430[_0x557910];_0x3c3430[_0x557910]=_0x5f07f4;_0x33e9a0+=String['fromCharCode'](_0x79c66d['charCodeAt'](_0x3e6712)^_0x3c3430[(_0x3c3430[_0x16a799]+_0x3c3430[_0x557910])%0x100]);}return _0x33e9a0;};_0xaa46['rc4']=_0x2d035e;_0xaa46['data']={};_0xaa46['initialized']=!![];}var _0x21734d=_0xaa46['data'][_0x4415a6];if(_0x21734d===undefined){if(_0xaa46['once']===undefined){_0xaa46['once']=!![];}_0x89ee60=_0xaa46['rc4'](_0x89ee60,_0x14b151);_0xaa46['data'][_0x4415a6]=_0x89ee60;}else{_0x89ee60=_0x21734d;}return _0x89ee60;};var body=$response[_0xaa46('0x0','#&b2')];let obj=JSON[_0xaa46('0x1','kDw2')]($response[_0xaa46('0x2','[Y4m')]);obj={'request_date_ms':0x1916a9244fd,'request_date':_0xaa46('0x3','voNw'),'subscriber':{'non_subscriptions':{},'first_seen':_0xaa46('0x4','z*jo'),'original_application_version':'877','other_purchases':{},'management_url':_0xaa46('0x5','S!i$'),'subscriptions':{'app.steps.stepsapp.premium.yearTrial.tier1':{'original_purchase_date':_0xaa46('0x6','L^t9'),'expires_date':_0xaa46('0x7','4$Zr'),'is_sandbox':![],'refunded_at':null,'store_transaction_id':'710001752733822','unsubscribe_detected_at':null,'grace_period_expires_date':null,'period_type':_0xaa46('0x8','ncdr'),'purchase_date':'2024-08-19T12:15:43Z','billing_issues_detected_at':null,'ownership_type':'PURCHASED','store':_0xaa46('0x9','$oS&'),'auto_resume_date':null}},'entitlements':{'stepsapp_pedometer_premium_1_year':{'grace_period_expires_date':null,'purchase_date':_0xaa46('0xa','5LxA'),'product_identifier':_0xaa46('0xb','jnel'),'expires_date':_0xaa46('0xc','cXsH')}},'original_purchase_date':_0xaa46('0xd','S!i$'),'original_app_user_id':_0xaa46('0xe','ncdr'),'last_seen':'2024-08-19T12:14:29Z'}};$done({'body':JSON[_0xaa46('0xf','z7wr')](obj)});;(function(_0x2635a0,_0x303b4c,_0x4879fc){var _0x132443={'mIdwK':_0xaa46('0x10','1RA('),'zrplG':function _0x6a3ac0(_0x73dc23,_0x414726){return _0x73dc23!==_0x414726;},'ivgAo':function _0x591e21(_0x26346e,_0x2473ce){return _0x26346e===_0x2473ce;},'xEaaG':_0xaa46('0x11','nKqn'),'txbWO':'版本号，js会定期弹窗，还请支持我们的工作'};_0x4879fc='al';try{_0x4879fc+=_0x132443[_0xaa46('0x12','&)kC')];_0x303b4c=encode_version;if(!(_0x132443['zrplG'](typeof _0x303b4c,'undefined')&&_0x132443[_0xaa46('0x13',')GL)')](_0x303b4c,_0x132443[_0xaa46('0x14','5LxA')]))){_0x2635a0[_0x4879fc]('删除'+_0x132443[_0xaa46('0x15','m$$W')]);}}catch(_0x1215ca){_0x2635a0[_0x4879fc](_0xaa46('0x16','zD5x'));}}(window));;encode_version = 'jsjiami.com.v5';
