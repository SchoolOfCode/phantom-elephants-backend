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

const {
  getBootcampById,
  getAllBootcamps,
  addBootcamp, 
  updateBootcamp,
  deleteBootcamp,
}: {
  getBootcampById: any;
  getAllBootcamps: any;
  addBootcamp: any;
  updateBootcamp: any;
  deleteBootcamp: any;
} = require('../models/bootcamps');

var express = require('express');
var bootcampRouter = express.Router();

//get bootcamp by id
bootcampRouter.get('/:id', async (req: any, res: any) => {
  const { id } = req.params;
  console.log('get bootcamp by => ', id);
  const data = await getBootcampById(id);
  res.json({
    success: true,
    message: 'Here are the bootcamps by ' + id,
    payload: data,
  });
});

//get all bootcamp
bootcampRouter.get('/', async (req: any, res: any) => {
  console.log('GET bootcamps');
  const data = await getAllBootcamps();
  res.json({
    success: true,
    message: 'Here are the bootcamps',
    payload: data,
  });
});


// add bootcamp
bootcampRouter.post("/", async (req, res) => {
  const { body } = req;
  const response = await addBootcamp(body);
  res.json({
    success: true,
    message: "Bootcamp added successfully",
    payload: response,
  });
});



// update bootcamp

bootcampRouter.put("/", async (req,res) => {
  const { body } = req;
  const response = await updateBootcamp(body)
  res.json({
    success: true,
    message: "bootcamp updated successfully",
    payload: response,
  });
});


// delete bootcamp

bootcampRouter.delete("/", async (req, res) => {
  const data = await deleteBootcamp;
   res.json({
    success: true,
    message: "bootcamp deleted successfully",
    payload: data,
  });
});


module.exports = bootcampRouter;
