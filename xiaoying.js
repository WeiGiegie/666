/*
 *
 *
脚本功能：小影
软件版本：9.14.6
下载地址：苹果商店下载
脚本作者：
更新时间：2024年2月22日 12:33
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 小影vip
^https?:\/\/api-chn.rthdo.com\/api\/rest\/u\/vipVerifyReceipt.*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xiaoying.js

[mitm] 
hostname = api-chn.rthdo.com
*
*
*/
var body = $response.body; 
let obj = JSON.parse($response.body);
obj={   "autoRenewProductId" : "premium_platinum_yearly",   "autoRenewStatus" : 1,   "allEndTime" : 32493834549000,   "iosDeviceProductVo" : {     "newVipMonthly" : 30,     "premiumVipWeekly" : 30,     "premiumPlatinumQuarterly" : 30,     "premiumGoldMonthly" : 30,     "premiumPlatinumMonthly" : 30,     "newVipYearly" : 30,     "premiumVipYearly" : 30,     "newVipWeekly" : 30,     "nonOrganicVipMonthly" : 30,     "premiumPlatinumHalfYearly" : 30,     "nonOrganicVipWeekly" : 30,     "premiumGoldYearly" : 30,     "nonOrganicVipYearly" : 30,     "premiumPlatinumYearly" : 2   },   "allVipType" : "vip_normal",   "allStartTime" : 1708574721000,   "endTime" : 32493834549000,   "platform" : 2,   "isTrialPeriod" : false,   "productList" : [     {       "isRenew" : true,       "vipType" : "premium_platinum_yearly"     }   ],   "systemDate" : 1708574771641,   "startTime" : 1708574721000,   "vipType" : "premium_platinum_yearly",   "sign" : "2903a65d0bed5294153c6e986e000000" }
$done({body: JSON.stringify(obj)});
