/*
 *
 *
脚本功能：喜马拉雅,会员.大师课,音效&音质,去广告,界面优化+++
软件版本：9.2.42
下载地址：
脚本作者：**
更新时间：2024-7.18
电报频道：https://t.me/GieGie777
问题反馈：
注意事项：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

# > 喜马拉雅,会员.大师课,音效&音质,去广告,界面优化+++
^https?:\/\/.+((ximalaya)|(xmcdn)).+(mobile-user\/v2|mobile-web|queryCategoryPageData|discovery-feed\/v4|vip\/v1\/recommand|product\/detail\/v1|mobile\/v1\/album|playpage|album\/price\/ts|mobile\/user\/member).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xmly.js
^https?:\/\/.+((ximalaya)|(xmcdn)).+\/[a-z]{6}\-[a-z]{8}\/track\/(v[0-9])\/[a-zA-Z]+\/ts.*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/xmck.js
# > 去广告,
^https?:\/\/openapi\.mysteel\.com\/v5\/getAdv\.htm url reject
^https?:\/\/ulogs\.umeng\.com\/unify_logs url reject
^https?:\/\/adse\.ximalaya\.com\/ url reject
^https?:\/\/gslbali\.ximalaya\.com url reject
^https?:\/\/www\.taobao\.com\/help\/getip\.php url reject
^https?:\/\/.+location\.ximalaya\.com url reject
^https?:\/\/.+dbehavior\.ximalaya\.com url reject
^https?:\/\/ad\.ximalaya\.com url reject
^https?:\/\/.+audid-api\.taobao.com url reject
^https?:\/\/passport\.ximalaya\.com\/user-http-app\/v1\/token\/refresh url reject

[mitm] 
hostname =  43.159.71.*,ulogs.umeng.com,www.taobao.com,43.132.81.*,101.33.27.*,114*0.*,61.172.1*.*,43.141.11.*,114.80.99.86,180.153.255.*,114.80.99.*,*.mysteel.*,61.172.194.196,180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,1.194.255.171, 23.236.99.89, 36.99.200.135, 42.81.4.198, 42.81.26.128, 42.81.120.58, 43.132.80.77, 43.132.83.175, 43.132.84.11, 43.152.24.12, 43.152.24.18, 43.152.25.127, 43.152.29.38, 43.175.16.34, 43.175.22.25, 43.175.44.15, 49.7.69.197, 49.51.224.95, 101.33.11.32, 101.33.11.106, 101.33.20.34, 101.33.29.110, 103.105.60.99, 114.80.99.90, 114.80.99.70, 114.80.99.71, 114.80.99.89, 114.80.99.91, 114.80.99.88, 114.80.99.87, 140.249.84.135, 140.249.85.189, 150.109.90.80, 150.109.91.35, 150.138.47.94, 150.138.136.145, 203.205.136.87, 203.205.136.100, 203.205.136.102, 203.205.136.159, 203.205.137.27, 203.205.137.87, 203.205.137.241, 203.205.250.111, 203.205.250.113, 211.152.137.25,ulogs.umeng.com,passport.ximalaya.com



*
*
*/











const ObjectKeys2LowerCase=_0x247dd9=>Object["\u0066\u0072\u006f\u006d\u0045\u006e\u0074\u0072\u0069\u0065\u0073"](Object["\u0065\u006e\u0074\u0072\u0069\u0065\u0073"](_0x247dd9)["\u006d\u0061\u0070"](([_0x4042ab,_0x179c47])=>[_0x4042ab["\u0074\u006f\u004c\u006f\u0077\u0065\u0072\u0043\u0061\u0073\u0065"](),_0x179c47]));const Hour=new Date()["\u0067\u0065\u0074\u0048\u006f\u0075\u0072\u0073"]();const headers=ObjectKeys2LowerCase($request["\u0068\u0065\u0061\u0064\u0065\u0072\u0073"]);let t={};if(Hour>(0xb1029^0xb1029)&&Hour<(0x18929^0x18921)){t={"\u0075\u0073\u0065\u0072\u002d\u0061\u0067\u0065\u006e\u0074":'ting_v9.2.13_c5(CFNetwork,\x20iOS\x2014.6.1,\x20iPhone10,3)',"\u0063\u006f\u006f\u006b\u0069\u0065":'channel=ios-b1;\x201&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6741235&9.2.31;\x20net-mode=WIFI;1&_token=514693243&9D5C7C92-F66A-4220-8824-02351744CE7E;\x20device_model=Telegram:https://t.me/GieGie777'};}else if(Hour>(0xc97a0^0xc97a8)&&Hour<(0xa4e32^0xa4e3e)){t={'user-agent':'ting_v9.2.13_c5(CFNetwork,\x20iOS\x2012.19,\x20iPhone10,3)',"\u0063\u006f\u006f\u006b\u0069\u0065":'channel=ios-b1;\x201&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6678760&9.2.31;\x20net-mode=WIFI;1&_token=514693260&E608869C-C2F3-4E7E-8F8D-9DFA79DB97ED;\x20device_model=Telegram:https://t.me/GieGie777'};}else if(Hour>(0xdb352^0xdb35e)&&Hour<(0x50e69^0x50e79)){t={'user-agent':'ting_v9.2.13_c5(CFNetwork,\x20iOS\x2012.19,\x20iPhone10,3)','cookie':'channel=ios-b1;\x201&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6678315&9.2.31;\x20net-mode=WIFI;1&_token=514693272&8926C2BC-5343-4EED-B85C-C012D0A114E7;\x20device_model=Telegram:https://t.me/GieGie777'};}else if(Hour>(0xe8407^0xe8417)&&Hour<(0xebb63^0xebb77)){t={'user-agent':'ting_v9.2.13_c5(CFNetwork,\x20iOS\x2012.19,\x20iPhone10,3)',"\u0063\u006f\u006f\u006b\u0069\u0065":'channel=ios-b1;\x201&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6947883&9.2.31;\x20net-mode=WIFI;1&_token=514693283&FAF4C2EF-E9A9-4CB7-A290-6C9947A5A202;\x20device_model=Telegram:https://t.me/GieGie777'};}else if(Hour>(0xa2675^0xa2661)&&Hour<(0x4750e^0x47519)){t={"\u0075\u0073\u0065\u0072\u002d\u0061\u0067\u0065\u006e\u0074":'ting_v9.2.13_c5(CFNetwork,\x20iOS\x2012.19,\x20iPhone10,3)','cookie':'channel=ios-b1;\x201&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6884885&9.2.31;\x20net-mode=WIFI;1&_token=514698968&936911D7-9B41-43D3-B725-F388C4240F96;\x20device_model=Telegram:https://t.me/GieGie777'};}else{t={'user-agent':'ting_v9.2.13_c5(CFNetwork,\x20iOS\x2019.24,\x20iPhone10,3)',"\u0063\u006f\u006f\u006b\u0069\u0065":'channel=ios-b1;\x201&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6470704&9.2.31;\x20net-mode=WIFI;1&_token=514693299&FE0BDBB1-0009-4F52-ADAA-0DAEDD6114C9;\x20device_model=Telegram:https://t.me/GieGie777'};}Object["\u0061\u0073\u0073\u0069\u0067\u006e"](headers,{...t});$done({"\u0068\u0065\u0061\u0064\u0065\u0072\u0073":headers});
