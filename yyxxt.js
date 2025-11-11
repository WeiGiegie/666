/*
 *
 *
脚本功能：粤语学习通-学说广东话粤语学习翻译词典
软件版本：8.0.1
下载地址：
脚本作者：@liul0ng
更新时间：2025
电报频道：https://t.me/GieGie777
问题反馈：@liul0ng
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 粤语学习通-学说广东话粤语学习翻译词典
^http:\/\/api\.528529\.com\/apple_product url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/yyxxt.js

[mitm]
hostname = api.528529.com
*
*
*/












let obj = {
  "msg" : "success",
  "data" : [
    {
      "due_time" : "2099-12-31 23:59:59",
      "vip_type" : "one_year_vip",
             
      "now_time" : "2025-11-03 15:31:51",
      "isExpire" : false,
      "isExist" : true,
      "in_app" : "[{\"quantity\": \"1\", \"product_id\": \"vip_1_year_auto\", \"transaction_id\": \"490002443854569\", \"original_transaction_id\": \"490002443854569\", \"purchase_date\": \"2025-11-03 07:31:40 Etc/GMT\", \"purchase_date_ms\": \"1762155100000\", \"purchase_date_pst\": \"2025-11-02 23:31:40 America/Los_Angeles\", \"original_purchase_date\": \"2025-11-03 07:31:41 Etc/GMT\", \"original_purchase_date_ms\": \"1762155101000\", \"original_purchase_date_pst\": \"2025-11-02 23:31:41 America/Los_Angeles\", \"expires_date\": \"2099-12-31 23:59:59 Etc/GMT\", \"expires_date_ms\": \"4102444799000\", \"expires_date_pst\": \"2099-12-31 15:59:59 America/Los_Angeles\", \"web_order_line_item_id\": \"490001129186763\", \"is_trial_period\": \"true\", \"is_in_intro_offer_period\": \"true\", \"in_app_ownership_type\": \"PURCHASED\"}]"
    }
  ],
  "code" : 1
};

$done({body: JSON.stringify(obj)});

