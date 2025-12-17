/*
 *
 *
脚本功能：你推陪你背单词练口语
软件版本：2.2.0
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 你推陪你背单词练口语
^https:\/\/api\.mimuapp\.com\/v2\/fm\/userInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/mimu.js

[mitm]
hostname = api.mimuapp.com
*
*
*/







let obj = JSON.parse($response.body);

if (obj.data && obj.data.vipInfo) {
  obj.data.vipInfo.status = 1;
  obj.data.vipInfo.autoRenewal = true;
  obj.data.vipInfo.rightList = [
    "pro_role",
    "study_data",
    "ai_remember",
    "long_term_vip"
  ];
  obj.data.vipInfo.canPlay = true;
  obj.data.vipInfo.title = "永久至尊会员";

  let expireDate = new Date("2038-01-01T00:00:00Z");
  let expireUnix = expireDate.getTime();

  obj.data.vipInfo.expireTime = 20380101;
  obj.data.vipInfo.expireUnixTime = expireUnix;
  obj.data.vipInfo.desc = null;  // 去掉描述文本

  obj.data.coinNum = 9999;  // 金币数修改为9999
}

$done({body: JSON.stringify(obj)});
