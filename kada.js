/*
 *
 *
脚本功能：kada阅读-儿童绘本故事启蒙大全
软件版本：8.28.0
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]

# >kada阅读-儿童绘本故事启蒙大全
^https:\/\/service\.hhdd\.com\/book2 url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/kada.js

[mitm] 
hostname = service.hhdd.com

*
*
*/


let body = $response.body;
let obj = JSON.parse(body);

obj.data.unLock = true;
obj.data.bookVip = 0;
obj.data.bookSvip = 0;

if (obj.data.collectInfo) {
    obj.data.collectInfo.subscribeStatus = 1;
}

obj.data.trialReadingPages = obj.data.pageCount;

obj.data.price = 0;
obj.data.vipPrice = 0;
obj.data.subscribed = 1;
obj.data.abilitiesFlag = 31;

if (obj.data.rating) {
    obj.data.rating.userStar = 5;
}

obj.data.freeFlag = 1;
obj.data.freeEndTime = 9999999999999;

if (obj.data.bookSrt) {
    obj.data.bookSrt.srtShowFlag = 1;
}

obj.data.abilities = ["伴读", "拼音", "字卡", "答题", "朗读"];
obj.data.subscribeFlag = 1;

if (obj.data.items && Array.isArray(obj.data.items)) {
    obj.data.items.forEach(item => {
        item.unLock = true;
        item.bookVip = 0;
        item.bookSvip = 0;
        item.trialReadingPages = item.pageCount;
        item.literacyTrialReadingPages = item.pageCount;
    });
}

$done({body: JSON.stringify(obj)});
