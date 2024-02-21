/*
 *
 *
脚本功能：彩云天气
软件版本：++
下载地址：苹果商店下载
脚本作者：
更新时间：2024年2月20日 06:47
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]

# > 彩云天气 解锁vip
^https?:\/\/biz.cyapi.cn\/(p\/v1\/user_info|v2\/user).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/cytq.js

[mitm] 
hostname = biz.cyapi.cn
*
*
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/v1/user_info';
const p2 = '/v2/user';

//个人页面
if (url.indexOf(p1) != -1) {
    obj.name = "https://t.me/GieGie777";
    obj.avatar = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg";
    body = JSON.stringify(obj);
}

//_vip
if (url.indexOf(p2) != -1) {
    obj = {
        "server_time": 1708353391,
        "result": {
            "xy_vip_expire": 0,
            "vip_expired_at": 0.0,
            "ranking_above": 97.0,
            "vip_take_effect": 1,
            "auto_renewal_type": "",
            "third_party_id": null,
            "is_kol": false,
            "svip_expired_at": 32493834549.0,
            "is_login": false,
            "is_xy_vip": false,
            "platform_name": "weixin",
            "xy_svip_expire": 0,
            "is_visitor": false,
            "third_party_ids": ["6406c68989e1a20018905c8d"],
            "score": 2000,
            "is_xy_auto_renewal": false,
            "is_primary": true,
            "phone_num": "17083544841",
            "free_trial": 10,
            "last_acted_at": 1699229543.0828011036,
            "vip_type": "s",
            "is_phone_verified": true,
            "wt": {
                "ranking_above": 97.0,
                "created_at": 1599863895.1142549515,
                "last_acted_at": 1699229543.0828011036,
                "vip": {
                    "svip_apple_expired_at": 1692783499,
                    "enabled": true,
                    "is_auto_renewal": true,
                    "auto_renewal_type": "",
                    "svip_auto_renewal_type": "month",
                    "svip_expired_at": 1851501031.0,
                    "expired_at": 0.0
                },
                "svip_given": 1825,
                "free_trial": 10,
                "is_login": false
            },
            "device_id": "0D5E89DC-78F7-40A8-9348-E5BD077236C8-1699229500",
            "name": "https://t.me/GieGie777",
            "svip_take_effect": 1,
            "bound_status": {
                "qq": {
                    "username": "",
                    "is_bound": false,
                    "id": ""
                },
                "weibo": {
                    "username": "",
                    "is_bound": false,
                    "id": ""
                },
                "google": {
                    "username": "",
                    "is_bound": false,
                    "id": ""
                },
                "apple": {
                    "username": "",
                    "is_bound": true,
                    "id": "6406c68989e1a20018905c8d"
                },
                "weixin": {
                    "username": "https://t.me/GieGie777",
                    "is_bound": true,
                    "id": "5f5bfc57d2c6890014e26bb8"
                },
                "caiyun": {
                    "username": "",
                    "is_bound": false,
                    "id": ""
                },
                "twitter": {
                    "username": "",
                    "is_bound": false,
                    "id": ""
                },
                "facebook": {
                    "username": "",
                    "is_bound": false,
                    "id": ""
                }
            },
            "created_at": 1599863895.1142361164,
            "is_auto_renewal": true,
            "hasBeenInvited": true,
            "platform_id": "o3rJ_t00r0mxqS6GCVWMaVtEFLUk",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiNjVkMzY2OTRmY2FjMDgwMDE0NDlkODMzIiwidXNlcl9pZCI6IjVmNWJmYzU3ZDJjNjg5MDAxNGUyNmJiOCIsInZlcnNpb24iOjIsImV4cCI6MTcxNjEyOTE3MiwidmlwX2V4cGlyZWRfYXQiOjAsImlzcyI6IndlYXRoZXIiLCJpYXQiOjE3MDgzNTMxNzIsInN2aXBfZXhwaXJlZF9hdCI6MTg1MTUwMTAzMSwicHJpbWFyeSI6dHJ1ZX0.U_LCYNGl3cbBCpjrnjmxYBAuNFSvNCe3dKIrV1MGpzo",
            "svip_given": 1825,
            "avatar": "https://avatar.caiyuncdn.com/avatar/39cff6272f6e133d731fc6fda973e533-1708017050091.jpg",
            "is_vip": true,
            "gender": null,
            "_id": "5f5bfc57d2c6890014e26bb8"
        },
        "rc": 0
    }
    $done({
        body:  JSON.stringify(obj)
    });
    body = JSON.stringify(obj);
}



$done({
    body
});
