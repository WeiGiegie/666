/*
 *
 *
脚本功能：时间胶囊-写给亲爱未来的日记本
软件版本：3.7
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 时间胶囊-写给亲爱未来的日记本
^https:\/\/api\.timecaps\.app\/v1\/subscriptions url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/sjjn.js

[mitm]
hostname = api.timecaps.app
*
*
*/







let body = $response.body;
let obj = JSON.parse(body);


if (Array.isArray(obj) && obj.length > 0) {
    obj[0].status = "active";
    obj[0].expiresAt = "2099-12-31T23:59:59Z";
    
}


$done({body: JSON.stringify(obj)});

