const postChatworkMessage = require('post-chatwork-message')
const CHATWORK_API_KEY = 'f6e25047f3fbfa1a287c0232a64a2147'

module.exports = (value) => {
  const roomId = '161861126'
  let date = new Date()

  // chatworkメッセージの作成
  let chat_data = `【気になった映画通知】

  通知日：${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}
  順位：${value.rank}
  タイトル：${value.title}
  概要：${value.overview}`

  // chatworkにメッセージを送信
  postChatworkMessage(CHATWORK_API_KEY, roomId, chat_data)
}