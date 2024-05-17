// utils/getUserData.js
const { User } = require('../models/User');

async function getUsers() {
  try {
    const users = await User.findAll();
    console.log(users);
  } catch (err) {
    console.error('Error retrieving users:', err);
  }
}

module.exports = getUsers;
