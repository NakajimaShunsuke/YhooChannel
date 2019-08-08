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