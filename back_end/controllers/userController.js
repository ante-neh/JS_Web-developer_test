const userModel = require('../models/userModel');

const getUserCount = async (request, reply, connection) => {
  try {
    const totalUsers = await userModel.getUserCount(connection);
    return { totalUsers };
  } catch (error) {
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getUserCount
};
