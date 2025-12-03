/*
 *
 *
脚本功能：listenleap-帮你听懂英语播客-通过播客学英语
软件版本：1.5.1
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 帮你听懂英语播客-通过播客学英语
^https:\/\/www\.listenleap\.com\/front-api\/user\/getUserInfoByUserToken url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/listenleap.js

[mitm]
hostname = www.listenleap.com
*
*
*/




var obj = JSON.parse($response.body);

if (obj.data && obj.data.user) {
    obj.data.user.vip = true;
    obj.data.user.vipType = "会员";      
    obj.data.user.vipStartTime = "2020-01-01T00:00:00Z";
    obj.data.user.vipExpireTime = "2099-12-31T23:59:59Z";
    
}

$done({body: JSON.stringify(obj)});
