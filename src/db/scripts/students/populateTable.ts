import { Idb, IDataObject } from "../../dbTypes";

const db: Idb = require("../../index");
const { data }: { data: Array<IDataObject> } = require("../../data");

// info,id, name, username,avatar

async function populateTable() {
  for (let index = 0; index < data.length; index++) {
    const { students, id } = data[index];
    const sqlQuery = `INSERT INTO students
       (name, username, avatar,bootcampid) 
       VALUES ($1, $2, $3, $4)
       RETURNING *;`;
    for (let i = 0; i < students.length; i++) {
      console.log(students[i].info.name, " populated");
      const response = await db.query(sqlQuery, [
        students[i].info.name,
        students[i].info.username,
        students[i].info.avatar,
        id,
      ]);
    }
  }
  console.log("students table populated");
}

populateTable();
