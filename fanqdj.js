/*
 *
 *
脚本功能：番茄短剧-视频大全海量爆款短剧持续更新
软件版本：1.2.0.1
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 番茄短剧-视频大全海量爆款短剧持续更新
^http:\/\/8.149.129.124:3002\/api\/account\/v1 url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/fanqdj.js


[mitm]
hostname = 
*
*
*/
















var body = $response.body; 
let obj = JSON.parse($response.body);
obj.id = "https://t.me/GieGie777";
obj.vipExpiresAt = "2999-09-01T00:00:00Z"
$done({body: JSON.stringify(obj)});
