/*
 *
 *
脚本功能：熊猫客-全球自然探索指南
软件版本：1.9.11
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >熊猫客-全球自然探索指南
^https:\/\/shopapi\.pandatrek\.cn\/tour\/remote\/storeUserMembership url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xmk.js

[mitm]
hostname = shopapi.pandatrek.cn

*
*
*/



var obj = JSON.parse($response.body);

obj.data = {
  "membership": {
    "id": "1994399144633991169",
    "levelName": null,
    "jsonObj": null,
    "rightsJson": "{\"canViewPaidContent\":true,\"canUseAudioPlayback\":true,\"travelInfoViewPermission\":true,\"tripInfoViewPermission\":true}",
    "type": "ios",
    "levelId": "3",
    "subscriptionType": "membership",
    "endTime": "2099-12-05 21:33:00",
    "transactionId": "490002483881907",
    "membershipTypeName": "连续包月",
    "orderId": "1994399086660288512",
    "refundTime": null,
    "startTime": "2025-11-28 21:33:00",
    "status": "active",
    "isAutoRenew": true
  }
};

$done({body: JSON.stringify(obj)});

