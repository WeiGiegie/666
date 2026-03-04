/*
 *
 *
脚本功能：成语来解压 (微信小程序) 
软件版本：无限金币，可购买游戏道具
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https?:\/\/yr-game-api.feigo.fun\/api\/user\/get-game-user-value url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/cyljy.js

[mitm]
hostname = yr-game-api.feigo.fun
*
*
*/













var body = $response.body; 
let obj = JSON.parse($response.body);
obj.coin = 999988800;
$done({body: JSON.stringify(obj)});
