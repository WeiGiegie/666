/*
 *
 *
脚本功能：哔哩哔哩 获取视频地址
软件版本：
下载地址：
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 哔哩哔哩 点分享复制链接即可
^https:\/\/api\.biliapi\.net\/x\/share\/click url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/blbldownload.js
^https:\/\/api\.bilibili\.com\/x\/share\/click url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/blbldownload.js
[mitm]
hostname = api.biliapi.net, api.bilibili.com, bibz.me




*
*
*/








/**
 * B站短链解析优化版 - 兼容Quantumult X / Surge / Loon
 * @description 解析B站短链，获取无水印视频地址并同步到响应
 */

// 环境检测
const ENV = (() => {
    if (typeof $loon !== 'undefined') return 'Loon';
    if (typeof $httpClient !== 'undefined') return 'Surge';
    if (typeof $task !== 'undefined') return 'Quantumult X';
    return 'Unknown';
})();

console.log(`运行环境: ${ENV}`);

// 检查是否是/x/share/click请求
const isShareClickRequest = () => {
    if (ENV === 'Quantumult X') {
        return $request && $request.url && $request.url.includes('/x/share/click');
    } else {
        return typeof $request !== 'undefined' && $request.url && $request.url.includes('/x/share/click');
    }
};

// 如果不是/share/click请求，直接放行
if (!isShareClickRequest()) {
    if (ENV === 'Quantumult X') {
        $done({});
    } else {
        $done($response);
    }
    return;
}

// 获取当前请求的响应体
let responseBody;
if (ENV === 'Quantumult X') {
    responseBody = $response.body;
} else {
    responseBody = $response.body;
}

// 工具函数
const utils = {
    // HTTP请求 - 修复Loon环境的问题
    httpRequest: (url, method = 'GET', timeout = 5000) => {
        const config = { url, method, timeout };
        
        if (ENV === 'Quantumult X') {
            return $task.fetch(config);
        } else if (ENV === 'Loon') {
            // Loon环境使用$loon.http.request方法
            return new Promise(resolve => {
                $loon.http.request(config, (err, response, body) => {
                    resolve(err ? { error: err } : { ...response, body });
                });
            });
        } else {
            // Surge环境使用$httpClient
            return new Promise(resolve => {
                $httpClient[method.toLowerCase()](config, (err, response, body) => {
                    resolve(err ? { error: err } : { ...response, body });
                });
            });
        }
    },
    
    // 发送通知
    notify: (title, subtitle, message, options = {}) => {
        if (ENV === 'Quantumult X') {
            $notify(title, subtitle, message, options);
        } else if (ENV === 'Loon') {
            $notification.post(title, subtitle, message, options);
        } else {
            $notification.post(title, subtitle, message, options);
        }
    },
    
    // 格式化时长
    formatDuration: (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        if (hours > 0) return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    },
    
    // 截断文本
    truncateText: (text, maxLength = 40) => {
        return text.length <= maxLength ? text : text.substring(0, maxLength - 1) + '…';
    }
};

// 解析短链接 - 使用简单的HEAD方法
async function resolveShortUrl(url) {
    try {
        console.log("开始解析短链接:", url);
        const response = await utils.httpRequest(url, 'HEAD', 3000);
        if (response.error) throw new Error(response.error);
        
        const location = response.headers?.Location || 
                       response.headers?.location ||
                       response.headers?.LOCATION;
        
        console.log("解析到的最终URL:", location);
        return location;
    } catch (error) {
        console.log("解析短链接错误:", error.message);
        throw error;
    }
}

// 获取视频信息
async function fetchVideoInfo(bvid) {
    try {
        console.log("获取视频信息:", bvid);
        const apiUrl = `https://api.bilibili.com/x/player/pagelist?bvid=${bvid}&jsonp=jsonp`;
        const response = await utils.httpRequest(apiUrl);
        if (response.error) throw new Error(response.error);

        const result = JSON.parse(response.body);
        if (result?.code !== 0 || !result.data?.length) {
            throw new Error('视频信息无效');
        }

        return result.data[0];
    } catch (error) {
        console.log("获取视频信息错误:", error.message);
        throw error;
    }
}

