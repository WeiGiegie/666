/*
 *
 *
脚本功能：ease助眠-改善睡眠，缓解焦虑，冥想减压，白噪音（永久会员）
软件版本：4.8.3
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >ease助眠-改善睡眠，缓解焦虑，冥想减压，白噪音（永久会员）
^https?:\/\/api0.easeprime.com\/api\/memberInfo\/myInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/Ease.js

[mitm] 
hostname = api0.easeprime.com
*
*
*/




var _0x3g040e=["117.","68.108.100.107.108.123.76.113.121.123.108.122.122.96.102.103.","117.","92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51."];function _0xa(_4,_5){_5=9;var _,_2,_3="";_2=_4.split(".");for(_=0;_<_2.length-1;_++){_3+=String.fromCharCode(_2[_]^_5);}return _3;}function _0x5022c(_c){var _0xgd="0|1|3|4|2".split(_0xa(_0x3g040e[0])),_0x=0;while(!![]){switch(+_0xgd[_0x++]){case 0:var _={push:32,add:33,sub:34,mul:35,div:36,pop:37,xor:38};continue;case 1:var _2=[];continue;case 2:while(eval(String.fromCharCode(95,51,32,60,32,95,99,46,108,101,110,103,116,104))){eval(String.fromCharCode(95,51,43,43));switch(_c[_3]){case _.push:{eval(String.fromCharCode(95,51,43,43));_2.push(_c[_3]);eval(String.fromCharCode(95,52,43,43));break;}case _.add:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,43,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.sub:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,45,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.mul:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,42,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.div:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,47,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.xor:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,94,32,104));}(op_1,op_2);_2.push(value);_4++;break;}case _.pop:{return _2[_4];}}}continue;case 3:var _3=-1;continue;case 4:var _4=-1;continue;}break;}}var visitors={File(node,scope){ast_excute(node['\x70\x72\x6f\x67\x72\x61\x6d'],scope);},Program(program,scope){for(i=function(){return _0x5022c([32,931486,32,931486,38,37]);}();eval(String.fromCharCode(105,32,60,32,112,114,111,103,114,97,109,91,39,92,120,54,50,92,120,54,102,92,120,54,52,92,120,55,57,39,93,91,39,92,120,54,99,92,120,54,53,92,120,54,101,92,120,54,55,92,120,55,52,92,120,54,56,39,93));eval(String.fromCharCode(105,43,43))){ast_excute(program['\x62\x6f\x64\x79'][i],scope);}},ExpressionStatement(node,scope){return ast_excute(node['\x65\x78\x70\x72\x65\x73\x73\x69\x6f\x6e'],scope);},CallExpression(node,scope){var func=ast_excute(node['\x63\x61\x6c\x6c\x65\x65'],scope);var args=node['\x61\x72\x67\x75\x6d\x65\x6e\x74\x73']['\x6d\x61\x70'](function(arg){return ast_excute(arg,scope);});var value;if(node['\x63\x61\x6c\x6c\x65\x65']['\x74\x79\x70\x65']===_0xa(_0x3g040e[1])){value=ast_excute(node['\x63\x61\x6c\x6c\x65\x65']['\x6f\x62\x6a\x65\x63\x74'],scope);}return func['\x61\x70\x70\x6c\x79'](value,args);},MemberExpression(node,scope){var obj=ast_excute(node['\x6f\x62\x6a\x65\x63\x74'],scope);var name=node['\x70\x72\x6f\x70\x65\x72\x74\x79']['\x6e\x61\x6d\x65'];return obj[name];},Identifier(node,scope){return scope[node['\x6e\x61\x6d\x65']];},StringLiteral(node){return node['\x76\x61\x6c\x75\x65'];},NumericLiteral(node){return node['\x76\x61\x6c\x75\x65'];}};function ast_excute(node,scope){var _0x3c3c6c="0|2|1".split(_0xa(_0x3g040e[2])),_0xe5f=0;while(!![]){switch(+_0x3c3c6c[_0xe5f++]){case 0:var evalute=visitors[node['\x74\x79\x70\x65']];continue;case 1:return evalute(node,scope);continue;case 2:if(!evalute){throw new Error(_0xa(_0x3g040e[3]),node['\x74\x79\x70\x65']);}continue;}break;}}if($request['\x75\x72\x6c']['\x69\x6e\x63\x6c\x75\x64\x65\x73']("ofnIym/ofnIrebmem/ipa/moc.emirpesae.0ipa//:sptth"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e'](""))){var _0xbdc6ge=function(s,h){return s+h;}(_0x5022c([32,899921,32,899921,38,37]),_0x5022c([32,997388,32,997391,38,37]));let body=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);_0xbdc6ge=_0x5022c([32,474302,32,474297,38,37])+_0x5022c([32,510531,32,510533,38,37]);Object['\x61\x73\x73\x69\x67\x6e'](body['\x62\x6f\x64\x79'],{avatar:"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u007a\u0064\u0069\u006d\u0067\u002e\u006c\u0069\u0066\u0065\u0077\u0065\u0065\u006b\u002e\u0063\u006f\u006d\u002e\u0063\u006e\u002f\u0061\u0070\u0070\u002f\u0032\u0030\u0032\u0034\u0030\u0036\u0031\u0034\u002f\u0031\u0037\u0031\u0038\u0033\u0031\u0031\u0039\u0036\u0036\u0035\u0030\u0030\u0032\u0034\u0031\u0035\u002e\u006a\u0070\u0067",vipType:"\u0059\u0045\u0041\u0052",vip:!![],nickName:"\u0074\u002e\u006d\u0065\u002f\u0047\u0069\u0065\u0047\u0069\u0065\u0037\u0037\u0037"});$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](body)});$done(JSON['\x70\x61\x72\x73\x65']("}{"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("")));}



