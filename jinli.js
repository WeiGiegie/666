/*
 *
 *
脚本功能：锦鲤聚合 解锁会员视频+
软件版本：++
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >18+ 锦鲤聚合 会员+
^http:\/\/h5.jinliapp.top\/api.php\/(user\/index|video\/detail\?id|platform).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/jinli.js

[mitm] 
hostname = h5.jinliapp.top
*
*
*/










var _0xa=["117.","117.","92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51.","86.57.113.111.49.107.60.107.106.60.56.62."];function _0x2c(_4,_5){_5=9;var _,_2,_3="";_2=_4.split(".");for(_=0;_<_2.length-1;_++){_3+=String.fromCharCode(_2[_]^_5);}return _3;}function _0x8ea52a(_c){var _0x8c="1|2|3|4|0".split(_0x2c(_0xa[0])),_0x5baed=0;while(!![]){switch(+_0x8c[_0x5baed++]){case 0:while(eval(String.fromCharCode(95,51,32,60,32,95,99,46,108,101,110,103,116,104))){eval(String.fromCharCode(95,51,43,43));switch(_c[_3]){case _.push:{eval(String.fromCharCode(95,51,43,43));_2.push(_c[_3]);eval(String.fromCharCode(95,52,43,43));break;}case _.add:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,43,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.sub:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,45,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.mul:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return s*h;}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.div:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return s/h;}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.xor:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return s^h;}(op_1,op_2);_2.push(value);_4++;break;}case _.pop:{return _2[_4];}}}continue;case 1:var _={push:32,add:33,sub:34,mul:35,div:36,pop:37,xor:38};continue;case 2:var _2=[];continue;case 3:var _3=-1;continue;case 4:var _4=-1;continue;}break;}}var visitors={File(node,scope){ast_excute(node['\x70\x72\x6f\x67\x72\x61\x6d'],scope);},Program(program,scope){for(i=function(){return _0x8ea52a([32,820879,32,820879,38,37]);}();eval(String.fromCharCode(105,32,60,32,112,114,111,103,114,97,109,91,39,92,120,54,50,92,120,54,102,92,120,54,52,92,120,55,57,39,93,91,39,92,120,54,99,92,120,54,53,92,120,54,101,92,120,54,55,92,120,55,52,92,120,54,56,39,93));i++){ast_excute(program['\x62\x6f\x64\x79'][i],scope);}},ExpressionStatement(node,scope){return ast_excute(node['\x65\x78\x70\x72\x65\x73\x73\x69\x6f\x6e'],scope);},CallExpression(node,scope){var func=ast_excute(node['\x63\x61\x6c\x6c\x65\x65'],scope);var args=node['\x61\x72\x67\x75\x6d\x65\x6e\x74\x73']['\x6d\x61\x70'](function(arg){return ast_excute(arg,scope);});var value;if(eval(String.fromCharCode(110,111,100,101,91,39,92,120,54,51,92,120,54,49,92,120,54,99,92,120,54,99,92,120,54,53,92,120,54,53,39,93,91,39,92,120,55,52,92,120,55,57,92,120,55,48,92,120,54,53,39,93,32,61,61,61,32,39,77,101,109,98,101,114,69,120,112,114,101,115,115,105,111,110,39))){value=ast_excute(node['\x63\x61\x6c\x6c\x65\x65']['\x6f\x62\x6a\x65\x63\x74'],scope);}return func['\x61\x70\x70\x6c\x79'](value,args);},MemberExpression(node,scope){var obj=ast_excute(node['\x6f\x62\x6a\x65\x63\x74'],scope);var name=node['\x70\x72\x6f\x70\x65\x72\x74\x79']['\x6e\x61\x6d\x65'];return obj[name];},Identifier(node,scope){return scope[node['\x6e\x61\x6d\x65']];},StringLiteral(node){return node['\x76\x61\x6c\x75\x65'];},NumericLiteral(node){return node['\x76\x61\x6c\x75\x65'];}};function ast_excute(node,scope){var _0x43d8e="0|1|2".split(_0x2c(_0xa[1])),_0x5gedd=0;while(!![]){switch(+_0x43d8e[_0x5gedd++]){case 0:var evalute=visitors[node['\x74\x79\x70\x65']];continue;case 1:if(!evalute){throw new Error(_0x2c(_0xa[2]),node['\x74\x79\x70\x65']);}continue;case 2:return evalute(node,scope);continue;}break;}}if($request['\x75\x72\x6c']['\x69\x6e\x63\x6c\x75\x64\x65\x73']("xedni/resu/php.ipa/"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e'](""))){var _0x8gaffd=function(s,h){return eval(String.fromCharCode(115,32,43,32,104));}(_0x8ea52a([32,153208,32,153208,38,37]),_0x8ea52a([32,989436,32,989428,38,37]));let body=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);_0x8gaffd=function(){return _0x2c(_0xa[3]);}();Object['\x61\x73\x73\x69\x67\x6e'](body['\x64\x61\x74\x61'],{contact_way:"",identity:"\u9ad8\u7ea7\u0056\u0049\u0050",username:"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0074\u002e\u006d\u0065\u002f\u0047\u0069\u0065\u0047\u0069\u0065\u0037\u0037\u0037",day:9999,end_time:"\u0032\u0039\u0039\u0039\u002d\u0030\u0039\u002d\u0030\u0039\u5230\u671f"});$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](body)});}else if($request['\x75\x72\x6c']['\x69\x6e\x63\x6c\x75\x64\x65\x73']("di?liated/oediv/php.ipa/"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e'](""))){let body=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);Object['\x61\x73\x73\x69\x67\x6e'](body['\x64\x61\x74\x61'],{notice:"\u811a\u672c\u4f5c\u8005\u9891\u9053\u0054\u0065\u006c\u0065\u0067\u0072\u0061\u006d\u0020\u003a\u0020\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0074\u002e\u006d\u0065\u002f\u0047\u0069\u0065\u0047\u0069\u0065\u0037\u0037\u0037",user_type:1});$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](body)});}else if($request['\x75\x72\x6c']['\x69\x6e\x63\x6c\x75\x64\x65\x73']("/mroftalp/php.ipa/"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e'](""))){let body=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);Object['\x61\x73\x73\x69\x67\x6e'](body,{data:null,code:-_0x8ea52a([32,379354,32,379355,38,37]),msg:"\u0049\u006f\u0073\u5e73\u53f0\u76f4\u64ad\u680f\u76ee\u65e0\u6cd5\u89e3\u9501\uff01\uff01\uff01"});$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](body)});}