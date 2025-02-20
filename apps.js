const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('public'));

app.listen(port,'0.0.0.0', () => {
  console.log(`App running at http://0.0.0.0:${port}`);
});
