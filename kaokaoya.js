
/*
 *
 *
脚本功能：考考鸭
软件版本：1.04
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 考考鸭
^https?:\/\/kky.logtk.com\/userLogin url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/kaokaoya.js

[mitm]
hostname = kky.logtk.com
*
*
*/



var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.userInfo.isMember = "1";
//obj.data.userInfo.nickName = "https://t.me/GieGie777";
$done({body: JSON.stringify(obj)});
