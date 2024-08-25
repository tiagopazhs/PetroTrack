const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/db');
const Sensor = require('./models/Sensor');
const SensorData = require('./models/SensorData');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/all-sensor-data', async (req, res) => {
  try {
    const allData = await SensorData.findAll({
      include: [Sensor]
    });
    res.status(200).json(allData);
  } catch (error) {
    console.error('Error fetching all sensor data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/sensor-data', async (req, res) => {
  try {
    const { equipmentId, timestamp, value } = req.body;

    if (!equipmentId || !timestamp || typeof value !== 'number') {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    let [sensor, created] = await Sensor.findOrCreate({
      where: { equipment_id: equipmentId },
      defaults: { created_at: new Date() }
    });

    const newData = await SensorData.create({
      sensor_id: sensor.id,
      timestamp,
      value
    });

    res.status(201).json(newData);
  } catch (error) {
    console.error('Error saving sensor data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
}).catch(error => {
  console.error('Error syncing database:', error);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
