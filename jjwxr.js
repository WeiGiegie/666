/*
 *
 *
脚本功能：狙击外星人 (微信小程序) 
软件版本：解锁金币，道具数量，每次打开注册新账户强登理论无视封号
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https?:\/\/alien.kampfiregames.cn\/game\/entry\/platform-login url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/jjwxr.js

[mitm]
hostname = alien.kampfiregames.cn
*
*
*/










function generateUUID() {
  let d = Date.now();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); // 增加随机性
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

// 生成动态数据
const nowSec = Math.floor(Date.now() / 1000);
const nowMs  = Date.now();

const rndOpenId  = "oOY" + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10);
const rndUuid    = Math.floor(Math.random() * 100000000000) + "-" + Math.random().toString(36).slice(2, 8);
const rndName    = "NewPlayer_" + Math.random().toString(36).slice(2, 6);
const rndGender  = Math.floor(Math.random() * 2);
const rndUid     = Math.floor(100000000 + Math.random() * 900000000);
const rndUserId  = generateUUID();  

// 构造伪造新用户的响应体
const newBody = `{
  "errcode": 0,
  "data": {
    "loginStatus": 0,
    "serverTime": ${nowSec},
    "njwdWC": 0,
    "openId": "${rndOpenId}",
    "clientData": "{\\\"m_nLevel\\\":99,\\\"m_prop\\\":{\\\"1\\\":999880,\\\"2\\\":999880},\\\"m_propShow\\\":{},\\\"gunMap\\\":{\\\"1\\\":1},\\\"uuid\\\":\\\"${rndUuid}\\\",\\\"gunID\\\":1,\\\"coin\\\":9999880,\\\"ml\\\":[{\\\"m\\\":1,\\\"s\\\":1,\\\"l\\\":1,\\\"t\\\":1,\\\"sh\\\":1,\\\"k\\\":0},{\\\"m\\\":12,\\\"s\\\":0,\\\"l\\\":1,\\\"t\\\":0,\\\"sh\\\":0,\\\"k\\\":0}],\\\"m\\\":12,\\\"st\\\":${nowMs},\\\"sd\\\":{\\\"d\\\":0,\\\"t\\\":0},\\\"llt\\\":${nowMs},\\\"en\\\":5,\\\"srt\\\":${nowSec},\\\"ws\\\":{\\\"i\\\":1,\\\"n\\\":1}}",
    "isAuth": false,
    "njwdLWT": 0,
    "isNew": true,
    "headImg": "",
    "activity": {},
    "name": "${rndName}",
    "gender": ${rndGender},
    "uid": ${rndUid},
    "envConf": {
      "interMin": 110,
      "moreInter": false,
      "group_id_njwd": "@4F8FgKDKWJloaiT4MNxkQab51WeGOv2EPJZyoQquLVMWbfX/3nXjfmIujgn96zUFYxjiDJaAPGzxu9ipxvUgzw==",
      "interMax": 130,
      "group_id": "@4F8FgKDKWJloaiT4MNxkQab51WeGOv2EPZx2qgOuLVQQafP63nfocmIujgn96zUFwD3lyr/jKjJbLPwa2u/4qA=="
    },
    "tailNum": 36,
    "subscribe": {},
    "prop": {},
    "strProp": {},
    "address": " ",
    "userId": "${rndUserId}"
  },
  "errmsg": ""
}`;


const headers = $response ? $response.headers : {};
$done({ body: newBody, headers });
