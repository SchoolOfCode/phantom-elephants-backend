import { Idb } from "../../../types/database"

const db: Idb = require('../../index');


async function createCommentsTable(): Promise<void> {
    const sqlQuery = `CREATE TABLE IF NOT EXISTS comments (
  
      id SERIAL PRIMARY KEY,
      comments TEXT,
      author TEXT,
      imageUrl TEXT,
      date Date,
      studentid INTEGER
      
  );`;
  
    try {
      const response = await db.query(sqlQuery);
      console.log('Comments table created');
    } catch (error) {
      console.log(`${error.name}: ${error.message}`);
    }
  }
  createCommentsTable();
  