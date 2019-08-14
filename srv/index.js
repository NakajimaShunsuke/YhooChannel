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
  // TV番組検索
  app.get('/app/programsearch', (req, res) => {
    const crawling = require('./Api/ProgramCrawling')
    Promise.all(crawling()).then((result) => {
      res.json(result[0]);
    });
  });
  // Chatworkにお気にいいり映画を通知
  app.post('/app/chatworkapi', (req, res) => {
    const chatwork = require('./Api/ChatworkAPI')
    chatwork(req.body)

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