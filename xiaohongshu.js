/*
 *
 *
脚本功能：小红书 无水印视频/图片下载 + 开启作者关闭的下载权限
软件版本：9.1.8
下载地址：
脚本作者：@RuCu6
更新时间：2025年1月
电报频道：https://t.me/GieGie777
使用声明：此脚本仅供学习与交流，请勿用于商业用途！
*******************************
[rewrite_local]
# > 小红书 无水印视频/图片下载 + 强制开启下载权限
^https?:\/\/(edith|rec|www).xiaohongshu.com\/api\/sns.+\/(videofeed|video\/save|imagefeed|live_photo\/save) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xiaohongshu.js

[mitm]
hostname = rec.xiaohongshu.com, edith.xiaohongshu.com, www.xiaohongshu.com
*
*
*/





























const $ = new Env('小红书无水印下载');
const url = $request.url;
let rsp_body = $response.body;
// 响应体为空直接结束，避免报错
if (!rsp_body) $done({});
let obj = JSON.parse(rsp_body);


function getUrlParam(url, param) {
    try {
        return new URL(url).searchParams.get(param);
    } catch {
        const match = url.match(new RegExp(`${param}=([^&]+)`));
        return match ? decodeURIComponent(match[1]) : null;
    }
}

/**
 * 核心方法：获取最高画质无水印视频地址（优先级H265>H264，画质从高到低排序）
 * @param {object} videoInfo - 视频信息对象
 * @returns {string|null} 最优视频地址或null
 */
function getBestVideoUrl(videoInfo) {
    // 校验视频流基础数据，无数据直接返回null
    if (!videoInfo?.media?.stream) return null;
    const stream = videoInfo.media.stream;

    // 1. 优先选择H265编码，按stream_type降序排序取最优
    if (stream.h265?.length > 0) {
        const bestH265 = stream.h265.sort((a, b) => b.stream_type - a.stream_type)[0];
        return bestH265?.master_url || null;
    }
    // 2. H265无数据时，选择H264编码，同样降序排序取最优
    if (stream.h264?.length > 0) {
        const bestH264 = stream.h264.sort((a, b) => b.stream_type - a.stream_type)[0];
        return bestH264?.master_url || null;
    }
    return null;
}

// ==================== 接口1：处理视频流接口 - 开权限+存无水印地址 ====================
if (url.includes("/api/sns/v4/note/videofeed")) {
    if (obj?.data?.length > 0) {
        const videoMap = {}; // 存储笔记ID和视频地址映射
        obj.data.forEach(item => {
            // 仅处理视频类型笔记
            if (item.type === "video") {
                // 强制开启视频下载权限（精准定位开关，替代全量循环）
                const downloadSwitch = item.function_switch?.find(switchItem => switchItem.type === "video_download");
                if (downloadSwitch) {
                    downloadSwitch.enable = true; // 开启下载权限
                    delete downloadSwitch.reason; // 清除权限关闭
                }
                // 提取最优无水印视频地址，存入映射表
                const videoUrl = getBestVideoUrl(item.video_info_v2);
                if (videoUrl && item.id) videoMap[item.id] = videoUrl;
            }
        });
        // 映射表有数据时，存入本地缓存
        Object.keys(videoMap).length && $.setdata(JSON.stringify(videoMap), "xhs_video_map");
    }
}

