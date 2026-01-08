/*
 *
 *
脚本功能：全球潮汐-全球天气预报及离线潮汐
软件版本：5.2.0
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 全球潮汐-全球天气预报及离线潮汐
^https:\/\/g\.catches\.com\/v1\/user\?method\=userInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/qqcx.js

[mitm]
hostname = g.catches.com
*
*
*/





let obj = JSON.parse($response.body);

if (obj.data) {
    obj.data.isVip = 1;
   
    obj.data.vipExpireTime = 4102415999000;
}

$done({body: JSON.stringify(obj)});

