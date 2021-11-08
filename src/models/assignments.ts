import { Idb, Assignment, IAssignmentModelsParams } from '../types/database';

const db: Idb = require('../db/index');
// import interface for models

//get assignments by id
export async function getAssignmentById(id: string): Promise<Assignment> {
  const data = await db.query('SELECT * FROM assignments WHERE id = $1', [id]);
  return data.rows[0];
}

export async function getAllAssignments(): Promise<Assignment[]> {
  const data = await db.query('SELECT * FROM assignments');
  return data.rows;
}

// need to add table name + insert values + response details
export async function addAssignment({
  assignment,
}: IAssignmentModelsParams): Promise<Assignment> {
  const sqlString = `INSERT INTO assignments (studentId, title,type, date) VALUES ($1,$2,$3, $4) RETURNING *;`;

  const data = await db.query(sqlString, [
    assignment.studentId,
    assignment.title,
    assignment.type,
    assignment.date,
  ]);
  return data.rows[0];
}
// need to add table name + insert values into sql string + await query array
export async function updateAssignment({
  id,
  assignment,
}: IAssignmentModelsParams): Promise<Assignment> {
  const sqlString = `UPDATE assignments SET studentId = '$1', title='$2' type= $3' date= '$4' WHERE' id=$5} RETURNING *;`;
  const data = await db.query(sqlString, [
    assignment.studentId,
    assignment.title,
    assignment.type,
    assignment.date,
    id,
  ]);
  return data.rows[0];
}

export async function deleteAssignment(id: string): Promise<Assignment[]> {
  const sqlString = `DELETE FROM assignments  WHERE id='${id}' RETURNING *;`;
  const data = await db.query(sqlString);
  return data.rows;
}
