/*
 *
 *
脚本功能：暗记-ankiapp-记忆神器-flashcards
软件版本：11.2.1
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 暗记-ankiapp-记忆神器-flashcards
^https:\/\/api\.ankiapp\.com\/users\/account url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/anji.js

[mitm]
hostname = api.ankiapp.com
*
*
*/




let obj = JSON.parse($response.body);

obj.has_unlimited = true;


$done({body: JSON.stringify(obj)});

