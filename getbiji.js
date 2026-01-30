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

if (obj.c) {
    // 修改 knowledge_topic 和 local_audio 字段
    if (obj.c.knowledge_topic) {
        obj.c.knowledge_topic.granted = "500GB";
        obj.c.knowledge_topic.remaining = "500GB";
        obj.c.knowledge_topic.should_hide = false;
    }
    if (obj.c.local_audio) {
        obj.c.local_audio.granted = "999999分钟";
        obj.c.local_audio.remaining = "999999分钟";
        obj.c.local_audio.should_hide = false;
    }
    
    // 修改 data 下的 vip_info、rights_info、quota_info 等
    if (obj.c.data) {
        let vip = obj.c.data.vip_info;
        if (vip) {
            vip.is_vip = true;
            vip.is_expire = false;
            let now = Math.floor(Date.now() / 1000);
            vip.begin_time = now - 86400 * 30;
            vip.end_time = now + 86400 * 365;
            vip.expire_time = vip.end_time;
            vip.surplus_days = 365;
            vip.is_ever_subscribed = true;
            vip.equity_intro = "尊贵VIP会员，享受专属权益";
            obj.c.data.vip_info = vip;
        }

        let rights = obj.c.data.rights_info;
        if (rights) {
            rights.audio_duration_ms = 3600000;
            rights.meeting_audio_duration_ms = 10800000;
            rights.class_duration_ms = 10800000;
            rights.local_audio_max_duration_ms = 10800000;
            rights.ai_trial_count = 9999;
            obj.c.data.rights_info = rights;
        }

        let quota = obj.c.data.quota_info;
        if (quota) {
            if (quota.local_audio_quota) {
                quota.local_audio_quota.granted_duration = 6000 * 60 * 1000;
                quota.local_audio_quota.remained_duration = quota.local_audio_quota.granted_duration;
                quota.local_audio_quota.guide_user_get_more = true;
                quota.local_audio_quota.general_user_usage_hint = "音频转写时长，普通用户600分钟/月，PRO会员6000分钟/月";
                quota.local_audio_quota.granted_count = 100;
            }
            if (quota.asr_hot_words_quota) {
                quota.asr_hot_words_quota.granted_count = 100;
                quota.asr_hot_words_quota.general_user_usage_hint = "普通用户20个，PRO会员100个";
            }
            obj.c.data.quota_info = quota;
        }

        obj.c.data.knowledge_base_count = -1;
        obj.c.data.knowledge_base_capacity_gb = 500;
        obj.c.data.knowledge_base_limit = "unlimited";
    }
}

$done({body: JSON.stringify(obj)});
