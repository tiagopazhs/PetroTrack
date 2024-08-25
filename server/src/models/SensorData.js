const { DataTypes } = require('sequelize');
const sequelize = require('src/database/db');
const Sensor = require('src/models/Sensor');

const SensorData = sequelize.define('SensorData', {
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

SensorData.belongsTo(Sensor, { foreignKey: 'sensor_id' });

module.exports = SensorData;

