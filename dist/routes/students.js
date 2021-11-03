"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const students_1 = require("./../helpers/CSVchecker/students");
let { getStudentById, getAllStudents, addStudent, updateStudent, deleteStudent, } = require("../models/student");
const express = require("express");
const studentRouter = express.Router();
// get by students id
studentRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield getStudentById(id);
    res.json({
        success: true,
        message: `Search result for student with id: ${id}`,
        payload: data,
    });
}));
// getALL students
studentRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("GET all students");
    const data = yield getAllStudents();
    res.json({
        success: true,
        message: "Here are all students",
        payload: data,
    });
}));
// add student by
studentRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const dataArray = body.map((row) => row.data);
        if ((0, students_1.isValidCsvStudents)(dataArray)) {
            const newStudents = (0, students_1.csvToStudentObjects)(dataArray);
            console.log(newStudents);
            let payload = [];
            for (let student of newStudents) {
                const response = yield addStudent(student);
                console.log(response);
                payload.push(response);
            }
            res.json({
                success: true,
                message: newStudents.map((student) => `${student.name}, `).toString() +
                    "added succesfully",
                payload: payload,
            });
        }
    }
    catch (e) {
        console.log("invalid upload attempted");
        res.json({
            success: true,
            message: "invalid upload format attempted: Headers must contain name, username and avatar",
        });
    }
}));
//  // get by students id
// studentRouter.get("/:id", async (req:any, res:any) => {
//     const { id } = req.params;
//     const data = await getStudentsById(id);
//     res.json({
//       success: true,
//       message: `Search result for student with id: ${id}`,
//       payload: data,
//     });
//   });
// // getALL students
// studentRouter.get('/', async (req: any, res: any) => {
//     console.log('GET all students');
//     const data = await getAllStudents();
//     res.json({
//       success: true,
//       message: 'Here are all students',
//       payload: data,
//     });
//   });
// // add student by
// studentRouter.post("/", async (req, res) => {
//   const { body } = req;
//   const response = await addStudent(body);
//   res.json({
//     success: true,
//     message: "student added successfully",
//     payload: response,
//   });
// });
// // update student
// studentRouter.put("/", async (req,res) => {
//   const { body } = req;
//   const response = await updateStudent(body)
//   res.json({
//     success: true,
//     message: "student updated successfully",
//     payload: response,
//   });
// });
// // delete student
// studentRouter.delete("/", async (req, res) => {
//   const data = await deleteStudent;
//    res.json({
//     success: true,
//     message: "student deleted successfully",
//     payload: data,
//   });
// });
studentRouter.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const response = yield updateStudent(body);
    res.json({
        success: true,
        message: "student updated successfully",
        payload: response,
    });
}));
// delete student
studentRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield deleteStudent(id);
    res.json({
        success: true,
        message: "student deleted successfully",
        payload: data,
    });
}));
exports.default = studentRouter;
// //Update Student Comments
// studentRouter.put("/", async (req,res) => {
//   const { body } = req;
//   const response = await updateStudentComments(body)
//   res.json({
//     success: true,
//     message: "student comments updated successfully",
//     payload: response,
//   });
// });
//# sourceMappingURL=students.js.map