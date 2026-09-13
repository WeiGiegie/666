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





(function () {
  'use strict';

  const HOST = 'sixth.xxcjpt.com';
  const INNER_HEADER = 'x-xxcjpt-inner';   // 内部请求标记，防自递归
  const FALLBACK_MAX = 3;                  // 查不到额度时的回退上限
  const MAX_REGISTER_RETRY = 3;            // 注册失败最多换号重试次数

  // ---------- 运行环境 & 存储兼容层 ----------
  const TOOL = (typeof $task !== 'undefined') ? 'QX'
            : (typeof $loon !== 'undefined') ? 'Loon'
            : (typeof $surge !== 'undefined') ? 'Surge' : 'Unknown';

  const store = {
    get(k) { return (typeof $prefs !== 'undefined') ? $prefs.valueForKey(k) : (typeof $persistentStore !== 'undefined') ? $persistentStore.read(k) : null; },
    set(k, v) { return (typeof $prefs !== 'undefined') ? $prefs.setValueForKey(v, k) : (typeof $persistentStore !== 'undefined') ? $persistentStore.write(v, k) : null; }
  };

  // ---------- 日志 console.log----------
  function log() {
    let s = '[啪啪搜]';
    for (let i = 0; i < arguments.length; i++) {
      const x = arguments[i];
      s += ' ' + (x instanceof Error ? x.message
              : (x !== null && typeof x === 'object' ? JSON.stringify(x) : String(x)));
    }
    console.log(s);
  }

  // ---------- HTTP 兼容层（QX $task.fetch / Surge·Loon $httpClient）----------
  function http(req) {
    req.headers = req.headers || {};
    req.headers[INNER_HEADER] = '1';
    return new Promise((resolve, reject) => {
      if (typeof $task !== 'undefined') { $task.fetch(req).then(r => resolve(r), e => reject(e)); return; }
      if (typeof $httpClient !== 'undefined') {
        const cb = (err, resp, data) => err ? reject(err) : resolve({ statusCode: resp.status, body: data, headers: resp.headers });
        const opts = { headers: req.headers };
        const m = (req.method || 'GET').toUpperCase();
        if (m === 'POST' || req.body) { opts.body = req.body || ''; $httpClient.post(req.url, opts, cb); }
        else $httpClient.get(req.url, opts, cb);
        return;
      }
      reject(new Error('no http client'));
    });
  }

  function headerGet(h, name) {
    if (!h) return undefined;
    const lk = name.toLowerCase();
    for (const k in h) if (k.toLowerCase() === lk) return h[k];
    return undefined;
  }

  // ---------- 编解码 ----------
  const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  const reverseStr = s => String(s).split('').reverse().join('');

  function base64Encode(s) {
    let out = '', i = 0, len = s.length;
    while (i < len) {
      const c1 = s.charCodeAt(i++), c2 = i < len ? s.charCodeAt(i++) : NaN, c3 = i < len ? s.charCodeAt(i++) : NaN;
      const e1 = c1 >> 2, e2 = ((c1 & 3) << 4) | (isNaN(c2) ? 0 : c2 >> 4);
      const e3 = isNaN(c2) ? 64 : (((c2 & 15) << 2) | (isNaN(c3) ? 0 : c3 >> 6)), e4 = isNaN(c3) ? 64 : (c3 & 63);
      out += B64.charAt(e1) + B64.charAt(e2) + (e3 === 64 ? '=' : B64.charAt(e3)) + (e4 === 64 ? '=' : B64.charAt(e4));
    }
    return out;
  }
  function base64Decode(s) {
    s = String(s).replace(/[^A-Za-z0-9+/]/g, '');
    let out = '', i = 0;
    while (i < s.length) {
      const c1 = B64.indexOf(s.charAt(i++)), c2 = B64.indexOf(s.charAt(i++)), c3 = B64.indexOf(s.charAt(i++)), c4 = B64.indexOf(s.charAt(i++));
      const n = (c1 << 18) | (c2 << 12) | ((c3 & 63) << 6) | (c4 & 63);
      out += String.fromCharCode((n >> 16) & 255, (n >> 8) & 255, n & 255);
    }
    return out;
  }
  function utf8Encode(str) {
    let bin = '';
    for (let i = 0; i < str.length; i++) {
      let cp = str.charCodeAt(i);
      if (cp >= 0xD800 && cp <= 0xDBFF && i + 1 < str.length) { const lo = str.charCodeAt(i + 1); if (lo >= 0xDC00 && lo <= 0xDFFF) { cp = 0x10000 + ((cp - 0xD800) << 10) + (lo - 0xDC00); i++; } }
      if (cp < 0x80) bin += String.fromCharCode(cp);
      else if (cp < 0x800) bin += String.fromCharCode(0xC0 | (cp >> 6), 0x80 | (cp & 0x3F));
      else if (cp < 0x10000) bin += String.fromCharCode(0xE0 | (cp >> 12), 0x80 | ((cp >> 6) & 0x3F), 0x80 | (cp & 0x3F));
      else { cp -= 0x10000; bin += String.fromCharCode(0xF0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3F), 0x80 | ((cp >> 6) & 0x3F), 0x80 | (cp & 0x3F)); }
    }
    return bin;
  }
  function utf8Decode(binStr) {
    let out = '', i = 0;
    while (i < binStr.length) {
      const c = binStr.charCodeAt(i++);
      if (c < 0x80) out += String.fromCharCode(c);
      else if (c < 0xC0) { /* 跳过非法续字节 */ }
      else if (c < 0xE0) { const c2 = binStr.charCodeAt(i++); out += String.fromCharCode(((c & 0x1F) << 6) | (c2 & 0x3F)); }
      else if (c < 0xF0) { const c2 = binStr.charCodeAt(i++), c3 = binStr.charCodeAt(i++); out += String.fromCharCode(((c & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F)); }
      else { const c2 = binStr.charCodeAt(i++), c3 = binStr.charCodeAt(i++), c4 = binStr.charCodeAt(i++); let cp = ((c & 0x07) << 18) | ((c2 & 0x3F) << 12) | ((c3 & 0x3F) << 6) | (c4 & 0x3F); cp -= 0x10000; out += String.fromCharCode(0xD800 + (cp >> 10), 0xDC00 + (cp & 0x3FF)); }
    }
    return out;
  }
  // 中文转 \uXXXX（纯 ASCII）—— 客户端解码期望此格式，直接 UTF-8 编码中文会显示乱符号
  function stringifyASCII(obj) {
    return JSON.stringify(obj).replace(/[\u007f-\uffff]/g, c => '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4));
  }
  function decodeBody(body) {
    const t = String(body == null ? '' : body).trim();
    if (t.length === 0) throw new Error('body 为空');
    if (t.startsWith('{') || t.startsWith('[')) return JSON.parse(t);   
    let rev = reverseStr(t), pad = '';
    while (rev.startsWith('=')) { pad += '='; rev = rev.slice(1); }
    rev = rev.replace(/-/g, '+').replace(/_/g, '/').replace(/[^A-Za-z0-9+/]/g, '');
    rev = rev + pad;
    while (rev.length % 4 !== 0) rev += '=';
    const text = utf8Decode(base64Decode(rev));
    return JSON.parse(text.replace(/\u0000+$/, ''));
  }
  function encodeBody(json, original) {
    const t = String(original == null ? '' : original).trim();
    if (t.startsWith('{') || t.startsWith('[')) return JSON.stringify(json);  
    return reverseStr(base64Encode(utf8Encode(stringifyASCII(json))).replace(/=+$/, ''));
  }
  // 解密失败再尝试明文 JSON；都失败返回 null（供 register 判断重试）
  function safeJson(body) {
    try { return decodeBody(body); }
    catch (e) { try { return JSON.parse(String(body).trim()); } catch (e2) { return null; } }
  }

  // ---------- 字段改写 ----------
  function modifyUser(d) {
    d.vip = 1; d.exp = false; d.expdate = '2999.09.09';
    d.unclaimed = 999; d.today_max = 999; d.today_left = 999;
    d.money = '9999.00'; d.feedback_unread = 0; d.links = ['t.me/GieGie777'];
  }
  function modifyShow(d) {
    d.fullvideo = true; d.today_max = 999; d.today_left = 999; d.vip = 1; d.exp = false;
    if (d.video) { d.video.free = true; d.video.unlock = true; }
    if (Array.isArray(d.guess)) d.guess.forEach(it => { it.free = true; it.unlock = true; });
    d.popup = null; d.banner = []; d.button = [];
  }

  // ---------- 随机工具（账号/密码/设备/boundary）----------
  const ALNUM = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const LOWER = 'abcdefghijklmnopqrstuvwxyz';
  function randStr(n) { let s = ''; for (let i = 0; i < n; i++) s += ALNUM[Math.floor(Math.random() * ALNUM.length)]; return s; }
  // 用户名：字母开头、严格 4–11 位（服务端校验：用户名需字母开头 4-11个字符）
  function randUser() {
    const total = 4 + Math.floor(Math.random() * 8);   // 4-11
    let s = LOWER[Math.floor(Math.random() * 26)];      // 首字母
    for (let i = 1; i < total; i++) s += ALNUM[Math.floor(Math.random() * ALNUM.length)];
    return s;
  }
  function randPass() { return randStr(8 + Math.floor(Math.random() * 4)); }   // 8-11 位（服务端要求密码最少 8 位）
  function buildMultipart(boundary, fields) {
    let b = '';
    for (const k in fields) b += `--${boundary}\r\nContent-Disposition: form-data; name="${k}"\r\n\r\n${fields[k]}\r\n`;
    return b + `--${boundary}--\r\n`;
  }
  const ua = device => `Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 abab/${device}`;
  function baseHeaders(device, boundary) {
    const h = {
      'Origin': `https://${HOST}`, 'Cookie': `device=${device}`, 'Connection': 'keep-alive',
      'Accept': '*/*', 'Host': HOST, 'User-Agent': ua(device),
      'Accept-Language': 'zh-CN,zh-Hans;q=0.9', 'Accept-Encoding': 'gzip, deflate, br'
    };
    if (boundary) h['Content-Type'] = `multipart/form-data; boundary=${boundary}`;
    return h;
  }

  // ---------- 注册（额度探测 + 失败重试）----------
  function register(attempt) {
    attempt = attempt || 1;
    const boundary = '----WebKitFormBoundary' + randStr(16);
    const device = randStr(21);
    const body = buildMultipart(boundary, { username: randUser(), password: randPass() });
    log('发起注册 register（第' + attempt + '次）');
    return http({ url: `https://${HOST}/java/v2/register`, method: 'POST', headers: baseHeaders(device, boundary), body }).then(r => {
      const j = safeJson(r.body);
      if (j && j.code === 1 && j.data && j.data.token) {
        const token = j.data.token;
        store.set('xxcjpt_token', token);
        store.set('xxcjpt_device', device);
        store.set('xxcjpt_used', '0');    
        log('注册成功 uid=' + j.data.uid);
        // 注册后内部查一次 /user/my，拿本账号准确的每日免费额度
        return fetchUserMyJson(token).then(um => {
          const max = (um && um.data && um.data.today_max) ? parseInt(um.data.today_max, 10) : 0;
          const limit = (max && max > 0) ? max : FALLBACK_MAX;
          store.set('xxcjpt_max', String(limit));
          const left = um.data ? um.data.today_left : '?';
          log('本账号额度 today_max=' + limit + ' today_left=' + left);
          return token;
        }).catch(err => {
          log('注册后查额度失败，回退 MAX=' + FALLBACK_MAX + ': ' + err);
          store.set('xxcjpt_max', String(FALLBACK_MAX));
          return token;
        });
      }
      // 未被接受（用户名格式/已存在/其他）→ 换号重试，避免偶发失败废掉本次播放
      if (attempt < MAX_REGISTER_RETRY) {
        log('注册被拒(' + (j && j.message ? j.message : '无数据') + ')，换号重试 ' + (attempt + 1) + '/' + MAX_REGISTER_RETRY);
        return register(attempt + 1);
      }
      throw new Error('register 多次失败: ' + (j ? (j.message || JSON.stringify(j).slice(0, 120)) : r.body));
    });
  }

  function ensureToken() {
    const token = store.get('xxcjpt_token');
    const used = parseInt(store.get('xxcjpt_used') || '0', 10);
    const max = parseInt(store.get('xxcjpt_max') || String(FALLBACK_MAX), 10);
    if (token && used < max) {
      log('复用缓存 token，本账号已用 ' + used + '/' + max);
      return Promise.resolve(token);
    }
    log('当前账号额度用尽或无 token，注册新账号');
    return register();
  }

  // ---------- 重拉（带 token）----------
  function fetchShow(token, vid) {
    const boundary = '----WebKitFormBoundary' + randStr(16);
    const device = store.get('xxcjpt_device') || randStr(21);
    const body = buildMultipart(boundary, { token: token, vid: vid, spm: 'home.latest' });
    return http({ url: `https://${HOST}/java/show/` + vid, method: 'POST', headers: baseHeaders(device, boundary), body }).then(r => {
      const data = decodeBody(r.body);
      if (data && data.data) modifyShow(data.data);
      return encodeBody(data, r.body);
    });
  }
  // 内部用：返回 /user/my 解析对象（不回写），供注册后探额度 & user/my 分支重拉
  function fetchUserMyJson(token) {
    const device = store.get('xxcjpt_device') || randStr(21);
    const boundary = '----WebKitFormBoundary' + randStr(16);
    const body = buildMultipart(boundary, { token: token });
    return http({ url: `https://${HOST}/java/user/my`, method: 'POST', headers: baseHeaders(device, boundary), body }).then(r => decodeBody(r.body));
  }

  // ---------- 分发 ----------
  if (typeof $response === 'undefined') { $done({}); return; }

  const url = $request.url;
  // 递归防护：本脚本发出的内部请求被再次命中时直接放行
  if (headerGet($request.headers, INNER_HEADER) === '1') { log('内部请求命中，放行'); $done({}); return; }

  log('命中 TOOL=' + TOOL + ' url=' + url + ' bodyLen=' + ($response.body ? $response.body.length : 'null'));

  if (url.indexOf('/java/show/') !== -1) {
    const m = url.match(/\/java\/show\/(\d+)/);
    const vid = m ? m[1] : '';
    ensureToken()
      .then(tk => fetchShow(tk, vid))
      .then(b => {
        const u = parseInt(store.get('xxcjpt_used') || '0', 10);
        store.set('xxcjpt_used', String(u + 1));
        const max = parseInt(store.get('xxcjpt_max') || String(FALLBACK_MAX), 10);
        log('show 重写完成，本账号已用 ' + (u + 1) + '/' + max + ' 次');
        $done({ body: b });
      })
      .catch(e => { log('show 处理失败，放行原响应: ' + e); $done({}); });
    return;
  }

  if (url.indexOf('/java/user/my') !== -1) {
    // 先尝试同步改写（原响应若为有效密文）；失败（空/锁定）再走 token 重拉
    try {
      const data = decodeBody($response.body);
      if (data && data.data) modifyUser(data.data);
      $done({ body: encodeBody(data, $response.body) });
      return;
    } catch (e) {
      log('user/my 同步失败(' + e + ')，改为注册重拉');
      ensureToken()
        .then(tk => fetchUserMyJson(tk))
        .then(data => { if (data && data.data) modifyUser(data.data); $done({ body: encodeBody(data, null) }); })
        .catch(err => { log('user/my 处理失败，放行: ' + err); $done({}); });
    }
    return;
  }

  $done({});
})();

