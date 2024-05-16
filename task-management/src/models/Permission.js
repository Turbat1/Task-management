// models/Permission.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Permission = sequelize.define('Permission', {
  PermissionID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: DataTypes.STRING,
  Description: DataTypes.TEXT
});

module.exports = Permission;
