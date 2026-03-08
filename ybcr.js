/*
 *
 *
脚本功能：一波超人(微信小程序)
软件版本：
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https?:\/\/api.xgamevip.com\/api\/v1\/getUserData url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ybcr.js

[mitm]
hostname = api.xgamevip.com
*
*
*/





let body = $response.body;

// 金币
body = body.replace(/\\"coin\\":\d+/g, '\\"coin\\":999988990');
// 钻石
body = body.replace(/\\"diamond\\":\d+/g, '\\"diamond\\":999988990');
// 体力 powerNum
body = body.replace(/\\"powerNum\\":\d+/g, '\\"powerNum\\":999');
// 抽卡次数 drawNum
body = body.replace(/\\"drawNum\\":\d+/g, '\\"drawNum\\":99999');
$done({ body });
