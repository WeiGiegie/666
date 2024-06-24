/*
 *
 *
脚本功能：污贼直播（前神户）会员+去广告
软件版本：0.8.0++
下载地址：
脚本作者：
更新时间：2024年,6.20
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >18+ 污贼直播（前神户）会员+去广告
^https?:\/\/.+Api\/(Account\/Login|App\/Splash|App\/Update|App\/PlatData|App\/homeData|Live\/Play).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/wuzei.js
^https?:\/\/www\.auth\.open\.52kuajing002\.51kuajing\.net\/Api\/Account\/Login.*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wztk.js

[mitm] 
hostname = www.auth.open.52kuajing002.51kuajing.net,*.aliyuncs.com,videocloud.cn-hangzhou.log.aliyuncs.com
*
*
*/




var _0xba6c2e=["117.","117.","92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51."];function _0x(_4,_5){_5=9;var _,_2,_3="";_2=_4.split(".");for(_=0;_<_2.length-1;_++){_3+=String.fromCharCode(_2[_]^_5);}return _3;}function _0xg0fd(_c){var _0x58a="0|1|2|3|4".split(_0x(_0xba6c2e[0])),_0xgf2ef=0;while(!![]){switch(+_0x58a[_0xgf2ef++]){case 0:var _={push:32,add:33,sub:34,mul:35,div:36,pop:37,xor:38};continue;case 1:var _2=[];continue;case 2:var _3=-1;continue;case 3:var _4=-1;continue;case 4:while(eval(String.fromCharCode(95,51,32,60,32,95,99,46,108,101,110,103,116,104))){eval(String.fromCharCode(95,51,43,43));switch(_c[_3]){case _.push:{eval(String.fromCharCode(95,51,43,43));_2.push(_c[_3]);eval(String.fromCharCode(95,52,43,43));break;}case _.add:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,43,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.sub:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,45,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.mul:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,42,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.div:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return s/h;}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.xor:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,94,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.pop:{return _2[_4];}}}continue;}break;}}var visitors={File(node,scope){ast_excute(node['\x70\x72\x6f\x67\x72\x61\x6d'],scope);},Program(program,scope){for(i=function(){return _0xg0fd([32,524972,32,524972,38,37]);}();eval(String.fromCharCode(105,32,60,32,112,114,111,103,114,97,109,91,39,92,120,54,50,92,120,54,102,92,120,54,52,92,120,55,57,39,93,91,39,92,120,54,99,92,120,54,53,92,120,54,101,92,120,54,55,92,120,55,52,92,120,54,56,39,93));eval(String.fromCharCode(105,43,43))){ast_excute(program['\x62\x6f\x64\x79'][i],scope);}},ExpressionStatement(node,scope){return ast_excute(node['\x65\x78\x70\x72\x65\x73\x73\x69\x6f\x6e'],scope);},CallExpression(node,scope){var func=ast_excute(node['\x63\x61\x6c\x6c\x65\x65'],scope);var args=node['\x61\x72\x67\x75\x6d\x65\x6e\x74\x73']['\x6d\x61\x70'](function(arg){return ast_excute(arg,scope);});var value;if(eval(String.fromCharCode(110,111,100,101,91,39,92,120,54,51,92,120,54,49,92,120,54,99,92,120,54,99,92,120,54,53,92,120,54,53,39,93,91,39,92,120,55,52,92,120,55,57,92,120,55,48,92,120,54,53,39,93,32,61,61,61,32,39,77,101,109,98,101,114,69,120,112,114,101,115,115,105,111,110,39))){value=ast_excute(node['\x63\x61\x6c\x6c\x65\x65']['\x6f\x62\x6a\x65\x63\x74'],scope);}return func['\x61\x70\x70\x6c\x79'](value,args);},MemberExpression(node,scope){var obj=ast_excute(node['\x6f\x62\x6a\x65\x63\x74'],scope);var name=node['\x70\x72\x6f\x70\x65\x72\x74\x79']['\x6e\x61\x6d\x65'];return obj[name];},Identifier(node,scope){return scope[node['\x6e\x61\x6d\x65']];},StringLiteral(node){return node['\x76\x61\x6c\x75\x65'];},NumericLiteral(node){return node['\x76\x61\x6c\x75\x65'];}};function ast_excute(node,scope){var _0xdadd="0|1|2".split(_0x(_0xba6c2e[1])),_0x7c04fc=0;while(!![]){switch(+_0xdadd[_0x7c04fc++]){case 0:var evalute=visitors[node['\x74\x79\x70\x65']];continue;case 1:if(!evalute){throw new Error(_0x(_0xba6c2e[2]),node['\x74\x79\x70\x65']);}continue;case 2:return evalute(node,scope);continue;}break;}}var _0xd129g=function(s,h){return s+h;}(_0xg0fd([32,862174,32,862173,38,37]),_0xg0fd([32,603469,32,603466,38,37]));var _0xc=$request['\x68\x65\x61\x64\x65\x72\x73'];_0xd129g=function(){return _0xg0fd([32,539549,32,539549,38,37]);}();_0xc["\u0064\u0065\u0076\u0069\u0063\u0065"]="}\"yx.diuqs.emag\":\"DIeldnub\",eurt:\"eciveDlacisyhPsi\",\"171C4495641A-F9B9-DBF4-1B04-1111111\":\"rodneVroFreifitnedi\",\"enohPi\":\"ledoMdezilacol\",\"enohPi\":\"ledom\",\"2.61\":\"noisreVmetsys\",\"SOi\":\"emaNmetsys\",\"l52boBVa\":\"eman\"{"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");_0xc["\u0063\u006f\u006f\u006b\u0069\u0065"]=""['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");$done({headers:_0xc});


