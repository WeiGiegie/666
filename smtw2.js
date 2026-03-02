/*
 *
 *
脚本功能：
软件版本：
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https?:\/\/temple-release.dskystudio.com\/api\/login url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/smtw2.js

[mitm]
hostname = temple-release.dskystudio.com
*
*
*/


let body = $response.body;

// 批量替换金币、钻石
body = body.replace(/"coinCount":\d+/g, '"coinCount":99999999');
body = body.replace(/"specialCurrencyCount":\d+/g, '"specialCurrencyCount":99999');

$done({ body });
