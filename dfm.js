/*
 *
 *
脚本功能：懂法猫-裁判文书网司法案例检索法律法规大全合同审查法律师工具
软件版本：5.7
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 懂法猫-裁判文书网司法案例检索法律法规大全合同审查法律师工具
^https:\/\/app\.dongfamao\.com:443\/prod-api\/app\/user\/userInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/dfm.js

[mitm]
hostname = app.dongfamao.com,app.dongfamao.com:443
*
*
*/












let obj = JSON.parse($response.body);


if (obj.data) {
  obj.data.isVip = "Y";
}

if (obj.data) {
  obj.data.vipExpiryDate = "2099-12-31T23:59:59Z";  
}



$done({body: JSON.stringify(obj)});
