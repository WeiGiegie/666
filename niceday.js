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
        data: "u0R5YSSWR+QdFZy0mkl3jMAY2TdU75Q6Y50edoShUOpwfz+nt8H+sLrkHI0OlzHxQPOEWqLJo+gG9ki45a4aTbbJYhqQxt7UcK6OId60Xqj95f3rGzls0kZMhuLmiTGSfMpoBnidJ8x2NhYSansfjbHzckn/kbbxGTGzJVcqWsWj8w9PWTPOwsa44Omlwx1CLh913KygEMEOCOmo/C7aGDHHcDzZ7kzmg7p4VNO+rT/aDhub1WiiFKPdNhzENk3OHwDvrvv+uiLPWzK17JF1qdrVh0JENGf/HeCEYk+S6lpyMOjx0rw4+lunMf22gm9l9zQzI586V9dg5krIoPFK0Gh2tO0oSruJ1cWS2AZj8spfhGUGn8jWa/OitgwM2PfNaTZPrNpIuvM4NPMeLEUQISGL+iHltjsIcPCWgVvuPNqEsyjTv9IRputEg/tJ31qa0fFx/1coyJfz/Eb5ogxGejna4XaOrWVZg9GSbVMlq7FYKtYt9LOO/tHI5k+GdgQSn4ACitytxZpOW7Q6WDZPMZS3t68+rsDLs9kDpw2T1ENwKouMPwWrl0hr278BPbM1RcGB+I13+d5PZoWrqzLtIHXouFR/ulLAUy55t77HDxvQbG4XdZJFcplSW7WzjdQGz/W+yujKxs4eMhnH76VPNQrzmzCqsT8kax5YlpMWGfbucPfnCHpEXO3scgCXf0jwfFfQFy2aMPB+FbRvjp2HCqZTDe8DJAXBvHv9qFlcUTjo81ThYfQLuwVWr4T41VPnoIHQTUxX7QLYrsoH+jqd5jPN/7PbMw/KhCLCgKNV9eXoegNHyKBgd1pYmsvVh6/BdYJYRhQ64MRXsGwfY3ZMx2ZSzgck5j3HxUis3zvlsHAv6G7W3AJrpw7B5mTBgL13Bp8K+UOzWGT1o3z3Jp/fODtcA4uKElbip4P+metrOFqovRSLOb6G8UJHLtOH9Ru5NTtMy4MFlFC3zW7eQOVme6+euWl0c8TMDr5okB9xdKzPUKfINFU8dYnF/QUkB5y2kb04rRVu1GiJaf63WUpmeUR6M8ldaLnqu3tSlxDmU/GnYwkuBPmKslrhwilILZYN/S/q463ZnfyuuH7uQgrqNv/manZZjWkEblVYg19BiHR0GHc2AUhhmJTNw3pMS7LGWunYGe4/IU8vOpx/bRVbRZW+oLgZu59pjl4fRBAiKtIEXU1bRhqtoyFmUMqIdLRjW2cIITTFQobDfPsayUzP5CWhSYQVRYT3PilOa4VUakQnqlzJVPbJLVZXmlvOERKd1t3lfMifKNqDwGnViiQUpOzrTpsN5L76j60RJF5yeEfXKo+kDAQe0ONHa5Osq2PDHFAltIqTMxZGyNRTps/9dDQB3RJy3x+3pbUg9lO2XaaDSzO4b7JnEAI278FueH2p+EYHqZvkpTOIKizIV/dTdioyLaHKGZwdr10UgDLwrGMkT9vbO7EApC2C5GwqgJS/ItpyNAT1O2pLennNx6c50YChR0Ssg2xEnRV2VN0PvxxVWaYRGGVwHhhRLDjSOnJHizbRwQy4dFzfEM2M2okki6WUD070yPQl2NtbkUeT/k+IHWaIWuwk7eRrgobUZsgtHs45Bc4/R5fJAXPk5l057fgifx28wbwo2mVD8oXLG1dUSoQR/XIhWp8G4qsuh3ESI3x4oNa2CwqWRp95KFa347DTsXXiiX1QSg2P4W/ZsoEL9+bELsmg2JDoyTEG7HZESc8+Bn1SVeqqeXeto2nLQqn7KUzuxMqdI7QSYu4gD2Ou2dMERxWb3txgdaBgELCLsBe3Unz0i4c="
        });
    $done({
        body: JSON.stringify(body)
    });
} 
