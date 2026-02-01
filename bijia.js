/*
 *
 *
脚本功能：京东比价
软件版本：15.3.30
下载地址：
脚本作者：#https://raw.githubusercontent.com/mw418/Loon/main/script/jd_price.js#
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >京东比价
^https?:\/\/in\.m\.jd\.com\/product\/graphext\/\d+\.html url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/bijia.js

[mitm]
hostname = in.m.jd.com
*
*
*/








const $ = new Env("京东比价");

if ($.isNode()) {
    global.$request = { url: 'https://in.m.jd.com/product/graphext/100142754310.html', method: '', headers: {}, body: '' };
    global.$response = { headers: {}, body: '<body>' };
    global.$done = (obj) => console.log(obj);
}

const url = $request.url;

if (url.includes('/product/graphext/')) {
    const responseBody = $response?.body;
    main().then(res => $done(res || { body: responseBody })).catch(err => {
        const html = `<div style="max-width:90%;margin:20px auto;padding:12px;background:#fff;color:#d32f2f;border:2px solid #f44336;border-radius:8px;font-size:14px;text-align:center;box-shadow:0 2px 6px rgba(0,0,0,0.06);"><strong>${err.message||'未知错误'}</strong></div>`;
        $.msg('京东比价提示', err.message||'未知错误');
        $done({ body: responseBody.replace("<body>", `<body>${html}`) });
    });
}

async function main() {
    const match = url.match(/product\/graphext\/(\d+)\.html/);
    if (!match) throw new Error("商品ID获取失败");
    
    const productId = match[1];
    const JD_Url = `https://item.jd.com/${productId}.html`;
    const responseBody = $response?.body;

    // 获取商品加密code
    const codeRes = await httpRequest({
        url: 'https://w.so168.top/getClickUrlById.do',
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.61(0x18003d39) NetType/WIFI Language/zh_CN",
            "Accept-Encoding": "gzip,compress,br,deflate",
            "Connection": "keep-alive"
        },
        body: `scontent=${encodeURIComponent(JD_Url)}`,
        _timeout: 8000
    });
    
    if (!codeRes?.code) throw new Error("商品数据获取失败");

    // 获取历史价格数据
    const historyRes = await httpRequest({
        url: `https://w.so168.top/history.htm?code=${encodeURIComponent(codeRes.code)}&reType=json`,
        method: 'GET',
        headers: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.61(0x18003d39) NetType/WIFI Language/zh_CN",
            "Accept-Encoding": "gzip,compress,br,deflate",
            "Connection": "keep-alive"
        },
        _timeout: 8000
    });
    
    if (typeof historyRes === 'string' && historyRes.includes('对不起，没有找到')) {
        throw new Error("该商品暂未收录价格数据");
    }
    
    if (!historyRes?.his) throw new Error("未获取到历史价格信息");

    // 解析历史数据
    const priceList = parseHistoryData(historyRes.his, historyRes.minPrice);
    if (!priceList.length) throw new Error("价格数据解析失败");

    // 生成HTML
    const html = generateHTML(priceList);
    return { body: responseBody.replace("<body>", `<body>${html}`) };
}

