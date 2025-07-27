/*
 *
 *
脚本功能：新颜相机-ai照片创意工坊 仅解锁会员模版，其他功能无法使用
软件版本：1.2.9
下载地址：苹果商店下载
脚本作者：
更新时间：2025年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 新颜相机-ai照片创意工坊
^https?:\/\/yixiu.tuanduixiangce.com\/api\/v1\/userinfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/xyxj.js
^https://yixiu\.tuanduixiangce\.com/api/v1/ad/config url reject
[mitm] 
hostname = yixiu.tuanduixiangce.com
*
*
*/



body = $response.body.replace(/.+/, "+Rm0GCgheClNlcviX2HvaxEeGLjkI0VM0V2DHvYkEniKwo9XgCiR7RA91yq2BQ1iMLAqIxr7X5W+B0ofG35FbxUCttLtFmjqxiaZMeV5QqFYAqAXAZjHTR48p6dGau1bPzoWwpUk8sapsUestMAnC0GsfgCGi3h14ZNhBkOCiUzLUm28WEYP8HxVNkK0wjDuYttAxT2bmhBwbmPStD7fzdDzQPhraasplPA8boFlSukOzv9coTPAooevBDbdvZayPKLO7ZP7KveP0LMFmgTOjSRR6Yej2lP9taysPLAGJfFjfZu/R8KTzVAbrp1BZ7weOIUwoyHMCMMJ/L1ZkJpHDS3Yd94KrByDb6ta6vkbt0tD+afiPdquLnOoFYj7hRUatHzxYG7VAh8oKN9MloJfopPuaM//PxnCuPmRsFjKU0oh9rfSqY2jpkX2oQMeOH4ISeHtteHyJkJorAKXCiV/BAZ+yuaIbm5RCwdd+vMyCyS5+9rP7gxH3vniIX6eaX3wXCqC5s4EoQWD3ekeFWH1Ng==")
$done({body});
