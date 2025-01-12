/*
 *
 *
脚本功能：知乎vip++
软件版本：++最新+++
下载地址：苹果商店下载+
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 知乎vip 盐选内容，
^https?:\/\/((api|app|www).zhihu.com\/|.*resolv\?host)(unlimited\/go\/my_card|people\/self|bazaar\/vip_tab|sku\/reversion_sku|.*zhihu).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/zhvip.js
^https?:\/\/((www)|(api)).zhihu.com\/(api\/v3\/books|market\/paid_magazine|market\/paid_column|market\/album|remix\/resource\/paid_magazine|appview\/v2\/answer).*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/zhtk.js

^https?://api\.zhihu\.com/commercial_api/launch_v2 url reject
^https?://api\.zhihu\.com/commercial_api\/real_time_launch_v2 url reject-dict
^https?://datahub\.zhihu\.com/collector/lastn-realtime url reject
^https?://www\.zhihu\.com/appview/v3/zhmore url reject-200
^https?://www\.zhihu\.com/xen/market/hybridMetaDetail/ url reject
^https?:\/\/datahub\.zhihu\.com\/collector\/lastn-realtime url reject-dict
^https?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2 url reject-dict
^https?://www\.zhihu\.com/appview/v3/zhmore url reject-200
^https?://www\.zhihu.com/api/v4/members/homepage_card url reject

[mitm] 
hostname = api.zhihu.com,app.zhihu.com.www.zhihu.com,datahub.zhihu.com,datahub.zhihu.com,duga.zhihu.com,mqtt.zhihu.com,apm.zhihu.com,*.zhimg.com,61.162.174.*,123.125.244.*,119.188.123.*,101.72.233.*,120.92.107.*,116.114.96.*,211.93.211.*,211.204.58.*,1.24.81.*,103.41.167.*,125.39.43.*,219.159.26.*,42.231.136.*,115.56.76.*,124.163.196.*,211.204.209.*,42.231.136.*,211.204.166.*,218.29.50.*,101.72.254.*,60.28.220.*,116.136.12.*,27.221.72.*,119.29.29.*,118.89.204.198,103.41.167.237,2402:4e00:1200:ed00:0:9089:6dac:96b6,www.zhihu.com,api.zhihu.com,zhuanlan.zhihu.com,appcloud2.zhihu.com,m-cloud.zhihu.com,103.41.167.236,103.41.167.234,103.41.167.235,103.41.167.226,116.114.96.41
*
*
*/







