// INNER joins for tables

const { query } = require("../db/index");

export async function getAllStudentRecordsById(id) {
  const data = await query(
    `SELECT * FROM bootcamps INNER JOIN students ON bootcamps.id = students.bootcampid INNER JOIN assignments ON students.id = assignments.studentid WHERE students.id = $1 ORDER BY date;`,
    [id]
  );
  return data.rows;
}
export async function getAllStudentsX() {
  const data = await query("SELECT * FROM students");
  return data.rows;
}

export async function getAllStudentRecordsByIdTypeAndDate(type) {
  const data = await query(
    `SELECT * FROM bootcamps INNER JOIN students ON bootcamps.id = students.bootcampid INNER JOIN assignments ON students.id = assignments.studentid WHERE assignments.type LIKE "$1";`,
    [type]
  );
  return data.rows;
}
/* let workshops = [];
    for (let x = 1; x < workshopsSpread.length; x++) {
      if (
        workshopsSpread[x].date.toString().slice(0, 10) ===
        workshopsSpread[x - 1].date.toString().slice(0, 10)
      ) {
        workshops.push([workshopsSpread[x].title, workshopsSpread[x].title]);
      } else {
        workshops.push([workshopsSpread[x].title]);
      }
      */
