/*
 *
 *
脚本功能：gps工具箱
软件版本：2.7.38
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > gps工具箱
^^https:\/\/service\.gpstool\.com\/app\/index\/getUserInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/gps.js

[mitm]
hostname = service.gpstool.com
*
*
*/




var obj = JSON.parse($response.body);
if (obj && obj.data) {
    obj.data.is_vip = 1;
    obj.data.vip_name = "VIP会员";
    obj.data.vip_expire_date = 2099999;
    obj.data.is_super_vip = 1;
    obj.data.is_power_vip = 1;
    obj.data.group_vip = 1;
    obj.data.group_vip_expire_date = 2099999;
}
$done({body: JSON.stringify(obj)});
