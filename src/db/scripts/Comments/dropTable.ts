import { Idb } from '../../../types/database';

const db: Idb = require('../../index');

async function deleteCommentsTable(): Promise<void> {
  const sqlQuery = `DROP TABLE IF EXISTS comments`;
  const response = await db.query(sqlQuery);
  console.log('Comments table deleted');
}

deleteCommentsTable();
