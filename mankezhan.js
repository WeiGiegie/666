/*
 *
 *
脚本功能：漫客宅,会员漫画小说解锁
软件版本：++
下载地址：
脚本作者：
更新时间：2024年6月27日 07:02
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


var body=$response["\u0062\u006f\u0064\u0079"];var url=$request["\u0075\u0072\u006c"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](body);const a="ofni/resu/moc.ndczkm.rebmem".split("").reverse().join("");const b="\u006d\u0065\u006d\u0062\u0065\u0072\u002e\u006d\u006b\u007a\u0063\u0064\u006e\u002e\u0063\u006f\u006d\u002f\u0075\u0073\u0065\u0072\u002f\u0066\u0075\u006e\u0064\u0073\u002f\u0069\u006e\u0066\u006f\u002f";const c="/dda/".split("").reverse().join("");const d="\u002f\u0061\u0064\u0076\u0065\u0072\u0074\u002f\u0061\u0070\u0070\u002f";if(url["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](a)!=-(0x96816^0x96817)){obj["\u0064\u0061\u0074\u0061"]["\u0075\u0073\u0065\u0072\u006e\u0061\u006d\u0065"]="777eiGeiG/em.t//:sptth".split("").reverse().join("");obj['data']["\u006e\u0069\u0063\u006b\u006e\u0061\u006d\u0065"]="777eiGeiG/em.t//:sptth".split("").reverse().join("");obj['data']['signd_type']=0xa3270^0xa3272;obj['data']["\u006d\u006f\u0062\u0069\u006c\u0065"]=0xbbd7e^0xbbd7f;body=JSON['stringify'](obj);}if(url["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](b)!=-(0x91e58^0x91e59)){obj['data']["\u0076\u0069\u0070\u005f\u0065\u006e\u0064\u005f\u0074\u0069\u006d\u0065"]=0x790c89135;obj['data']['read_card_end_time']=0x790c89135;obj["\u0064\u0061\u0074\u0061"]['vip_viscount_time']=0x790c89135;obj["\u0064\u0061\u0074\u0061"]["\u0076\u0069\u0070\u005f\u0062\u0061\u0072\u006f\u006e\u005f\u0074\u0069\u006d\u0065"]=0x790c89135;obj["\u0064\u0061\u0074\u0061"]['vip_type']=0x55d3b^0x55d39;obj["\u0064\u0061\u0074\u0061"]['is_vip']=0xc1780^0xc1781;obj['data']["\u0067\u006f\u006c\u0064"]="088999".split("").reverse().join("");obj["\u0064\u0061\u0074\u0061"]['ticket']="088999".split("").reverse().join("");obj["\u0064\u0061\u0074\u0061"]['integral']='999880';obj['data']['card_count']='999880';body=JSON['stringify'](obj);}if(url["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](c)!=-(0x22a05^0x22a04)){obj["\u0063\u006f\u0064\u0065"]=0x7c810^0x7c8d8;body=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);}if(url["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](d)!=-0x1){delete obj["\u0064\u0061\u0074\u0061"];body=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);}$done({"\u0062\u006f\u0064\u0079":body});