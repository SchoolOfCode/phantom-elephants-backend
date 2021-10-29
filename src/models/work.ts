const express = require("express");
const Router = express.Router();

const { query } = require('../db/index');
// import interface for models

//get bootcamp by id
export async function getWorkById(id: number) {
  const data = await query('SELECT * FROM work WHERE id = $1', [id]);
  return data.rows;
}

export async function getAllWork() {
  const data = await query('SELECT * FROM work');
  return data.rows;
}


// need to add table name + insert values + response details
async function addWork(work) {
	const sqlString = `INSERT INTO work (studentId, title,type, date) VALUES ($1,$2,$3, $4) RETURNING *;`;

	const data = await query(sqlString, [
        work.studentId, 
        work.title,
        work.type, 
        work.date,
	]);
  return data.rows[0].name;


}
// need to add table name + insert values into sql string + await query array
async function updateWork(studentId, title,type, date) {
	const sqlString = `UPDATE work SET studentId = '$1', title='$2' type= $3' date= '$4' WHERE' id=${id} RETURNING *;`;
	const data = await query(sqlString, [
        work.studentId, 
        work.title,
        work.type, 
        work.date, ]);
	return data.rows[0];
}

async function deleteWork({id}) {
	const sqlString = `DELETE FROM work  WHERE id='${id}' RETURNING *;`;
	const data = await query(sqlString);
	return data.rows[0];
}
module.exports = {getAllWork, getWorkById, addWork, updateWork, deleteWork };