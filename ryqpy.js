/*
 *
 *
脚本功能：日语趣配音-零基础学日语
软件版本：1.7.5
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 日语趣配音-零基础学日语
^https?:\/\/japaneselar.qupeiyin.com\/ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ryqpy.js

[mitm]
hostname = japaneselar.qupeiyin.com
*
*
*/









var obj = JSON.parse($response.body);

if (obj.data) {
    obj.data.is_vip = "1";   
    obj.data.type = "2";     
    
}

$done({body: JSON.stringify(obj)});