/*
 *
 *
脚本功能：锦鲤聚合 解锁会员视频+
软件版本：++
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >18+ 锦鲤聚合 会员+
^http:\/\/h5.jinliapp.top\/api.php\/(user\/index|video\/detail\?id|platform|login\/login).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/jinli.js

[mitm] 
hostname = h5.jinliapp.top
*
*
*/








if($request["\u0075\u0072\u006c"]["\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0073"]("xedni/resu/php.ipa/".split("").reverse().join(""))){let body=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);Object["\u0061\u0073\u0073\u0069\u0067\u006e"](body["\u0064\u0061\u0074\u0061"],{"\u0063\u006f\u006e\u0074\u0061\u0063\u0074\u005f\u0077\u0061\u0079":"","\u0069\u0064\u0065\u006e\u0074\u0069\u0074\u0079":"\u9ad8\u7ea7\u0056\u0049\u0050","\u0075\u0073\u0065\u0072\u006e\u0061\u006d\u0065":'https://t.me/GieGie777','day':0x270f,"\u0065\u006e\u0064\u005f\u0074\u0069\u006d\u0065":"\u0032\u0039\u0039\u0039\u002d\u0030\u0039\u002d\u0030\u0039\u5230\u671f"});$done({'body':JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](body)});}else if($request["\u0075\u0072\u006c"]["\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0073"]('/api.php/video/detail?id')){let body=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);Object["\u0061\u0073\u0073\u0069\u0067\u006e"](body["\u0064\u0061\u0074\u0061"],{"\u006e\u006f\u0074\u0069\u0063\u0065":'脚本作者频道Telegram\x20:\x20https://t.me/GieGie777',"\u0075\u0073\u0065\u0072\u005f\u0074\u0079\u0070\u0065":0x1});$done({"\u0062\u006f\u0064\u0079":JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](body)});}else if($request['url']['includes']("/mroftalp/php.ipa/".split("").reverse().join(""))){let body=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);Object["\u0061\u0073\u0073\u0069\u0067\u006e"](body,{'data':null,'code':-(0x878d9^0x878d8),'msg':'Ios平台直播栏目无法解锁！请观会员看视频'});$done({'body':JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](body)});}else if($request["\u0075\u0072\u006c"]['includes']("nigol/nigol/php.ipa/".split("").reverse().join(""))){let body=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);Object['assign'](body,{"\u0063\u006f\u0064\u0065":0xc8,"\u0064\u0061\u0074\u0061":{'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6InF3ZXJ0eXVpbyJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkudGVzdC5jbiIsImF1ZCI6Imh0dHA6XC9cL3d3dy50ZXN0LmNuIiwianRpIjoicXdlcnR5dWlvIiwiaWF0IjoxNzE4ODUyOTA5LCJuYmYiOjE3MTg4NTI5MDgsImV4cCI6MTcxOTExMjEwOSwidXNlcl9pZCI6MTEwMjJ9.05AxNri24qyQ1SqF11LlGtdUorG6i-47eNVOEX4fCFc'},"\u006d\u0073\u0067":'https://t.me/GieGie777',"\u0074\u0069\u006d\u0065":'null'});$done({"\u0062\u006f\u0064\u0079":JSON['stringify'](body)});}
