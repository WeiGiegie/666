/*
 *
 *
脚本功能：番茄助眠  (随意账号密码登录即是24h会员到期重新登)
软件版本：TF 1.0
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 番茄助眠
^https:\/\/www\.asmr\.red\/api\/v1\/login-new url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/fqzm.js


[mitm]
hostname = www.asmr.red
*
*
*/




const remoteUrl = "https://raw.githubusercontent.com/WeiGiegie/666/main/fqzmtoken.json";

(async () => {
    try {
        const { response, body } = await fetchRemoteContent({ url: remoteUrl });
        const statusCode = response.status || response.statusCode;

        if (statusCode !== 200) {
            return $done({});
        }

        JSON.parse(body);

        let newHeaders = $response.headers;
        const contentTypeKey = Object.keys(newHeaders).find(key => key.toLowerCase() === 'content-type') || 'Content-Type';
        newHeaders[contentTypeKey] = 'application/json; charset=utf-8';

        $done({ body, headers: newHeaders });

    } catch (error) {
        $done({});
    }
})();

function fetchRemoteContent(options) {
  return new Promise((resolve, reject) => {
    if (typeof $httpClient !== 'undefined') {
      $httpClient.get(options, (error, response, body) => {
        if (error) return reject(error);
        resolve({ response, body });
      });
    } else if (typeof $task !== 'undefined') {
      $task.fetch(options).then(
        (response) => resolve({ response, body: response.body }),
        (reason) => reject(reason.error || reason)
      );
    } else {
      reject("Unsupported environment");
    }
  });
}
