const postChatworkMessage = require('post-chatwork-message')
const API_KEY = require('../API_KEY.json').CHATWORK_API_KEY
const chatwork_data = require('../env.json').chatwork

module.exports = (value) => {
  const roomId = chatwork_data.roomId

  let date = new Date()

  // chatworkメッセージの作成
  let chat_data = `【気になった映画通知】

  通知日：${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}
  順位：${value.rank}
  タイトル：${value.title}
  概要：${value.overview}`

  // chatworkにメッセージを送信
  postChatworkMessage(API_KEY, roomId, chat_data)
}