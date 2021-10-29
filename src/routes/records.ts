var express = require('express');
var recordRouter = express.Router();

const {getAllStudentRecords}: {getAllStudentRecords:any} = require('../models/records')

recordRouter.get("/", async (req:any, res:any) => {
    const data = await getAllStudentRecords();
    res.json({
      success: true,
      message: `Search result for all student records}`,
      payload: data,
    });
  });

export default recordRouter;