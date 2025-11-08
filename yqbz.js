/*
 *
 *
脚本功能：元气壁纸-海量超清壁纸下载
软件版本：1.1.9
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 元气壁纸-海量超清壁纸下载
^https:\/\/wallpaper\.soutushenqi\.com\/api url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/yqbz.js

[mitm]
hostname = wallpaper.soutushenqi.com
*
*
*/










// 检查响应体是否存在
if ($response && $response.body) {
    try {
        // 1. 解析原始响应体
        let obj = JSON.parse($response.body);

        // 2. 在原始 data 对象上修改或添加 VIP 字段
        // 确保 obj 和 obj.data 都存在
        if (obj && obj.data) {
            obj.data.vipLabel = "永久会员";
            obj.data.vipType = 256;
            
        }
        
        // 3. 将修改后的对象转回字符串，并结束请求
        $done({body: JSON.stringify(obj)});

    } catch (e) {
        
        $done({body: $response.body});
    }
} else {
    // 如果响应体不存在，直接结束，不做任何修改
    $done({});
}

