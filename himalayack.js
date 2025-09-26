// ======= 环境适配封装 =======
function isQuanX() {
  return typeof $task !== "undefined";
}
function isSurge() {
  return typeof $httpClient !== "undefined";
}
function isLoon() {
  return typeof $loon !== "undefined";
}
function isNode() {
  return typeof require == "function" && !isQuanX() && !isSurge() && !isLoon();
}

function httpGet(url, callback) {
  if (isQuanX()) {
    $task.fetch({ url }).then(
      resp => callback(null, resp, resp.body),
      err => callback(err, null, null)
    );
  } else if (isSurge() || isLoon()) {
    $httpClient.get(url, (err, resp, body) => {
      callback(err, resp, body);
    });
  } else if (isNode()) {
    const https = require("https");
    https.get(url, (resp) => {
      let data = "";
      resp.on("data", (chunk) => (data += chunk));
      resp.on("end", () => {
        callback(null, resp, data);
      });
    }).on("error", (err) => {
      callback(err, null, null);
    });
  } else {
    callback(new Error("未知环境"), null, null);
  }
}

const url = "https://raw.githubusercontent.com/WeiGiegie/666/main/himalaya_data.json";

httpGet(url, (error, response, data) => {
  if (error) {
    console.log("获取远程数据失败: " + error);
    $done({});
    return;
  }

  try {
    const json = JSON.parse(data);
    let headers = $request.headers;
  
    const cookieKey = Object.keys(headers).find(key => key.toLowerCase() === "cookie");
    let oldCookie = cookieKey ? headers[cookieKey] : undefined;

    if (json.cookie && oldCookie) {
   
      headers[cookieKey] = json.cookie;
      console.log(`Cookie已替换（匹配到字段：${cookieKey}）`);
    } else if (!cookieKey) {
      console.log("无需替换Cookie（原请求无Cookie字段）");
    } else if (!json.cookie) {
      console.log("无需替换Cookie（远程数据无cookie值）");
    }

    $done({ headers });

  } catch (e) {
    console.log("JSON解析失败: " + e.message);
    $done({});
  }
});