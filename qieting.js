/*
 *
 *
#!name=且听 𝕏
#!desc=对 且听 深度学习探索;
#!author=
#!icon=https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/59/23/82/59238296-5c6b-b826-09ee-226119ab4c63/Placeholder.mill/400x400bb.webp
#!date = 2025-12-31 00:00:00
电报频道：https://t.me/GieGie777
软件版本：1.0.85
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！


[Rewrite]
^https?:\/\/api\.erduoshuku\.cn\/api\/pay\/free-membership reject

[Script]
http-response ^https?:\/\/api\.erduoshuku\.cn\/api\/(pay\/subscription\/(info|expiry-popup)|account\/user-profile) script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/qieting.js, requires-body=true, timeout=60, tag=会员

[Mitm]
hostname = *.erduoshuku.cn
*
*
*/






let obj = JSON.parse($response.body);
const url = $request.url;

if (url.includes("free-membership/usage")) {
    obj.data = {
        "totalFreeDays": null,
        "usedDays": null
    };
}

if (url.includes("subscription/expiry-popup")) {
    if (obj.data) {
        obj.data.shouldPopup = false;
    }
}

if (url.includes("subscription/info")) {
    obj.data = {
        "subscriptionList": [{
            "productId": null,
            "autoRenewStatus": null,
            "subscriptionEndDate": "4133865599000",
            "canSubscribe": false,
            "nextDeductTime": null,
            "canCancelSubscribe": false,
            "memberStatus": "ACTIVE",
            "paymentChannel": "",
            "periodType": null,
            "periodUnits": null,
            "canResubscribe": false,
            "lastTransactionId": null,
            "subscriptionStatus": "ACTIVE"
        }]
    };
}

if (url.includes("account/user-profile")) {
    if (obj.data) {
        obj.data.nickname = "尊贵SVIP用户";
        obj.data.isVip = true;
        obj.data.vipStatus = "ACTIVE";
        obj.data.status = 1;
        obj.data.vipLevel = 1;
    }
}

$done({ body: JSON.stringify(obj) });
