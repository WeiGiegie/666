/*
 *
 *
脚本功能：
软件版本：
下载地址：苹果商店下载
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > vip
^https?:\/\/quiz.istarl.com\/api\/index.php\?app_frontend_v2&init&opr=one&code url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/jzlx.js

[mitm] 
hostname = quiz.istarl.com
*
*
*/
var body = $response.body; 
let obj = JSON.parse($response.body);
obj={   "topics" : {     "appVersion" : "2.0.5",     "user" : {       "id" : 13789,       "vip" : 1,       "avatarName" : "",       "idno" : "549957",       "authType" : "email",       "type" : "customer",       "expiredDate" : "2999-09-09",       "isDelete" : 0,       "avatar" : "",       "username" : "https://t.me/GieGie777",       "nickname" : "https://t.me/GieGie777",       "uuidUserNum" : 1     },     "notices" : [       {         "id" : 3,         "title" : "其他收费标准",         "content" : "1.\tvip用户：90天 700rmb\n2.\tvip用户：180天 1000rmb\n3.\tvip用户：大于300天，每天4rmb，可以自己选择所需时间\n\n可以根据需求和客服人员续费\n",         "ctime" : "2023-10-24 12:38:09",         "visible" : 1       },       {         "id" : 2,         "title" : "多账号限制",         "content" : "申请多个试用账户会造成功能限制",         "ctime" : "2023-10-24 12:20:08",         "visible" : 1       }     ]   },   "token" : "",   "msg" : "操作成功",   "type" : "success",   "count" : 2,   "extra" : [    ] }
$done({body: JSON.stringify(obj)});
