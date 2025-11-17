/*
 *
 *
脚本功能：鸡乐盒
软件版本：1.1.14
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 鸡乐盒
^http:\/\/www\.mhzcookbook\.xyz\/app url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/jyh.js

[mitm]
hostname = www.mhzcookbook.xyz
*
*
*/








var obj = JSON.parse($response.body);

if (obj.data) {
    // VIP related modifications
    obj.data.vipIsOverdue = false;
    obj.data.badgeLevel = 9;
    obj.data.vip_expiration_time_show = "2099-12-31";
    obj.data.nickName = "Lifetime VIP";
    
    // Badge hint
    obj.data.badgeHint = "VIP member exclusive badge unlocked";

    // Disable ads
    if (obj.data.ad) {
        obj.data.ad.showAd = false;
        if (obj.data.ad.csj) {
            obj.data.ad.csj.probability = 0;
        }
        if (obj.data.ad.ylh) {
            obj.data.ad.ylh.probability = 0;
        }
        if (obj.data.ad.huawei) {
            obj.data.ad.huawei.probability = 0;
        }
    }
}

$done({body: JSON.stringify(obj)});
