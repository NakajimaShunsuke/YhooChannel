import express from 'express';
// import socketIO from "socket.io";

export default (app) => {
  app.listen(process.env.PORT || 8080)
  app.use(express.json());

  // ランキングを取得する
  app.get('/app/movieranking', (req, res) => {
    const crawling = require('./Api/RankingCrawling')
    Promise.all(crawling()).then((result) => {
      res.json(result[0]);
    });
  });
  // Chatworkにお気にいいり映画を通知
  app.get('/app/chatworkapi', (req, res) => {
    const chatwork = require('./Api/ChatworkAPI')
    chatwork({
      "rank": 1,
      "title": "天気の子",
      "overview": "「君の名は。」が歴史的な大ヒットを記録した新海誠監督が、天候の調和が狂っていく時代に、運命に翻弄されながらも自らの生き方を選択しようと..."
    })
    res.end()
  });
  //
  // app.post('/bar', (req, res) => {
  //   res.json(req.body);
  // });
  // 
  // optional support for socket.io
  // 
  // let io = socketIO(http);
  // io.on("connection", client => {
  //   client.on("message", function(data) {
  //     // do something
  //   });
  //   client.emit("message", "Welcome");
  // });
}