/*
 *
 *
脚本功能：星际使命(微信小程序)
软件版本：
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https?:\/\/star.jvplay.cn\/v2\/storage url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xjsm.js

[mitm]
hostname = star.jvplay.cn
*
*
*/












let body = $response.body;
let obj = JSON.parse(body);

if (obj && obj.objects) {
    for (let i = 0; i < obj.objects.length; i++) {
        let item = obj.objects[i];
        
        // 1. 修改钱包
        if (item.collection === "Common" && item.key === "wallet") {
            try {
                let wallet = JSON.parse(item.value);
                wallet.coin = 999988990;//金币
                wallet.coupon = 999988990;//广告卷
                wallet.gem = 999988990;//钻石
                item.value = JSON.stringify(wallet);
            } catch (e) {
                console.log("解析 wallet 失败: " + e);
            }
        }
        
        // 2. 修改背包：确保所有武器碎片存在且数量为999988990
        if (item.collection === "Common" && item.key === "Bag") {
            try {
                let bag = JSON.parse(item.value);
                // 确保 m_ItemList 存在且为数组
                if (!bag.m_ItemList || !Array.isArray(bag.m_ItemList)) {
                    bag.m_ItemList = [];
                }
                
                // 定义所有武器碎片的ID列表（根据你的商店推测，共10种武器，ID从1100到1109；如果你看到1110也可加上）
                const weaponIds = ["1100", "1101", "1102", "1103", "1104", "1105", "1106", "1107", "1108", "1109", "1110"];
                
                // 遍历每个目标ID
                for (let id of weaponIds) {
                    let found = false;
                    // 查找是否已存在该ID的物品
                    for (let it of bag.m_ItemList) {
                        if (it.ItemID === id) {
                            it.Count = 999988990;  // 修改数量
                            found = true;
                            break;
                        }
                    }
                    // 如果不存在，则添加新条目
                    if (!found) {
                        bag.m_ItemList.push({ Count: 999988990, ItemID: id });
                    }
                }
                
                item.value = JSON.stringify(bag);
            } catch (e) {
                console.log("解析 Bag 失败: " + e);
            }
        }
    }
    body = JSON.stringify(obj);
}

$done({ body });
