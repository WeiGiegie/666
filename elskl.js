/*
 *
 *
脚本功能：俄罗斯克拉 去会员+广告🔞
软件版本：1.1.1
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

  var HOST = 'sixth.xxcjpt.com';
  var INNER_HEADER = 'x-xxcjpt-inner';
  var FALLBACK_MAX = 3;
  var MAX_REGISTER_RETRY = 3;

  var TOOL = (typeof $httpClient !== 'undefined') ? 'Loon/Surge'
           : (typeof $task !== 'undefined') ? 'QX' : 'Unknown';

  function storeGet(k) {
    try {
      if (typeof $persistentStore !== 'undefined' && $persistentStore && typeof $persistentStore.read === 'function') return $persistentStore.read(k);
      if (typeof $prefs !== 'undefined' && $prefs && typeof $prefs.valueForKey === 'function') return $prefs.valueForKey(k);
    } catch (e) {}
    return null;
  }
  function storeSet(k, v) {
    try {
      if (typeof $persistentStore !== 'undefined' && $persistentStore && typeof $persistentStore.write === 'function') return $persistentStore.write(v, k);
      if (typeof $prefs !== 'undefined' && $prefs && typeof $prefs.setValueForKey === 'function') return $prefs.setValueForKey(v, k);
    } catch (e) {}
    return null;
  }

  function log() {
    var parts = ['[啪啪搜]'];
    for (var i = 0; i < arguments.length; i++) {
      var x = arguments[i];
      if (x instanceof Error) parts.push(x.message);
      else if (x !== null && typeof x === 'object') {
        try { parts.push(JSON.stringify(x)); } catch (e) { parts.push('[obj]'); }
      } else parts.push(String(x));
    }
    console.log(parts.join(' '));
  }

  // ---------- HTTP 请求（核心修复：params 对象 + body 为对象）----------
  function http(request) {
    request.headers = request.headers || {};
    request.headers[INNER_HEADER] = '1';
    var method = (request.method || 'GET').toUpperCase();

    return new Promise(function (resolve, reject) {
      var finished = false;
      function ok(result) { if (!finished) { finished = true; resolve(result); } }
      function fail(e) { if (!finished) { finished = true; reject(e); } }

      var timer = setTimeout(function () {
        if (!finished) { log('http: TIMEOUT'); fail(new Error('http timeout')); }
      }, 4000);

      function handleResp(err, resp, data) {
        clearTimeout(timer);
        if (err) {
          log('http callback err: ' + err);
          return fail(new Error('http: ' + (typeof err === 'string' ? err : JSON.stringify(err))));
        }
        var sc = resp ? (resp.status || resp.statusCode) : 0;
        log('http ok status=' + sc + ' len=' + (data ? String(data).length : 0));
        ok({ statusCode: sc, body: data, headers: resp ? resp.headers : null });
      }

      if (typeof $httpClient === 'undefined' || !$httpClient) {
        return fail(new Error('no $httpClient'));
      }

      // 构建请求参数对象（Loon/Surge 标准签名：$httpClient.post(params, callback)）
      var params = {
        url: request.url,
        headers: request.headers
      };

      // body 优先使用对象形式（Loon 会自动 JSON 编码）
      // 如果没有提供对象 body，再回退到字符串
      if (request.bodyObject) {
        params.body = request.bodyObject;   // 对象形式，Loon 自动编码为 JSON
      } else if (request.body) {
        params.body = request.body;         // 字符串形式（urlencoded）
      }

      try {
        if (method === 'POST' && typeof $httpClient.post === 'function') {
          log('http -> $httpClient.post(params, cb) bodyType=' + (request.bodyObject ? 'object' : 'string'));
          $httpClient.post(params, handleResp);
          return;
        }
        if (typeof $httpClient.get === 'function') {
          log('http -> $httpClient.get(params, cb)');
          $httpClient.get(params, handleResp);
          return;
        }
      } catch (e) {
        log('$httpClient 调用异常: ' + e);
      }

      // 回退到 $task.fetch（QX）
      if (typeof $task !== 'undefined' && $task && typeof $task.fetch === 'function') {
        try {
          log('http -> $task.fetch');
          $task.fetch(request).then(
            function (r) { ok({ statusCode: r.statusCode || r.status, body: r.body, headers: r.headers }); },
            function (e) { fail(e); }
          );
          return;
        } catch (e) { log('$task.fetch 异常: ' + e); }
      }

      fail(new Error('no working http method'));
    });
  }

  function headerGet(h, name) {
    if (!h) return undefined;
    var lk = name.toLowerCase();
    for (var k in h) if (k.toLowerCase() === lk) return h[k];
    return undefined;
  }

  // ---------- 编解码 ----------
  var B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  function reverseStr(s) { return String(s).split('').reverse().join(''); }

  function base64Encode(s) {
    var out = '', i = 0, len = s.length;
    while (i < len) {
      var c1 = s.charCodeAt(i++), c2 = i < len ? s.charCodeAt(i++) : NaN, c3 = i < len ? s.charCodeAt(i++) : NaN;
      var e1 = c1 >> 2, e2 = ((c1 & 3) << 4) | (isNaN(c2) ? 0 : c2 >> 4);
      var e3 = isNaN(c2) ? 64 : (((c2 & 15) << 2) | (isNaN(c3) ? 0 : c3 >> 6)), e4 = isNaN(c3) ? 64 : (c3 & 63);
      out += B64.charAt(e1) + B64.charAt(e2) + (e3 === 64 ? '=' : B64.charAt(e3)) + (e4 === 64 ? '=' : B64.charAt(e4));
    }
    return out;
  }
  function base64Decode(s) {
    s = String(s).replace(/[^A-Za-z0-9+/]/g, '');
    var out = '', i = 0;
    while (i < s.length) {
      var c1 = B64.indexOf(s.charAt(i++)), c2 = B64.indexOf(s.charAt(i++)), c3 = B64.indexOf(s.charAt(i++)), c4 = B64.indexOf(s.charAt(i++));
      var n = (c1 << 18) | (c2 << 12) | ((c3 & 63) << 6) | (c4 & 63);
      out += String.fromCharCode((n >> 16) & 255, (n >> 8) & 255, n & 255);
    }
    return out;
  }
  function utf8Encode(str) {
    var bin = '';
    for (var i = 0; i < str.length; i++) {
      var cp = str.charCodeAt(i);
      if (cp >= 0xD800 && cp <= 0xDBFF && i + 1 < str.length) {
        var lo = str.charCodeAt(i + 1);
        if (lo >= 0xDC00 && lo <= 0xDFFF) { cp = 0x10000 + ((cp - 0xD800) << 10) + (lo - 0xDC00); i++; }
      }
      if (cp < 0x80) bin += String.fromCharCode(cp);
      else if (cp < 0x800) bin += String.fromCharCode(0xC0 | (cp >> 6), 0x80 | (cp & 0x3F));
      else if (cp < 0x10000) bin += String.fromCharCode(0xE0 | (cp >> 12), 0x80 | ((cp >> 6) & 0x3F), 0x80 | (cp & 0x3F));
      else { cp -= 0x10000; bin += String.fromCharCode(0xF0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3F), 0x80 | ((cp >> 6) & 0x3F), 0x80 | (cp & 0x3F)); }
    }
    return bin;
  }
  function utf8Decode(binStr) {
    var out = '', i = 0;
    while (i < binStr.length) {
      var c = binStr.charCodeAt(i++);
      if (c < 0x80) out += String.fromCharCode(c);
      else if (c < 0xC0) { /* skip */ }
      else if (c < 0xE0) { var c2 = binStr.charCodeAt(i++); out += String.fromCharCode(((c & 0x1F) << 6) | (c2 & 0x3F)); }
      else if (c < 0xF0) { var c2a = binStr.charCodeAt(i++), c3a = binStr.charCodeAt(i++); out += String.fromCharCode(((c & 0x0F) << 12) | ((c2a & 0x3F) << 6) | (c3a & 0x3F)); }
      else { var c2b = binStr.charCodeAt(i++), c3b = binStr.charCodeAt(i++), c4b = binStr.charCodeAt(i++); var cp2 = ((c & 0x07) << 18) | ((c2b & 0x3F) << 12) | ((c3b & 0x3F) << 6) | (c4b & 0x3F); cp2 -= 0x10000; out += String.fromCharCode(0xD800 + (cp2 >> 10), 0xDC00 + (cp2 & 0x3FF)); }
    }
    return out;
  }
  function stringifyASCII(obj) {
    return JSON.stringify(obj).replace(/[\u007f-\uffff]/g, function (c) {
      return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
    });
  }
  function decodeBody(body) {
    var t = String(body == null ? '' : body).trim();
    if (t.length === 0) throw new Error('body 为空');
    if (t.charAt(0) === '{' || t.charAt(0) === '[') return JSON.parse(t);
    var rev = reverseStr(t), pad = '';
    while (rev.charAt(0) === '=') { pad += '='; rev = rev.slice(1); }
    rev = rev.replace(/-/g, '+').replace(/_/g, '/').replace(/[^A-Za-z0-9+/]/g, '');
    rev = rev + pad;
    while (rev.length % 4 !== 0) rev += '=';
    var text = utf8Decode(base64Decode(rev));
    return JSON.parse(text.replace(/\u0000+$/, ''));
  }
  function encodeBody(json, original) {
    var t = String(original == null ? '' : original).trim();
    if (t.charAt(0) === '{' || t.charAt(0) === '[') return JSON.stringify(json);
    return reverseStr(base64Encode(utf8Encode(stringifyASCII(json))).replace(/=+$/, ''));
  }
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
    if (Array.isArray(d.guess)) d.guess.forEach(function (it) { it.free = true; it.unlock = true; });
    d.popup = null; d.banner = []; d.button = [];
  }

  // ---------- 随机工具 ----------
  var ALNUM = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var LOWER = 'abcdefghijklmnopqrstuvwxyz';
  function randStr(n) { var s = ''; for (var i = 0; i < n; i++) s += ALNUM[Math.floor(Math.random() * ALNUM.length)]; return s; }
  function randUser() {
    var total = 4 + Math.floor(Math.random() * 8);
    var s = LOWER[Math.floor(Math.random() * 26)];
    for (var i = 1; i < total; i++) s += ALNUM[Math.floor(Math.random() * ALNUM.length)];
    return s;
  }
  function randPass() { return randStr(8 + Math.floor(Math.random() * 4)); }

  var UA_TPL = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 abab/';
  function ua(device) { return UA_TPL + device; }

  function baseHeaders(device) {
    return {
      'Origin': 'https://' + HOST,
      'Cookie': 'device=' + device,
      'Accept': '*/*',
      'User-Agent': ua(device),
      'Accept-Language': 'zh-CN,zh-Hans;q=0.9'
      // 注意：不再手动设置 Content-Type，让 Loon 根据 body 类型自动处理
    };
  }

  // ---------- 注册 ----------
  function register(attempt) {
    attempt = attempt || 1;
    var device = randStr(21);
    // 使用对象形式的 body，让 Loon 自动 JSON 编码并设置 Content-Type
    var bodyObj = { username: randUser(), password: randPass() };
    log('发起注册 register（第' + attempt + '次）');
    return http({
      url: 'https://' + HOST + '/java/v2/register',
      method: 'POST',
      headers: baseHeaders(device),
      bodyObject: bodyObj
    }).then(function (r) {
      var j = safeJson(r.body);
      if (j && j.code === 1 && j.data && j.data.token) {
        var token = j.data.token;
        storeSet('xxcjpt_token', token);
        storeSet('xxcjpt_device', device);
        storeSet('xxcjpt_used', '0');
        storeSet('xxcjpt_max', String(FALLBACK_MAX));
        log('注册成功 uid=' + j.data.uid);
        return token;
      }
      if (attempt < MAX_REGISTER_RETRY) {
        log('注册被拒(' + (j && j.message ? j.message : '无数据') + ')，换号重试 ' + (attempt + 1) + '/' + MAX_REGISTER_RETRY);
        return register(attempt + 1);
      }
      throw new Error('register 多次失败: ' + (j ? (j.message || JSON.stringify(j).slice(0, 120)) : r.body));
    });
  }

  function ensureToken() {
    var token = storeGet('xxcjpt_token');
    var used = parseInt(storeGet('xxcjpt_used') || '0', 10);
    var max = parseInt(storeGet('xxcjpt_max') || String(FALLBACK_MAX), 10);
    if (token && used < max) {
      log('复用缓存 token，本账号已用 ' + used + '/' + max);
      return Promise.resolve(token);
    }
    log('当前账号额度用尽或无 token，注册新账号');
    return register();
  }

  // ---------- 重拉 ----------
  function fetchShow(token, vid) {
    var device = storeGet('xxcjpt_device') || randStr(21);
    var bodyObj = { token: token, vid: vid, spm: 'home.latest' };
    return http({
      url: 'https://' + HOST + '/java/show/' + vid,
      method: 'POST',
      headers: baseHeaders(device),
      bodyObject: bodyObj
    }).then(function (r) {
      var data = decodeBody(r.body);
      if (data && data.data) modifyShow(data.data);
      return encodeBody(data, r.body);
    });
  }

  // ---------- 分发 ----------
  if (typeof $response === 'undefined') { $done({}); return; }

  var url = $request.url;

  if (headerGet($request.headers, INNER_HEADER) === '1') {
    log('内部请求命中，放行');
    $done({});
    return;
  }

  log('命中 TOOL=' + TOOL + ' url=' + url + ' bodyLen=' + ($response.body ? $response.body.length : 'null'));

  if (url.indexOf('/java/show/') !== -1) {
    var m = url.match(/\/java\/show\/(\d+)/);
    var vid = m ? m[1] : '';
    ensureToken()
      .then(function (tk) { return fetchShow(tk, vid); })
      .then(function (b) {
        var u = parseInt(storeGet('xxcjpt_used') || '0', 10);
        storeSet('xxcjpt_used', String(u + 1));
        var max = parseInt(storeGet('xxcjpt_max') || String(FALLBACK_MAX), 10);
        log('show 重写完成，本账号已用 ' + (u + 1) + '/' + max + ' 次');
        $done({ body: b });
      })
      .catch(function (e) {
        log('show 处理失败，放行原响应: ' + e);
        $done({});
      });
    return;
  }

  if (url.indexOf('/java/user/my') !== -1) {
    try {
      var data = decodeBody($response.body);
      if (data && data.data) modifyUser(data.data);
      $done({ body: encodeBody(data, $response.body) });
      return;
    } catch (e) {
      log('user/my 同步失败(' + e + ')，改为放行');
      $done({});
    }
    return;
  }

  $done({});
})();