/*
 *
 *
脚本功能：片羽集照片日记软件
软件版本：1.6.31
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 片羽集照片日记软件
^https:\/\/lentoapp\.com:8091\/getUserMemberShipInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/pyjzp.js

[mitm]
hostname = lentoapp.com:8091
*
*
*/








let obj = {
  "meta" : {
    "message" : "获取作者信息成功",
    "code" : 200
  },
  "data" : {
    "paytype" : 1,
    "expiretime" : "null"
  }
}



$done({ body: JSON.stringify(obj), status: 200 });
