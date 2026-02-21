/*
 *
 *
脚本功能：keep 课程预览 直播课。会员付费课跟练 会员训练计划
软件版本：
下载地址：8.7.20
脚本作者：
更新时间：2026+
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# >keep 课程预览 直播课。会员付费课跟练 会员训练计划
^https?:\/\/(api|kit).gotokeep\.com\/(nuocha|gerudo|athena|nuocha\/plans|suit\/v5\/smart|kprime\/v4\/suit\/sales)\/ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/keep.js



[mitm]
hostname = api.gotokeep.com,kit.gotokeep.com,*.gotokeep.*

*
*
*/









let body = $response.body;
// 批量替换响应中的关键字段
body = body.replace(/"memberStatus":\d+/g, '"memberStatus":1');
body = body.replace(/"username":".*?"/g, '"username":"VIP"');
body = body.replace(/"buttonText":".*?"/g, '"buttonText":""');
body = body.replace(/"hasPaid":\w+/g, '"hasPaid":true');
body = body.replace(/"downLoadAll":\w+/g, '"downLoadAll":true');
body = body.replace(/"videoTime":\d+/g, '"videoTime":0');
body = body.replace(/"startEnable":\w+/g, '"startEnable":true');
body = body.replace(/"preview":\w+/g, '"preview":false');
body = body.replace(/"errorCode":\d+/g, '"errorCode":0');
body = body.replace(/"status":\w+/g, '"status":1');
body = body.replace(/"member":\w+/g, '"member":true');
body = body.replace(/"limitFree":\w+/g, '"limitFree":true');
body = body.replace(/"limitCount":\d/g, '"limitCount":0');
body = body.replace(/"limitFreeType":"\w+/g, '"limitFreeType":""');
body = body.replace(/"free":\w+/g, '"free":true');
body = body.replace(/"userLiveMemberStatus":\w+/g, '"userLiveMemberStatus":1');
body = body.replace(/"canWatchLive":\w+/g, '"canWatchLive":true');
body = body.replace(/"userMemberAutoRenew":\w+/g, '"userMemberAutoRenew":true');
body = body.replace(/"userUseLiveMemberRights":\w+/g, '"userUseLiveMemberRights":true');
body = body.replace(/"userLiveMemberExpireTime":\d/g, '"userLiveMemberExpireTime":0');
body = body.replace(/":false/g, '":true');          // 将所有 false 改为 true
body = body.replace(/"code":\d+/g, '"code":200');   // 将错误码改为成功码

$done({ body });
