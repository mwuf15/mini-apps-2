const express = require ('express');
const app = express();
const bodyparser = require ('body-parser');
const path = require ('path');
const PORT = 3015;

app.use(express.static(path.join(__dirname, './public')));

app.listen(PORT, () => {
  console.log(`connected to: ${PORT}` );
})

