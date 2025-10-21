/*
 *
 *
脚本功能：喜马拉雅国际版(himalaya) 会员调试
软件版本：
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 喜马拉雅国际版(himalaya) 会员调试

#节目目录解锁
^https?:\/\/apisg.himalaya.com\/imobile\/album\/v2\/track\/ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/himalayack.js
^https?:\/\/apisg.himalaya.com\/imobile-track\/track\/urlEncode url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/himalayack.js
^https?:\/\/apisg.himalaya.com\/imobile-track\/track\/detail url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/himalayack.js
^https?:\/\/apisg.himalaya.com\/hipoints-web\/member\/userInfo\/get url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/himalayack.js
^https?:\/\/apisg.himalaya.com\/intl-promotion-web\/play\/redeem\/simple\/config url reject

[mitm]
hostname = apisg.himalaya.com
*
*
*/











