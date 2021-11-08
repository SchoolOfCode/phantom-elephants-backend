const {
  getStudentsCommentsById,
  getAllStudentsComments,
  addStudentComments,
  deleteStudentComments,
  updateStudentComments,
} = require('../models/student');

var express = require('express');
var studentCommentsRouter = express.Router();

//  // get comments  by students id
// studentCommentsRouter.get("/:id", async (req:any, res:any) => {
//     const { id } = req.params;
//     const data = await getStudentsCommentsById(id);
//     res.json({
//       success: true,
//       message: `Search result for student comments with id: ${id}`,
//       payload: data,
//     });
//   });

// // get all student comments
// studentCommentsRouter.get('/', async (req: any, res: any) => {
//     console.log('GET all students');
//     const data = await getAllStudentsComments();
//     res.json({
//       success: true,
//       message: 'Here are all students comments',
//       payload: data,
//     });
//   });

// // add student comments
// studentCommentsRouter.post("/", async (req, res) => {
//   const { body } = req;
//   const response = await addStudentComments(body);
//   res.json({
//     success: true,
//     message: "student comments added successfully",
//     payload: response,
//   });
// });

// // delete student comments

// studentCommentsRouter.delete("/", async (req, res) => {
//   const data = await deleteStudentComments;
//    res.json({
//     success: true,
//     message: "student comments deleted successfully",
//     payload: data,
//   });
// });

// //Update Student Comments

// studentCommentsRouter.put("/", async (req,res) => {
//   const { body } = req;
//   const response = await updateStudentComments(body)
//   res.json({
//     success: true,
//     message: "student comments updated successfully",
//     payload: response,
//   });
// });

export default studentCommentsRouter;
