// index.js
const getUsers = require('./src/utils/getUserData');

(async () => {
  try {
    // Call the function to get users
    await getUsers();
  } catch (error) {
    console.error('Error:', error);
  }
})();
