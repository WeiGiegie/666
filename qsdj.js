/*
 *
 *
脚本功能：去刷短剧
软件版本：1.0.3
下载地址：
脚本作者：
更新时间：2026年9月6日
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 去刷短剧 vip
^https?:\/\/qs.szqibu.cn\/api\/user\/getUserinfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/qsdj.js

[mitm]
hostname = qs.szqibu.cn
*
*
*/

var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.vip_endtime = 32493834549000;
$done({body: JSON.stringify(obj)});
