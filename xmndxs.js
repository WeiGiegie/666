/*
 *
 *
脚本功能：熊猫脑洞小说
软件版本：2.14
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >熊猫脑洞小说 VIP
^https?:\/\/xiaoshuo.xmxsapp.com\/api\/v3\/user\/my-center url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xmndxs.js

[mitm]
hostname = xiaoshuo.xmxsapp.com
*
*
*/





















































































































var body = $response.body;
let obj = JSON.parse($response.body);
obj.data.user_area.base_info.nickname = "t.me/GieGie777",
    obj.data.user_area.base_info.is_vip = "1",
    obj.data.user_area.base_info.vip_show_type = "1",
    obj.data.user_area.vip_info.vip_privilege_desc = "2999-09-09到期",
    delete obj.data.user_area.vip_info.deadline_date,
    $done({
        body:  JSON.stringify(obj)
    });
    