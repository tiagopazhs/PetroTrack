const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('petrotrack_db', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;

