require('dotenv').config();

module.exports = {
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
