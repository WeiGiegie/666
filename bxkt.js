/*
 *
 *
脚本功能：伴学课堂
软件版本：1.4.4
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]

# >口语星球
^https?:\/\/api\.banxueketang\.com\/api\/classpal\/app\/v1 url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/bxkt.js

[mitm] 
hostname = api.banxueketang.com

*
*
*/



let body = $response.body;
if (!body) return $done({});

try {
    let obj = JSON.parse(body);
    if (obj.data) {
        let data = obj.data;
        
        // 全局VIP
        data.isVip = true;
        data.isHave = true;
        data.isLock = false;
        data.isSale = true;
        data.isVipExpire = false;
        data.originalPrice = 0;
        data.salePrice = 0;
        data.trialTopNum = 999;

        // 解锁所有视频
        if (Array.isArray(data.refBusinessList)) {
            data.refBusinessList.forEach(i => i.isLock = false);
        }
        
        body = JSON.stringify(obj);
    }
} catch(e) {
    body = body.replace(/"isVip":false/g, '"isVip":true');
    body = body.replace(/"isHave":false/g, '"isHave":true');
    body = body.replace(/"isLock":true/g, '"isLock":false');
}

$done({ body });