import { Idb, IStudentInfo } from "../types/database";
const db: Idb = require("../db/index");
// import interface for models

//get student by id
export async function getStudentById(id: string) {
  const data = await db.query("SELECT * FROM student WHERE id = $1", [id]);
  return data.rows;
}

export async function getAllStudents() {
  const data = await db.query("SELECT * FROM students");
  return data.rows;
}

export async function addStudent(student: IStudentInfo) {
  const sqlString = `INSERT INTO students (name, username, avatar, bootcampid) VALUES ($1,$2,$3,$4) RETURNING *;`;

  const data = await db.query(sqlString, [
    student.name,
    student.username,
    student.avatar,
    student.bootcampId,
  ]);
  return data.rows[0];
}

export async function updateStudent({
  student,
  id,
}: {
  student: IStudentInfo;
  id: number;
}) {
  const sqlString = `UPDATE student  SET name = '$1', username ='$2' bootcampId= $3' WHERE id=${id} RETURNING *;`;
  const data = await db.query(sqlString, [
    student.name,
    student.username,
    student.bootcampId,
  ]);
  return data.rows[0];
}

export async function deleteStudent(id: string) {
  const sqlString = `DELETE FROM student WHERE id='${id}' RETURNING *;`;
  const data = await db.query(sqlString);
  return data.rows;
}

//Update student comments

// export async function updateStudentComments(student, id) {
//   const sqlString = `UPDATE student  SET comments = '$1' WHERE id=${id} RETURNING *;`;
//   const data = await db.query(sqlString, [student.comments]);
//   return data.rows[0];
// }
