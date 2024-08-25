const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Sensor = sequelize.define('Sensor', {
  equipment_id: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Sensor;

