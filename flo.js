/*
 *
 *
脚本功能：女性日记flo-大姨妈助手、排卵期安全期日历
软件版本：9.59.0
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >女性日记flo-大姨妈助手、排卵期安全期日历
^https?:\/\/api.owhealth.com\/subscriptions\/v1\/apple.*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/flo.js

[mitm] 
hostname = api.owhealth.com

*
*
*/














































































if ($request.url.includes('https://api.owhealth.com/subscriptions/v1/apple')) {
    let body = JSON.parse($response.body);
    Object.assign(body, {
        status: "active",
        transaction_id: 000000000652310,
        used_intro_gr1: true,
        auto_renew_status: false,
        expiration_date: "2999-09-09T06:42:17Z",
        features: [
            "premium",
            "premium_partnership",
            "report_for_doctor",
            "symptom_checker"
        ],
        subscription_manager: null,
    });
    $done({
        body: JSON.stringify(body)
    });
}
