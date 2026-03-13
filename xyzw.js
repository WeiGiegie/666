/*
 *
 *
脚本功能：咸鱼之王 - 通用配置修改（敌伤害=1,血量=1）
软件版本：微信小程序
下载地址：
脚本作者：
更新时间：2026年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >咸鱼之王 - 通用配置修改（敌伤害=1,血量=1）
^https?:\/\/xxz-xyzw-res\.hortorgames\.com\/remote\/config\/import\/.+\.json url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xyzw.js

[mitm]
hostname = xxz-xyzw-res.hortorgames.com
*
*
*/

var body = $response.body;
if (!body) {
    $done({});
    return;
}

try {
    let obj = JSON.parse(body);
    
    (function traverse(node) {
        if (!node || typeof node !== 'object') return;
        
        // 发现关卡配置对象（通过 monsters 字段识别）
        if (Array.isArray(node.monsters)) {
            // 修改预览金币（仅界面显示，不实际增加）
            if (node.hasOwnProperty('waveCoin')) {
                node.waveCoin = 66666;
            }
            if (node.hasOwnProperty('coinBase') && node.coinBase > 0) {
                node.coinBase = 66666;
            }
            
            // 修改怪物参数：monster 数组格式为 [怪物ID, 难度等级, 出现数量]
            node.monsters.forEach(wave => {
                if (Array.isArray(wave)) {
                    wave.forEach(monster => {
                        if (Array.isArray(monster) && monster.length >= 3) {
                            // 降低难度等级（第二个参数），使怪物血量/伤害降至最低
                            // 特殊标记 26,27,28 代表 BOSS 或特殊事件，可保留原等级=2血量/伤害
                            if (typeof monster[1] === 'number' && monster[1] !== 26 && monster[1] !== 27 && monster[1] !== 28) {
                                monster[1] = 1;   // 普通怪物难度=1 → 血量伤害=1
                            }
                            // 减少出现数量（第三个参数）为 1，避免成群结队
                            if (typeof monster[2] === 'number') {
                                monster[2] = 1;   // 所有怪物（含BOSS）数量改为1
                            }
                        }
                    });
                }
            });
        }
       
        for (let key in node) {
            traverse(node[key]);
        }
    })(obj);
    
    $done({ body: JSON.stringify(obj) });
} catch (e) {
    console.log("脚本错误: " + e);
    $done({ body: body });
}
