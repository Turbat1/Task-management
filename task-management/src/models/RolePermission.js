// models/RolePermission.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const RolePermission = sequelize.define('RolePermission', {});

module.exports = RolePermission;
