/*
 *
 *
脚本功能：地铁跑酷 (微信小程序) 修改金币、钥匙等货币
软件版本：
脚本作者：
更新时间：2026-03-14
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https?:\/\/dtpkwx-prod-web\.gxpan\.cn\/api\/user\/user_other_save_read url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/dtpk.js

[mitm]
hostname = dtpkwx-prod-web.gxpan.cn
*
*
*/





var body = $response.body;
let obj = JSON.parse(body);

if (obj.data && obj.data.save_data) {
    let saveData = JSON.parse(obj.data.save_data);
    if (saveData.gold) {
        saveData.gold.coins = 999999999;   //金币
        saveData.gold.keys = 999999999;    //钥匙
        saveData.gold.runCoins = 999999999;//奔跑币
        saveData.gold.goldKey2023s = 999999999;
        saveData.gold.sprayCans = 999999999;   
        saveData.gold.pvpPoint = 999999999; 
    }

    obj.data.save_data = JSON.stringify(saveData);
}

$done({ body: JSON.stringify(obj) });
