// sequelize.js
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('Task Management', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
