/*
 *
 *
脚本功能：读手表-insight
软件版本：2.1.9
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 读手表-insight
^https:\/\/watch\.taotiangou\.cn\/prod-api\/watch\/insight\/userInfo\/getUserMemberInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/dsb.js

[mitm]
hostname = watch.taotiangou.cn
*
*
*/







let obj = JSON.parse($response.body);

if (obj.code === 200 && obj.data) {
    obj.data.memberType = 2;
    obj.data.isProPermanent = 0;
    obj.data.isProMaxPermanent = 1;
    obj.data.isPermanent = 1;
    obj.data.productId = "com.jsx.insight.pro_max_forever";
    let distantFuture = "2099-12-31 23:59:59";
    obj.data.proStartTime = distantFuture;
    obj.data.proEndTime = distantFuture;
    obj.data.proMaxStartTime = distantFuture;
    obj.data.proMaxEndTime = distantFuture;
}

$done({body: JSON.stringify(obj)});
