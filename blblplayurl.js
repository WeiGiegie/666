/*
 *
 * 脚本功能：哔哩哔哩 播放地址获取与调试？
 * 软件版本：8.60.0
 * 更新时间：2025年1
 *
 *******************************
 [rewrite_local]
 # > 哔哩哔哩 播放地址获取与调试？
^https?:\/\/(api.bilibili.com|api.biliapi.net)\/x\/share\/click url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/blblplayurl.js
^https?:\/\/.*bilivideo\.(com|cn)(?!.*\/resolve).*\/upgcxcode\/.*\.(m4s|flv|mp4|ts).+ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/blblplayurl.js

 [mitm]
 hostname = api.bilibili.com,api.biliapi.net,*.bilivideo.com,*.bilivideo.cn

 *
 */

// 注意：本脚本为只读脚本，不会修改原始响应内容及对内容进行修改


