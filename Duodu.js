/*
 *
 *
脚本功能：多人待办清单任务管理习惯养成ai好友监督提醒
软件版本：1.4.18
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 多人待办清单任务管理习惯养成ai好友监督提醒
^https:\/\/tasky-api\.codefuture\.top\/v1 url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/Duodu.js

[mitm]
hostname = tasky-api.codefuture.top
*
*
*/










let obj = {};
try {
  obj = JSON.parse($response.body);
} catch (e) {
  // 如果响应体不是合法JSON，原样返回
  $done({body: $response.body});
  return;
}

// 修改 profile.isVip（如果存在profile字段）
if (obj.profile) {
  obj.profile.isVip = true;
  // 可以根据需要继续修改 profile 里的其他字段
}

// 修改 canFreeTrial 字段（如果存在）
if ('canFreeTrial' in obj) {
  obj.canFreeTrial = true;
}

// 修改 entitlements 字段（如果存在或不存在都重写）
obj.entitlements = [{
  "expiredAt" : "2099-12-31T23:59:59.000Z",
  "isFreeTrial" : false,
  "product" : {
    "id" : "vip_ultimate_2099",
    "category" : "PREMIUM",
    "intervalUnit" : "LIFETIME",
    "iapProductId" : "com.ppzzzzzzzzzzzz.duodo.premium.onetimepurchase",
    "name" : "DuoDo Premium Lifetime"
  },
  "type" : "PREMIUM"
}];

// 返回修改后的响应体字符串
$done({body: JSON.stringify(obj)});
