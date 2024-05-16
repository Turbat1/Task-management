// models/Team.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Team = sequelize.define('Team', {
  TeamID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: DataTypes.STRING,
  Description: DataTypes.TEXT
});

module.exports = Team;
