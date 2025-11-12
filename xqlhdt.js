/*
 *
 *
脚本功能：小区楼号地图-快递外卖极速导航
软件版本：1.0.10
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 小区楼号地图-快递外卖极速导航
^https:\/\/mp\.zhuzixi\.cn\/api\/users\/(getAppleUserInfo|getUserById) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xqlhdt.js

[mitm]
hostname = mp.zhuzixi.cn
*
*
*/









let obj = JSON.parse($response.body);

function padZero(num) {
  return num < 10 ? '0' + num : num;
}

let now = new Date();

now = new Date(now.getTime() - 24*60*60*1000);

let formattedDate = now.getFullYear() + '/' +
                    padZero(now.getMonth() + 1) + '/' +
                    padZero(now.getDate()) + ' ' +
                    padZero(now.getHours()) + ':' +
                    padZero(now.getMinutes()) + ':' +
                    padZero(now.getSeconds());

obj.createdDate = formattedDate;
obj.createdDateApp = formattedDate;

$done({body: JSON.stringify(obj)});
