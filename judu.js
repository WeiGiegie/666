/*
 *
 *
脚本功能：句读
软件版本：4.3.0
下载地址：苹果商店下载
脚本作者：
更新时间：2024年3月1日 20:39 
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 句读 vip
^^https?:\/\/judouapp.com\/api\/v2\/mine\/profile url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/judu.js

[mitm] 
hostname = judouapp.com
*
*
*/
var body = $response.body; 
let obj = JSON.parse($response.body);
obj.is_member = true ;
obj.is_admin = true ;
obj.is_year_member = true ;
obj.nickname = "https://t.me/GieGie777" ;
obj.member_expired_at = 32493834549 ;
obj.is_bind_phone = true ;
$done({body: JSON.stringify(obj)});


