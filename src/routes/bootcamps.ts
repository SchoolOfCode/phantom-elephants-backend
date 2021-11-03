/* 
Require Router from express
Initialise a new router

-Write a GET route
-Write a POST route
-Write a PUT route
-Write a PATCH route
-Write a DELETE route


-> get bootcamp by id 
-> bootcamp id of all student 
-> student id to student id in work 



- get all cohort (cohort 8)
- get student by id 
- get student work (object )?
- get user by id 
Export  router
*/

import * as express from 'express';
const bootcampRouter = express.Router();

const {
  getBootcampById,
  getAllBootcamps,
  addBootcamp,
  updateBootcamp,
  deleteBootcamp,
}: {
  getBootcampById: (id: string) => Promise<Record<string, string | number>>;
  getAllBootcamps: () => Promise<Record<string, string | number>[]>;
  addBootcamp: (
    bootcamp: Record<string, string | number>
  ) => Promise<Record<string, string | number>>;
  updateBootcamp: ({
    bootcamp,
    id,
  }: {
    bootcamp: Record<string, string | number>;
    id: string;
  }) => Promise<Record<string, string | number>>;
  deleteBootcamp: (id: string) => Promise<Record<string, string | number>[]>;
} = require('../models/bootcamps');

//get bootcamp by id
bootcampRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  const data = await getBootcampById(id);
  res.json({
    success: true,
    message: 'Here are the bootcamps by ' + id,
    payload: data,
  });
});

//get all bootcamp
bootcampRouter.get('/', async (req, res) => {
  const data = await getAllBootcamps();
  res.json({
    success: true,
    message: 'Here are the bootcamps',
    payload: data,
  });
});

// add bootcamp
bootcampRouter.post('/', async (req, res) => {
  const { body } = req;
  const response = await addBootcamp(body);
  res.json({
    success: true,
    message: 'Bootcamp added successfully',
    payload: response,
  });
});

// update bootcamp

bootcampRouter.put('/', async (req, res) => {
  const { body } = req;
  const response = await updateBootcamp(body);
  res.json({
    success: true,
    message: 'bootcamp updated successfully',
    payload: response,
  });
});

// delete bootcamp

bootcampRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await deleteBootcamp(id);
  res.json({
    success: true,
    message: 'bootcamp deleted successfully',
    payload: data,
  });
});

export default bootcampRouter;
