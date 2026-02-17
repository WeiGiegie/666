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
let obj = JSON.parse(body);
if (!obj || obj.code !== "200") return $done({ body: JSON.stringify(obj) });

let url = $request.url;
let data = obj.data;
if (!data) return $done({ body: JSON.stringify(obj) });

// 用户/VIP信息处理
if (/user|vip|status|info/.test(url)) {
    let fields = ["isVip", "vipStatus", "vipLevel", "hasOwned", "isHave"];
    fields.forEach(f => data[f] !== undefined && (data[f] = 1));
    data.isVipExpire = false;
    data.vipExpireTime = data.expireTime = "4102415999";
}

// 资料/课程列表处理
if (Array.isArray(data)) {
    data.forEach(item => {
        item.salePrice = 0;
        item.saleMode = 0;
        item.isVip = item.isHave = true;
        if (item.hasOwned !== undefined) item.hasOwned = 1;
        if (item.vipStatus !== undefined) item.vipStatus = 1;
        if (Array.isArray(item.courseList)) {
            item.courseList.forEach(c => {
                c.isVip = c.isHave = true;
                c.isVipExpire = c.isSale = false;
                c.salePrice = 0;
            });
        }
    });
} else if (data.libraryUrl) {
    data.salePrice = 0;
    data.saleMode = 0;
    data.hasOwned = 1;
} else if (Array.isArray(data.refBusinessList)) {
    if (data.trialCount !== undefined) data.trialCount = 999;
    data.refBusinessList.forEach(item => item.isLock = false);
} else if (typeof data === "object") {
    data.salePrice = 0;
    data.saleMode = 0;
    data.hasOwned = 1;
    data.vipStatus = data.isVip = 1;
    data.expireTime = "4102415999";
}

$done({ body: JSON.stringify(obj) });

