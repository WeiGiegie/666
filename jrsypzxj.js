/*
 *
 *
脚本功能：今日水印拍照相机 Pro
软件版本：1.7
下载地址：
脚本作者：**
更新时间：2024-2.13
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 今日水印拍照相机 Pro
^https?:\/\/water-fst.yifanxinmei.com\/api\/guests\/login.*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/jrsypzxj.js

[mitm] 
hostname = water-fst.yifanxinmei.com


*
*
*/
var body = $response.body;
let obj = JSON.parse($response.body);
obj.data.identity.vip = 1;
obj.data.identity.vip_expire_date = 32493834549000;
obj.data.identity.nickname = "https://t.me/GieGie777";
$done({
    body:  JSON.stringify(obj)
});
