/*
 *
 *
脚本功能：niceday-冥想,助眠故事,减轻压力,白噪音,心情日记
软件版本：3.9.16
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >niceday-冥想,助眠故事,减轻压力,白噪音,心情日记
^https?:\/\/niceday.youloft.com\/api\/appuser\/info url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/niceday.js

[mitm] 
hostname = niceday.youloft.com

*
*
*/









if ($request.url.includes('https://niceday.youloft.com/api/appuser/info')) {
    let body = JSON.parse($response.body);
    Object.assign(body, {
        data: "ygyVXazMroaRLHqy7hKBkVzTTBM8eudgdFsTKobG8QlaMOdd31Lw3ogfet3+ruOgSQefv5BWiy+GWVHGoLmIR6Tj2LbI2u6yfrUua+8hw98QnM+nGOxJa8OxRYrfNazE7mNGnUlovUzo06zRbqvk82lXqDp0+/DYTxvA3Sa5XuUar5np4n5KOhRyuJyj8B4HmiT6tH1mB2MyL/56fnJGATg+Hovsk1sNzyDTw6gYdrIzVxCPpUXU6VZMWBgouwTrGIoeprdPkZeQTbyHY0n6xWCYA/FN5qPuYD1s6U4qBCENGLDBTalzdo0vly0636LJvEJW7aKSPLizJj8wv+2wva3aXlohlSQPtC3hbd6lDJOTTlL6mQq53Hjgdzrp10xtcBM3q9FwOtSnH5ocrHVCGHLo6Y7M6zYg2apK8B70hL4fXEe0RntWRcnAvBTMqjg5SG/ozMMpe+mKxS/HMLeGzC8ZboaYChTxXw9JpIbGgFys8747NQgj0+ZUiY5iixNAcxoO7Yq1Be1gpvO3Kx0PTYiOlyGEvcN2H103luenmTqiAWbcPyzrTirQ+GUETGkwjQK4jwRO7VfWn9B5X0QjNVJTymyZS7lI2BKWyQorvFtKM7ODfpgE4VzHK+qZLyYU9FsHmeHk3+cIwQmej/p3hEEHuTRhoHn4RSBWTr2XNC2TmS/aY7EMErJyrDdtbWf8jILPEMYaWiZGz6YenV6lw9P4PZAlJbHgNX7I7PsjWkFv+2mYYncH7EIeuWn01p1+/N+oZyM9rko5EvAUb508vwU2kB7XyGx9uflHMiNcua2J6IlfUMmrWEfJ8UvIcU4XcDLNaKwf6nCCS63CBA8QIHLWf42uNx0ZTjbm9hyZSUlhZU/8Qa27oLgB6Trb2bigf+coTK4Rly5a4DXiepD/tqWRa7EZwmhlhwrXHgFmEEg00rfvcE2FCjALUJ1/Sl1vMZNK/fVlilivWABqmmOABVbqK+kMOSeMwlc6s/C39x0LBUyrI5pIbBK6/vtmiRtAtW4ZqT3LRTUFSRrRZAXq0QBWgwT9tV/1uGaWb+UOH6dTL43gGWVWIFnw3ssxs1kcV4j95b+Ao6pdejmaxMjh09fyW5Aw77EXp8rsrbfHBECkh6oEBChNIo6QdvvBeMrQJSK9uQUKSeJHBrHbFQdSHQnH66Flq8Eo5wTABLJF4w2tX09eA4AZ3c93o0oyPrIRS7cBFAO9vavjj0ivInUz7rA9KVxFXVppRROG3jvLgxKL33xImaqd1z2L5MUmuMlsBlYCJpxS0atjO+xi6AIKUNrsK+W6B7yZF/D0WC5j2l3lP6KaXFo1JM/JKcrlr3Bgav/BClATUkS5UstNdvk5VIez3zJ7Fzv3hZAhQGXq3WLTXvOPLyqu1/4FM0FXqvqgBvoejVMpHshweGZekGS8q7ASl2TBs3ovZja8/kAaB3hfU0u5Zb+coC3207il7ilyVagmPMBStNS+6ceM6iC+aYMHJAmehGsYvLPwOUfyhK58QFtA4zPgmjdI/y5jLWiTokXNne4FkkfaPfnb11xbB5fhdoQbN3kZzSw50A5yCcQ4bFAO5XUG/pzUhizSjyMb49Yt/QDhaJSpy5wQDB3X9AQJTC1p8Iczkooi1+TxARvwb8M7Cq7myHcKBeF/Wg4+ti8qZ7yMGF6JRzfYzY9aiEkKRYsXUJQi+iGWOX3Pi9TH0W/wgsRS6YxF7jLh5m4tByFSNimMujNG958pNjnCAXl3spZ9WmHNkH7OdFjHIJ2ymN2/2PduywqHXbN/QJZDYjAwpYrrH4g="
    });
    $done({
        body: JSON.stringify(body)
    });
} 
