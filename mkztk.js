/*
 *
 *
脚本功能：漫客宅,会员漫画小说解锁
软件版本：++
下载地址：
脚本作者：
更新时间：2024年8月4日 07:29
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
.replace(/(&sign=\w+)/, '&sign=473c254da3c1cc14a3872ceb23ae7939')
.replace(/(&uid=\d+)/, '&uid=74512096');


$done({
    url: modifiedUrl
});
