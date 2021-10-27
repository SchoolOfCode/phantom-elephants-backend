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

const {getBootcampById, getAllBootcamps} : {getBootcampById:any, getAllBootcamps:any} = require('../models/bootcamps')


var express = require("express");
var router = express.Router();


//get bootcamp by id 

router.get("/:id", async (req:any, res:any) => {
  const {id} = req.params;
  console.log(id);
  
  const data = await getBootcampById(id);
  res.json({
    success: true,
    message: "Here are the bootcamps by id",
    payload: data,
  })
  
  })

  
router.get("/", async (req:any, res:any) => {
const data = getAllBootcamps()
res.json({
  success: true,
  message: "Here are the bootcamps",
  payload: data,
})
});




// const {getAllStudents:string, getStudentsById:any} = require('../models/students')

// // get students 


// // get by students id 
// //   GET by id
// router.get("/:id", async (req:any, res:any) => {
//     const { id } = req.params;
//     const data = await getStudentsById(id);
//     res.json({
//       success: true,
//       message: `Search result for student with id: ${id}`,
//       payload: data,
//     });
//   });



module.exports = router;