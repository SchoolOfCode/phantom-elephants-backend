import { Idb } from '../../dbTypes';

/* id, name, region, startDate */
const db: Idb = require('../../index');

/*
Writing an async function called createTable
Write a SQL query string to create a table if it doesn't already exist
Pass the SQL string into the db.query function and await the response
Console.log if it was successful
Outside of the function, call the createTable function
*/

async function createTable(): Promise<void> {
  const sqlQuery = `CREATE TABLE IF NOT EXISTS bootcamps (
    id SERIAL PRIMARY KEY,
    name TEXT,
    region TEXT,
    startdate DATE
    );`;

  try {
    const response = await db.query(sqlQuery);
    console.log('Bootcamps table created');
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

createTable();
