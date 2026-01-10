/*
 * 脚本功能：CatVPN节点提取
 * 软件版本：1.4
 * 脚本作者：https://t.me/GieGie777
 * 更新时间：2026年01月10日
 * 使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
 *******************************
[rewrite_local]
# > CatVPN节点提取
^https?:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/catvpn_extract.js

[mitm]
hostname = firebaseremoteconfig.googleapis.com
*******************************
*/








const ENV = {
  isQX: typeof $task !== "undefined",
  isLoon: typeof $loon !== "undefined",
  isSurge: typeof $httpClient !== "undefined" && typeof $loon === "undefined"
};

function safeJsonParse(str) { try { return JSON.parse(str) } catch { return null } }
function httpRequest(options) { return new Promise(resolve => { if (ENV.isQX) { $task.fetch(options).then(resolve).catch(err => resolve({ statusCode: 500, body: null, error: String(err) })) } else if (ENV.isLoon || ENV.isSurge) { const method = (options.method || "GET").toUpperCase(); const doReq = method === "POST" ? $httpClient.post : $httpClient.get; doReq(options, (err, res, body) => { resolve({ statusCode: err ? 500 : (res.status || res.statusCode || 200), body: err ? null : body, error: err ? String(err) : null }) }) } else { resolve({ statusCode: 500, body: null, error: "Unknown environment" }) } }) }
function done(response = {}) { if (typeof $done !== "undefined") $done(response) }
function showNotification(title, subtitle, message, openUrl) { if (ENV.isQX) { if (openUrl) { $notify(title, subtitle, message, { "open-url": openUrl }) } else { $notify(title, subtitle, message) } } else if (ENV.isLoon) { if (openUrl) { $notification.post(title, subtitle, message, openUrl) } else { $notification.post(title, subtitle, message) } } else if (ENV.isSurge) { if (openUrl) { $notification.post(title, subtitle, message, { url: openUrl }) } else { $notification.post(title, subtitle, message) } } }
function log(message) { console.log(`[CatVPN节点提取] ${message}`) }

// Base64编码函数（兼容QX环境）
function base64Encode(str) {
  if (typeof $base64 !== "undefined") {
    return $base64.encode(str);
  } else if (typeof btoa !== "undefined") {
    return btoa(unescape(encodeURIComponent(str)));
  } else {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let output = "";
    let i = 0;
    while (i < str.length) {
      const a = str.charCodeAt(i++);
      const b = str.charCodeAt(i++);
      const c = str.charCodeAt(i++);
      const index1 = a >> 2;
      const index2 = ((a & 3) << 4) | (b >> 4);
      const index3 = isNaN(b) ? 64 : ((b & 15) << 2) | (c >> 6);
      const index4 = isNaN(c) ? 64 : (c & 63);
      output += chars.charAt(index1) + chars.charAt(index2) + chars.charAt(index3) + chars.charAt(index4);
    }
    return output;
  }
}

// 生成VLESS节点链接
function generateVlessNode(serverInfo, isPro = false) {
  try {
    const { host, port, uuid, country_name, id } = serverInfo;
    if (!host || !port || !uuid) return null;

    const typeText = isPro ? "付费" : "免费";
    const remarks = `${typeText}-${country_name}-${id}`;

    const tlsServerName = "osxapps.itunes.apple.com";
    const publicKey = "OyGxax1037g3nQrsIW0PtXHik3WI1ikOT2pxm9c7fxw";
    const shortId = "6ba85179e30d4fc2";
//security=reality
    return `vless://${uuid}@${host}:${port}?encryption=none&flow=xtls-rprx-vision&security=reality&sni=${tlsServerName}&allowInsecure=1&fp=chrome&pbk=${publicKey}&sid=${shortId}#${remarks}`;
  } catch (e) {
    return null;
  }
}

// 生成Hysteria2节点链接
function generateHysteria2Node(serverInfo, isPro = false) {
  try {
    const { host, port, uuid, country_name, id } = serverInfo;
    if (!host || !port) return null;

    const typeText = isPro ? "付费" : "免费";
    const remarks = `${typeText}-${country_name}-${id}`;

    const password = uuid || "default-password";
    const tlsServerName = "lenta.ru";

    return `hysteria2://${password}@${host}:${port}?insecure=1&sni=${tlsServerName}#${remarks}`;
  } catch (e) {
    return null;
  }
}

// 处理服务器配置
function processServerConfig(server, template, isPro = false) {
  try {
    if (!server || !server.conf || !server.conf.conf) return null;

    const { conf } = server.conf;
    const { host, port, uuid } = conf;
    const { country_name, id } = server;

    const serverInfo = { host, port, uuid, country_name, id };

    if (template === "s_direct") {
      return generateVlessNode(serverInfo, isPro);
    } else if (template === "h_direct") {
      return generateHysteria2Node(serverInfo, isPro);
    }

    return null;
  } catch (e) {
    return null;
  }
}

// 主处理逻辑
async function handleCatVPNResponse() {
  log("开始处理CatVPN节点响应数据");
  const originalBody = $response.body;
  if (!originalBody) {
    log("原始响应数据为空");
    showNotification("CatVPN节点提取失败", "", "响应数据为空");
    return done({ body: originalBody });
  }

  const responseData = safeJsonParse(originalBody);
  if (!responseData?.entries?.wind_servers) {
    log("未找到wind_servers字段");
    showNotification("CatVPN节点提取失败", "", "响应数据格式错误");
    return done({ body: originalBody });
  }

  try {
    // Base64解码节点数据
    const windServersBase64 = responseData.entries.wind_servers;
    let windServersJson = '';
    if (typeof atob === 'function') {
      windServersJson = atob(windServersBase64);
    } else if (typeof $crypto !== 'undefined') {
      windServersJson = $crypto.base64Decode(windServersBase64);
    } else {
      throw new Error("当前环境不支持Base64解码");
    }

    const windServers = JSON.parse(windServersJson);
    const freeServers = windServers.free_servers || [];
    const proServers = windServers.pro_servers || [];
    const allNodes = [];

    // 生成免费节点
    freeServers.forEach(server => {
      if (server?.conf) {
        const node = processServerConfig(server, server.conf.template, false);
        if (node) allNodes.push(node);
      }
    });

    // 生成付费节点
    proServers.forEach(server => {
      if (server?.conf) {
        const node = processServerConfig(server, server.conf.template, true);
        if (node) allNodes.push(node);
      }
    });

    if (allNodes.length === 0) {
      throw new Error("未生成任何节点");
    }

    // 弹窗显示节点信息
    const nodeText = allNodes.join('\n\n');
    showNotification(
      "CatVPN节点提取成功",
      `共提取 ${allNodes.length} 个节点`,
      nodeText
    );
    log(`成功提取 ${allNodes.length} 个节点`);
  } catch (error) {
    log(`处理失败: ${error.message}`);
    showNotification("CatVPN节点提取失败", "", error.message);
  }

  // 原样返回响应数据
  done({ body: originalBody });
}

// 入口执行
if (typeof $response !== "undefined") {
  handleCatVPNResponse();
} else {
  log("非响应拦截环境，脚本不执行");
  done();
}
