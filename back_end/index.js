const fastify = require('fastify')({logger:true});
const swagger = require('@fastify/swagger');
const swaggerUI = require('@fastify/swagger-ui');
const createDbConnection = require('./config/dbConfig');
const userRoutes  = require("./routes/userRoutes")

const startServer = async () => {
  try {
    const connection = await createDbConnection();
    fastify.register(swagger, {
      swagger: {
        info: {
          title: 'User Count API',
          description: 'API for managing user counts',
          version: '1.0.0',
        },
      },
    });

    fastify.register(swaggerUI, {
      routePrefix: '/docs',
      staticCSP: true,
      uiConfig: {
        docExpansion: 'list',
        deepLinking: true,
      },
    });
    
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
