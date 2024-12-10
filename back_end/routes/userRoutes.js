const userRoutes = async (fastify, options) => {
  const connection = options.connection; 

  fastify.get('/api/usercount', async (request, reply) => {
    try {
      const [rows] = await connection.execute('SELECT COUNT(*) AS totalUsers FROM user_list');
      const totalUsers = rows[0].totalUsers;

      return { totalUsers };
    } catch (err) {
      console.error('Database query failed:', err);
      reply.status(500).send({ error: 'Failed to fetch user count' });
    }
  });
};

module.exports = userRoutes;
