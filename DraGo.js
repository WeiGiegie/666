
/*
 *
 *
#!name=DraGo 𝕏
#!desc=对 "一线明星" 短视频平台 深度学习探索;
#!openUrl=https://apps.apple.com/app/id6743524017
#!author=
#!icon=https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f9/71/25/f9712541-c592-efe1-3803-d55a02d9ea1b/AppIcon-1x_U007epad-0-1-85-220-0.png/400x400bb.webp
#!date = 2026-01-10 00:00:00
电报频道：https://t.me/GieGie777
软件版本：1.1.4
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！

[Script]
http-response ^https:\/\/api\.xtv\.media\/api\/Videocenter\/(getVideoDrama|getFreeVideoDrama|Charging) script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/DraGo.js, requires-body=true, timeout=60, tag=无限看

[Mitm]
hostname= api.xtv.media
*
*
*/






let obj = JSON.parse($response.body);
let url = $request.url;

if (/\/api\/Videocenter\/getVideoDrama/.test(url)) {
  obj.list?.forEach(i => {
    i.isvip = 0;
  });
}

if (/\/api\/Videocenter\/getFreeVideoDrama/.test(url)) {
  obj.data?.forEach(v => {
    v.is_purchased = 1;
    v.pay_status = 0;
    v.status = 1;
  });
}

if (/\/api\/Videocenter\/Charging/.test(url)) {
  if (obj.data) {
    obj.data.status = 0;
  }
}

$done({ body: JSON.stringify(obj) });
