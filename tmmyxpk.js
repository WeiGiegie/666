/*
 *
 *
脚本功能：汤姆猫英雄跑酷(微信小程序) - 仅修改货币
软件版本：
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https?:\/\/h5-tthd-server.jinkejoy.com\/user\/login url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/tmmyxpk.js
[mitm]
hostname = h5-tthd-server.jinkejoy.com
*
*
*/

let body = JSON.parse($response.body);

try {
  let cVsStr = JSON.parse(body.body.allData.cVs);
  let cVsObj = JSON.parse(cVsStr);

  // 需要修改的货币列表
  const TARGET_CURRENCIES = ['coins', 'gems', 'tokens', 'seasonal-tokens'];
  const NEW_BALANCE = "999988990";

  // 批量修改货币
  TARGET_CURRENCIES.forEach(currId => {
    let account = cVsObj.accounts.find(a => a.id === currId);
    if (account) {
      account.balance = NEW_BALANCE;
      account.cC = NEW_BALANCE;
      account.cD = "0";
    }
  });

  body.body.allData.cVs = JSON.stringify(JSON.stringify(cVsObj));
} catch (e) {

  console.log('脚本执行出错：' + e.message);
}

$done({ body: JSON.stringify(body) });
