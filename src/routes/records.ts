import * as express from 'express';
const recordRouter = express.Router();

const {
  getAllStudentRecords,
  getStudentRecordsByStudentId,
}: {
  getAllStudentRecords: () => Promise<Array<any>>;
  getStudentRecordsByStudentId: (id: string) => Promise<any>;
} = require('../models/records');

// GET by student id
recordRouter.get('students/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getStudentRecordsByStudentId(id);
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
