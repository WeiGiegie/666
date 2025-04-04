/*
 *
 *
脚本功能：蜜柚短剧-触手可及的短剧世界
软件版本：1.0.7
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 蜜柚短剧
^https?:\/\/api.duoyolo.cn\/play\/app\/user\/v1\/userInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/mydj.js
# >去广告
^https?://mobads.baidu.com url reject-dict
^https?://bgg.baidu.com url reject-dict
^https?://sf3-fe-tos.pglstatp-toutiao.com url reject-dict
^https?://cmyd-10-88.getui.com url reject-dict
^https?://open.e.kuaishou.com url reject-dict
^https?://api-access.pangolin-sdk-toutiao.com url reject-dict
^https?://toblog.ctobsnssdk.com url reject-dict
^https?://log-api.pangolin-sdk-toutiao.com url reject-dict
^https?://api-access.pangolin-sdk-toutiao1.com url reject-dict
^https?://log-api.pangolin-sdk-toutiao-b.com url reject-dict
^https?://api-access.pangolin-sdk-toutiao1.com url reject-dict
^https?://log-api.pangolin-sdk-toutiao.com url reject-dict
^https?://api-access.pangolin-sdk-toutiao1.com url reject-dict
^https?://log-api.pangolin-sdk-toutiao-b.com url reject-dict
^https?://api-access.pangolin-sdk-toutiao-b.com url reject-dict
^https?://b-gy.getui.net url reject-dict
^https?://gy.gepush.com url reject-dict
^https?://mssdk.volces.com url reject-dict
^https?://sdk.open.talk.getui.net url reject-dict
^https?://gromore.pangolin-sdk-toutiao.com url reject-dict
^https?://sdk.open.talk.gepush.com url reject-dict
^https?://adservice.sigmob.cn url reject-dict
^https?://sdk.open.talk.getui.com url reject-dict
^https?://yun.tuitiger.com url reject-dict
^https?://mobads-pre-config.cdn.bcebos.com url reject-dict
^https?://mobads-logs.baidu.com url reject-dict
^https?:\/\/api.duoyolo.cn\/play\/channel\/v1\/adevertiseConfig url reject
[mitm]
hostname = api.duoyolo.cn,ioskgeyd.lmkaiger.sanwubeixin.cn,www.shutiaomh.com,mobads.baidu.com,bgg.baidu.com,sf3-fe-tos.pglstatp-toutiao.com,cmyd-10-88.getui.com,open.e.kuaishou.com,api-access.pangolin-sdk-toutiao.com,toblog.ctobsnssdk.com,log-api.pangolin-sdk-toutiao.com,api-access.pangolin-sdk-toutiao1.com,log-api.pangolin-sdk-toutiao-b.com,api-access.pangolin-sdk-toutiao-b.com,b-gy.getui.net,gy.gepush.com,mssdk.volces.com,sdk.open.talk.getui.net,gromore.pangolin-sdk-toutiao.com,sdk.open.talk.gepush.com,adservice.sigmob.cn,sdk.open.talk.getui.com,yun.tuitiger.com,mobads-pre-config.cdn.bcebos.com,mobads-logs.baidu.com
*
*
*/











































var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.memberStatus = true,
obj.data.expDate = "2999-09-09 09:09:09";
$done({body: JSON.stringify(obj)});


