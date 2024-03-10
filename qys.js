/*
 *
 *
脚本功能：轻音社
软件版本：1.1.4
下载地址：苹果商店下载
脚本作者：
更新时间：2024年3月10日 
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 轻音社vip
^https?:\/\/fuciyuanbang.ciyuans.com\/fuciyuanphp\/community\/social url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/qys.js

[mitm] 
hostname = fuciyuanbang.ciyuans.com
*
*
*/


var body = $response.body; 
let obj = JSON.parse($response.body);
obj.result.vip = "1" ;
obj.result.name = "https://t.me/GieGie777" ;
$done({body: JSON.stringify(obj)});
