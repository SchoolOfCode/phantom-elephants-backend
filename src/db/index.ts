import { PoolClient, QueryResult } from 'pg';

const { Pool } = require('pg');
const pool: PoolClient = new Pool({
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
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
