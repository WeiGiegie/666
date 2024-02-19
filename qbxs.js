/*
 *
 *
脚本功能：全本小说&淘小说 解锁vip，
软件版本：2.3.1,2.8.2
下载地址：苹果商店下载
脚本作者：
更新时间：2024年2月18日 06:55
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]

# > 全本小说&淘小说 解锁vip，
^https?:\/\/t(f|y)book.taoyuewenhua.net\/(auth\/account\?adid|auth\/task_account_ios.do\?|wx_register.do\?|auth\/try_wx_bind\?).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/qbxs.js
^https://thirdwx\.qlogo\.cn/mmopen/.*$ url 302 https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg
[mitm] 
hostname = tfbook.taoyuewenhua.net,tybook.taoyuewenhua.net
*
*
*/




var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/task_account_ios.do?';
const p2 = '/auth/account?adid';
const p3 = 'wx_';

//cion
if (url.indexOf(p1) != -1) {
    obj.data.money = 999880;
    obj.data.coins = 999880;
    body = JSON.stringify(obj);
}
//vip
if (url.indexOf(p2) != -1) {
    obj.data.paymentUser = true;
    obj.data.isVip = true;
    body = JSON.stringify(obj);
}
//Login
if (url.indexOf(p3) != -1) {
    obj.data.header = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg";
    obj.data.nickname = "https://t.me/GieGie777";
    body = JSON.stringify(obj);
}


$done({
    body
});
