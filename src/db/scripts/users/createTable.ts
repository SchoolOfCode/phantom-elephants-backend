
import { Idb } from '../../dbTypes';

const db: Idb = require('../../index');

 // id, bootcampId, watchList (array of students names)

async function createTable() : Promise<void> {
const sqlQuery = `CREATE TABLE IF NOT EXISTS users (

    id SERIAL PRIMARY KEY,
    bootcampId INTEGER,
    watchList TEXT,
);` ;

try {
    const response = await db.query(sqlQuery);
    console.log('Users table created');
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }

}
createTable();