// models/Role.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Role = sequelize.define('Role', {
  RoleID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: DataTypes.STRING,
  Description: DataTypes.TEXT
});

module.exports = Role;
