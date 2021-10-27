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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { getBootcampById, getAllBootcamps } = require('../models/bootcamps');
var express = require("express");
var router = express.Router();
//get bootcamp by id 
router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const data = yield getBootcampById(id);
    res.json({
        success: true,
        message: "Here are the bootcamps by id",
        payload: data,
    });
}));
router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const data = getAllBootcamps();
    res.json({
        success: true,
        message: "Here are the bootcamps",
        payload: data,
    });
}));
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
//# sourceMappingURL=bootcamps.js.map