
const {getStudentsById, getAllStudents, addStudent, updateStudent,deleteStudent} :{
getStudentsById: any;
getAllStudents :any;
addStudent : any;
updateStudent: any;
deleteStudent : any;
   }   = require('../models/student')


   var express = require('express');
   var studentRouter = express.Router();


 // get by students id
studentRouter.get("/:id", async (req:any, res:any) => {
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
  


  module.exports = studentRouter;


