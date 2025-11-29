/*
 *
 *
脚本功能：薏米短剧
软件版本：4.1.2
下载地址：
脚本作者：
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 薏米短剧
^https?:\/\/newyimi-api.zhangyue.com\/(usercenter\/client/mine_tab|video\/client\/short_play\/episode_list) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ymdj.js

[mitm]
hostname = newyimi-api.zhangyue.com
*
*
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vipinfo = 'usercenter/client/mine_tab';
const videolist = 'video/client/short_play/episode_list';

if (url.indexOf(vipinfo) !== -1) {
    // VIP信息处理
    if (obj.body && obj.body.vip_info) {
        obj.body.vip_info.vip_type = 1;
        obj.body.vip_info.expire_time = 99999999999999;
        obj.body.vip_info.vip_expire = 99999999999999;
    }
    body = JSON.stringify(obj);
} 

if (url.indexOf(videolist) !== -1) {
    // 视频列表处理
    if (obj.body && obj.body.episode_list && Array.isArray(obj.body.episode_list)) {
        for (var i = 0; i < obj.body.episode_list.length; i++) {
            obj.body.episode_list[i].can_play = 1;
             
            //obj.body.episode_list[i].unlock_type = 2;
            obj.body.episode_list[i].try_duration = 0;
        }
    }
    body = JSON.stringify(obj);
} 

$done({body});
