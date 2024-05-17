// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const User = sequelize.define('User', {
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING,
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  roleID: DataTypes.INTEGER,
  departmentID: DataTypes.INTEGER
}, {
  tableName: 'User', // Specify the table name explicitly
});

module.exports = { User };
