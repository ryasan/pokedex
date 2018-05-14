const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 1128;

app.use(express.static(path.resolve(__dirname, './../public')));

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
