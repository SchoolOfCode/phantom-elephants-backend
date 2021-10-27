const { query } = require("../db/index");
// import interface for models

//get bootcamp by id
async function getBootcampById(id: number) {
  const data = await query("SELECT * FROM bootcamps WHERE id = $1", [id]);
  return data.rows;
}

async function getAllBootcamps() {
  const data = await query("SELECT * FROM bootcamps");
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

export default {
  getBootcampById,
  getAllBootcamps,
};
