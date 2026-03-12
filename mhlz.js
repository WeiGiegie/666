/*
脚本功能：魔幻粒子 - 游戏货币修改
软件版本：
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https?:\/\/ss\.landintheair\.com\/storage\/ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/mhlz.js

[mitm]
hostname = ss.landintheair.com
*
*
*/













var body = $response.body;
let obj = JSON.parse(body);

if (obj && obj.currencies && obj.currencies.list) {
    for (let key in obj.currencies.list) {
        let currency = obj.currencies.list[key];
        if (key.startsWith("Quest_")) {
            // 任务进度设为1
            if (currency.amount !== undefined) currency.amount = "1";
            if (currency.total_collected !== undefined) currency.total_collected = "1";
        } else if (!key.startsWith("Event_")) {
            // 货币设为超大值（可根据需要调整）
            if (currency.amount !== undefined) currency.amount = "9999999999999999999988888888";
            if (currency.total_collected !== undefined) currency.total_collected = "9999999999999999999988888888";
        }
    
    }
}

$done({ body: JSON.stringify(obj) });

