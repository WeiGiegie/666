/*
 *
 *
脚本功能：dj串烧集-大型dj串烧歌曲
软件版本：2.3.8
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > dj串烧集-大型dj串烧歌曲
^http:\/\/csj\.yy-5\.com\/api\/User\/Info url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/djcs.js

[mitm]
hostname = csj.yy-5.com
*
*
*/







let obj = JSON.parse($response.body);

if (obj.result) {
  obj.result.isvip = true;
  obj.result.viptype = 1;

  
  obj.result.expiretime = 4102444799; 

  obj.result.nickname = "VIP";

  
}

$done({body: JSON.stringify(obj)});

