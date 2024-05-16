// models/Task.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Task = sequelize.define('Task', {
  TaskID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Title: DataTypes.STRING,
  Description: DataTypes.TEXT,
  Status: DataTypes.STRING,
  Deadline: DataTypes.DATE,
  UserID: DataTypes.INTEGER,
  ProjectID: DataTypes.INTEGER
});

module.exports = Task;
