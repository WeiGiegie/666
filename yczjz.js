/*
 *
 *
脚本功能：一寸证件照
软件版本：1.1.3
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 一寸证件照
^https?:\/\/idp2api.netpock.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/yczjz.js

[mitm]
hostname = idp2api.netpock.com
*
*
*/








let obj = JSON.parse($response.body);

if (obj.data) {
  
  obj.data.is_vip = 1;
  obj.data.vip_expiration_time = 4102444799000; 
  obj.data.user_name = "t.me/GieGie777";
}

$done({body: JSON.stringify(obj)});


