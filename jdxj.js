/*
 *
 *
脚本功能：精点相机
软件版本：1.6.6
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 精点相机
^https:\/\/counting\.movingshop\.cn\/counting-api\/user\/info url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/jdxj.js

[mitm]
hostname = counting.movingshop.cn
*
*
*/









let obj = JSON.parse($response.body);

if (obj.user) {
  obj.user.isValid = 1;                  // 标记为有效会员
  obj.user.validCount = 9999;            // 设置有效会员次数或天数
  obj.user.expiredAt = 4102444799000;   // 修改到期时间为2099年（JavaScript时间戳，单位毫秒）
  obj.user.cnName = "年卡";             // 设置会员类型名称
}

$done({body: JSON.stringify(obj)});
