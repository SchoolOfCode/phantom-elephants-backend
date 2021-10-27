import { Idb, IDataObject } from '../../dbTypes';

const db: Idb = require('../../index');
const { data }: { data: Array<IDataObject> } = require('../../data');

// info,id, name, username,avatar

async function populateTable() {
  for (let i = 0; i < data.length; i++) {
    const { students } = data[i];
    const sqlQuery = `INSERT INTO students
       (name, username, avatar) 
       VALUES ($1, $2, $3)
       RETURNING *;`;
    const response = await db.query(sqlQuery, [
      students[i].info.name,
      students[i].info.username,
      students[i].info.avatar,
    ]);

    console.log(response);
  }

  console.log('students table populated');
}

populateTable();
