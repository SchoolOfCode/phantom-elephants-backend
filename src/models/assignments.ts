
const { query } = require('../db/index');
// import interface for models

//get assignments by id
 export async function getAssignmentsById(id: number) {
  const data = await query('SELECT * FROM assignments WHERE id = $1', [id]);
  return data.rows;
}

 export async function getAllAssignments() {
  const data = await query('SELECT * FROM assignments');
  return data.rows;
}


// need to add table name + insert values + response details
export async function addAssignments(assignments) {
	const sqlString = `INSERT INTO assignments (studentId, title,type, date) VALUES ($1,$2,$3, $4) RETURNING *;`;

	const data = await query(sqlString, [
    assignments.studentId, 
    assignments.title,
    assignments.type, 
    assignments.date,
	]);
  return data.rows[0].name;


}
// need to add table name + insert values into sql string + await query array
export async function updateAssignments(id, assignments) {
	const sqlString = `UPDATE assignments SET studentId = '$1', title='$2' type= $3' date= '$4' WHERE' id=${id} RETURNING *;`;
	const data = await query(sqlString, [
    assignments.studentId, 
    assignments.title,
    assignments.type, 
    assignments.date, ]);
	return data.rows[0];
}

export async function deleteAssignments({id}) {
	const sqlString = `DELETE FROM assignments  WHERE id='${id}' RETURNING *;`;
	const data = await query(sqlString);
	return data.rows[0];
}
