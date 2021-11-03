import { Idb, IDataObject } from '../../../types/database';

const db: Idb = require('../../index');
const { data }: { data: Array<IDataObject> } = require('../../data');

// info,id, name, username,avatar

async function populateTable() {
  for (let i = 0; i < data.length; i++) {
    const { students, id } = data[i];

    const sqlQuery = `INSERT INTO students
       (name, username, email, avatar, bootcampid) 
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *;`;
    for (let j = 0; j < students.length; j++) {
      const response = await db.query(sqlQuery, [
        students[j].info.name,
        students[j].info.username,
        students[j].info.email,
        students[j].info.avatar,
        id,
      ]);
      console.log(students[i].info.name, ' populated');
    }
  }
  console.log('students table populated');
}

populateTable();
