/*
 *
 *
脚本功能：彩云天气
软件版本：
下载地址：
脚本作者：
更新时间：2024年4.23
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************

====================================
[rewrite_local]
# 普通版广告
^https:\/\/ad\.cyapi\.cn\/v2\/req\?app_name=weather url reject-dict
# 赏叶赏花
^https:\/\/wrapper\.cyapi\.cn\/v1\/activity\?app_name=weather url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/cytq.js
# 解锁vip
^https:\/\/biz\.cyapi\.cn\/v2\/user url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/cytq.js
# 卫星云图 48小时预报
^https:\/\/wrapper\.cyapi\.cn\/v1\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/cytq.js

[mitm]
hostname = *.cyapi.cn
====================================
 *
 *
 */
var huihui = {},
    url = $request.url;
if (url.includes("/v2/user")) {
    let obj = JSON.parse($response.body);
    obj.result.is_vip = !0,
        obj.result.svip_expired_at = 3742732800,
        obj.result.vip_type = "s",
        huihui.body = JSON.stringify(obj)
}
if (/v1\/(satellite|nafp\/origin_images)/g.test(url)) {
    huihui.headers = $request.headers;
    huihui.headers['device-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiNjYyNzQxMzVkYWM3MGMwMDE4YzFlNDBmIiwidXNlcl9pZCI6IjVmNWJmYzU3ZDJjNjg5MDAxNGUyNmJiOCIsInZlcnNpb24iOjIsImV4cCI6MTcyMTYyNDYyOSwidmlwX2V4cGlyZWRfYXQiOjAsImlzcyI6IndlYXRoZXIiLCJpYXQiOjE3MTM4NDg2MjksInN2aXBfZXhwaXJlZF9hdCI6MTg1NjY4NTAzMSwicHJpbWFyeSI6dHJ1ZX0.bBT3vbfATa-LF1G34j4VjPTYtwcKHfG3oHIkFlmg1dY';
   huihui.headers['user-id'] = '5f5bfc57d2c6890014e26bb8';


}
if(url.includes('v1/activity')){
	let body = $response.body
	body = '{"status":"ok","activities":[{"items":[{}]}]}';
	huihui.body = body;
}
$done(huihui);

