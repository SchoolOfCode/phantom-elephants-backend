
const { query } = require('../db/index');
// import interface for models

//get bootcamp by id
export async function getUserById(id: number) {
  const data = await query('SELECT * FROM user WHERE id = $1', [id]);
  return data.rows;
}

export async function getAllUsers() {
const data = await query('SELECT * FROM user');
  return data.rows;
}


export async function addUser(user) {
	const sqlString = `INSERT INTO user (name, bootcamperId, watchList) VALUES ($1,$2,$3) RETURNING *;`;

	const data = await query(sqlString, [
		user.name,
		user.bootcamperId,
		user.watchList
	]);
  return data.rows[0].name;


}
// need to add table name + insert values into sql string + await query array
export async function updateUser(user, id ) {
	const sqlString = `UPDATE user  SET name = '$1', watchList='$2' bootcamperId= $3' WHERE id=${id} RETURNING *;`;
	const data = await query(sqlString, [
        user.name,
		user.bootcamperId,
		user.watchList, ])
	return data.rows[0];
}

export async function deleteUser({id}) {
	const sqlString = `DELETE FROM user WHERE id='${id}' RETURNING *;`;
	const data = await query(sqlString);
	return data.rows[0];
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