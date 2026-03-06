const { Pool } = require('pg');
require('dotenv').config();

console.log('⏳ Reading db.js... Did we find the DATABASE_URL?', process.env.DATABASE_URL ? 'YES' : 'NO!');

// new pool to neon / local docker
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// testing the connection 
pool.connect()
  .then((client) => {
    // We added console.log here!
    console.log('✅ Successfully connected to the database!');
    client.release(); // Always release the connection back to the pool
  })
  .catch((err) => console.log('❌ Database connection error', err.stack));

module.exports = pool;
