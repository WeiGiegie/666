/*
 *
 *
脚本功能：万能变声器 vip 
软件版本：
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 万能变声器 vip 
^https?:\/\/www.40sishi.com\/voice\/user\/profile url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/wnbsq.js

[mitm] 
hostname = www.40sishi.com
*
*
*/




var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.vipState.state = 1;
obj.data.vipState.forever = true;
obj.data.name = "https://t.me/GieGie777";
$done({body: JSON.stringify(obj)});
