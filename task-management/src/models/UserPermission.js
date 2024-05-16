// models/UserPermission.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const UserPermission = sequelize.define('UserPermission', {});

module.exports = UserPermission;
