// models/Project.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Project = sequelize.define('Project', {
  ProjectID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: DataTypes.STRING,
  Description: DataTypes.TEXT,
  StartDate: DataTypes.DATE,
  EndDate: DataTypes.DATE,
  UserID: DataTypes.INTEGER,
  ClientID: DataTypes.INTEGER
});

module.exports = Project;
