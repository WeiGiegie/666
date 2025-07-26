/*
 *
 *
脚本功能：三联中读,知识会员+数字刊会员
软件版本：++
下载地址：苹果商店下载
脚本作者：
更新时间：2025年7月26日 19:12
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 三联中读,知识会员+数字刊会员
^https?:\/\/apis\.lifeweek\.com\.cn\/(vip\/loadMyVipV2\?|index\/home.do\?).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/slzd.js

[mitm] 
hostname = apis.lifeweek.com.cn
*
*
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = "/index/home.do?";
const p2 = "/vip/loadMyVipV2?";


if (url.indexOf(p1) != -1) {
    obj = {
        "extraInfoMap": {

        },
        "model": {
            "msgRed": 0,
            "registerTime": 1753528322742,
            "arOpen": true,
            "visitor": {
                "uid": 2954831,
                "ticket": "1753528322780tmdou"
            },
            "buyZhuanlanNewArticle": 1,
            "buyMsgNum": 1,
            "userInfo": {
                "phone": "",
                "uid": 2954831,
                "userVflag": 0,
                "remark": "此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖!!!作者TG频道 : https://t.me/GieGie777",
                "pic": "https://zdimg.lifeweek.com.cn/app/20230410/16811146599505136.jpg",
                "isVip": true,
                "name": "https://t.me/GieGie777"
            }
        },
        "resultMsg": "操作成功！",
        "redirectUrl": null,
        "resultCodeBean": "SUCCESS",
        "resultCode": "SUCCESS",
        "success": true,
        "pickParams": {

        }
    }


    body = JSON.stringify(obj);
}
if (url.indexOf(p2) != -1) {
    obj = {
        "extraInfoMap": {

        },
        "model": [{
            "userHeadPic": "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg",
            "vipLevel": 4,
            "vipExpiration": "2999-09-09",
            "vip": true,
            "username": "https://t.me/GieGie777",
            "vipValid": true
        }, {
            "userHeadPic": "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg",
            "vipLevel": 5,
            "vipExpiration": "",
            "vip": false,
            "username": "https://t.me/GieGie777",
            "vipValid": true
        }, {
            "userHeadPic": "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg",
            "vipLevel": 6,
            "vipExpiration": "2999-09-09",
            "vip": true,
            "username": "https://t.me/GieGie777",
            "vipValid": true
        }],
        "resultMsg": "操作成功！",
        "redirectUrl": null,
        "resultCodeBean": "SUCCESS",
        "resultCode": "SUCCESS",
        "success": true,
        "pickParams": {

        }
    }
    body = JSON.stringify(obj);
}

$done({
    body
});