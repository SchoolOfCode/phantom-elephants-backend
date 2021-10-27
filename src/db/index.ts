import { PoolClient, QueryResult } from 'pg';

const { Pool } = require('pg');
const pool: PoolClient = new Pool({
  connectionString: process.env.PGURL,
  ssl: { rejectUnauthorized: false },
});

module.exports = {
  query: (
    text: string,
    params: Array<any>,
    callback: (err: Error, result: QueryResult<any>) => void
  ) => {
    return pool.query(text, params, callback);
  },
};