function parseHistoryData(historyStr, minPrice) {
    const priceList = [];
    const now = new Date();
    
    // 解析历史数据
    const regex = /Date\.UTC\((\d{4}),(\d{1,2}),(\d{1,2})\),(\d+(?:\.\d+)?)/g;
    const matches = [...historyStr.matchAll(regex)];
    if (!matches.length) return [];
    
    const prices = matches.map(match => {
        const year = parseInt(match[1]);
        const month = parseInt(match[2]);
        const day = parseInt(match[3]);
        const price = parseFloat(match[4]);
        return { date: new Date(Date.UTC(year, month, day)), price, month: month + 1, day };
    });
    
    prices.sort((a, b) => a.date - b.date);
    
    const currentPrice = prices[prices.length - 1].price;
    const currentDate = prices[prices.length - 1].date;
    
    // 关键价格点
    const pricePoints = [
        { name: '当前到手价', getValue: () => currentPrice, getDate: () => currentDate, isCurrent: true },
        { name: '历史最低价', getValue: () => minPrice, getDate: () => prices.find(p => p.price === minPrice)?.date },
        { name: '30天最低价', getValue: () => getMinPrice(prices, 30, now), getDate: () => getMinDate(prices, 30, now) },
        { name: '90天最低价', getValue: () => getMinPrice(prices, 90, now), getDate: () => getMinDate(prices, 90, now) },
        { name: '180天最低价', getValue: () => getMinPrice(prices, 180, now), getDate: () => getMinDate(prices, 180, now) },
        { name: '365天最低价', getValue: () => getMinPrice(prices, 365, now), getDate: () => getMinDate(prices, 365, now) },
        { name: '618价格', getValue: () => getSpecialPrice(prices, 6, 18), getDate: () => getSpecialDate(prices, 6, 18) },
        { name: '双11价格', getValue: () => getSpecialPrice(prices, 11, 11), getDate: () => getSpecialDate(prices, 11, 11) },
        { name: '双12价格', getValue: () => getSpecialPrice(prices, 12, 12), getDate: () => getSpecialDate(prices, 12, 12) }
    ];
    
    let sortOrder = 1;
    pricePoints.forEach(point => {
        const value = point.getValue();
        const date = point.getDate();
        if (value !== null && value !== undefined) {
            priceList.push({
                Name: point.name,
                Date: date ? formatDate(date) : '',
                Price: value.toFixed(2),
                Difference: point.isCurrent ? '当前' : formatDifference(currentPrice, value),
                Percentage: point.isCurrent ? '-' : formatPercentage(currentPrice, value),
                sortOrder: sortOrder++
            });
        }
    });
    
    priceList.sort((a, b) => a.sortOrder - b.sortOrder);
    return priceList;
}

// 辅助函数
function getMinPrice(prices, days, now) {
    const cutoff = new Date(now - days * 24 * 60 * 60 * 1000);
    const filtered = prices.filter(p => p.date >= cutoff);
    return filtered.length > 0 ? Math.min(...filtered.map(p => p.price)) : null;
}

function getMinDate(prices, days, now) {
    const cutoff = new Date(now - days * 24 * 60 * 60 * 1000);
    const filtered = prices.filter(p => p.date >= cutoff);
    if (filtered.length === 0) return null;
    const minPrice = Math.min(...filtered.map(p => p.price));
    return filtered.find(p => p.price === minPrice)?.date;
}

function getSpecialPrice(prices, month, day) {
    const filtered = prices.filter(p => p.month === month && p.day === day);
    return filtered.length > 0 ? filtered.sort((a, b) => b.date - a.date)[0].price : null;
}

function getSpecialDate(prices, month, day) {
    const filtered = prices.filter(p => p.month === month && p.day === day);
    return filtered.length > 0 ? filtered.sort((a, b) => b.date - a.date)[0].date : null;
}

