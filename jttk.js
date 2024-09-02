/*
 *
 *
脚本功能：加藤视频vip解锁,付费视频,下载,会员线路,去广告+
软件版本：3.1.3
下载地址：
脚本作者：**
更新时间：2024-5.27
电报频道：https://t.me/GieGie777
问题反馈：ps：小部分视频有bug无法播放
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 加藤视频vip解锁,付费视频解锁,下载,会员线路,去广告++
^https?:\/\/.+\/shorter\/(video\/longvideoinfo|resource\/adInfoPageList\?adSpaceId|user\/getUser|resource\/getWindowNotice|tabIconConfigView|user\/getVipPvg|video\/home\/list|video\/search).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/jtsp.js
#^https?:\/\/.+\/shorter\/anime\/tbookchapter0\/info\?bookId url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/jttk.js
^https?:\/\/.+\/shorter\/resource\/getAdInfoBySpaceId\?ad url reject-dict

[mitm] 
hostname = sgwitxgwit231sr.xunwxc.com,rdxijq.vo9ugl.xyz,bpitbu.ouxf9g.live,tjactb.xk2nsy.live,us6tp7.dkr9cv.live,qsukip.9jts57.live,wkqyx6.qdokqj.live,fqohbx.bkljtx.live,zihjyv.jajrc1.live,y7uyqg.hl8dbl.live,qrdure.youngnoble.cn,kpoe2e.x8w7t3.live,*jttv*,kpoe2e.x8w7t3.live,zihjyv.jajrc1.live,fceyeg.johjxe.com,*.vo9ugl.xyz,zqlhcn.kl9117.xyz,bsxqtd.xk8q7w.xyz,grvgdq.81fbg2.xyz,vcryyw.uc86fy.xyz,xospby.mldo9k.xyz,pmmqls.gregdoro.com,103.85.254.233,roa6fi.lyr6if.live


*
*
*/












































































































































var modifiedUrl=$request["\u0075\u0072\u006c"]["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/(&userId=\d+)/,"1=dIresu&".split("").reverse().join(""))["\u0072\u0065\u0070\u006c\u0061\u0063\u0065"](/(&accessToken=\w+)/,"=nekoTssecca&".split("").reverse().join(""));$done({"\u0075\u0072\u006c":modifiedUrl});
