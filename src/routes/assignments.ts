const {getAssignmentsById, getAllAssignments, addAssignments, updateAssignments, deleteAssignments} : {
    getAssignmentsById :any,
    getAllAssignments :any
    addAssignments: any;
    updateAssignments: any;
    deleteAssignments: any;} = require('../models/assignments')


    var express = require('express');
    var assignmentsRouter = express.Router();

    // get assignments by id
    
   assignmentsRouter.get("/:id", async (req:any, res:any) => {
    const {id} = req.params.id;
    const data = await getAssignmentsById(id);
    res.json({
    success: true,
    message: `Search result for specific assignments with id:${id}`,
    payload: data,});
   });



// get all assignments
assignmentsRouter.get('/', async (req: any, res: any) => {
    const data = await getAllAssignments();
    res.json({
      success: true,
      message: 'here is all the assignments',
      payload: data,
    });
  });
  

// add assignments
assignmentsRouter.post("/", async (req, res) => {
    const { body } = req;
    const response = await addAssignments(body);
    res.json({
      success: true,
      message: "assignments added successfully",
      payload: response,
    });
  });



// update assignments
assignmentsRouter.put("/", async (req,res) => {
    const { body } = req;
    const response = await updateAssignments(body)
    res.json({
      success: true,
      message: "assignments updated successfully",
      payload: response,
    });
  });


 //  delete assignments

 assignmentsRouter.delete("/", async (req, res) => {
    const data = await deleteAssignments;
     res.json({
      success: true,
      message: "assignments deleted successfully",
      payload: data,
    });
  });


   module.exports = assignmentsRouter;