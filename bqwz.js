/*
 *
 *
脚本功能：标枪王者(微信小程序)
软件版本：
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https?:\/\/javelin.mandrillvr.com\/api\/data\/get_game_data url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/bqwz.js

[mitm]
hostname = javelin.mandrillvr.com
*
*
*/





let body = $response.body;

// 金币
body = body.replace(/\\"coin\\":\d+/g, '\\"coin\\":9999880');
// 钻石
body = body.replace(/\\"diamond\\":\d+/g, '\\"diamond\\":9999880');
// 经验
body = body.replace(/\\"exp\\":\d+/g, '\\"exp\\":9999880');
// 排位券
body = body.replace(/\\"rank_ticket\\":\d+/g, '\\"rank_ticket\\":666');
// PVE体力
body = body.replace(/\\"pve_power\\":\d+/g, '\\"pve_power\\":888');

$done({ body });
