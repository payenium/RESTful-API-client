var request = require("request");

var options = { method: 'POST',
  url: 'https://merchant.atomicpay.io/api/v1/invoices',
  headers:
   { 'cache-control': 'no-cache',
     Authorization: 'Basic REPLACE_WITH_BASE64_ENCODED_CREDENTIALS',
     'Content-Type': 'application/json' },
  body:
   { redirect: 'REPLACE_WITH_VALUE',
     order_id: 'REPLACE_WITH_VALUE',
     order_price: 'REPLACE_WITH_VALUE',
     order_currency: 'REPLACE_WITH_VALUE',
     order_description: 'REPLACE_WITH_VALUE',
     transaction_speed: 'REPLACE_WITH_VALUE',
     notification_email: 'REPLACE_WITH_VALUE',
     notification_url: 'REPLACE_WITH_VALUE',
     redirect_url: 'REPLACE_WITH_VALUE' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
