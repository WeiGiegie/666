
/*
 *
 *
脚本功能：lectmate-有道留学听课宝
软件版本：2.8.0
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > lectmate-有道留学听课宝
^https?:\/\/intervip.youdao.com\/api\/verify\/ios-receipt url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/youdaoall.js

[mitm]
hostname = intervip.youdao.com
*
*
*/









var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data = {
    "status" : "VERIFY_SUCCESS",
    "business" : "VIP",
    "priceActualUsd" : 0,
    "currentDate" : 1728866701971,
    "originalPurchaseDate" : 1728866699000,
    "productId" : "0_year_all_49.99_240115_6000_lp",
    "outTradeNo" : "",
    "introOfferStatus" : "STATUS_ON",
    "quantity" : 1,
    "trial" : false,
    "environment" : "production",
    "requestCountry" : "--",
    "product" : "classtranslate",
    "valid" : true,
    "subscriptionStatus" : "ENABLED",
    "autoRenewStatus" : "STATUS_ON",
    "localCode" : "CN",
    "expireDate" : 4102372800000,
    "createDate" : 1728866701971,
    "statusCode" : 0,
    "purchaseDate" : 4102372800000
  }
$done({body: JSON.stringify(obj)});

