/*
 *
 *
脚本功能：18+夜艳 会员视频、小说、图片、去广告
软件版本：h5&轻量版
下载地址：
脚本作者：
更新时间：2024+
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# >18+夜艳
^https?:\/\/web\w+.yeyan\w+.xyz\/api\/(user\/personal|community\/edit|adv\/) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/yeyan.js
^https?:\/\/web\w+.yeyan\w+.xyz\/api\/community\/xq_community url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/yytk.js
^https?:\/\/web\w+.yeyan\w+.xyz\/api/comment/gg url reject-dict

[mitm]
hostname = *yeyan*

*
*
*/












var _0xfg8f7c=["117.","68.108.100.107.108.123.76.113.121.123.108.122.122.96.102.103.","117.","92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51."];function _0xd298fe(_4,_5){_5=9;var _,_2,_3="";_2=_4.split(".");for(_=0;_<_2.length-1;_++){_3+=String.fromCharCode(_2[_]^_5);}return _3;}function _0xbf803g(_c){var _0xef275c="4|3|0|1|2".split(_0xd298fe(_0xfg8f7c[0])),_0xebd3a=0;while(!![]){switch(+_0xef275c[_0xebd3a++]){case 0:var _3=-1;continue;case 1:var _4=-1;continue;case 2:while(eval(String.fromCharCode(95,51,32,60,32,95,99,46,108,101,110,103,116,104))){eval(String.fromCharCode(95,51,43,43));switch(_c[_3]){case _.push:{eval(String.fromCharCode(95,51,43,43));_2.push(_c[_3]);eval(String.fromCharCode(95,52,43,43));break;}case _.add:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,43,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.sub:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,45,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.mul:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,42,32,104));}(op_1,op_2);_2.push(value);_4++;break;}case _.div:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,47,32,104));}(op_1,op_2);_2.push(value);_4++;break;}case _.xor:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,94,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.pop:{return _2[_4];}}}continue;case 3:var _2=[];continue;case 4:var _={push:32,add:33,sub:34,mul:35,div:36,pop:37,xor:38};continue;}break;}}var visitors={File(node,scope){ast_excute(node['\x70\x72\x6f\x67\x72\x61\x6d'],scope);},Program(program,scope){for(i=function(){return _0xbf803g([32,976628,32,976628,38,37]);}();eval(String.fromCharCode(105,32,60,32,112,114,111,103,114,97,109,91,39,92,120,54,50,92,120,54,102,92,120,54,52,92,120,55,57,39,93,91,39,92,120,54,99,92,120,54,53,92,120,54,101,92,120,54,55,92,120,55,52,92,120,54,56,39,93));i++){ast_excute(program['\x62\x6f\x64\x79'][i],scope);}},ExpressionStatement(node,scope){return ast_excute(node['\x65\x78\x70\x72\x65\x73\x73\x69\x6f\x6e'],scope);},CallExpression(node,scope){var func=ast_excute(node['\x63\x61\x6c\x6c\x65\x65'],scope);var args=node['\x61\x72\x67\x75\x6d\x65\x6e\x74\x73']['\x6d\x61\x70'](function(arg){return ast_excute(arg,scope);});var value;if(node['\x63\x61\x6c\x6c\x65\x65']['\x74\x79\x70\x65']===_0xd298fe(_0xfg8f7c[1])){value=ast_excute(node['\x63\x61\x6c\x6c\x65\x65']['\x6f\x62\x6a\x65\x63\x74'],scope);}return func['\x61\x70\x70\x6c\x79'](value,args);},MemberExpression(node,scope){var obj=ast_excute(node['\x6f\x62\x6a\x65\x63\x74'],scope);var name=node['\x70\x72\x6f\x70\x65\x72\x74\x79']['\x6e\x61\x6d\x65'];return obj[name];},Identifier(node,scope){return scope[node['\x6e\x61\x6d\x65']];},StringLiteral(node){return node['\x76\x61\x6c\x75\x65'];},NumericLiteral(node){return node['\x76\x61\x6c\x75\x65'];}};function ast_excute(node,scope){var _0x74g2g="0|1|2".split(_0xd298fe(_0xfg8f7c[2])),_0x3e38cd=0;while(!![]){switch(+_0x74g2g[_0x3e38cd++]){case 0:var evalute=visitors[node['\x74\x79\x70\x65']];continue;case 1:if(!evalute){throw new Error(_0xd298fe(_0xfg8f7c[3]),node['\x74\x79\x70\x65']);}continue;case 2:return evalute(node,scope);continue;}break;}}var _0x088eca;var _0x1380ce=$request['\x68\x65\x61\x64\x65\x72\x73'];_0x088eca=function(){return _0xbf803g([32,290632,32,290625,38,37]);}();_0x1380ce["\u0074\u006f\u006b\u0065\u006e"]="9ff70e487fcb-d0db-9c24-61cb-e5fb7604"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");$done({headers:_0x1380ce});
