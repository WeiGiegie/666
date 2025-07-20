/*
 *
 *
脚本功能：追剧日历-你的追剧好帮手
软件版本：2.0.4
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >追剧日历-你的追剧好帮手
^https?:\/\/api.rc-backup.com\/v1\/subscribers\/identify url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/zjrl.js

[mitm]
hostname = api.rc-backup.com

*
*
*/




































if ($request.url.includes('/v1/subscribers/identify')) {
    let body = JSON.parse($response.body);
    Object.assign(body, {
        "request_date_ms": 1752984954843,
        "request_date": "2025-07-20T04:15:54Z",
        "subscriber": {
            "non_subscriptions": {

            },
            "first_seen": "2025-07-20T03:56:17Z",
            "original_application_version": "2",
            "other_purchases": {

            },
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "com.byronyeung.cuckoo.Annual": {
                    "original_purchase_date": "2025-07-20T03:57:44Z",
                    "expires_date": "2999-09-09T09:09:09Z",
                    "is_sandbox": false,
                    "refunded_at": null,
                    "store_transaction_id": "710002215451333",
                    "unsubscribe_detected_at": null,
                    "grace_period_expires_date": null,
                    "period_type": "trial",
                    "price": {
                        "amount": 0,
                        "currency": "CNY"
                    },
                    "purchase_date": "2025-07-20T03:57:43Z",
                    "display_name": null,
                    "billing_issues_detected_at": null,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "auto_resume_date": null
                }
            },
            "entitlements": {
                "Pro": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2025-07-20T03:57:43Z",
                    "product_identifier": "com.byronyeung.cuckoo.Annual",
                    "expires_date": "2999-09-09T09:09:09Z"
                }
            },
            "original_purchase_date": "2025-07-20T03:55:54Z",
            "original_app_user_id": "$RCAnonymousID:2eec4347795c4211a2ff138c804bf555",
            "last_seen": "2025-07-20T04:02:07Z"
        }
    });
    $done({
        body: JSON.stringify(body)
    });
}