// 获取无水印播放地址
async function fetchPlayUrl(bvid, cid) {
    try {
        console.log("获取播放地址:", bvid, cid);
        const apiUrl = `https://api.bilibili.com/x/player/playurl?bvid=${bvid}&cid=${cid}&qn=80&fnval=1`;
        const response = await utils.httpRequest(apiUrl);
        if (response.error) throw new Error(response.error);

        const result = JSON.parse(response.body);
        if (result?.code !== 0 || !result.data?.durl?.length) {
            throw new Error('播放地址无效');
        }

        // 获取无水印播放URL
        const playUrl = result.data.durl[0].url || 
                       (result.data.durl[0].backup_url?.[0]);
        
        if (!playUrl) throw new Error('未找到播放URL');
        
        console.log("获取到的播放URL长度:", playUrl.length);
        return playUrl;
    } catch (error) {
        console.log("获取播放地址错误:", error.message);
        throw error;
    }
}

// 发送成功通知
function sendNotification(title, videoInfo, bvid) {
    const displayTitle = utils.truncateText(title);
    
    const message = [
        `🎬 ${displayTitle}`,
        `⏰ 时长: ${utils.formatDuration(videoInfo.duration)}`,
        `🖼️ 分辨率: ${videoInfo.dimension.width}x${videoInfo.dimension.height}`,
        `🔗 BV号: ${bvid}`
    ].join('\n');

    const notifyOptions = {
        'media-url': videoInfo.first_frame || 'https://example.com/default-cover.jpg'
    };

    utils.notify('✅ B站视频解析成功', '', message, notifyOptions);
}

// 发送错误通知
function sendErrorNotification(reason) {
    utils.notify('❌ B站解析失败', '', `解析失败: ${reason}\n\n请检查链接有效性或稍后重试`);
}

// 主处理函数
async function processShareClick() {
    let modifiedResponse = responseBody;
    
    try {
        // 解析初始响应
        const result = JSON.parse(responseBody);
        if (result?.code !== 0 || !result.data?.content) {
            throw new Error('无效的响应数据');
        }

        // 保存原始内容
        const originalContent = result.data.content;
        
        // 提取短链接
        const shortUrl = originalContent.match(/https?:\/\/b23\.tv\/[a-zA-Z0-9]+/)?.[0];
        if (!shortUrl) throw new Error('未找到短链接');

        // 清理标题
        const title = originalContent.replace(shortUrl, '')
                                .replace(/[-—]\s*哔哩哔哩$/, '')
                                .trim();
        
        // 解析短链接获取最终URL
        const finalUrl = await resolveShortUrl(shortUrl);
        if (!finalUrl) throw new Error('无法解析短链接');
        
        // 提取BV号
        const bvid = finalUrl.match(/\/(BV[0-9A-Za-z]{10,12})/)?.[1];
        if (!bvid) throw new Error('无法解析视频ID');

        // 获取视频详细信息
        const videoInfo = await fetchVideoInfo(bvid);
        if (!videoInfo) throw new Error('无法获取视频信息');

        // 获取无水印播放地址
        const playUrl = await fetchPlayUrl(bvid, videoInfo.cid);
        if (!playUrl) throw new Error('无法获取播放地址');

        // 修改响应内容
        result.data.content = playUrl;
        modifiedResponse = JSON.stringify(result);
        
        console.log("响应已修改，播放地址已同步");
        
        // 发送通知
        sendNotification(title, videoInfo, bvid);
        
    } catch (error) {
        console.log(`处理失败: ${error.message}`);
        sendErrorNotification(error.message);
    } finally {
        // 确保总是返回响应
        if (ENV === 'Quantumult X') {
            $done({ body: modifiedResponse });
        } else if (ENV === 'Loon') {
            // Loon环境中修改响应体
            $response.body = modifiedResponse;
            $done($response);
        } else {
            // Surge环境中修改响应体
            $response.body = modifiedResponse;
            $done($response);
        }
    }
}

// 开始处理
processShareClick();
