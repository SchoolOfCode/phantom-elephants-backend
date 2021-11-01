const { query } = require('../db/index');
// import interface for models

//get student comment by id
export async function getStudentCommentById(id: number) {
  const data = await query('SELECT * FROM comments WHERE id = $1', [id]);
  return data.rows;
}

export async function getAllStudentsComments() {
const data = await query('SELECT * FROM comments');
  return data.rows;
}


export async function addStudentComments(comments) {
	const sqlString = `INSERT INTO comments (comments, author, imageUrl, date, bootcampid) VALUES ($1,$2,$3,$4,$5) RETURNING *;`;

	const data = await query(sqlString, [
		comments.comments,
        comments.author,
		comments.bootcampid,
		comments.date,
		comments.imageUrl
		
	]);
  return data.rows[0].name;
}

export async function deleteStudentComments({id}) {
	const sqlString = `DELETE FROM comments WHERE id='${id}' RETURNING *;`;
	const data = await query(sqlString);
	return data.rows[0];
}

//Update student comments


export async function updateStudentComments( comments, id) {
	const sqlString = `UPDATE comments SET comments = '$1', author = '$2', imageUrl = '$3', date = '$4', bootcampid = '$5' WHERE id=${id} RETURNING *;`;
	const data = await query(sqlString, [
        comments.comments
         ])
	return data.rows[0];
}