// ==================== 接口2：处理图片流接口 - 开权限+去水印+存实况图 ====================
else if (url.includes("/api/sns/v1/note/imagefeed")) {
    // 校验笔记列表数据有效性
    if (obj?.data?.[0]?.note_list?.length > 0) {
        const livePhotoMap = {}; // 存储笔记ID和实况图地址映射
        obj.data[0].note_list.forEach(item => {
            // 仅处理普通图文笔记
            if (item.type === "normal") {
                // 强制开启图片下载权限
                const imgSwitch = item.function_switch?.find(switchItem => switchItem.type === "image_download");
                if (imgSwitch) {
                    imgSwitch.enable = true; // 开启下载权限
                    delete imgSwitch.reason; // 清除权限关闭
                }

                // 批量配置：关闭禁止下载+开启去水印+关闭微博封面限制
                if (item.media_save_config) {
                    item.media_save_config = {
                        disable_save: false,
                        disable_watermark: true,
                        disable_weibo_cover: true
                    };
                }

                // 图片去水印：替换为原生无水印原图，删除多规格冗余地址
                if (item.images_list?.length) {
                    const liveList = [];
                    item.images_list.forEach(img => {
                        // 替换图片地址为原图
                        if (img.original) {
                            img.url = img.url_size_large = img.original;
                            delete img.url_multi_level; // 删冗余多规格地址
                        }
                        // 提取实况图地址，存入临时列表
                        const liveUrl = img.live_photo?.media?.stream?.h265?.[0]?.master_url;
                        if (img.live_photo_file_id && liveUrl) {
                            liveList.push({ file_id: img.live_photo_file_id, url: liveUrl });
                        }
                    });
                    // 实况图列表有数据时，存入映射表
                    if (item.id && liveList.length) livePhotoMap[item.id] = liveList;
                }
            }
        });
        // 实况图映射表有数据时，存入本地缓存
        Object.keys(livePhotoMap).length && $.setdata(JSON.stringify(livePhotoMap), "xhs_live_photo_map");
    }
}

// ==================== 接口3：处理视频下载请求 - 返回无水印地址 ====================
else if (url.includes("/api/sns/v10/note/video/save")) {
    const noteId = getUrlParam(url, "note_id"); // 提取当前ID
    if (noteId) {
        const mapStr = $.getdata("xhs_video_map"); // 读取本地缓存的视频地址映射
        if (mapStr) {
            const videoMap = JSON.parse(mapStr);
            const videoUrl = videoMap[noteId];
            // 替换响应体，返回无水印视频下载地址
            if (videoUrl) obj = {
                result: 0, success: true,
                data: { note_id: noteId, download_url: videoUrl, status: 2 },
                msg: ""
            };
        }
    }
}

// ==================== 接口4：处理实况图下载请求 - 返回无水印地址 ====================
else if (url.includes("/api/sns/v1/note/live_photo/save")) {
    const noteId = getUrlParam(url, "note_id"); // 提取当前ID
    if (noteId && obj?.data?.datas) {
        const mapStr = $.getdata("xhs_live_photo_map"); // 读取本地缓存的实况图映射
        if (mapStr) {
            const liveMap = JSON.parse(mapStr);
            // 替换实况图下载地址为无水印地址
            obj.data.datas.forEach(item => {
                const match = liveMap[noteId]?.find(li => li.file_id === item.file_id);
                if (match) item.url = match.url;
            });
            // 强制返回下载成功
            obj.success = true;
            obj.result = 0;
        }
    }
}


$done({ body: JSON.stringify(obj) });

// ==================== Env类（精简版）- 剔除无用方法+兼容多工具 ====================
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } isShadowrocket() { return "undefined" != typeof $rocket } isStash() { return "undefined" != typeof $environment && $environment["stash-version"] } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), a = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } get(t, e = (() => { })) { if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i) }); else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t && t.error || "UndefinedError")); else if (this.isNode()) { let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: i, statusCode: r, headers: o, rawBody: a } = t, n = s.decode(a, this.encoding); e(null, { status: i, statusCode: r, headers: o, rawBody: a, body: n }, n) }, t => { const { message: i, response: r } = t; e(i, r, r && s.decode(r.rawBody, this.encoding)) }) } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i) }); else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t && t.error || "UndefinedError")); else if (this.isNode()) { let i = require("iconv-lite"); this.initGotEnv(t); const { url: r, ...o } = t; this.got[s](r, o).then(t => { const { statusCode: s, statusCode: r, headers: o, rawBody: a } = t, n = i.decode(a, this.encoding); e(null, { status: s, statusCode: r, headers: o, rawBody: a, body: n }, n) }, t => { const { message: s, response: r } = t; e(s, r, r && i.decode(r.rawBody, this.encoding)) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl, i = t["update-pasteboard"] || t.updatePasteboard; return { "open-url": e, "media-url": s, "update-pasteboard": i } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), this.isSurge() || this.isQuanX() || this.isLoon() ? $done(t) : this.isNode() && process.exit(1) } }(t, e) }

