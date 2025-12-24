/*
 *
 *
脚本功能：识日jlpt-最新jlpt历年真题全覆盖
软件版本：1.1.0
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 识日jlpt-最新jlpt历年真题全覆盖
^http:\/\/jlpt\.jingqueyun\.com\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/jlpt.js

[mitm]
hostname = jlpt.jingqueyun.com
*
*
*/







var body = $response.body;
var obj = JSON.parse(body);

if (obj.data && typeof obj.data === 'object') {
    obj.data.is_vip = 1;
    obj.data.vip_time = "2099-12-31";
}

$done({body: JSON.stringify(obj)});

