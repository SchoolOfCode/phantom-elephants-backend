import { IStudentInfo } from '../types/database';

let {
  getStudentById,
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
}: {
  getStudentById: (id: string) => Promise<Array<any>>;
  getAllStudents: () => Promise<Array<any>>;
  addStudent: ({ student }: { student: IStudentInfo }) => Promise<any>;
  updateStudent: ({
    student,
    id,
  }: {
    student: IStudentInfo;
    id: number;
  }) => Promise<any>;
  deleteStudent: (id: string) => Promise<Array<any>>;
} = require('../models/student');

import * as express from 'express';
const studentRouter = express.Router();

// get by students id
studentRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getStudentById(id);
  res.json({
    success: true,
    message: `Search result for student with id: ${id}`,
    payload: data,
  });
});

// getALL students
studentRouter.get('/', async (req, res) => {
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

studentRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await deleteStudent(id);
  res.json({
    success: true,
    message: 'student deleted successfully',
    payload: data,
  });
});

export default studentRouter;
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
