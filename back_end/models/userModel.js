// models/userModel.js

const createDbConnection = require('../config/dbConfig');

const getUserCount = async (connection) => {
  try {
    const [rows] = await connection.execute('SELECT COUNT(*) AS totalUsers FROM user_list');
    return rows[0].totalUsers;
  } catch (error) {
    console.error('Error fetching user count:', error.message);
    throw new Error('Database query failed');
  }
};

module.exports = {
  getUserCount
};
