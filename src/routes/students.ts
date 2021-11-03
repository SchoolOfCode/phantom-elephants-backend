let {
  getStudentsById,
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
}: {
  getStudentsById: any;
  getAllStudents: any;
  addStudent: any;
  updateStudent: any;
  deleteStudent: any;
} = require('../models/student');

const { updateStudentComments } = require('../models/studentcomments');

var express = require('express');
var studentRouter = express.Router();

// get by students id
studentRouter.get('/:id', async (req: any, res: any) => {
  const { id } = req.params;
  const data = await getStudentsById(id);
  res.json({
    success: true,
    message: `Search result for student with id: ${id}`,
    payload: data,
  });
});

// getALL students
studentRouter.get('/', async (req: any, res: any) => {
  console.log('GET all students');
  const data = await getAllStudents();
  res.json({
    success: true,
    message: 'Here are all students',
    payload: data,
  });
});

// add student by
studentRouter.post('/', async (req, res) => {
  const { body } = req;
  const response = await addStudent(body);
  res.json({
    success: true,
    message: 'student added successfully',
    payload: response,
  });
});

var express = require('express');
var studentRouter = express.Router();

//  // get by students id
// studentRouter.get("/:id", async (req:any, res:any) => {
//     const { id } = req.params;
//     const data = await getStudentsById(id);
//     res.json({
//       success: true,
//       message: `Search result for student with id: ${id}`,
//       payload: data,
//     });
//   });

// // getALL students
// studentRouter.get('/', async (req: any, res: any) => {
//     console.log('GET all students');
//     const data = await getAllStudents();
//     res.json({
//       success: true,
//       message: 'Here are all students',
//       payload: data,
//     });
//   });

// // add student by
// studentRouter.post("/", async (req, res) => {
//   const { body } = req;
//   const response = await addStudent(body);
//   res.json({
//     success: true,
//     message: "student added successfully",
//     payload: response,
//   });
// });

// // update student

// studentRouter.put("/", async (req,res) => {
//   const { body } = req;
//   const response = await updateStudent(body)
//   res.json({
//     success: true,
//     message: "student updated successfully",
//     payload: response,
//   });
// });

// // delete student

// studentRouter.delete("/", async (req, res) => {
//   const data = await deleteStudent;
//    res.json({
//     success: true,
//     message: "student deleted successfully",
//     payload: data,
//   });
// });

studentRouter.put('/', async (req, res) => {
  const { body } = req;
  const response = await updateStudent(body);
  res.json({
    success: true,
    message: 'student updated successfully',
    payload: response,
  });
});

// delete student

studentRouter.delete('/', async (req, res) => {
  const data = await deleteStudent;
  res.json({
    success: true,
    message: 'student deleted successfully',
    payload: data,
  });
});

module.exports = studentRouter;
// //Update Student Comments

// studentRouter.put("/", async (req,res) => {
//   const { body } = req;
//   const response = await updateStudentComments(body)
//   res.json({
//     success: true,
//     message: "student comments updated successfully",
//     payload: response,
//   });
// });

export default studentRouter;
