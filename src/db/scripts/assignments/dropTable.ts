import { Idb } from '../../../types/database';

const db: Idb = require('../../index');

async function deleteTable(): Promise<void> {
  const sqlQuery = `DROP TABLE IF EXISTS assignments;`;

  try {
    const response = await db.query(sqlQuery);
    console.log('Assignments table deleted');
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

deleteTable();
