/*
 *
 *
脚本功能：喜马拉雅,会员.大师课,儿童+音效&音质,去广告,界面优化+++
软件版本：9.2.78（兼容最新版本）
下载地址：
脚本作者：**
更新时间：2024-97
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

# > 喜马拉雅,会员.大师课,儿童+音效&音质,去广告,界面优化+++
^https?:\/\/.+((ximalaya)|(xmcdn)).+(mobile-user\/v2|mobile-web|queryCategoryPageData|discovery-feed\/v4|vip\/v1\/recommand|product\/detail\/v1|mobile\/v1\/album|playpage|album\/price\/ts|mobile\/user\/member).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ximalaya.js
^https?:\/\/.+((ximalaya)|(xmcdn)).+\/[a-z]{6}\-[a-z]{8}\/track\/(v[0-9])\/[a-zA-Z]+\/ts.*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/ximalayack.js
# > 去广告,
^https?://passport\.ximalaya\.com/friendship-mobile/v1/findFriendsBanner/show/ url reject
^https?://xdcs-collector\.ximalaya\.com/api/v1/realtime url reject
^https?://.+\.ximalaya\.com/linkeye.+/checkIP\?ip.+passport.ximalaya.com url reject
^https?://adse\.wsa\.ximalaya\.com url reject
^https?://openapi\.mysteel\.com\/v5\/getAdv\.htm url reject
^https?://ulogs\.umeng\.com\/unify_logs url reject
^https?://adse\.ximalaya\.com\/ url reject
^https?://gslbali\.ximalaya\.com url reject
^https?://www\.taobao\.com\/help\/getip\.php url reject
^https?://.+location\.ximalaya\.com url reject
^https?://.+dbehavior\.ximalaya\.com url reject
^https?://ad\.ximalaya\.com url reject
^https?://.+audid-api\.taobao.com url reject
^https?://passport\.ximalaya\.com\/user-http-app\/v1\/token\/refresh url reject

[mitm] 
hostname = 42.56.64.*,*.xmcdn.com, *.ximalaya.com, 61.172.194.*,180.153.*.*,180.153.255.*, 180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.2*,61.162.174.*,119.188.123.*,59.83.227.*, 114.80.161.29,1.62.62.64,1.194.255.171, 23.236.99.89, 36.99.200.135, 42.81.4.198, 42.81.26.128, 42.81.120.58, 43.152.24.12, 43.152.24.18, 43.152.25.127, 43.152.29.38, 43.175.16.34, 43.175.22.25, 43.175.44.15, 49.7.69.197, 49.51.224.95, 101.33.11.32, 101.33.11.106, 101.33.20.34, 101.33.29.110, 103.105.60.99, 140.249.84.135, 140.249.85.189, 150.109.90.80, 150.109.91.35, 150.138.47.94, 150.138.136.145, 203.205.13*.*, 203.205.250.*, 211.152.137.*, 47.100.227.85, 61.164.145.12, 106.41.204.126, 112.80.180.72, 112.98.170.228, 112.99.146.108, 118.25.119.177, 223.111.231.198, 120.22*.2*.*, 43.132.8*.*, 101.33.27.*, 43.141.11.*,101.89.53.*,36.131.221.*,111.42.194.*,adse.ximalaya.com,36.131.221.*,112.84.131.*,111.6.56.*,111.6.56.228,*.xmcdn.com,120.232.165.228,43.159.71.*,ulogs.umeng.com,www.taobao.com,43.132.81.*,101.33.27.*,114*0.*,61.172.1*.*,43.141.11.*,114.80.99.86,180.153.255.*,114.80.99.*,*.mysteel.*,61.172.194.196,180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,1.194.255.171, 23.236.99.89, 36.99.200.135,42.81.4.198,42.81.26.128,42.81.120.58,43.132.80.77,43.132.83.175,43.132.84.11,43.152.24.12,43.152.24.18,43.152.25.127,43.152.29.38,43.175.16.34,43.175.22.25,43.175.44.15,49.7.69.197,49.51.224.95,101.33.11.32,101.33.11.106,101.33.20.34,101.33.29.110,103.105.60.99,114.80.99.90,114.80.99.70,114.80.99.71, 114.80.99.89,114.80.99.91,114.80.99.88, 114.80.99.87,140.249.84.135,140.249.85.189,150.109.90.80,150.109.91.35,150.138.47.94,150.138.136.145,203.205.136.87,203.205.136.100,203.205.136.102,203.205.136.159,203.205.137.27,203.205.137.87,203.205.137.241,203.205.250.111,203.205.250.113,211.152.137.25,ulogs.umeng.com,passport.ximalaya.com



*
*
*/

















 









































