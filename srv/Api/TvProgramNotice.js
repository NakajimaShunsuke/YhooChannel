const postChatworkMessage = require('post-chatwork-message')
const API_KEY = require('../API_KEY.json').CHATWORK_API_KEY
const chatwork_data = require('../env.json').chatwork

module.exports = (value) => {
  const roomId = chatwork_data.tvRoomId

  let date = new Date()

  // chatworkメッセージの作成
  let chat_data = `【気になったTV番組通知】

  通知日：${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}
  放送局：${value.tvStation}
  タイトル：${value.title}
  放送日時：${value.date}`

  // chatworkにメッセージを送信
  postChatworkMessage(API_KEY, roomId, chat_data)
}