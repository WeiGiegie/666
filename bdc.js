/*
 *
 *
脚本功能：hellowords背单词-英语日语韩语法语德语西班牙语学习
软件版本：2.2.22
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > hellowords背单词-英语日语韩语法语德语西班牙语学习
^https:\/\/api-cn\.hellotalk8\.com\/hello_words\/app url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/bdc.js

[mitm]
hostname = api-cn.hellotalk8.com
*
*
*/







let obj = JSON.parse($response.body);


obj.data.purchase = 1;
obj.data.purchase_in_hellotalk = 1;
obj.data.is_life_vip = true;
obj.data.expiretime = 1735689600;
obj.data.vip_expire_time = 1735689600;
obj.data.remain_time = 9999999;   
obj.data.continuous = 9999;      
obj.data.name = "VIP Member";



$done({body: JSON.stringify(obj)});

