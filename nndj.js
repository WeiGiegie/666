/*
 *
 *
脚本功能：牛牛短剧-短剧官方-海量热门短剧视频大全随心看
软件版本：1.5.8
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 牛牛短剧-短剧官方-海量热门短剧视频大全随心看
^https?:\/\/new.tianjinzhitongdaohe.com\/api\/v1\/app\/user\/visitorInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/nndj.js

[mitm]
hostname = new.tianjinzhitongdaohe.com
*
*
*/

var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.isVip = 1;
$done({body: JSON.stringify(obj)});
