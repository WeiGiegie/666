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
        data: "4oWVO4QIee6pnL7MQ986J4paX0yxwLBjS2Eb1gV8oQArNcShWB8C/+CQtSY/xWUY88EZW4nq9bcipHpHmx236h6FaASc8ylgL61LneoZghaxmXysMmqgGTnqK+u5+2VNUlVEUJ/amoiFq7x9xgfUi7bxrWD79+5IIHZQfV9VELT5zBdHcPzABrPrSRYPuJBgq+vORXbI2h4aaSGfUsuDXIraOmYyAFtfGJRjR1OxIWjXWTQJgZzBrxxtwFFUK3r64n3mfCCOqtCSpHZJrCpG9lDhXIOnU/ZfjMczVeTkZbXazZjT5PKZ8BbASBCU+0B2BnWBqqXhUH4olE3vq59P3wgZglu6oiudGnyTS1yhzw+Yi2+7aqVEZh6DegBmfHnE2DRqUBAzuei+2StD2+i+SVX4t3sZZyvGuRVf07VjMSw4SatUQvQMMPmzelhrXHXWQ2ADpyEkA+87AspYhXWwh9vHYiXN/exCtjyP18KoEJ0x9VfLm9xAJw63yAG5LGobObM56wXeftJtq4HKVCGLYAWR3r/6unLLhdNma2MEapkFoAeyYedtjr1IYqx2kXSyBfazO8sZyPghqrhnQIGXeicdmuomvEbeTsWLdhnLYBOu4faq/in0olaxmOTCzrYm/4upa8kY4KlreOQPY0mhcR4J/IKWSWnrueeWtwuDO4c4RTB8/sdWQzhHs2gYJs4qyViqOkyZgCYm9CtSfpqUSz1ugqrNBR73cf7ZyqvlBwIR7SUXK02+KEICU28SDNWFrLAcSy86PzTv1l9gzfY6CSuH0ekhZpthb9ifaQIDE8JkdVbY2SOcs//S/1GdtbmwcPspxWIEwmvtLSLq861bN5fiWthO+98mrZXFArBzM8wLzCWfFhUlYDylvG8xS5QJmPmYY1X37vvYbVu4jwYx1AOQR58l2qGWWweXKXjb3wkKkbuyp5G2MZGzKkHwMS5Vwyko73bbwpbplCSITagAklZ2WQZ0ivtzsEcsQ8ax/CJjnhJPGWG1peyc90EEFFIpg6vwOj351wNzWoWLsQH0FgHPQ02nE2r1ZTNh2yqM6vXDB7cSpY9eBytUtrNSw4Bv1IpvBahQxEub70Pp9dsVfM7eVnCwb/fak4s4TtAcsMiLqfAdwr3I6wmCQk/BLFZv8pL2yErRw6xgYYm1vtV162Plj8gTkZCQqTTu+xnCO9BgQxjO21PffwF71pkA6oRfupTFFVAIIY8eXgFVbBxk2mgqJ3cgpOWLu3jCJYlRr/CWMuU/zCOjrY7Ohz5ySUHidiuf2YNiXiXTedoO+YwkX3l9Ub1xml2AHUOsR6UODEVzm3h45noxO9oRS+TfZVQPd4C4eONBEFgQRiQh+0d114nFAIsZm28VARrWLBYVHRJ1LxA7lwwqsh8Gfiq7HN7G9i0n2IYisaNcE132RQvk+Kk3Y91AcOLsEwuivp7MtaaraWzIfkl1u8vcoaDnSx8ql49yHOgLPnvJYfXir+p7FmVcH22y/d0vgmD5J78bo/pc3G7QVByXFaSgz7LFVkNk1Q2TvN5t5zfK2Nlk2/6mIrQGsCa8CioluygZ6bODhF6rttlBKg2EQ39Kdx55g+yNTpCONr2ED2ZBg2S3Gsy5RGHq66h0r80oWCB54rQs0m2tcHLzdoI+5LeVoipDn+fWa2xZjU3jgSEz8+KRc1xf8PldQiBko369mfCqpYwm4HAyI40uDqptdTK+jIOZluikN+Sd4O2/mNJ7wpT2M+M6GtBrgJkBnVIYbAk1WMqt3fJ6q36YpKr61UtDcahrZFlWMNm/8i3xzAY="
    });
    $done({
        body: JSON.stringify(body)
    });
} 

