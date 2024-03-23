/*
 *
 *
脚本功能：壁纸 - 精选高清墙纸图片和背景主题
软件版本：4.5.5
下载地址：苹果商店下载
脚本作者：
更新时间：2024年3月22日 
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 壁纸 - 精选高清墙纸图片和背景主题Vip&Svip
^https?:\/\/leancloud.emotionwp.com\/.*\/classes\/wpf_account url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/bizhi.js

[mitm] 
hostname = leancloud.emotionwp.com
*
*
*/














var body = $response.body; 
let obj = JSON.parse($response.body);
obj.results[0].isSVIP = 1 ;
obj.results[0].isVIP = 1 ;
obj.results[0].vipEndTime = 32493852612 ;
obj.results[0].svipEndTime = 32493852612 ;
obj.results[0].coin = 999880 ;
obj.results[0].nickName = "https://t.me/GieGie777" ;
$done({body: JSON.stringify(obj)});
