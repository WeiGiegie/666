/*
 *
 *
脚本功能：凯格尔运动pro-pc肌-盆底肌修复锻炼
软件版本：1.5
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >
^https?:\/\/ioskgeyd.lmkaiger.sanwubeixin.cn\/ct\/user\/info url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/kgr.js

[mitm]
hostname = ioskgeyd.lmkaiger.sanwubeixin.cn
*
*
*/















































var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.isVip = true,
obj.data.vip_type = 1,
obj.data.username = "https://t.me/GieGie777",
obj.data.avatar = "https://viiddo.vedioas.com/data/20241014/438ea2d1e5b62d232970d8ca6e46bef3.jpeg"
obj.data.vip_time = 32493834549
$done({body: JSON.stringify(obj)});


