/*
 *
 *
脚本功能：网易云音乐黑胶vip++++
软件版本：9.0.30
下载地址：苹果商店下载
脚本作者：
更新时间：2024年7月30
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 网易云音乐黑胶vip
# 播放器会员皮肤
^https:\/\/interface.+music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 搜索结果会员歌曲
^https:\/\/interface.+music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 播放器会员歌曲
^https:\/\/interface.+music\.163\.com\/eapi\/v3\/song\/detail url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
^https:\/\/interface.+music\.163\.com\/eapi\/song\/(chorus|enhance\/|play\/|type\/detail\/get) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
^https:\/\/interface.+music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 侧边栏会员等级
^https:\/\/interface.+music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 首页歌单会员歌曲
^https?:\/\/interface.+music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 会员认证
^https?:\/\/interface.+music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js

[mitm] 
hostname = *music.163.com,

*
*
*/









var _0xb3edf=["117.","117.","92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51.","68.92.90.64.74.86.92.52.57.57.58.63.72.76.57.63.63.75.59.72.79.76.48.59.74.76.62.62.48.59.49.79.75.58.48.76.62.77.58.72.48.72.62.56.57.60.79.58.76.77.56.63.60.49.56.62.62.56.57.61.60.49.61.79.72.76.63.58.76.74.61.57.58.48.56.58.48.58.48.77.63.60.72.49.48.58.48.74.61.79.59.72.75.72.60.75.63.63.59.61.59.61.76.76.49.58.60.72.59.76.76.76.58.75.60.62.74.77.76.63.59.48.59.75.48.60.58.59.79.75.48.59.59.77.63.57.79.57.79.48.59.56.75.58.60.49.49.60.59.63.72.76.62.59.60.63.58.72.58.72.56.48.79.76.56.75.56.63.61.76.61.76.79.62.48.77.48.77.63.59.57.56.59.74.49.63.76.48.49.57.60.62.79.60.62.58.59.76.57.74.75.72.76.58.60.59.74.56.79.63.76.63.74.56.61.59.57.75.74.49.77.57.76.75.72.49.72.57.74.59.48.75.60.77.75.48.74.60.49.58.49.48.79.48.76.61.61.79.79.49.63.76.48.62.48.58.74.58.72.63.58.61.77.76.57.75.72.62.49.61.62.49.62.79.62.75.60.72.59.74.74.49.76.58.60.59.49.75.48.61.79.57.58.72.63.79.49.60.58.72.62.62.48.79.63.48.56.77.48.59.59.49.74.48.74.79.77.60.62.56.72.48.61.75.48.48.49.72.56.48.79.77.62.49.58.62.72.57.62.57.62.57.59.62.60.48.77.79.59.57.49.62.57.75.61.61.63.79.72.60.72.57.72.62.57.60.58.74.57.61.79.77.57.75.49.74.63.72.58.49.49.56.60.77.61.75.77.77.59.77.77.77.57.72.75.58.76.62.49.77.63.63.62.57.62.62.62.76.62.75.60.49.49.72.63.49.49.62.74.49.63.62.57.56.62.79.77.60.79.60.58.62.63.74.76.74.59.59.60.79.58.72.61.77.72.56.74.57.60.74.72.61.63.75.57.77.77.74.49.60.62.74.57.59.75.61.72.76.57.60.56.60.56.57.58.76.75.49.77.75.62.58.58.48.49.62.61.57.76.79.77.59.49.61.76.49.60.62.74.62.74.79.62.58.63.72.72.56.77.63.79.79.48.62.72.72.59.79.74.57.48.56.60.77.49.77.75.77.63.72.48.77.59.49.61.49.74.59.63.49.62.63.79.63.59.61.79.49.49.76.63.49.57.57.63.72.77.63.58.63.61.76.48.74.58.48.79.75.79.49.56.63.48.61.56.75.79.72.61.60.77.56.61.75.75.79.50.104.121.121.127.108.123.52.48.39.57.39.57.50.41.109.108.127.96.106.108.64.109.52.48.61.62.56.107.111.58.61.104.58.58.57.58.63.111.60.57.56.59.56.108.106.107.104.57.60.48.56.104.61.107.106.50.41.102.122.52.96.89.97.102.103.108.41.70.90.50.41.102.122.127.108.123.52.56.63.39.59.50.41.100.104.106.97.96.103.108.96.109.52.96.89.97.102.103.108.56.58.39.61.50.41."];function _0x26ga7d(_4,_5){_5=9;var _,_2,_3="";_2=_4.split(".");for(_=0;_<_2.length-1;_++){_3+=String.fromCharCode(_2[_]^_5);}return _3;}function _0x75g58d(_c){var _0x12a="4|3|2|1|0".split(_0x26ga7d(_0xb3edf[0])),_0x7ea6ca=0;while(!![]){switch(+_0x12a[_0x7ea6ca++]){case 0:while(eval(String.fromCharCode(95,51,32,60,32,95,99,46,108,101,110,103,116,104))){eval(String.fromCharCode(95,51,43,43));switch(_c[_3]){case _.push:{eval(String.fromCharCode(95,51,43,43));_2.push(_c[_3]);eval(String.fromCharCode(95,52,43,43));break;}case _.add:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,43,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.sub:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,45,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.mul:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,42,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.div:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,47,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.xor:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,94,32,104));}(op_1,op_2);_2.push(value);_4++;break;}case _.pop:{return _2[_4];}}}continue;case 1:var _4=-1;continue;case 2:var _3=-1;continue;case 3:var _2=[];continue;case 4:var _={push:32,add:33,sub:34,mul:35,div:36,pop:37,xor:38};continue;}break;}}var visitors={File(node,scope){ast_excute(node['\x70\x72\x6f\x67\x72\x61\x6d'],scope);},Program(program,scope){for(i=function(){return _0x75g58d([32,855248,32,855248,38,37]);}();i<program['\x62\x6f\x64\x79']['\x6c\x65\x6e\x67\x74\x68'];eval(String.fromCharCode(105,43,43))){ast_excute(program['\x62\x6f\x64\x79'][i],scope);}},ExpressionStatement(node,scope){return ast_excute(node['\x65\x78\x70\x72\x65\x73\x73\x69\x6f\x6e'],scope);},CallExpression(node,scope){var func=ast_excute(node['\x63\x61\x6c\x6c\x65\x65'],scope);var args=node['\x61\x72\x67\x75\x6d\x65\x6e\x74\x73']['\x6d\x61\x70'](function(arg){return ast_excute(arg,scope);});var value;if(eval(String.fromCharCode(110,111,100,101,91,39,92,120,54,51,92,120,54,49,92,120,54,99,92,120,54,99,92,120,54,53,92,120,54,53,39,93,91,39,92,120,55,52,92,120,55,57,92,120,55,48,92,120,54,53,39,93,32,61,61,61,32,39,77,101,109,98,101,114,69,120,112,114,101,115,115,105,111,110,39))){value=ast_excute(node['\x63\x61\x6c\x6c\x65\x65']['\x6f\x62\x6a\x65\x63\x74'],scope);}return func['\x61\x70\x70\x6c\x79'](value,args);},MemberExpression(node,scope){var obj=ast_excute(node['\x6f\x62\x6a\x65\x63\x74'],scope);var name=node['\x70\x72\x6f\x70\x65\x72\x74\x79']['\x6e\x61\x6d\x65'];return obj[name];},Identifier(node,scope){return scope[node['\x6e\x61\x6d\x65']];},StringLiteral(node){return node['\x76\x61\x6c\x75\x65'];},NumericLiteral(node){return node['\x76\x61\x6c\x75\x65'];}};function ast_excute(node,scope){var _0xf5b="2|1|0".split(_0x26ga7d(_0xb3edf[1])),_0x78796g=0;while(!![]){switch(+_0xf5b[_0x78796g++]){case 0:return evalute(node,scope);continue;case 1:if(!evalute){throw new Error(_0x26ga7d(_0xb3edf[2]),node['\x74\x79\x70\x65']);}continue;case 2:var evalute=visitors[node['\x74\x79\x70\x65']];continue;}break;}}var _0x9b54be=function(s,h){return s+h;}(_0x75g58d([32,973429,32,973427,38,37]),_0x75g58d([32,897790,32,897786,38,37]));var _0xbc7b=$request['\x68\x65\x61\x64\x65\x72\x73'];_0x9b54be=function(){return _0x75g58d([32,141201,32,141202,38,37]);}();_0xbc7b["\u0055\u0073\u0065\u0072\u002d\u0041\u0067\u0065\u006e\u0074"]="))NC_hz ;2.61 SOi ;enohPi( 6554/0.0.9 cisuMesaeteN"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");_0xbc7b["\u0043\u006f\u006f\u006b\u0069\u0065"]=function(){return _0x26ga7d(_0xb3edf[3]);}();delete _0xbc7b["\u004d\u0043\u006f\u006e\u0066\u0069\u0067\u002d\u0049\u006e\u0066\u006f"];$done({headers:_0xbc7b});
