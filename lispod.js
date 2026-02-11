/*
 *
 *
脚本功能：lispod分级播客-无痛英语听力自由
软件版本：1.4.3
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]

# >lispod分级播客-无痛英语听力自由
^https:\/\/api\.lispod\.cn\/api\/User\/CurrentUser url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/lispod.js

[mitm] 
hostname = api.lispod.cn

*
*
*/



const body = $response.body;

try {
  const obj = JSON.parse(body);
  
  if (obj && obj.data) {
    obj.data.isVip = true;
    obj.data.endDate = "2099-12-31 23:59:59";
    obj.data.startDate = "2024-01-01 00:00:00";
    obj.data.freeMinutes = 1000;
    obj.data.lispodLevel = "VIP";
  }
  
  $done({body: JSON.stringify(obj)});
} catch (error) {
  $done({});
}
