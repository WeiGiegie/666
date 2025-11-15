/*
 *
 *
脚本功能：星空外语-ai英语口语练习-雅思口语真题-ai外教一对一陪练
软件版本：1.8.0
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 星空外语-ai英语口语练习-雅思口语真题-ai外教一对一陪练
^https:\/\/api\.skyai\.tech\/user\/profile url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xkwy.js

[mitm]
hostname = api.skyai.tech
*
*
*/




let obj = JSON.parse($response.body);

obj.subscriptionStatus.vip = "sky_lingo_year";
obj.subscriptionStatus.subscribed = true;
obj.subscriptionStatus.lifetimeVIP = true;
obj.subscriptionStatus.inGracePeriod = false;
obj.subscriptionStatus.expiresAt = 4102444800000; 
$done({body: JSON.stringify(obj)});
   
