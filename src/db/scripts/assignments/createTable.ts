/* Required:
    id
    studentId
    title
    type
    date

  Optional:
    url
    score
    timeOfDay
    experienceRating
    comment
    didAttend
    content
*/

import { Idb } from '../../dbTypes';

const db: Idb = require('../../index');

async function createTable(): Promise<void> {
  const sqlQuery = `CREATE TABLE IF NOT EXISTS assignments (
    id SERIAL PRIMARY KEY,
    studentid INTEGER NOT NULL,
    title TEXT,
    type TEXT,
    date DATE NOT NULL,
    url TEXT,
    score TEXT,
    timeofday TEXT,
    experiencerating INTEGER,
    comment TEXT,
    didattend BOOLEAN,
    content TEXT
  )`;

  try {
    const response = await db.query(sqlQuery);
    console.log('Assignments table created');
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

createTable();
