/*
 *
 *
脚本功能：糖果追剧-全网海量热门短剧小说
软件版本：1.0.6
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 糖果追剧-全网海量热门短剧小说
^https?:\/\/candydjapi.winner1319.top\/tg\/v8\/account\/command\/userInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/tgzj.js

[mitm]
hostname = candydjapi.winner1319.top
*
*
*/







let obj = JSON.parse($response.body);

if (obj.data) {
  obj.data.vipInfo = 4102444799000; 
  obj.data.nickName = "https://t.me/GieGie777";
  obj.data.buyVipState = 1;
  obj.data.vipEnabled = true;
  
}

$done({body: JSON.stringify(obj)});
