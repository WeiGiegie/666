/*
 *
 *
脚本功能：三联中读,知识会员+数字刊会员
软件版本：++
下载地址：苹果商店下载
脚本作者:
更新时间：2024年2月2日 10:28
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

# > 三联中读,知识会员+数字刊会员
^https?:\/\/apis\.lifeweek\.com.cn\/vip\/loadMyVipV2.*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/slzd.js
&ticket=[a-zA-Z0-9]+ url 302 &ticket=1706840896761jndfx

[mitm] 
hostname = apis.lifeweek.com.cn
*
*
*/




var body = $response.body;
body
let obj = JSON.parse($response.body);
obj = {
    "extraInfoMap": {

    },
    "model": [{
        "userHeadPic": "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg",
        "vipLevel": 4,
        "vipExpiration": "2999-09-09",
        "vip": true,
        "username": "by-WR",
        "vipValid": true
    }, {
        "userHeadPic": "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg",
        "vipLevel": 5,
        "vipExpiration": "2999-09-09",
        "vip": true,
        "username": "by-WR",
        "vipValid": true
    }, {
        "userHeadPic": "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg",
        "vipLevel": 6,
        "vipExpiration": "2999-09-09",
        "vip": true,
        "username": "by-WR",
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
$done({
    body:  JSON.stringify(obj)
});
