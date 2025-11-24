/*
 *
 *
脚本功能：探味闲置
软件版本：1.2.8
下载地址：
脚本作者：@TmeNu11
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 探味闲置
^https:\/\/admin\.tanweixianzhi\.com\/prod\/api\/centre\/userInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/twxz.js
^https:\/\/admin\.tanweixianzhi\.com\/prod\/api\/video\/info url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/twxz.js

[mitm]
hostname = admin.tanweixianzhi.com
*
*
*/
















let obj = JSON.parse($response.body);

obj.data.nickname = "https://t.me/GieGie777";
obj.data.is_vip = 1;
obj.data.vip_level = 1;
obj.data.vip_validity = "2099-11-23 00:00:00";

obj.data.is_free = 1;
obj.data.is_buy = 1;

$done({body: JSON.stringify(obj)});
