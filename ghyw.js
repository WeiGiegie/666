/*
 *
 *
脚本功能：稿好语文-硬核学习备考
软件版本：2.10.3
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 稿好语文-硬核学习备考
^https:\/\/app\.gaohaozuowen\.com\/index\.php\?s=\/api\/index\/getUserinfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ghyw.js

[mitm]
hostname = app.gaohaozuowen.com
*
*
*/





let obj = JSON.parse($response.body);

try {
    if (obj.data) {
        obj.data.is_vip = 1;                  
        obj.data.remain_day = 36500;          
        obj.data.other_is_vip = 1;            
        obj.data.other_remain_day = 36500;    
        obj.data.is_check = 1;                
       
    }
} catch (e) {
    console.log("vip bypass error:", e);
}

$done({body: JSON.stringify(obj)});

