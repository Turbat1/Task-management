// models/TaskLog.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const TaskLog = sequelize.define('TaskLog', {
  LogID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  TaskID: DataTypes.INTEGER,
  UserID: DataTypes.INTEGER,
  LogTimestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  LogContent: DataTypes.TEXT
});

module.exports = TaskLog;
