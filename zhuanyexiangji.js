/*
 *
 *
脚本功能：专业相机-专业音视频录制工具
软件版本：1.0.5
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >专业相机-专业音视频录制工具 Unlock VIP
^http:\/\/ym.dreamyin.cn\/\/ym_user/IsVip\? url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/zhuanyexiangji.js


[mitm]
hostname = 

*
*
*/








if ($request.url.includes('/ym_user/IsVip?')) {
    let body = JSON.parse($response.body);
    Object.assign(body.data, {
        duedate: "2999-09-09",
        day: 3600,
    });
    $done({
        body: JSON.stringify(body)
    });
} 
