/*
 *
 *
脚本功能：神庙逃亡2(微信小程序)
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

// 金币
body = body.replace(/\\"coinCount\\":\d+/g, '\\"coinCount\\":9998800');
// 珠宝/钻石
body = body.replace(/\\"specialCurrencyCount\\":\d+/g, '\\"specialCurrencyCount\\":999880');
// 元宝/特殊代币1
body = body.replace(/\\"THBCurrencyCount\\":\d+/g, '\\"THBCurrencyCount\\":999880');
// 其他货币2
body = body.replace(/\\"ECC\\":\d+/g, '\\"ECC\\":999880');
// 其他货币3
body = body.replace(/\\"OCC\\":\d+/g, '\\"OCC\\":999880');

$done({ body });
