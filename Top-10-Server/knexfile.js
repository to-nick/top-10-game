require('dotenv').config();

const knexConfig = {
    client: 'mysql2',
    connection: {
      host: process.env.db_host,
      database: process.env.db_name,
      user:     process.env.db_user,
      password: process.env.db_password,
      port: process.env.db_port || 3306,
      ssl: {
        ca: process.env.db_ssl_cert
      }
    }
};

const knex = require('knex')(knexConfig);
knex.raw('SELECT 1')
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
  });


module.exports = knexConfig;