/*
 *
 *
脚本功能：污贼直播（前神户）会员+去广告
软件版本：0.8.0++
下载地址：
脚本作者：
更新时间：2024年,6.20
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >18+ 污贼直播（前神户）会员+去广告
^https?:\/\/.+Api\/(Account\/Login|App\/Splash|App\/Update|App\/PlatData|App\/homeData|Live\/Play).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/wuzei.js
^https?:\/\/www\.auth\.open\.52kuajing002\.51kuajing\.net\/Api\/Account\/Login.*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wztk.js

[mitm] 
hostname = www.auth.open.52kuajing002.51kuajing.net,*.aliyuncs.com,videocloud.cn-hangzhou.log.aliyuncs.com
*
*
*/




var modifiedHeaders = $request.headers;

modifiedHeaders['device'] = '{"name":"aVBob25l","systemName":"iOS","systemVersion":"16.2","model":"iPhone","localizedModel":"iPhone","identifierForVendor":"7E55FA15-40B1-4FBD-9B9F-A1465944C171","isPhysicalDevice":true,"bundleID":"game.squid.xy"}' ;
modifiedHeaders['cookie'] = '' ;

modifiedHeaders['auth'] = '' ;

$done({headers : modifiedHeaders});


