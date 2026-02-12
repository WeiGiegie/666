/*
 *
 *
脚本功能：纳米盒-中小学课本同步辅导提分必备
软件版本：13.4
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]

# >纳米盒-中小学课本同步辅导提分必备
^https:\/\/namibox\.com url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/namibox.js

[mitm] 
hostname = namibox.com

*
*
*/



let body = $response.body;
let url = $request.url;

// 前置检查：避免JSON解析错误
if (!body || body === "undefined" || body === "null" || body.trim() === "") {
    console.log(`⚠️ ${url} 返回了非JSON数据，直接返回原响应`);
    $done({body});
    return;
}

// 检查是否以{或[开头，基本判断是否是JSON
if (!body.startsWith('{') && !body.startsWith('[')) {
    console.log(`⚠️ ${url} 返回了非JSON数据: ${body.substring(0, 100)}...`);
    $done({body});
    return;
}

try {
    let obj = JSON.parse(body);
    
    const EXPIRE_TIME = "2099-02-06 15:16:37";
    const FOREVER_TIME = "2099-12-31 23:59:59";
    
    // 1. 登录接口
    if (url.includes('auth/getuserinfo')) {
        obj.is_member = obj.is_vip = obj.is_svip = true;
        obj.member_remaining_days = 36500;
        obj.clickbook_remainings = 9999;
        obj.member_type = "svip";
        obj.expire_time = EXPIRE_TIME;
        if (obj.fish_data) obj.fish_data.fish_level = "LV5";
    }
    
    // 2. 会员中心接口
    else if (url.includes('member') && obj.data?.user_info) {
        let info = obj.data.user_info;
        info.is_namiboxvip_member = true;
        info.usable_currency = 99999;
        info.expire_time = EXPIRE_TIME;
        
        let rights = info.member_rights;
        if (rights) {
            rights.is_vip = rights.is_svip = rights.has_click_book = true;
            rights.member_end_time = EXPIRE_TIME;
            if (rights.rights_list) {
                rights.rights_list.forEach(r => {
                    r.has_right = true;
                    r.right_end_time = EXPIRE_TIME;
                });
            }
        }
    }
    
    // 3. 课本接口
    else if (obj.data?.engine_info) {
        let engine = obj.data.engine_info;
        engine.is_buy = engine.is_free = true;
        engine.validtime = EXPIRE_TIME;
        engine.order_state = 1;
        
        if (obj.data.public_init_info?.study_info) {
            let study = obj.data.public_init_info.study_info;
            study.coin = 999;
            study.read_duration = 9999;
        }
    }
    
    // 4. 训练营详情接口
    else if (url.includes('camp') && obj.data?.camp_info) {
        obj.data.camp_info.user_status = "已报名";
        obj.data.is_svip = true;
        obj.data.usable_currency = 99999;
        
        if (obj.data.camp_info.sku_infos?.length > 0) {
            obj.data.camp_info.sku_infos.forEach(sku => {
                sku.is_buy = 1;
                sku.member_price = 0;
            });
        }
    }
    
    // 5. 训练营列表接口
    else if (obj.data?.list && Array.isArray(obj.data.list)) {
        obj.data.list.forEach(camp => {
            if (camp.detail) {
                camp.detail.status = "已报名";
                camp.detail.order_end = FOREVER_TIME;
                camp.end_at = EXPIRE_TIME;
            }
        });
    }
    
    // 6. 个人中心接口
    else if (url.includes('puc') && obj.data?.length) {
        obj.data.forEach(item => {
            if (item.id === "puc_info" && item.list?.[0]) {
                let user = item.list[0];
                user.user_degree = "https://f.namibox.com/static/lv/lvvip.png";
                if (user.new_member_info) {
                    let m = user.new_member_info;
                    m.is_vip = m.is_svip = m.has_click_book = true;
                    m.member_end_time = EXPIRE_TIME;
                }
            }
        });
    }
    
    // 7. 通用时间修改
    if (obj.expire_time !== undefined) obj.expire_time = EXPIRE_TIME;
    if (obj.member_end_time !== undefined) obj.member_end_time = EXPIRE_TIME;
    if (obj.end_time !== undefined) obj.end_time = EXPIRE_TIME;
    if (obj.right_end_time !== undefined) obj.right_end_time = EXPIRE_TIME;
    if (obj.validtime !== undefined) obj.validtime = EXPIRE_TIME;
    if (obj.is_svip !== undefined) obj.is_svip = true;
    
    body = JSON.stringify(obj);
    console.log(`✅ ${url} 处理成功`);
} catch(e) {
    console.log(`❌ ${url} JSON解析错误: ${e.message}`, body.substring(0, 200));
}
$done({body});

