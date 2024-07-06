/*
 *
 *
脚本功能：三更视频 会员+漫画小说解锁
软件版本：+++
下载地址：
脚本作者：
更新时间：2024年,6.20
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]

# >18+ 三更视频 会员+漫画小说解锁
^https?:\/\/api.*.shop\/api\/(search|mov\/(detail|progress|index)|novel\/(chapter|play)|comic\/chapter|clip\/index|comic\/play|user\/index) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/sgtk.js

[mitm] 
hostname = api.*.shop
*
*
*/




var _0xbgf8ea=["117.","68.108.100.107.108.123.76.113.121.123.108.122.122.96.102.103.","117.","92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51.","86.57.113.57.63.62.49.60.106.63.60."];function _0xdc(_4,_5){_5=9;var _,_2,_3="";_2=_4.split(".");for(_=0;_<_2.length-1;_++){_3+=String.fromCharCode(_2[_]^_5);}return _3;}function _0x4f384e(_c){var _0xd78d1c="2|3|1|0|4".split(_0xdc(_0xbgf8ea[0])),_0x9c5gd=0;while(!![]){switch(+_0xd78d1c[_0x9c5gd++]){case 0:var _4=-1;continue;case 1:var _3=-1;continue;case 2:var _={push:32,add:33,sub:34,mul:35,div:36,pop:37,xor:38};continue;case 3:var _2=[];continue;case 4:while(eval(String.fromCharCode(95,51,32,60,32,95,99,46,108,101,110,103,116,104))){eval(String.fromCharCode(95,51,43,43));switch(_c[_3]){case _.push:{eval(String.fromCharCode(95,51,43,43));_2.push(_c[_3]);eval(String.fromCharCode(95,52,43,43));break;}case _.add:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,43,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.sub:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,45,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.mul:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return s*h;}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.div:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return s/h;}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.xor:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return s^h;}(op_1,op_2);_2.push(value);_4++;break;}case _.pop:{return _2[_4];}}}continue;}break;}}var visitors={File(node,scope){ast_excute(node['\x70\x72\x6f\x67\x72\x61\x6d'],scope);},Program(program,scope){for(i=function(){return _0x4f384e([32,566507,32,566507,38,37]);}();eval(String.fromCharCode(105,32,60,32,112,114,111,103,114,97,109,91,39,92,120,54,50,92,120,54,102,92,120,54,52,92,120,55,57,39,93,91,39,92,120,54,99,92,120,54,53,92,120,54,101,92,120,54,55,92,120,55,52,92,120,54,56,39,93));eval(String.fromCharCode(105,43,43))){ast_excute(program['\x62\x6f\x64\x79'][i],scope);}},ExpressionStatement(node,scope){return ast_excute(node['\x65\x78\x70\x72\x65\x73\x73\x69\x6f\x6e'],scope);},CallExpression(node,scope){var func=ast_excute(node['\x63\x61\x6c\x6c\x65\x65'],scope);var args=node['\x61\x72\x67\x75\x6d\x65\x6e\x74\x73']['\x6d\x61\x70'](function(arg){return ast_excute(arg,scope);});var value;if(node['\x63\x61\x6c\x6c\x65\x65']['\x74\x79\x70\x65']===_0xdc(_0xbgf8ea[1])){value=ast_excute(node['\x63\x61\x6c\x6c\x65\x65']['\x6f\x62\x6a\x65\x63\x74'],scope);}return func['\x61\x70\x70\x6c\x79'](value,args);},MemberExpression(node,scope){var obj=ast_excute(node['\x6f\x62\x6a\x65\x63\x74'],scope);var name=node['\x70\x72\x6f\x70\x65\x72\x74\x79']['\x6e\x61\x6d\x65'];return obj[name];},Identifier(node,scope){return scope[node['\x6e\x61\x6d\x65']];},StringLiteral(node){return node['\x76\x61\x6c\x75\x65'];},NumericLiteral(node){return node['\x76\x61\x6c\x75\x65'];}};function ast_excute(node,scope){var _0xfgdg3e="1|0|2".split(_0xdc(_0xbgf8ea[2])),_0x7gc6d=0;while(!![]){switch(+_0xfgdg3e[_0x7gc6d++]){case 0:if(!evalute){throw new Error(_0xdc(_0xbgf8ea[3]),node['\x74\x79\x70\x65']);}continue;case 1:var evalute=visitors[node['\x74\x79\x70\x65']];continue;case 2:return evalute(node,scope);continue;}break;}}var _0x12ac;var _0xab=$request['\x68\x65\x61\x64\x65\x72\x73'];_0x12ac=function(){return _0xdc(_0xbgf8ea[4]);}();_0xab["\u0074\u006f\u006b\u0065\u006e"]="A_GveC8rubM37f6-3i6zR6DX3B-XEBpPWRicKFOmrtUd95qSopQBS1kqhQdTRQPF24wgS_fvlJvTOkZDagkV1-.QfwADO2ETN1MDMyojIwhXZiwiI2gjN0kzM4IzXyV2c1JiOiIWdzJye.9JiMxUzUIJiOicGbhJye"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");_0xab["\u0061\u0075\u0074\u0068"]="ae22c004284858f78f234f004465d4da,708231-50704202"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");_0xab["\u0064\u0065\u0076\u0069\u0063\u0065\u006f\u0073"]="2.61 SOi ; 4,31enohPi_soi"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");_0xab["\u0055\u0073\u0065\u0072\u002d\u0041\u0067\u0065\u006e\u0074"]=")00.3/elacS ;2.61 SOi ;enohPi( 0.6.3/enOnIruoF"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");$done({headers:_0xab});
