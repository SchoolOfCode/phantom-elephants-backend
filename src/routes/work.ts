const {getWorkById, getAllWork, addWork, updateWork, deleteWork} : {
    getWorkById :any,
    getAllWork :any
    addWork: any;
    updateWork: any;
    deleteWork: any;} = require('../models/work')


    var express = require('express');
    var workRouter = express.Router();

    // get work by id
    
   workRouter.get("/:id", async (req:any, res:any) => {
    const {id} = req.params.id;
    const data = await getWorkById(id);
    res.json({
    success: true,
    message: `Search result for specific work with id:${id}`,
    payload: data,});
   });



// get all work
workRouter.get('/', async (req: any, res: any) => {
    const data = await getAllWork();
    res.json({
      success: true,
      message: 'here is all the work',
      payload: data,
    });
  });
  

// add work
workRouter.post("/", async (req, res) => {
    const { body } = req;
    const response = await addWork(body);
    res.json({
      success: true,
      message: "work added successfully",
      payload: response,
    });
  });



// update work
workRouter.put("/:work", async (req,res) => {
    const { body } = req;
    const response = await updateWork(body)
    res.json({
      success: true,
      message: "work updated successfully",
      payload: response,
    });
  });


 //  delete work

 workRouter.delete("/:work", async (req, res) => {
    const data = await deleteWork;
     res.json({
      success: true,
      message: "work deleted successfully",
      payload: data,
    });
  });




   module.exports = workRouter;