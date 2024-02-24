/*
 *
 *
脚本功能：节奏酱
软件版本：4.50.2
下载地址：苹果商店下载
脚本作者：
更新时间：2024年2月24日 20:21  
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 节奏酱vip
^https?:\/\/medi.dxzzywxk.top\/api\/rest\/commerce\/integrate\/vip\/perform.*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/jzj.js

[mitm] 
hostname = medi.dxzzywxk.top
*
*
*/
var body = $response.body; 
let obj = JSON.parse($response.body);
obj={"code":200,"data":{"hasIntroOfferProds":[],"list":[{"autoRenewProductId":"All_Tempo_Access_Yearly_sub","orderId":"710001564254100","isTrialPeriod":true,"endTime":32493834549000,"productId":"All_Tempo_Access_Yearly_sub","productType":3,"startTime":1708781569000,"orderStatus":1,"autoRenewStatus":true,"originalOrderId":"710001564254100","sign":"67dedd097d67880a0d32573a19c09f76"}],"hasFreedTrialProds":["All_Tempo_Access_Yearly_sub"],"systemDate":1708781597159,"hasPurchasedProds":["All_Tempo_Access_Yearly_sub"]},"message":"successful","success":true}
$done({body: JSON.stringify(obj)});
