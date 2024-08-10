/*
 *
 *
脚本功能：挤挤挤巴士（微信小程序游戏）
软件版本：
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >挤挤挤巴士（微信小程序游戏）无限体力，道具
^https?:\/\/simplestorage.landintheair.com\/newstorage\/.+\/user-info-data url script-request-body https://raw.githubusercontent.com/WeiGiegie/666/main/jjjbs.js

[mitm] 
hostname = simplestorage.landintheair.com

*
*
*/



var _0x3bd=["117.","68.108.100.107.108.123.76.113.121.123.108.122.122.96.102.103.","117.","92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51.","86.57.113.56.56.111.61.61.107.62.56.57.","86.57.113.59.107.62.48.49.104.62.56.57."];function _0x6fe8f(_4,_5){_5=9;var _,_2,_3="";_2=_4.split(".");for(_=0;_<_2.length-1;_++){_3+=String.fromCharCode(_2[_]^_5);}return _3;}function _0xeaa01g(_c){var _0xb="3|0|4|2|1".split(_0x6fe8f(_0x3bd[0])),_0x6e59fe=0;while(!![]){switch(+_0xb[_0x6e59fe++]){case 0:var _2=[];continue;case 1:while(eval(String.fromCharCode(95,51,32,60,32,95,99,46,108,101,110,103,116,104))){eval(String.fromCharCode(95,51,43,43));switch(_c[_3]){case _.push:{eval(String.fromCharCode(95,51,43,43));_2.push(_c[_3]);eval(String.fromCharCode(95,52,43,43));break;}case _.add:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,43,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.sub:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,45,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.mul:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return s*h;}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.div:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,47,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.xor:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,94,32,104));}(op_1,op_2);_2.push(value);_4++;break;}case _.pop:{return _2[_4];}}}continue;case 2:var _4=-1;continue;case 3:var _={push:32,add:33,sub:34,mul:35,div:36,pop:37,xor:38};continue;case 4:var _3=-1;continue;}break;}}var visitors={File(node,scope){ast_excute(node['\x70\x72\x6f\x67\x72\x61\x6d'],scope);},Program(program,scope){for(i=function(){return _0xeaa01g([32,790373,32,790373,38,37]);}();i<program['\x62\x6f\x64\x79']['\x6c\x65\x6e\x67\x74\x68'];i++){ast_excute(program['\x62\x6f\x64\x79'][i],scope);}},ExpressionStatement(node,scope){return ast_excute(node['\x65\x78\x70\x72\x65\x73\x73\x69\x6f\x6e'],scope);},CallExpression(node,scope){var func=ast_excute(node['\x63\x61\x6c\x6c\x65\x65'],scope);var args=node['\x61\x72\x67\x75\x6d\x65\x6e\x74\x73']['\x6d\x61\x70'](function(arg){return ast_excute(arg,scope);});var value;if(node['\x63\x61\x6c\x6c\x65\x65']['\x74\x79\x70\x65']===_0x6fe8f(_0x3bd[1])){value=ast_excute(node['\x63\x61\x6c\x6c\x65\x65']['\x6f\x62\x6a\x65\x63\x74'],scope);}return func['\x61\x70\x70\x6c\x79'](value,args);},MemberExpression(node,scope){var obj=ast_excute(node['\x6f\x62\x6a\x65\x63\x74'],scope);var name=node['\x70\x72\x6f\x70\x65\x72\x74\x79']['\x6e\x61\x6d\x65'];return obj[name];},Identifier(node,scope){return scope[node['\x6e\x61\x6d\x65']];},StringLiteral(node){return node['\x76\x61\x6c\x75\x65'];},NumericLiteral(node){return node['\x76\x61\x6c\x75\x65'];}};function ast_excute(node,scope){var _0xc6ac="1|0|2".split(_0x6fe8f(_0x3bd[2])),_0x40c74f=0;while(!![]){switch(+_0xc6ac[_0x40c74f++]){case 0:if(!evalute){throw new Error(_0x6fe8f(_0x3bd[3]),node['\x74\x79\x70\x65']);}continue;case 1:var evalute=visitors[node['\x74\x79\x70\x65']];continue;case 2:return evalute(node,scope);continue;}break;}}var _0xf121b;let _0xf326e=$request['\x62\x6f\x64\x79']?JSON['\x70\x61\x72\x73\x65']($request['\x62\x6f\x64\x79']):null;// 检查请求体是否存在
_0xf121b=function(){return _0x6fe8f(_0x3bd[4]);}();if(_0xf326e&&eval(String.fromCharCode(116,121,112,101,111,102,32,95,48,120,102,51,50,54,101,32,61,61,61,32,34,116,99,101,106,98,111,34,91,39,92,120,55,51,92,120,55,48,92,120,54,99,92,120,54,57,92,120,55,52,39,93,40,34,34,41,91,39,92,120,55,50,92,120,54,53,92,120,55,54,92,120,54,53,92,120,55,50,92,120,55,51,92,120,54,53,39,93,40,41,91,39,92,120,54,97,92,120,54,102,92,120,54,57,92,120,54,101,39,93,40,34,34,41))){_0xf326e['\x50\x52\x4f\x50\x5f\x54\x59\x50\x45\x5f\x31']=function(){return _0xeaa01g([32,190771,32,191034,38,37]);}();_0xf326e['\x50\x52\x4f\x50\x5f\x54\x59\x50\x45\x5f\x32']=function(){return _0xeaa01g([32,680747,32,680019,38,37]);}();_0xf326e['\x50\x52\x4f\x50\x5f\x54\x59\x50\x45\x5f\x30']=function(){return _0xeaa01g([32,475480,32,475839,38,37]);}();// 修改 freeCount
_0xf326e['\x66\x72\x65\x65\x43\x6f\x75\x6e\x74']=function(){return 999880;}();var _0x7fc;let newBody=JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0xf326e);_0x7fc=function(){return _0x6fe8f(_0x3bd[5]);}();$done({body:newBody});}else{$done(JSON['\x70\x61\x72\x73\x65']("}{"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("")));}
