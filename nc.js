/*
 *
 *
脚本功能：捏词-自担陪你背四六级考研
软件版本：1.2.0
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 捏词-自担陪你背四六级考研
^https:\/\/ainieci\.com\/test\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/nc.js

[mitm]
hostname = ainieci.com
*
*
*/







let obj = JSON.parse($response.body);

if (obj.code === 200 && obj.data) {
    obj.data.userType = 1;
    
    obj.data.expireTime = "2099年12月31日";
    obj.data.rank = 1;
    obj.data.learnedNum = 9999;
    obj.data.contextLength = 9999;

    obj.data.vipStatus = 1;
    obj.data.vipRights = ["专属权限1", "专属权限2"];
}

$done({body: JSON.stringify(obj)});

