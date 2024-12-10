const fastify = require('fastify')({logger:true});
const createDbConnection = require('./config/dbConfig');
const userRoutes  = require("./routes/userRoutes")

const startServer = async () => {
  try {
    const connection = await createDbConnection();
    fastify.register(userRoutes, { connection });

    fastify.listen({ port: 6776 }, function (err, address) {
      if (err) {
        fastify.log.error(err)
        process.exit(1)
      }
      console.log(`Server listening at ${address}`);
    });
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
};

startServer();
