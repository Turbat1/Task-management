// models/Department.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Department = sequelize.define('Department', {
  DepartmentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: DataTypes.STRING,
  Description: DataTypes.TEXT
});

module.exports = Department;
