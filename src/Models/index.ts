const express = require("express");
const Router = express.Router();

const { query } = require('../db/index.js');
// need to add table name
async function getBootcamper() {
	const sqlString = `SELECT * FROM  `;
	const response = await query(sqlString);
	// console.log(response);
	return response.rows[0];
}


async function getBootcamperbyId({id}) {
	const sqlString = `SELECT * FROM    WHERE ID=${id} `;
	const response = await query(sqlString);
	// console.log(response);
	return response.rows[0];


// need to add table name + insert values + response details
async function addBootcamper(bootcamper) {
	const sqlString = `INSERT INTO  () VALUES ($1,$2,$3) RETURNING *;`;

	const response = await query(sqlString, [
		bootcamper.
		bootcamper.
		bootcamper.
	]);
	return response.rows[0].carr_name;


}
// need to add table name + insert values into sql string + await query array
async function updateBootcamper(bootcamper, id) {
	const sqlString = `UPDATE  SET    =$1,  WHERE id=${id} RETURNING *;`;
	console.log(bootcamper);
	const response = await query(sqlString, []);
	return response.rows[0];
}
//Need to add table name
async function deleteBootcamper({id}) {
	const sqlString = `DELETE FROM  WHERE id='${id}' RETURNING *;`;

	const response = await query(sqlString);
	return response.rows[0];
}
module.exports = { getBootcamper, getBootcamperbyId, addBootcamper, updateBootcamper, deleteBootcamper };
