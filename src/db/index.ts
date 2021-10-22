import { PoolClient } from 'pg';

const { Pool } = require('pg');
const pool: PoolClient = new Pool();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
