import * as express from 'express';
const recordRouter = express.Router();

const {
  getStudentRecordById,
  getAllStudentRecords,
} = require('../models/records');

recordRouter.get('/', async (req, res) => {
  const data = await getAllStudentRecords();
  res.json({
    success: true,
    message: `Search result for all student records`,
    payload: data,
  });
});

// GET by student id
recordRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getStudentRecordById(id);
  res.json({
    success: true,
    message: `Records for student ${id}`,
    payload: data,
  });
});

// GET all records
recordRouter.get('/', async (req, res) => {
  const data = await getAllStudentRecords();
  res.json({
    success: true,
    message: `Search result for all student records`,
    payload: data,
  });
});

export default recordRouter;
