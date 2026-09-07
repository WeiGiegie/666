/*
 *
 *
脚本功能：小木短剧 - 解锁付费视频
软件版本：1.0.6
下载地址：
脚本作者：
更新时间：2026年9月7日
电报频道：https://t.me/GieGie777
问题反馈：https://t.me/GieGie777
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 小木短剧 - 解锁付费视频
^https?:\/\/nj\.xiaomumedia\.com\/api\/dz-shop\/v1\/playlet\/episode\/index url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xmdj.js

[mitm]
hostname = nj.xiaomumedia.com
*
*
*/





(function(){let _0x341e7f=$response?.["ydob".split("").reverse().join("")];if(!_0x341e7f)return $done({});try{let _0xbed4fc=JSON['parse'](_0x341e7f);function _0x2f0e4f(_0x1d928e){if(Array["\u0069\u0073\u0041\u0072\u0072\u0061\u0079"](_0x1d928e)){for(let _0x2968c3=0x72f3b^0x72f3b;_0x2968c3<_0x1d928e["\u006c\u0065\u006e\u0067\u0074\u0068"];_0x2968c3++){_0x2f0e4f(_0x1d928e[_0x2968c3]);}}else if(_0x1d928e!==null&&typeof _0x1d928e==="\u006f\u0062\u006a\u0065\u0063\u0074"){for(let _0x4216db in _0x1d928e){if(_0x1d928e['hasOwnProperty'](_0x4216db)){let _0x20cdf7=_0x1d928e[_0x4216db];if(new RegExp("\u006c\u006f\u0063\u006b","\u0069")["\u0074\u0065\u0073\u0074"](_0x4216db)){if(_0x20cdf7===(0x8eccd^0x8eccc)){_0x1d928e[_0x4216db]=0xa15fa^0xa15fa;}else if(_0x20cdf7==="\u0031"){_0x1d928e[_0x4216db]="\u0030";}else if(typeof _0x20cdf7==="\u006e\u0075\u006d\u0062\u0065\u0072"&&_0x20cdf7>(0x8d80f^0x8d80f)){_0x1d928e[_0x4216db]=0xb0dc0^0xb0dc0;}else if(typeof _0x20cdf7==="\u0073\u0074\u0072\u0069\u006e\u0067"&&new RegExp('^\x5cd+(\x5c.\x5cd+)?$','')['test'](_0x20cdf7)&&parseFloat(_0x20cdf7)>(0xea913^0xea913)){_0x1d928e[_0x4216db]="\u0030\u002e\u0030\u0030";}}_0x2f0e4f(_0x20cdf7);}}}}_0x2f0e4f(_0xbed4fc);_0x341e7f=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](_0xbed4fc);}catch(_0x33d21b){console['log']('短剧解锁脚本执行失败:\x20'+_0x33d21b);}$done({'body':_0x341e7f});})();
