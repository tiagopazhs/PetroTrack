const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.post('/sensor-data', async (req, res) => {
    const { equipmentId, timestamp, value } = req.body;

    if (!equipmentId || !timestamp || typeof value !== 'number') {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    // Ensure the data is received
    console.log('Received data:', req.body);
    res.status(201).json({ message: 'Data received' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

