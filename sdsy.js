
/*
 *
 *
脚本功能：闪电水印-视频下载提取解析短视频
软件版本：4.2.0
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 闪电水印-视频下载提取解析短视频
^https?:\/\/watershandiana.yunxiaoguo.cn\/user\/info url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/sdsy.js

[mitm]
hostname = watershandiana.yunxiaoguo.cn
*
*
*/

















var body = $response.body;
let obj = JSON.parse(body);


if (obj.content) {
    obj.content.isPurchasedSubscribe = 1;
    obj.content.user.maskMobile = "https://t.me/GieGie777";
    obj.content.waterVipInfo = {
        "subscribeCycle": -1,
        "beginTime": "2025-09-09 09:09:09",
        "firstOpenTime": "2025-09-09 09:09:09",
        "freeTimes": 0,
        "userSign": obj.content.user?.sign || "wa44coNPDkg",
        "expireTime": "2999-09-09 09:09:09",
        "typeName": "终身会员",
        "remainDays": 9,
        "sign": "wa44coNPDkg",
        "createTime": "2025-09-09 09:09:09"
    };
}

$done({body: JSON.stringify(obj)});
