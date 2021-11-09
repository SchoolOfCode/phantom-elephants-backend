import { Idb } from '../types/database';
const db: Idb = require('../db/index');
// import interface for models

//get bootcamp by id
export async function getBootcampById(
  id: string
): Promise<Record<string, string | number>[]> {
  const data = await db.query('SELECT * FROM bootcamps WHERE id = $1', [id]);
  return data.rows;
}

export async function getAllBootcamps(): Promise<
  Record<string, string | number>[]
> {
  const data = await db.query('SELECT * FROM bootcamps');
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
export async function addBootcamp({
  bootcamp,
}: {
  bootcamp: Record<string, string | number>;
}): Promise<Record<string, string | number>> {
  const sqlString = `INSERT INTO bootcamps (name, region, startDate) VALUES ($1,$2,$3) RETURNING *;`;

  const data = await db.query(sqlString, [
    bootcamp.name,
    bootcamp.region,
    bootcamp.startDate,
  ]);
  return data.rows[0];
}
// need to add table name + insert values into sql string + await query array
export async function updateBootcamp({
  bootcamp,
  id,
}: {
  bootcamp: Record<string, string | number>;
  id: string;
}): Promise<Record<string, string | number>> {
  const sqlString = `UPDATE bootcamps  SET name = '$1', region='$2' startDate= $3' WHERE id=${id} RETURNING *;`;

  const data = await db.query(sqlString, [
    bootcamp.name,
    bootcamp.region,
    bootcamp.startDate,
  ]);
  return data.rows[0];
}

export async function deleteBootcamp(
  id: string
): Promise<Record<string, string | number>[]> {
  const sqlString = `DELETE FROM bootcamps  WHERE id='${id}' RETURNING *;`;
  const data = await db.query(sqlString);
  return data.rows;
}
