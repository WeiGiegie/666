/*
 *
 *
脚本功能：himalaya vip
软件版本：h5
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > himalaya vip 
^https?:\/\/apisg.himalaya.com\/himalaya-portal\/(track\/urlEncode\?trackId|v1\/course\?courseId) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/himalayack.js 
^https?:\/\/www\.himalaya\.com\/courses\/\d+ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/himalayaui.js

[mitm]
hostname = www.himalaya.com,apisg.himalaya.com,183.232.157.73:13037,cdn.himalaya.com:443,*.himalaya.*
*
*
*/

const body = $response.body;
let hm = body;

// 无效
hm = hm.replace(/"p97":"[^"]*"/g, '"p97":""')
       .replace(/"p98":"[^"]*"/g, '"p98":""')
       .replace(/"p99":"[^"]*"/g, '"p99":""');
// 底栏
const cssInjection = `
<style>
  div[class*="index_m_downloadWrapper__"] { display: none !important; }
</style>
`;
hm = hm.replace('</head>', `${cssInjection}</head>`);

$done({body: hm});