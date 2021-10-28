const express = require("express");
const Router = express.Router();

const { query } = require('../db/index');
// import interface for models

//get student by id
export async function getStudentById(id: number) {
  const data = await query('SELECT * FROM student WHERE id = $1', [id]);
  return data.rows;
}

export async function getAllStudents() {
const data = await query('SELECT * FROM students');
  return data.rows;
}


async function addStudent(student) {
	const sqlString = `INSERT INTO student (name, username, bootcampId) VALUES ($1,$2,$3) RETURNING *;`;

	const data = await query(sqlString, [
		student.name,
        student.username,
		student.bootcampId,
		
	]);
  return data.rows[0].name;


}
// need to add table name + insert values into sql string + await query array
async function updateStudent(name, username, bootcampId, student, id ) {
	const sqlString = `UPDATE student  SET name = '$1', username ='$2' bootcampId= $3' WHERE id=${id} RETURNING *;`;
	const data = await query(sqlString, [
        student.name,
        student.username,
		student.bootcamperId, ])
	return data.rows[0];
}

async function deleteStudent({id}) {
	const sqlString = `DELETE FROM student WHERE id='${id}' RETURNING *;`;
	const data = await query(sqlString);
	return data.rows[0];
}
module.exports = { getAllStudents, getStudentById, addStudent, updateStudent,deleteStudent };