;var encode_version = 'jsjiami.com.v5', ywfkf = '__0x11d7de',  __0x11d7de=['csOmHcO5woXDlA==','54iT5pyg5Y6P77y7w7/DmOS8u+WvqeacpeW/quepgu++oOi8gOium+aUjOaPmuaLpuS5sueZg+W3g+S/iQ==','5Ymh6Zm354ik5p6q5Yy/772Rw6Zu5L6i5a6D5pyS5b6l56i9','w5jDjsOl','w5vDpMKdSMOU','w6/CoMOPMcKiw5nCmQzCgsOtScKEw63CiA==','ACHCncOicw==','Aks7UMOs','ZsKtDQhq','FMODw7TChcO6AMKPwoUdRjhIAMOWw6Ngw6HCqMKADsOwU8O6CcKswpIDQcKYJXLCk8OXFsKdUlTCnxzDlFVHw6VCDwgxWVopAgc0d8O4wqrCksOtw6PDusKKwo8Fw4YALMKrG8KUO1Y+NVpuwqTDv8Ogw41kQsO1w5xyw5sHGF0hA8OTSn8dIsOHw599w7kSNMKaN8OEGBXDjCLCo0fDocOvDzjCs2RuwqYSwopSIjRwIMK3dH/CjD3DqWtmfC0uw4gqfTTCpCzCtgXDjcO5wqPCkcOjfDIPbMOvw5w9w7rCvDXCucKOFnchCsONd27Cr8KGworCosK0w43ChF3Dt8OfdcOUwonCh3nCkHzCmSbCr2xwHcKZBhjDk35FasKtwo/DscKdwrfDgMKTFsKIw6DDonc=','cMO9D8O+wozDn8KZSz/CuntqB3xBSsOow4lTw4HDshoPwqFEwqJSYMK2Yy8ewqAzw67CojzDlBXDiSvDuRDCpUEhw6FYw6fDt8KrwpkUw6rCssK7w6bCvD/Di1LDm8ObwqjDrcKKccO4w4LDmArDnwbCo2YsD8OtwrrCi8OdGETDkMKtNVHDiSfCiDlFwr5hD18Dw5Bpw7jDtlXCu8OSf8KATcODFQjDocOyRVbDhmMCasOPw4HDg1odw4nDpMKdRyxHw5Bhw4ZAX8OweMOERkjDtyHCpGYqZlzCkH1XwqnDncOSQFoNVMKTcMOewqDDkGfDqcOhwrfDksKhNcObDAk8NBTCoyh5w7TDo28Lw4vCk8KNwpjDlcKNwp81wq3CvXDCs8O4w5ssHhltQ3jDi8OtLzbDrynCgjcK','J8K8wrleITwcw4nDhQoEMDsJwqxDLMKPw4LDncOVP8OmNjDCr8OAQcKDaiPCisKjYcKTTMKzwpkmw7Qzwp0eGTjCmRZ7woXDj8Osw60lWcOywpDDvCbDgsK5w6nCkk5/TQcRZcK9P8KLZsKNGWdJw5R+EmgnwqUswprChsKdwpvCnWPChMOmw4RFwpvCq8Khw4jCosOGwoU4BhLCqSLCq8OWwpYHw4sRK8KxCMKvwpjDgcOUwpFnGMKxw4XCscOPeDd0UcKVY1nDjSjCgxJJPsOBMgxewoJqw41HKX3DgsOeXSTDgnZ7ZDDChsOFGATCrXdqJ8KpwqkOwojDnsKzCMKKNMO6wr/DnFJGfC/Dok8bP8OjLMOocirDj11Mbm1oUsOhC1cVwqnDnH/Dpi3ChWnCvsOj','TsKTwr85wpEHI8K2wpLDt2UENALDv8K+DA3CssOnw6V7BMOCwpVtw6YqbsOGVMOuA0ZCwogEwobCvsOnMjVjUiNYw74zw79jwr1WB2fCtcK2w5HClRtvBsOYB8KmbXrDo3RHwql9w53Cr8OKwp7CnljCj8KEw67Do8KOwq5IDh7DsMOzZMKndwkowrIewojDoxwDw7PDrHoVw5xdA8KawqMTw5U7YGFAwqPDgsOnQ2bCkMOzwrkLwrPCgAArKXrCgsOMJcKrbcOuXMOpw67CvSDDu0YYOcKqBMOCR8Oqwpsyw7DClMK0woERVmZWHxVdwrtvD8K7Lzcaw5s6Kg5lwpnCvUwVw6jDksOib8OiHBLDmWMcNx4nEDA7w5DCmcKwQDfCu8K/w5tsFDcWdFMSw7I=','InsNw6jCpjjDoCDDkXZ+wrHDiMKGThw1wqMHw7duw48dccOtwoHDsMOrZMKLIBdGwrM3woYhLWVMS8Klw6RxGsKKwrDChMK7w5jDuC3Do2TCvX3DocK/wq8Pw6BMeEQjccObw5bDqsO8wrUlScOQYcOHDg0AdcO7Z8OUEsKxVFzDjsO7wqzCkMK8w4TCpcOpekkZJcK3w4tOWsOEEsK1dj4Zw6fDuGkoc3jDoQsKw4XDvMKiQcKrVsK/wp/DusKBw6XCoCvDjTEEYsOnw4DCq8ORScKofMKfVcKEw4zCvsKZaG7Dt8OzwqvCsMOtMcKMQcKCYg0NwppSM8KRwrXDhjFIwq9bw6B9w7DCjTTDk1NAW8KDFsO0w5fCqMOcLMOSwrPDqhzDoMK7w7nDucOjw4rDsMKiOcKXYnk/w7Exw65gRA==','e0k9wr/Csz3CrQfDscO3K8O9w6lDLDciw47DgXfDpMKJw5wDw5BfDlPCg8KKN8KbwpwRAcOuw5dZUcO2w78ew5sFKMKWwqPCh8OhMMKSdHjCkjxUwp/CpV/Cvzp0FXHCojAmak1aMsKvBEjDucO1EMOtw45vCMO7wpjCkcO0woDDnT4kwqfDj8OcwrTDqcOJw6rCjcO1w6sGXg/Djl3DuXXCncKUdMKsLDJ/wpUeDsKJw6kLwrLDh8KNVj/Csxojw4gjbMOWSMKcFsK3RcOcwrHCjBTCjEV/w7Q9F8Ogw4nDjjRMLMOVw57DgMO8w6gpDUHDg8ODK8O3w6HCqSjCgRbDpMKbwqo4w6zDrgzCpVEHYHYDR0F4wrzDssOeHMObHX3CvTcLacKFPS5mAhzDr8KePsOMw5DDjiMx','U8KWPnY/OX4hdcOzw4I9wqTCksKnw4PCuhjDjmHCowUvPSTCuw5VDsORw4s4w5PCv8KHfEJHKwJ2wq3CtEIGw7XCtCJuEVTDq8KKwpDCtsO7DcOJMzoZE8OSwq0XK8OLJGVVwoJGKMONDkTDjzTDuxlXUUfCsMKpQHYtd8Owwp1rTx3DvWN0NHscw7cZHcKVw6PCg8ONw5vDhnvChsOWW01IV8O7w74/CMKBw7xRew3Ds1kDw5DDmTXCgH/DlMOdwrjCsMO9KsO9wpbCl8O7wp7Dv2lBXQDCjcKNwrkIw7LDtzMHwoR4VT5+w6/CtMOtw4kvwqbDr03CtMOqw7oJUyJRwoQWw6/ChiXDhSfDtmd5OsOsJsKTfkJZw6LCjWBJVcOxw5doT8OTwoIPeEAIw68=','w7xLEk51FMK/BTYUP17CtcKONUzDm8Kacg/Cl8OPTcKmcn3DqMKow6dUw5PCucKxw7YcYsKqwodydGdCP8K/H8OEaSvDi8O3RVHDtTvChMKCw4N1UcOMwrsCS8OjMsKMwoTDhMKqw5jCmCjDmkYpw7xUw6gPwqhWQw3DojIVEcORw7zCjjV6Th3Di8OeZgrDrcOHMX3DksKXw4VUWMKjw6XDksKRw47Dq8KOOgHDuMO2ZMKMwrjDtcONw7HCrFIzPhbCoCbDm2DCuxBCV8OOw6cBKxHCuMKHP2E4wr0wJMO8w48NLsKFbnLCtcOVfUVzSMOyw7ZXw4gow51kw6YPworCi8KkXMO2YcOLcjUew5lFX3t2OSspRsOJwp7DtTjDo3hzdMKXH8OUesOPaTHCv8KeTC4=','YBM7','O8KLVMKfY2k=','BCPDisKKw7vDsQ=='];(function(_0x3a06f0,_0x5425d4){var _0x1d2beb=function(_0x3d2da7){while(--_0x3d2da7){_0x3a06f0['push'](_0x3a06f0['shift']());}};_0x1d2beb(++_0x5425d4);}(__0x11d7de,0x121));var _0xb708=function(_0x5bc026,_0x471656){_0x5bc026=_0x5bc026-0x0;var _0x4952d8=__0x11d7de[_0x5bc026];if(_0xb708['initialized']===undefined){(function(){var _0x353d53=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x532ae1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x353d53['atob']||(_0x353d53['atob']=function(_0xaa66c4){var _0x538361=String(_0xaa66c4)['replace'](/=+$/,'');for(var _0x4a3d5b=0x0,_0x5634fc,_0x1ccb97,_0x2e6b25=0x0,_0x511569='';_0x1ccb97=_0x538361['charAt'](_0x2e6b25++);~_0x1ccb97&&(_0x5634fc=_0x4a3d5b%0x4?_0x5634fc*0x40+_0x1ccb97:_0x1ccb97,_0x4a3d5b++%0x4)?_0x511569+=String['fromCharCode'](0xff&_0x5634fc>>(-0x2*_0x4a3d5b&0x6)):0x0){_0x1ccb97=_0x532ae1['indexOf'](_0x1ccb97);}return _0x511569;});}());var _0x157a31=function(_0x4b99a7,_0x299f03){var _0x5d02fa=[],_0xaaa78d=0x0,_0xbe29e1,_0x186169='',_0x12bf35='';_0x4b99a7=atob(_0x4b99a7);for(var _0x40a695=0x0,_0xc215d6=_0x4b99a7['length'];_0x40a695<_0xc215d6;_0x40a695++){_0x12bf35+='%'+('00'+_0x4b99a7['charCodeAt'](_0x40a695)['toString'](0x10))['slice'](-0x2);}_0x4b99a7=decodeURIComponent(_0x12bf35);for(var _0x17aa4c=0x0;_0x17aa4c<0x100;_0x17aa4c++){_0x5d02fa[_0x17aa4c]=_0x17aa4c;}for(_0x17aa4c=0x0;_0x17aa4c<0x100;_0x17aa4c++){_0xaaa78d=(_0xaaa78d+_0x5d02fa[_0x17aa4c]+_0x299f03['charCodeAt'](_0x17aa4c%_0x299f03['length']))%0x100;_0xbe29e1=_0x5d02fa[_0x17aa4c];_0x5d02fa[_0x17aa4c]=_0x5d02fa[_0xaaa78d];_0x5d02fa[_0xaaa78d]=_0xbe29e1;}_0x17aa4c=0x0;_0xaaa78d=0x0;for(var _0x2296d3=0x0;_0x2296d3<_0x4b99a7['length'];_0x2296d3++){_0x17aa4c=(_0x17aa4c+0x1)%0x100;_0xaaa78d=(_0xaaa78d+_0x5d02fa[_0x17aa4c])%0x100;_0xbe29e1=_0x5d02fa[_0x17aa4c];_0x5d02fa[_0x17aa4c]=_0x5d02fa[_0xaaa78d];_0x5d02fa[_0xaaa78d]=_0xbe29e1;_0x186169+=String['fromCharCode'](_0x4b99a7['charCodeAt'](_0x2296d3)^_0x5d02fa[(_0x5d02fa[_0x17aa4c]+_0x5d02fa[_0xaaa78d])%0x100]);}return _0x186169;};_0xb708['rc4']=_0x157a31;_0xb708['data']={};_0xb708['initialized']=!![];}var _0x2c96d3=_0xb708['data'][_0x5bc026];if(_0x2c96d3===undefined){if(_0xb708['once']===undefined){_0xb708['once']=!![];}_0x4952d8=_0xb708['rc4'](_0x4952d8,_0x471656);_0xb708['data'][_0x5bc026]=_0x4952d8;}else{_0x4952d8=_0x2c96d3;}return _0x4952d8;};const CK_ARR=[_0xb708('0x0','WaWJ'),_0xb708('0x1','@v$X'),_0xb708('0x2','6WHj'),_0xb708('0x3','Mnw@'),_0xb708('0x4','jo4P'),_0xb708('0x5','([3)'),_0xb708('0x6','UrJa'),_0xb708('0x7','Yo4f')];const headers=Object['fromEntries'](Object['entries']($request['headers'])[_0xb708('0x8','LkhZ')](([_0x23bfa3,_0x483c6f])=>[_0x23bfa3['toLowerCase'](),_0x483c6f]));const cookie=CK_ARR[Math['floor'](Math[_0xb708('0x9','aPLS')]()*CK_ARR[_0xb708('0xa','VBQe')])];Object[_0xb708('0xb','@v$X')](headers,{'cookie':cookie,'x-tk':''});$done({'headers':headers});;(function(_0x6a1e71,_0x21a15,_0x4c46b8){var _0x57b9da={'uxWTl':'undefined','cNbJY':function _0x12ef0b(_0x423832,_0x503625){return _0x423832+_0x503625;},'YGCgy':_0xb708('0xc','C#Gx'),'GGbgk':_0xb708('0xd','jo4P')};_0x4c46b8='al';try{_0x4c46b8+=_0xb708('0xe','a$D0');_0x21a15=encode_version;if(!(typeof _0x21a15!==_0x57b9da[_0xb708('0xf','ZE[5')]&&_0x21a15===_0xb708('0x10','OCaA'))){_0x6a1e71[_0x4c46b8](_0x57b9da[_0xb708('0x11','Z*7F')]('删除',_0x57b9da[_0xb708('0x12','C#Gx')]));}}catch(_0x23a453){_0x6a1e71[_0x4c46b8](_0x57b9da[_0xb708('0x13','Wxbv')]);}}(window));;encode_version = 'jsjiami.com.v5';
