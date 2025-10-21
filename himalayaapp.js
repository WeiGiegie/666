/*
 *
 *
脚本功能：喜马拉雅国际版(himalaya) 会员调试
软件版本：
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 喜马拉雅国际版(himalaya) 会员调试

#节目目录解锁
https?:\/\/apisg.himalaya.com\/imobile\/album\/v2\/track\/ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/himalayaapp.js

#播放地址解锁
https?:\/\/apisg.himalaya.com\/imobile-track\/track\/urlEncode url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/himalayaapp.js

#重进点播放/播放界面解锁
https?:\/\/apisg.himalaya.com\/imobile-track\/track\/detail url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/himalayaapp.js

#个人页面会员
https?:\/\/apisg.himalaya.com\/hipoints-web\/member\/userInfo\/get url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/himalayaapp.js

#播放页面小窗口会员广告按钮
^https?:\/\/apisg.himalaya.com\/intl-promotion-web\/play\/redeem\/simple\/config url reject

[mitm]
hostname = apisg.himalaya.com
*
*
*/












// ======= 环境适配封装 =======
function isQuanX() {
  return typeof $task !== "undefined";
}
function isSurge() {
  return typeof $httpClient !== "undefined" && typeof $loon === "undefined";
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
    let oldCookie = headers["Cookie"];

    if (json.cookie && oldCookie) {
      headers["Cookie"] = json.cookie;
      console.log("Cookie 已替换成功");
    }

    $done({ headers });

  } catch (e) {
    console.log("JSON 解析失败: " + e.message);
    $done({});
  }
});

