import { Idb, IDataObject } from '../../../types/database';

const db: Idb = require('../../index');
const { data }: { data: Array<IDataObject> } = require('../../data');

// info,id, name, username,avatar

async function populateTable() {
  for (let i = 0; i < data.length; i++) {
    const { students, id } = data[i];
  
    const sqlQuery = `INSERT INTO students
       (name, username, avatar,bootcampid) 
       VALUES ($1, $2, $3, $4)
       RETURNING *;`;
    const response = await db.query(sqlQuery, [
      students[i].info.name,
      students[i].info.username,
      students[i].info.avatar,
     id 
    ]);

    console.log(response);
  }

  console.log('students table populated');
}

populateTable();
