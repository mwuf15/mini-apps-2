const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3017;

app.use(express.static(path.join(__dirname, '../public/')));

app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
})