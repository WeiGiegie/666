/*
 *
 *
脚本功能：心光-ai-生活记录伴侣
软件版本：4.0.31
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 心光-ai-生活记录伴侣
^https:\/\/moolight\.online\/prod-api\/getClientInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xinguang.js

[mitm]
hostname = moolight.online
*
*
*/







let obj = JSON.parse($response.body);


obj.data.roles = [
  {
    "roleKey": "vip",
    "roleId": 3,
    "expirationTime": "2099-11-13"
  }
];


$done({ body: JSON.stringify(obj) });
