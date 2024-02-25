/*
 *
 *
脚本功能：剪播台
软件版本：1.3.0
下载地址：苹果商店下载
脚本作者：
更新时间：2024年2月25日 20:39 
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 剪播台vip
^https?:\/\/api-chn.jianbotaiapi.com\/api\/rest\/commerce\/integrate\/vip\/perform.*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/jbt.js

[mitm] 
hostname = api-chn.jianbotaiapi.com
*
*
*/
var body = $response.body; 
let obj = JSON.parse($response.body);
obj={"code":200,"data":{"hasIntroOfferProds":[],"list":[{"autoRenewProductId":"79_premium_normal_monthly","orderId":"710001565290000","isTrialPeriod":true,"endTime":32493834549000,"productId":"79_premium_normal_monthly","productType":3,"startTime":1708868099000,"orderStatus":1,"autoRenewStatus":true,"originalOrderId":"710001565290000","sign":"49c2e89eda8cd1d1b15d09260b71c323"}],"hasFreedTrialProds":["79_premium_normal_monthly"],"systemDate":1708868118563,"hasPurchasedProds":["79_premium_normal_monthly"]},"message":"successful","success":true}
$done({body: JSON.stringify(obj)});
