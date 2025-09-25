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
hostname = www.himalaya.com,apisg.himalaya.com
*
*
*/

const body = $response.body;
let hm = body;

// 移除顶部
hm = hm.replace(/<div class="header-box">[\s\S]*?<\/div>/, '');

// 新的底部“打开APP收听”
// <section> 标签
hm = hm.replace(/<section class="index_m_anchorBox__.*?">[\s\S]*?<div class="index_m_downloadTips__.*?">[\s\S]*?<\/div>/, '<section class="index_m_anchorBox__">');

// "index_m_downloadWrapper__"
// class "index_m_downloadWrapper__
// 空白
hm = hm.replace(/<div class="index_m_downloadWrapper__.*?">[\s\S]*?<\/div>/, '');

// 空白CSS
const cssInjection = `
<style>
  div[class*="index_m_downloadWrapper__"],
  div.header-box {
    display: none !important;
    visibility: hidden !important;
  }
</style>
`;
hm = hm.replace('</head>', `${cssInjection}</head>`);
$done({body: hm});