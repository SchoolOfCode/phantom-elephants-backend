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
const { getBootcampById, getAllBootcamps, addBootcamp, updateBootcamp, deleteBootcamp, } = require('../models/bootcamps');
var express = require('express');
var bootcampRouter = express.Router();
//get bootcamp by id
bootcampRouter.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    console.log('get bootcamp by => ', id);
    const data = yield getBootcampById(id);
    res.json({
        success: true,
        message: 'Here are the bootcamps by ' + id,
        payload: data,
    });
}));
//get all bootcamp
bootcampRouter.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log('GET bootcamps');
    const data = yield getAllBootcamps();
    res.json({
        success: true,
        message: 'Here are the bootcamps',
        payload: data,
    });
}));
// add bootcamp
bootcampRouter.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { body } = req;
    const response = yield addBootcamp(body);
    res.json({
        success: true,
        message: "Bootcamp added successfully",
        payload: response,
    });
}));
// update bootcamp
bootcampRouter.put("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { body } = req;
    const response = yield updateBootcamp(body);
    res.json({
        success: true,
        message: "bootcamp updated successfully",
        payload: response,
    });
}));
// delete bootcamp
bootcampRouter.delete("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const data = yield deleteBootcamp;
    res.json({
        success: true,
        message: "bootcamp deleted successfully",
        payload: data,
    });
}));
module.exports = bootcampRouter;
//# sourceMappingURL=bootcamps.js.map