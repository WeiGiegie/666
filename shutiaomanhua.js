/*
 *
 *
脚本功能：薯条漫画-热门耽美bl漫画
软件版本：1.3.2
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >薯条漫画-热门耽美bl漫画 Unlock VIP
^https?:\/\/www.shutiaoapp.com\/api\/\/getSysUserInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/shutiaomanhua.js
# >去弹窗
^https://www\.shutiaoapp\.com/api//adOpen/getAd url reject

[mitm]
hostname = www.shutiaoapp.com

*
*
*/








if ($request.url.includes('/api//getSysUserInfo')) {
    let body = JSON.parse($response.body);
    Object.assign(body.data, {
        expireDays: "2999-09-09",
        vipDays: 3600,
        coins: 9999,
        nickname: "https://t.me/GieGie777",
        headImg: "https://viiddo.vedioas.com/data/20241014/438ea2d1e5b62d232970d8ca6e46bef3.jpeg",
    });
    $done({
        body: JSON.stringify(body)
    });
} 
