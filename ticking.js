/*
 *
 *
脚本功能：ticking
软件版本：1.18.27
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > ticking
^https:\/\/todo\.i99yun\.com\/v2\/account\/get_user_by_token url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ticking.js

[mitm]
hostname = todo.i99yun.com
*
*
*/




let obj = JSON.parse($response.body);

if (obj.data) {
  
  obj.data.vipType = 1;
  obj.data.expiredTime = 4102444799000; 
  obj.data.userType = 1;
  obj.data.payTime = Date.now();
}

$done({body: JSON.stringify(obj)});


