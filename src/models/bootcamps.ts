const express = require("express");
const Router = express.Router();

const { query } = require('../db/index');
// import interface for models

//get bootcamp by id
export async function getBootcampById(id: number) {
  const data = await query('SELECT * FROM bootcamps WHERE id = $1', [id]);
  return data.rows;
}

export async function getAllBootcamps() {
  console.log('Hello from the get bootcamps model');
  const data = await query('SELECT * FROM bootcamps');
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
async function addBootcamp(bootcamp) {
	const sqlString = `INSERT INTO bootcamps (name, region, startDate) VALUES ($1,$2,$3) RETURNING *;`;

	const data = await query(sqlString, [
		bootcamp.name,
		bootcamp.region,
		bootcamp.startDate
	]);
  return data.rows[0].name;


}
// need to add table name + insert values into sql string + await query array
async function updateBootcamp(bootcamp, id) {
	const sqlString = `UPDATE bootcamps  SET name = '$1', region='$2' startDate= $3' WHERE id=${id} RETURNING *;`;
	console.log(bootcamp);
	const data = await query(sqlString, [
    bootcamp.name,
  	bootcamp.region,
	bootcamp.startDate]);
	return data.rows[0];
}

async function deleteBootcamp({id}) {
	const sqlString = `DELETE FROM bootcamps  WHERE id='${id}' RETURNING *;`;
	const data = await query(sqlString);
	return data.rows[0];
}
module.exports = {getAllBootcamps, getBootcampById, addBootcamp, updateBootcamp, deleteBootcamp };