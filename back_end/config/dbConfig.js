const mysql = require('mysql2/promise');
require('dotenv').config();

const createDbConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log('Database connected successfully');
    return connection;
  } catch (err) {
    console.error('Database connection failed:', err);
    throw err; // Ensure it propagates the error
  }
};

module.exports = createDbConnection;
