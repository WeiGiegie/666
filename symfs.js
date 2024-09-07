/*
 *
 *
脚本功能：声音魔法师
软件版本：1.1.6
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >声音魔法师
^https?:\/\/amgaic.soundkey.net\/iosvoicemagic\/urZXO8RY\/ifZXO8RY url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/symfs.js

[mitm] 
hostname = amgaic.soundkey.net

*
*
*/
























if ($request.url.includes('https://amgaic.soundkey.net/iosvoicemagic/urZXO8RY/ifZXO8RY')) {
    let body = JSON.parse($response.body);
    Object.assign(body, {
        data: "1d2d9a7130008854e8f673ad7287edb6554fdb3324041b4590ac92c7a5def4e65c0aff9ebfa85817f360fc17a17cb8b2a9891305a2c6f09922d0635cb49bda0b83e236e54a5ac5866e8b17ba2286d51900f0f8b615106b95a4dbcca7987681e775fa85b5c803eda8b00f8ab98dce41ccfe069fce27f36e2b0e8315880fc4a782c4812b78c5546c68fb046e9b5b53509565e395bc28389e4e"
    });
    $done({
        body: JSON.stringify(body)
    });
} 
