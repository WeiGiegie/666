

/*
 *
 *
脚本功能：摩途-摩托车骑行导航路书轨迹地图
软件版本：4.1.0
下载地址：
脚本作者：
更新时间：2026年01月25日 
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 摩途-摩托车骑行导航路书轨迹地图
^https:\/\/motu\.motumap\.com\/v3\/user\/info url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/motu.js

[mitm] 
hostname = motu.motumap.com
*
*
*/


let obj = JSON.parse($response.body);

if (obj.data) {
    obj.data.isPro = 1;
    
    obj.data.memStartTime = Math.floor(Date.now() / 1000); 
   
    obj.data.memEndTime = 4102415999;
    obj.data.type = 2;
}

$done({body: JSON.stringify(obj)});
