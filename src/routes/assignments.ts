import * as express from 'express';
import { Assignment } from '../types/database';

const {
  getAssignmentById,
  getAllAssignments,
  addAssignment,
  updateAssignment,
  deleteAssignment,
}: {
  getAssignmentById: (id: string) => Promise<Assignment>;
  getAllAssignments: () => Promise<Assignment[]>;
  addAssignment: (assignment: Assignment) => Promise<Assignment>;
  updateAssignment: ({
    id,
    assignment,
  }: {
    id: string;
    assignment: Assignment;
  }) => Promise<Assignment>;
  deleteAssignment: (id: string) => Promise<Assignment[]>;
} = require('../models/assignments');

const assignmentsRouter = express.Router();

// get assignments by id

assignmentsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getAssignmentById(id);
    res.json({
      success: true,
      message: `Search result for specific assignments with id:${id}`,
      payload: data,
    });
  } catch {
    res.status(500).send({
      success: false,
      message: 'Server not available. Please try again later',
    });
  }
});

// get all assignments
assignmentsRouter.get('/', async (req, res) => {
  try {
    const data = await getAllAssignments();
    res.json({
      success: true,
      message: 'here is all the assignments',
      payload: data,
    });
  } catch {
    res.status(500).send({
      success: false,
      message: 'Server not available. Please try again later',
    });
  }
});

// add assignments
assignmentsRouter.post('/', async (req, res) => {
  const { body } = req;
  try {
    const response = await addAssignment(body);
    res.json({
      success: true,
      message: 'assignments added successfully',
      payload: response,
    });
  } catch {
    res.status(500).send({
      success: false,
      message: 'Server not available. Please try again later',
    });
  }
});

// update assignments
assignmentsRouter.put('/', async (req, res) => {
  const { body } = req;
  try {
    const response = await updateAssignment(body);
    res.json({
      success: true,
      message: 'assignments updated successfully',
      payload: response,
    });
  } catch {
    res.status(500).send({
      success: false,
      message: 'Server not available. Please try again later',
    });
  }
});

//  delete assignments

assignmentsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteAssignment(id);
    res.json({
      success: true,
      message: 'assignments deleted successfully',
      payload: data,
    });
  } catch {
    res.status(500).send({
      success: false,
      message: 'Server not available. Please try again later',
    });
  }
});

export default assignmentsRouter;
