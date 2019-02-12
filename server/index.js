const express    = require('express');
const path       = require('path');
const logger     = require('morgan');
const bodyParser = require('body-parser');

const app    = express();
const http   = require('http').Server(app);
const router = require('./routes');
const port   = process.env.PORT || 1128;

// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './../public')));
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// router
app.use(router);

// default route *when refreshing page
app.use('*', (err, res) => {
  res.sendFile(path.resolve(__dirname, './../public', 'index.html'));
});

http.listen(port, () => console.log(`server is listening on port: ${port}`));
