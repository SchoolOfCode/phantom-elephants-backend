import { PoolClient, QueryResult } from 'pg';

const { Pool } = require('pg');
const pool: PoolClient = new Pool();

module.exports = {
  query: (
    text: string,
    params: Array<string>,
    callback: (err: Error, result: QueryResult<any>) => void
  ) => {
    return pool.query(text, params, callback);
  },
};
