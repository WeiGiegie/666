/*
 *
 *
脚本功能：暖悦-ai大姨妈记录月经期助手
软件版本：1.7.1
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 暖悦-ai大姨妈记录月经期助手
^https?:\/\/gs.gateway.gameley.cn\/np-womens-user\/user\/info\/edit url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/nyai.js

[mitm]
hostname = gs.gateway.gameley.cn
*
*
*/










let obj = JSON.parse($response.body);

if (obj.info) {
  
  obj.info.adRequiredVipBoolean = true;
  obj.info.adRequiredVip = 4102444799000; 
  obj.info.nickName = "https://t.me/GieGie777";
  obj.info.normalVipBoolean = true;
  obj.info.normalVipForever = true;
  obj.info.normalVipDt = 4102444799000;
}

$done({body: JSON.stringify(obj)});

