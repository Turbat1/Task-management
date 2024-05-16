// models/Notification.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Notification = sequelize.define('Notification', {
  NotificationID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Content: DataTypes.TEXT,
  Type: DataTypes.STRING,
  Timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  UserID: DataTypes.INTEGER
});

module.exports = Notification;
