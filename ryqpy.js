/*
 *
 *
脚本功能：日语趣配音-零基础学日语
软件版本：1.7.5
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 日语趣配音-零基础学日语
^https:\/\/apis40\.qupeiyin\.com url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ryqpy.js

[mitm]
hostname = apis40.qupeiyin.com
*
*
*/









var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const courseDetail = '/course/detail_new';
const memberIndex = '/member/index';
const courseRelated = '/course/related_course';
const albumCourse = '/album/course_list';

// 处理课程详情接口
if (url.indexOf(courseDetail) != -1) {
    if (obj.data) {
        obj.data.is_needbuy = "0";
        obj.data.is_vip = "0";
    }
    body = JSON.stringify(obj);
} 

// 处理会员信息接口
else if (url.indexOf(memberIndex) != -1) {
    if (obj.data) {
        obj.data.is_vip = "1";
        obj.data.vip_endtime = "4102444800";
        obj.data.is_svip = "1";
        obj.data.svip_endtime = "4102444800";
        obj.data.is_aisvip = "1";
        obj.data.aisvip_endtime = "4102444800";
    }
    body = JSON.stringify(obj);
} 

// 处理课程列表接口
else if (url.indexOf(courseRelated) != -1 || url.indexOf(albumCourse) != -1) {
    if (obj.data && Array.isArray(obj.data)) {
        obj.data.forEach(video => {
            video.is_needbuy = "0";
            video.is_vip = "0";
        });
    }
    body = JSON.stringify(obj);
}

$done({body});
