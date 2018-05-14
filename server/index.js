const express = require('express');
const fs = require('fs');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const livereload = require('livereload');
// const livereloadMiddleware = require('connect-livereload');

const app = express();
const port = process.env.PORT || 1128;
// const liveServer = livereload.createServer({
//   exts: ['html', 'js'],
//   debug: true
// });
// liveServer.watch(path.resolve(__dirname, './../public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './../public')));
// app.use((req, res, next) => {
//   res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
//   res.setHeader('Pragma', 'no-cache');
//   res.setHeader('Expires', '0');
//   next();
// });
app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});


const server = livereload.createServer();

server.watch(__dirname + "./../public");

app.use('*', (err, res) => {
  res.sendFile(
    path.resolve(__dirname, './../public', 'index.html')
  );
});
