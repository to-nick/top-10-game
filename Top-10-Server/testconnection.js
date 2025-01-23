const knex = require('knex');
require('dotenv').config();
const fs =require("fs");

 const db = knex({
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
});

db.raw('SELECT 1 + 1 AS solution')
  .then((result) => {
    console.log('Connection successful:', result); // Output: 2
    db.destroy(); // Close the connection
  })
  .catch((error) => {
    console.error('Connection failed:', error.message);
    db.destroy(); // Close the connection on error
  });
