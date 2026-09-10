/*
 *
 *
脚本功能：俄罗斯克拉 去会员+广告🔞
软件版本：1.1.10
下载地址：
脚本作者：
更新时间：2026年9月10日
电报频道：https://t.me/GieGie777
问题反馈：https://t.me/GieGie777
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 俄罗斯克拉 去会员+广告🔞
^https?:\/\/sixth.xxcjpt.com\/java\/(user\/my|show) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/elskl.js

[mitm]
hostname = sixth.xxcjpt.com
*
*
*/


// ============ 工具函数 ============
function reverseStr(s) { return String(s).split('').reverse().join(''); }

function base64Decode(input) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let str = String(input).replace(/=+$/, '');
    let binaryStr = '';
    if (str.length % 4 === 1) throw new Error('Invalid base64');
    for (
        let bc = 0, bs, buffer, idx = 0;
        (buffer = str.charAt(idx++));
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4)
            ? binaryStr += String.fromCharCode(255 & bs >> (-2 * bc & 6))
            : 0
    ) { buffer = chars.indexOf(buffer); }
    return binaryStr;
}

function base64Encode(input) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let str = String(input);
    let output = '';
    for (
        let block, charCode, idx = 0, map = chars;
        str.charAt(idx | 0) || (map = '=', idx % 1);
        output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
        charCode = str.charCodeAt(idx += 3 / 4);
        if (charCode > 0xFF) throw new Error("'btoa' failed");
        block = block << 8 | charCode;
    }
    return output;
}

// ★ 关键：把非 ASCII 字符转义回 \uXXXX，保持整个字符串是纯 ASCII
function stringifyASCII(obj) {
    let s = JSON.stringify(obj);
    return s.replace(/[\u007f-\uffff]/g, function (c) {
        return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
    });
}

// ============ 解码：密文 → JSON ============
function decodeBody(body) {
    const trimmed = String(body).trim();

    // 明文直接解析（容错）
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
        console.log('[xxcjpt] 明文响应');
        return JSON.parse(trimmed);
    }

    // 1) 整体反转
    let rev = reverseStr(trimmed);

    // 2) 若反转后开头有 '='，搬到末尾（兼容保留了padding的服务端）
    let pad = '';
    while (rev.startsWith('=')) { pad += '='; rev = rev.slice(1); }

    // 3) 清洗：URL-safe → 标准
    rev = rev.replace(/-/g, '+').replace(/_/g, '/').replace(/[^A-Za-z0-9+/]/g, '');

    // 4) 补回 padding
    rev = rev + pad;
    while (rev.length % 4 !== 0) rev += '=';

    // 5) Base64 → UTF-8 → JSON
    const bin = base64Decode(rev);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const text = new TextDecoder('utf-8').decode(bytes);
    return JSON.parse(text);
}

// ============ 编码：JSON → 密文 ============
function encodeBody(jsonData, originalBody) {
    const trimmed = String(originalBody).trim();
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
        return JSON.stringify(jsonData);
    }

    // ★ 用 stringifyASCII 保证纯 ASCII，避免客户端 UTF-8 解码不一致
    const text = stringifyASCII(jsonData);

    const bytes = new TextEncoder().encode(text);
    let bin = '';
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);

    let b64 = base64Encode(bin).replace(/=+$/, '');   // 去 padding
    return reverseStr(b64);                           // 整体反转
}

// ============ 主逻辑 ============
let url = $request.url;
let body = $response.body;

let jsonData;
try {
    jsonData = decodeBody(body);
} catch (e) {
    console.log('[xxcjpt] 解码失败，放行:', e.message);
    $done({});
}

if (jsonData && jsonData.data) {

    // ---------- 个人页面 ----------
    if (url.indexOf('/java/user/my') !== -1) {
        jsonData.data.vip = 1;
        jsonData.data.exp = false;
        jsonData.data.expdate = "2099.09.09";
        jsonData.data.unclaimed = 999;
        jsonData.data.today_max = 999;
        jsonData.data.today_left = 999;
        jsonData.data.money = "9999.00";
        jsonData.data.feedback_unread = 0;
        jsonData.data.links = ["t.me/GieGie777"];
    }

    // ---------- 播放页面 ----------
    else if (url.indexOf('/java/show/') !== -1) {
        jsonData.data.fullvideo = true;
        jsonData.data.today_max = 999;
        jsonData.data.today_left = 999;
        jsonData.data.vip = 1;
        jsonData.data.exp = false;

        if (jsonData.data.video) {
            jsonData.data.video.free = true;
            jsonData.data.video.unlock = true;
        }

        if (Array.isArray(jsonData.data.guess)) {
            jsonData.data.guess.forEach(item => {
                item.free = true;
                item.unlock = true;
            });
        }
    // ---------- 播放广告 ----------
        jsonData.data.popup = null;
        jsonData.data.banner = [];
        jsonData.data.button = [];
    }
}

$done({ body: encodeBody(jsonData, body) });