/*
 *
 *
脚本功能：塔奇剧场
软件版本：
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >塔奇剧场
^https?:\/\/quickapi.xiegangsir.com\/api\/app\/.+\/user\/viptime\/ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/tqjc.js

[mitm]
hostname = quickapi.xiegangsir.com
*
*
*/













var body = $response.body; 
let obj = JSON.parse($response.body);
obj.result.vip_time = 32493834549,
$done({body: JSON.stringify(obj)});


