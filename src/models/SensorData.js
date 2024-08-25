const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Sensor = require('./Sensor');

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

