const line = require('@line/bot-sdk');

// Quick Reply 回應訊息
const quickReplyMessage = {
  type: 'text',
  text: '👋 歡迎！請選擇您要執行的操作：',
  quickReply: {
    items: [
      {
        type: 'action',
        action: {
          type: 'message',
          label: '小明',
          text: '小明'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '姐',
          text: '姐'
        }
      },
      {
        type: 'action',
        action: {
          type: 'message',
          label: '爸爸',
          text: '爸爸'
        }
      }
    ]
  }
};

// 在 webhook 事件中回覆 quick reply
app.post('/webhook', line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(async (event) => {
    if (event.type === 'message' && event.message.type === 'text') {
      return client.replyMessage(event.replyToken, quickReplyMessage);
    }
  }))
  .then(() => res.status(200).end())
  .catch((err) => console.error(err));
});
