/*
 *
 *
脚本功能：红豆看看-热门抢先看海量资源
软件版本：1.5
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 红豆看看-热门抢先看海量资源
^https?:\/\/api.jingyuanw.top\/api\/user\/fetchUser url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/hdkk.js

[mitm]
hostname = api.jingyuanw.top
*
*
*/







let obj = JSON.parse($response.body);

if (obj.data) {
  obj.data.vipEndDate = "4102444799000"; 
  obj.data.nickname = "https://t.me/GieGie777";
  obj.data.vip = true;
  
}

$done({body: JSON.stringify(obj)});

