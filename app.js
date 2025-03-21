'use strict';

const express = require('express')
const app = express();

// dummy for pipeline push
const port = 8080;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('How is your day going? Congratulations on your Node Hello World Application built on Docker!!!!');
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
