import { Idb } from '../../dbTypes';

const db: Idb = require('../../index');

/*
Writing an async function called createTable
Write a SQL query string to create a table if it doesn't already exist
Pass the SQL string into the db.query function and await the response
Console.log if it was successful
Outside of the function, call the createTable function
*/

 // info,id, name, username,avatar

async function createTable() : Promise<void> {
const sqlQuery = `CREATE TABLE IF NOT EXISTS students (

    id SERIAL PRIMARY KEY,
    name TEXT,
    username TEXT,
    avatar TEXT
);` ;

try {
    const response = await db.query(sqlQuery);
    console.log('Students table created');
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }

}
createTable();