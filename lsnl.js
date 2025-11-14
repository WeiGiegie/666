/*
 *
 *
脚本功能：历史年轮
软件版本：1.3.0
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 历史年轮
^https:\/\/www\.(yearsmap|wordvector)\.com url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/lsnl.js

[mitm]
hostname = www.yearsmap.com:443,www.yearsmap.com,www.wordvector.com
*
*
*/












let obj = JSON.parse($response.body);

// 修改VIP状态
if (obj.data) {
    obj.data.is_vip = true;
    obj.data.vip_type = 2;
    obj.data.vip_end_time = "2099-09-02T00:00:00Z";
    obj.data.vip_expire = 4102444800; // 2099年戳示例

    if (obj.data.user_info) {
        obj.data.user_info.is_vip = true;
        obj.data.user_info.vip_type = 2;
        obj.data.user_info.vip_end_time = "2099-09-02T00:00:00Z";
        obj.data.user_info.vip_expire = 4102444800;
        obj.data.user_info.role_name = "十年会员";
        obj.data.user_info.role = "十年会员";
        obj.data.user_info.vip_info = {
            is_vip: true,
            vip_end_time: "2099-09-02T00:00:00Z",
            vip_type: 2,
            have_days: 3650,
            role: "十年会员",
            vip: true,
            vip_expire: 4102444800,
            role_name: "十年会员"
        };
        obj.data.user_info.vip = true;
        obj.data.user_info.have_days = 3650;
    }

    obj.data.have_days = 3650;
}

$done({body: JSON.stringify(obj)});

