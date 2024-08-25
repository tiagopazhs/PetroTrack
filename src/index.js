const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

