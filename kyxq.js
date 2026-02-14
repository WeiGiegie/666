/*
 *
 *
脚本功能：口语星球
软件版本：4.5.8
下载地址：
脚本作者：
更新时间：
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]

# >口语星球
^https?:\/\/mapi\.kouyuxingqiu\.com\/api\/v2 url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/kyxq.js

[mitm] 
hostname = mapi.kouyuxingqiu.com

*
*
*/



let body = $response.body;

try {
  let obj = JSON.parse(body);
  
  if (obj.data) {
    // 场景1: data是对象（权限接口）
    if (typeof obj.data === 'object' && !Array.isArray(obj.data)) {
      obj.data.expireDate = 4102416000000;
      obj.data.havePermission = true;
      obj.data.type = 2;
      obj.data.isVip = true;
      if (obj.data.vipLevel !== undefined) obj.data.vipLevel = 10;
    }
    
    // 场景2: data是数组（课程列表接口）
    else if (Array.isArray(obj.data)) {
      obj.data.forEach(course => {
        course.overTime = 4102416000000;
        if (course.status !== undefined) course.status = 1;
        if (course.isStudyIng !== undefined) course.isStudyIng = 1;
      });
    }
  }
  
  body = JSON.stringify(obj);
} catch(e) {
  console.log("Error: " + e);
}

$done({body});

