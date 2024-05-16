// index.js
const sequelize = require('./src/models/sequelize');
const User = require('./src/models/User'); 
const Client = require('./src/models/Client');
const Department = require('./src/models/Department');
const Notification = require('./src/models/Notification');
const Permission = require('./src/models/Permission');
const Project = require('./src/models/Project');
const Role = require('./src/models/Role')
const RolePermission = require('./src/models/RolePermission');
const Task = require('./src/models/Task');
const TaskLog = require('./src/models/TaskLog');
const Team = require('./src/models/Team');
const UserPermission = require('./src/models/UserPermission');

(async () => {
  try {
    // Sync all defined models to the database
    await sequelize.sync({ force: true });
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})();
