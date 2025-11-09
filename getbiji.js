/*
 *
 *
脚本功能：get笔记-你只管说-ai-帮你记下来
软件版本：2.3.4
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > get笔记-你只管说-ai-帮你记下来
^https:\/\/get-notes\.luojilab\.com\/voicenotes\/app\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/getbiji.js

[mitm]
hostname = get-notes.luojilab.com
*
*
*/










let obj = JSON.parse($response.body);

if (obj.c && obj.c.data) {
    // 修改VIP信息
    let vip = obj.c.data.vip_info;
    if (vip) {
        vip.is_vip = true;                       // 改为VIP
        vip.is_expire = false;                   // 未过期
        let now = Math.floor(Date.now() / 1000);
        vip.begin_time = now - 86400 * 30;      // 会员开始时间，30天前
        vip.end_time = now + 86400 * 365;       // 会员结束时间，1年后
        vip.expire_time = vip.end_time;
        vip.surplus_days = 365;                  // 剩余天数
        vip.is_ever_subscribed = true;           // 曾经订阅过
        vip.equity_intro = "尊贵VIP会员，享受专属权益"; // 会员权益描述
        obj.c.data.vip_info = vip;
    }

    // 修改音频相关配置
    let rights = obj.c.data.rights_info;
    if (rights) {
        rights.audio_duration_ms = 3600000;        // 普通音频 1小时 (3600秒*1000ms)
        rights.meeting_audio_duration_ms = 10800000; // 会议音频 3小时
        rights.ai_trial_count = 9999;               // AI试用次数 9999
        obj.c.data.rights_info = rights;
    }

    // 修改配额信息
    let quota = obj.c.data.quota_info;
    if (quota && quota.local_audio_quota) {
        quota.local_audio_quota.granted_duration = 360000000;   // 已授权总时长 6000分钟 (6000*60*1000)
        quota.local_audio_quota.remained_duration = 360000000;  // 剩余时长同步改成同样的
       quota.local_audio_quota.granted_count=100;
        obj.c.data.quota_info.local_audio_quota = quota.local_audio_quota;
    }
    if (quota && quota.asr_hot_words_quota) {
        quota.asr_hot_words_quota.granted_count = 100;          // 授权热词100个
        obj.c.data.quota_info.asr_hot_words_quota = quota.asr_hot_words_quota;
    }
    obj.c.data.quota_info = quota;
}

$done({body: JSON.stringify(obj)});
