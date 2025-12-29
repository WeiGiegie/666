/*
 *
 *
脚本功能：识日-背日语-查日语单词-大家的日语
软件版本：2.1.5
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 识日-背日语-查日语单词-大家的日语
^http:\/\/shiri\.jingqueyun\.com url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/shiri.js

[mitm]
hostname = shiri.jingqueyun.com
*
*
*/







var body = $response.body;
var obj = JSON.parse(body);

obj.is_vip = 1;
obj.isVip = 1;      
obj.new_is_vip = 1;
obj.vip_time = "2099-12-31";
obj.duobi = 99999;
obj.flag = 100;

if (obj.info && typeof obj.info === 'object') {
  obj.info.is_vip = "1";
  obj.info.duobi = 9999;
}

$done({body: JSON.stringify(obj)});
