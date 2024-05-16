// models/Client.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Client = sequelize.define('Client', {
  ClientID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: DataTypes.STRING,
  ContactPerson: DataTypes.STRING,
  Email: DataTypes.STRING,
  Phone: DataTypes.STRING,
  Address: DataTypes.STRING
});

module.exports = Client;
