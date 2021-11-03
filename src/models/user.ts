import { Idb } from '../types/database';
const db: Idb = require('../db/index');
// import interface for models

//get bootcamp by id
export async function getUserById(id: string) {
  const data = await db.query('SELECT * FROM user WHERE id = $1', [id]);
  return data.rows;
}

export async function getAllUsers() {
  const data = await db.query('SELECT * FROM user');
  return data.rows;
}

export async function addUser({ user }: { user: Record<string, any> }) {
  const sqlString = `INSERT INTO user (name, bootcamperId, watchList) VALUES ($1,$2,$3) RETURNING *;`;

  const data = await db.query(sqlString, [
    user.name,
    user.bootcamperId,
    user.watchList,
  ]);
  return data.rows[0];
}
// need to add table name + insert values into sql string + await query array
export async function updateUser({
  user,
  id,
}: {
  user: Record<string, any>;
  id: number;
}) {
  const sqlString = `UPDATE user  SET name = '$1', watchList='$2' bootcamperId= $3' WHERE id=${id} RETURNING *;`;
  const data = await db.query(sqlString, [
    user.name,
    user.bootcamperId,
    user.watchList,
  ]);
  return data.rows[0];
}

export async function deleteUser(id: string) {
  const sqlString = `DELETE FROM user WHERE id=$1 RETURNING *;`;
  const data = await db.query(sqlString, [id]);
  return data.rows;
}

// // gets all students names from all columns
// async function getAllStudents() {
//     const data = await query("SELECT * FROM students;");
//     return data.rows;
//   }

// async function getStudentsById(id:number) {
//     const data = await query("SELECT * FROM students WHERE id = $1", [id]);
//     return data.rows;

// export default {
//   getBootcampById,
//   getAllBootcamps,
// };

// need to add table name + insert values + response details
