/*
 *
 *
脚本功能：有心跳-舞蹈-跳舞-学舞神器
软件版本：1.75.5
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 有心跳-舞蹈-跳舞-学舞神器
^https:\/\/api\.train2win\.cn\/v1\/users\/myInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xintiao.js

[mitm]
hostname = api.train2win.cn
*
*
*/












let body = $response.body;
let obj = JSON.parse(body);

if (obj.data) {
    
    obj.data.isVip = true;

    
    obj.data.level = "VIP";

    
    obj.data.appleProductId = "forever_449";
}

$done({ body: JSON.stringify(obj) });

