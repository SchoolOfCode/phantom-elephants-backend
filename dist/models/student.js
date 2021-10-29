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
exports.deleteStudent = exports.updateStudent = exports.addStudent = exports.getAllStudents = exports.getStudentById = void 0;
const express = require("express");
const Router = express.Router();
const { query } = require('../db/index');
// import interface for models
//get student by id
function getStudentById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query('SELECT * FROM student WHERE id = $1', [id]);
        return data.rows;
    });
}
exports.getStudentById = getStudentById;
function getAllStudents() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query('SELECT * FROM students');
        return data.rows;
    });
}
exports.getAllStudents = getAllStudents;
function addStudent(student) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `INSERT INTO student (name, username, bootcampId) VALUES ($1,$2,$3) RETURNING *;`;
        const data = yield query(sqlString, [
            student.name,
            student.username,
            student.bootcampId,
        ]);
        return data.rows[0].name;
    });
}
exports.addStudent = addStudent;
function updateStudent(student, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `UPDATE student  SET name = '$1', username ='$2' bootcampId= $3' WHERE id=${id} RETURNING *;`;
        const data = yield query(sqlString, [
            student.name,
            student.username,
            student.bootcampId,
        ]);
        return data.rows[0];
    });
}
exports.updateStudent = updateStudent;
function deleteStudent({ id }) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `DELETE FROM student WHERE id='${id}' RETURNING *;`;
        const data = yield query(sqlString);
        return data.rows[0];
    });
}
exports.deleteStudent = deleteStudent;
//# sourceMappingURL=student.js.map