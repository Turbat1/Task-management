// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const User = sequelize.define('User', {
  UserID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Username: {
    type: DataTypes.STRING,
    unique: true
  },
  Password: DataTypes.STRING,
  Name: DataTypes.STRING,
  Email: {
    type: DataTypes.STRING,
    unique: true
  },
  RoleID: DataTypes.INTEGER,
  DepartmentID: DataTypes.INTEGER
});

module.exports = User;
