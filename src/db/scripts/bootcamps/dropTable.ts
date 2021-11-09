import { Idb } from '../../../types/database';

const db: Idb = require('../../index');

async function deleteTable(): Promise<void> {
  const sqlQuery = `DROP TABLE IF EXISTS bootcamps`;
  const response = await db.query(sqlQuery);
  console.log('bootcamps table deleted');
}

deleteTable();
