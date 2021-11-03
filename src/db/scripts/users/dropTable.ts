import { Idb } from '../../../types/database';

const db: Idb = require('../../index');

async function deleteTable(): Promise<void> {
  const sqlQuery = `DROP TABLE IF EXISTS users`;
  const response = await db.query(sqlQuery);
  console.log('users table deleted');
}

deleteTable();
