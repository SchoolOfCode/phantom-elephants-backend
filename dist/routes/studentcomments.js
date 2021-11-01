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
const { getStudentsCommentsById, getAllStudentsComments, addStudentComments, deleteStudentComments, updateStudentComments } = require('../models/student');
var express = require('express');
var studentCommentsRouter = express.Router();
// get comments  by students id
studentCommentsRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield getStudentsCommentsById(id);
    res.json({
        success: true,
        message: `Search result for student comments with id: ${id}`,
        payload: data,
    });
}));
// get all student comments 
studentCommentsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('GET all students');
    const data = yield getAllStudentsComments();
    res.json({
        success: true,
        message: 'Here are all students comments',
        payload: data,
    });
}));
// add student comments
studentCommentsRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const response = yield addStudentComments(body);
    res.json({
        success: true,
        message: "student comments added successfully",
        payload: response,
    });
}));
// delete student comments
studentCommentsRouter.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield deleteStudentComments;
    res.json({
        success: true,
        message: "student comments deleted successfully",
        payload: data,
    });
}));
//Update Student Comments
studentCommentsRouter.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const response = yield updateStudentComments(body);
    res.json({
        success: true,
        message: "student comments updated successfully",
        payload: response,
    });
}));
exports.default = studentCommentsRouter;
//# sourceMappingURL=studentcomments.js.map