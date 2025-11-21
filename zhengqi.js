/*
 *
 *
脚本功能：正气-戒色助手
软件版本：7.1.33
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 正气-戒色助手
^https:\/\/(api|apio)\.zhengqi100\.com url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/zhengqi.js

[mitm]
hostname = api.zhengqi100.com,apio.zhengqi100.com
*
*
*/









let obj = JSON.parse($response.body);
console.log("执行了----");
if(obj.data){
    obj.data.isVip = "on";
    obj.data.vip_expired_at = "2099-05-08 15:33:52";
    obj.data.days = 999999;
    obj.data.expire = "2099-05-08 15:33:52";
         obj.data.updated_at= "2000-05-12 23:19:43";
    obj.data.isAdmin = true; 
    obj.data.adblock_expired_at = "2099-06-08 15:33:52"; 
}
$done({body: JSON.stringify(obj)});

