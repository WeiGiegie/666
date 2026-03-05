/*
 *
 *
脚本功能：牛健康-ai营养师减肥私教-体重身材管理好搭档
软件版本：4.11.0
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https:\/\/gw\.qnniu\.com\/api\/servlets\?endpoint=\/member_centers url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/njk.js

[mitm]
hostname = gw.qnniu.com
*
*
*/













let obj = JSON.parse($response.body);
obj.data.member_record = {
  "expire_end_at" : 253402271999,
  "expire_begin_at" : 1772601170,
  "free_trial_period" : 36500,
  "member_card_category" : 6
};
$done({body: JSON.stringify(obj)});

