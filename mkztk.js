/*
 *
 *
脚本功能：漫客宅,会员漫画小说解锁
软件版本：++
下载地址：
脚本作者：
更新时间：2025年4月12日 23:12
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 漫客宅,会员解锁
^https?:\/\/(member|comic|base).mkzcdn.com\/(user|chapter\/buy\/add|vote\/add|gift\/play\/add|advert\/app\/(read|user|task)).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/mankezhan.js
^https?:\/\/(comic|story).mkzcdn.com\/chapter\/(content\/v1|read\/check).*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/mkztk.js
[mitm] 
hostname = member.mkzcdn.com,comic.mkzcdn.com,base.mkzcdn.com


*
*
*/


var modifiedUrl = $request.url
.replace(/(&sign=\w+)/, '&sign=501115ebbab02ae37e1330f404588e25')
.replace(/(&uid=\d+)/, '&uid=78276470');


$done({
    url: modifiedUrl
});
