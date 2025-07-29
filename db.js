// const { Pool } = require('pg');
import pkg from 'pg';
const { Pool } = pkg;
import config from './config.js'

const pool = new Pool({
  user: config.Db_username,
  host: config.DB_host,
  database: config.DB_database,
  password: config.DB_password,
  port:config.DB_port,
  ssl: {
    rejectUnauthorized: false
  }

});

// module.exports = pool;
export default pool;