/*
 *
 *
脚本功能：网上厨房-家常菜谱美食烘焙教程
软件版本：16.8.99
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]

# >网上厨房-家常菜谱美食烘焙教程
^https:\/\/api\.ecook\.xiaochushuo\.com url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/wscf.js

[mitm] 
hostname = api.ecook.xiaochushuo.com

*
*
*/

function modifyAll(obj) {
    if (!obj || typeof obj !== 'object') return;
    
    const modifications = {
        'isMember': true,
        'free': true,
        'evaluated': true,
        'type': 'VIP',
        'medal': 'gold'
    };
    
    function applyMods(obj) {
        for (let key in obj) {
            if (modifications.hasOwnProperty(key)) {
                if (key === 'type' && obj[key] !== 'Rookie') {
                    continue;
                }
                if (key === 'medal' && obj[key] !== 'iron') {
                    continue;
                }
                obj[key] = modifications[key];
            } else if (typeof obj[key] === 'object') {
                applyMods(obj[key]);
            }
        }
    }
    
    applyMods(obj);
}

let obj = JSON.parse($response.body);
modifyAll(obj);
$done({body: JSON.stringify(obj)});
