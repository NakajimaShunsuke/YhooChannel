import express from 'express';
// import socketIO from "socket.io";

export default (app, http) => {
  app.listen(process.env.PORT || 8080)
  app.use(express.json());

  // ランキングを取得する
  app.get('/movieRanking', (req, res) => {
    const crawling = require('./Api/crawling')
    Promise.all(crawling()).then((result) => {
      // console.log(result[0]);
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