function formatDate(date) {
    if (!date) return '-';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function formatDifference(current, history) {
    const diff = current - history;
    const absDiff = Math.abs(diff);
    if (diff === 0) return '持平';
    return diff > 0 ? `↑${absDiff.toFixed(2)}` : `↓${absDiff.toFixed(2)}`;
}

function formatPercentage(current, history) {
    const diff = current - history;
    if (diff === 0) return '0%';
    const percent = (Math.abs(diff) / current * 100).toFixed(1);
    return diff > 0 ? `↑${percent}%` : `↓${percent}%`;
}

function generateHTML(priceList) {
    // 生成表格行
    const rows = priceList.map(item => {
        const { Name: name, Date: date, Price: price, Difference: diff, Percentage: percent } = item;
        const isCurrent = name === '当前到手价';
        
        let diffClass = '', percentClass = '';
        if (diff.startsWith('↑')) diffClass = percentClass = 'up';
        else if (diff.startsWith('↓')) diffClass = percentClass = 'down';
        
        if (isCurrent) {
            return `<tr class="current-row">
                <td><strong>${name}</strong></td>
                <td>${date}</td>
                <td><strong>${price}</strong></td>
                <td><strong>${diff}</strong></td>
                <td>-</td>
            </tr>`;
        }
        
        return `<tr>
            <td>${name}</td>
            <td>${date}</td>
            <td>${price}</td>
            <td class="${diffClass}">${diff}</td>
            <td class="${percentClass}">${percent}</td>
        </tr>`;
    }).join('');
    
    const now = new Date();
    const updateTime = `${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')}`;
    
    return `<div class="price-container">
        <table class="price-table">
            <thead>
                <tr>
                    <th>类型</th>
                    <th>日期</th>
                    <th>价格</th>
                    <th>差价</th>
                    <th>幅度</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
        <div class="footer">
            <span>更新: ${updateTime}</span>
        </div>
    </div>
    <style>
        body, table {
            font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
            margin: 0;
            padding: 0;
        }
        .price-container {
            max-width: 95%;
            margin: 8px auto;
            padding: 8px;
            background: #fff;
            border-radius: 6px;
            box-shadow: 0 1px 4px rgba(0,0,0,0.08);
            border: 1px solid #e0e0e0;
            font-size: 12px;
        }
        .price-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 6px;
            table-layout: fixed;
        }
        .price-table th {
            background: #f8f8f8;
            color: #333;
            padding: 8px 4px;
            text-align: left;
            font-weight: bold;
            border-bottom: 1px solid #e61a23;
            font-size: 11px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .price-table td {
            padding: 6px 4px;
            border-bottom: 1px solid #f0f0f0;
            font-size: 11px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .current-row {
            background-color: #fff5f5;
        }
        .current-row td {
            font-weight: bold;
            border-bottom: 1px solid #e61a23;
        }
        .up {
            color: #C91623;
            font-weight: bold;
        }
        .down {
            color: #00aa00;
            font-weight: bold;
        }
        .price-table tbody tr:nth-child(even):not(.current-row) {
            background-color: #fafafa;
        }
        .price-table tbody tr:hover {
            background-color: #f0f7ff;
        }
        .footer {
            font-size: 10px;
            color: #999;
            padding-top: 6px;
            border-top: 1px dashed #eee;
            text-align: right;
        }
        /* 列宽分配 */
        .price-table th:nth-child(1),
        .price-table td:nth-child(1) {
            width: 22%;
        }
        .price-table th:nth-child(2),
        .price-table td:nth-child(2) {
            width: 20%;
        }
        .price-table th:nth-child(3),
        .price-table td:nth-child(3) {
            width: 18%;
            text-align: right;
        }
        .price-table th:nth-child(4),
        .price-table td:nth-child(4) {
            width: 15%;
            text-align: center;
        }
        .price-table th:nth-child(5),
        .price-table td:nth-child(5) {
            width: 15%;
            text-align: center;
        }
        /* 价格列右对齐，其他列左对齐 */
        .price-table th:nth-child(3),
        .price-table td:nth-child(3) {
            text-align: right;
            padding-right: 6px;
        }
        .price-table th:nth-child(4),
        .price-table td:nth-child(4),
        .price-table th:nth-child(5),
        .price-table td:nth-child(5) {
            text-align: center;
        }
        /* 表头文字更紧凑 */
        .price-table th {
            letter-spacing: -0.3px;
        }
    </style>`;
}

async function httpRequest(options) {
    return new Promise((resolve, reject) => {
        const req = { ...options };
        const method = req._method || ('body' in req ? 'post' : 'get');
        const respType = req._respType || 'body';
        const timeout = req._timeout || 8000;
        
        delete req._method;
        delete req._respType;
        delete req._timeout;
        
        const timeoutId = setTimeout(() => reject(new Error(`请求超时`)), timeout);
        
        $[method.toLowerCase()](req, (error, response, data) => {
            clearTimeout(timeoutId);
            if (error) return reject(new Error(`请求失败: ${error}`));
            
            if (typeof response?.body === 'string' && response.body.includes('对不起，没有找到')) {
                return resolve(response.body);
            }
            
            resolve(respType !== 'all' ? $.toObj(response?.[respType], response?.[respType]) : response);
        });
    });
}

// prettier-ignore
function Env(e,t){class s{constructor(e){this.env=e}send(e,t="GET"){e="string"==typeof e?{url:e}:e;let s=this.get;"POST"===t&&(s=this.post);const i=new Promise(((t,i)=>{s.call(this,e,((e,s,o)=>{e?i(e):t(s)}))}));return e.timeout?((e,t=1e3)=>Promise.race([e,new Promise(((e,s)=>{setTimeout((()=>{s(new Error("请求超时"))}),t)}))]))(i,e.timeout):i}get(e){return this.send.call(this.env,e)}post(e){return this.send.call(this.env,e,"POST")}}return new class{constructor(e,t){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=e,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,t),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(e,t=null){try{return JSON.parse(e)}catch{return t}}toStr(e,t=null,...s){try{return JSON.stringify(e,...s)}catch{return t}}getjson(e,t){let s=t;if(this.getdata(e))try{s=JSON.parse(this.getdata(e))}catch{}return s}setjson(e,t){try{return this.setdata(JSON.stringify(e),t)}catch{return!1}}getScript(e){return new Promise((t=>{this.get({url:e},((e,s,i)=>t(i)))}))}runScript(e,t){return new Promise((s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let o=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");o=o?1*o:20,o=t&&t.timeout?t.timeout:o;const[r,a]=i.split("@"),n={url:`http://${a}/v1/scripting/evaluate`,body:{script_text:e,mock_type:"cron",timeout:o},headers:{"X-Key":r,Accept:"*/*"},policy:"DIRECT",timeout:o};this.post(n,((e,t,i)=>s(i)))})).catch((e=>this.logErr(e)))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const e=this.path.resolve(this.dataFile),t=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(e),i=!s&&this.fs.existsSync(t);if(!s&&!i)return{};{const i=s?e:t;try{return JSON.parse(this.fs.readFileSync(i))}catch(e){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const e=this.path.resolve(this.dataFile),t=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(e),i=!s&&this.fs.existsSync(t),o=JSON.stringify(this.data);s?this.fs.writeFileSync(e,o):i?this.fs.writeFileSync(t,o):this.fs.writeFileSync(e,o)}}lodash_get(e,t,s){const i=t.replace(/\[(\d+)\]/g,".$1").split(".");let o=e;for(const e of i)if(o=Object(o)[e],void 0===o)return s;return o}lodash_set(e,t,s){return Object(e)!==e||(Array.isArray(t)||(t=t.toString().match(/[^.[\]]+/g)||[]),t.slice(0,-1).reduce(((e,s,i)=>Object(e[s])===e[s]?e[s]:e[s]=Math.abs(t[i+1])>>0==+t[i+1]?[]:{}),e)[t[t.length-1]]=s),e}getdata(e){let t=this.getval(e);if(/^@/.test(e)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(e),o=s?this.getval(s):"";if(o)try{const e=JSON.parse(o);t=e?this.lodash_get(e,i,""):t}catch(e){t=""}}return t}setdata(e,t){let s=!1;if(/^@/.test(t)){const[,i,o]=/^@(.*?)\.(.*?)$/.exec(t),r=this.getval(i),a=i?"null"===r?null:r||"{}":"{}";try{const t=JSON.parse(a);this.lodash_set(t,o,e),s=this.setval(JSON.stringify(t),i)}catch(t){const r={};this.lodash_set(r,o,e),s=this.setval(JSON.stringify(r),i)}}else s=this.setval(e,t);return s}getval(e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(e);case"Quantumult X":return $prefs.valueForKey(e);case"Node.js":return this.data=this.loaddata(),this.data[e];default:return this.data&&this.data[e]||null}}setval(e,t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(e,t);case"Quantumult X":return $prefs.setValueForKey(e,t);case"Node.js":return this.data=this.loaddata(),this.data[t]=e,this.writedata(),!0;default:return this.data&&this.data[t]||null}}initGotEnv(e){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,e&&(e.headers=e.headers?e.headers:{},e&&(e.headers=e.headers?e.headers:{},void 0===e.headers.cookie&&void 0===e.headers.Cookie&&void 0===e.cookieJar&&(e.cookieJar=this.ckjar)))}get(e,t=(()=>{})){switch(e.headers&&(delete e.headers["Content-Type"],delete e.headers["Content-Length"],delete e.headers["content-type"],delete e.headers["content-length"]),e.params&&(e.url+="?"+this.queryStr(e.params)),void 0===e.followRedirect||e.followRedirect||((this.isSurge()||this.isLoon())&&(e["auto-redirect"]=!1),this.isQuanX()&&(e.opts?e.opts.redirection=!1:e.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(e.headers=e.headers||{},Object.assign(e.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(e,((e,s,i)=>{!e&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),t(e,s,i)}));break;case"Quantumult X":this.isNeedRewrite&&(e.opts=e.opts||{},Object.assign(e.opts,{hints:!1})),$task.fetch(e).then((e=>{const{statusCode:s,statusCode:i,headers:o,body:r,bodyBytes:a}=e;t(null,{status:s,statusCode:i,headers:o,body:r,bodyBytes:a},r,a)}),(e=>t(e&&e.error||"UndefinedError")));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(e),this.got(e).on("redirect",((e,t)=>{try{if(e.headers["set-cookie"]){const s=e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),t.cookieJar=this.ckjar}}catch(e){this.logErr(e)}})).then((e=>{const{statusCode:i,statusCode:o,headers:r,rawBody:a}=e,n=s.decode(a,this.encoding);t(null,{status:i,statusCode:o,headers:r,rawBody:a,body:n},n)}),(e=>{const{message:i,response:o}=e;t(i,o,o&&s.decode(o.rawBody,this.encoding))}));break}}post(e,t=(()=>{})){const s=e.method?e.method.toLocaleLowerCase():"post";switch(e.body&&e.headers&&!e.headers["Content-Type"]&&!e.headers["content-type"]&&(e.headers["content-type"]="application/x-www-form-urlencoded"),e.headers&&(delete e.headers["Content-Length"],delete e.headers["content-length"]),void 0===e.followRedirect||e.followRedirect||((this.isSurge()||this.isLoon())&&(e["auto-redirect"]=!1),this.isQuanX()&&(e.opts?e.opts.redirection=!1:e.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(e.headers=e.headers||{},Object.assign(e.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](e,((e,s,i)=>{!e&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),t(e,s,i)}));break;case"Quantumult X":e.method=s,this.isNeedRewrite&&(e.opts=e.opts||{},Object.assign(e.opts,{hints:!1})),$task.fetch(e).then((e=>{const{statusCode:s,statusCode:i,headers:o,body:r,bodyBytes:a}=e;t(null,{status:s,statusCode:i,headers:o,body:r,bodyBytes:a},r,a)}),(e=>t(e&&e.error||"UndefinedError")));break;case"Node.js":let i=require("iconv-lite");this.initGotEnv(e);const{url:o,...r}=e;this.got[s](o,r).then((e=>{const{statusCode:s,statusCode:o,headers:r,rawBody:a}=e,n=i.decode(a,this.encoding);t(null,{status:s,statusCode:o,headers:r,rawBody:a,body:n},n)}),(e=>{const{message:s,response:o}=e;t(s,o,o&&s.decode(o.rawBody,this.encoding))}));break}}time(e,t=null){const s=t?new Date(t):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let t in i)new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?i[t]:("00"+i[t]).substr((""+i[t]).length)));return e}queryStr(e){let t="";for(const s in e){let i=e[s];null!=i&&""!==i&&("object"==typeof i&&(i=JSON.stringify(i)),t+=`${s}=${i}&`)}return t=t.substring(0,t.length-1),t}msg(t=e,s="",i="",o={}){const r=e=>{const{$open:t,$copy:s,$media:i,$mediaMime:o}=e;switch(typeof e){case void 0:return e;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:e};case"Loon":case"Shadowrocket":return e;case"Quantumult X":return{"open-url":e};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{const r={};let a=e.openUrl||e.url||e["open-url"]||t;a&&Object.assign(r,{action:"open-url",url:a});let n=e["update-pasteboard"]||e.updatePasteboard||s;n&&Object.assign(r,{action:"clipboard",text:n});let h=e.mediaUrl||e["media-url"]||i;if(h){let e,t;if(h.startsWith("http"));else if(h.startsWith("data:")){const[s]=h.split(";"),[,i]=h.split(",");e=i,t=s.replace("data:","")}else{e=h,t=(e=>{const t={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(var s in t)if(0===e.indexOf(s))return t[s];return null})(h)}Object.assign(r,{"media-url":h,"media-base64":e,"media-base64-mime":o??t})}return Object.assign(r,{"auto-dismiss":e["auto-dismiss"],sound:e.sound}),r}case"Loon":{const s={};let o=e.openUrl||e.url||e["open-url"]||t;o&&Object.assign(s,{openUrl:o});let r=e.mediaUrl||e["media-url"]||i;return r&&Object.assign(s,{mediaUrl:r}),console.log(JSON.stringify(s)),s}case"Quantumult X":{const o={};let r=e["open-url"]||e.url||e.openUrl||t;r&&Object.assign(o,{"open-url":r});let a=e.mediaUrl||e["media-url"]||i;a&&Object.assign(o,{"media-url":a});let n=e["update-pasteboard"]||e.updatePasteboard||s;return n&&Object.assign(o,{"update-pasteboard":n}),console.log(JSON.stringify(o)),o}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(t,s,i,r(o));break;case"Quantumult X":$notify(t,s,i,r(o));break;case"Node.js":break}if(!this.isMuteLog){let e=["","==============📣系统通知📣=============="];e.push(t),s&&e.push(s),i&&e.push(i),console.log(e.join("\n")),this.logs=this.logs.concat(e)}}debug(...e){this.logLevels[this.logLevel]<=this.logLevels.debug&&(e.length>0&&(this.logs=[...this.logs,...e]),console.log(`${this.logLevelPrefixs.debug}${e.map((e=>e??String(e))).join(this.logSeparator)}`))}info(...e){this.logLevels[this.logLevel]<=this.logLevels.info&&(e.length>0&&(this.logs=[...this.logs,...e]),console.log(`${this.logLevelPrefixs.info}${e.map((e=>e??String(e))).join(this.logSeparator)}`))}warn(...e){this.logLevels[this.logLevel]<=this.logLevels.warn&&(e.length>0&&(this.logs=[...this.logs,...e]),console.log(`${this.logLevelPrefixs.warn}${e.map((e=>e??String(e))).join(this.logSeparator)}`))}error(...e){this.logLevels[this.logLevel]<=this.logLevels.error&&(e.length>0&&(this.logs=[...this.logs,...e]),console.log(`${this.logLevelPrefixs.error}${e.map((e=>e??String(e))).join(this.logSeparator)}`))}log(...e){e.length>0&&(this.logs=[...this.logs,...e]),console.log(e.map((e=>e??String(e))).join(this.logSeparator))}logErr(e,t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t,e);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,t,void 0!==e.message?e.message:e,e.stack);break}}wait(e){return new Promise((t=>setTimeout(t,e)))}done(e={}){const t=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${t} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(e);break;case"Node.js":process.exit(1)}}}(e,t)}
