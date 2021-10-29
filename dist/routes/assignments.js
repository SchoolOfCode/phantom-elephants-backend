var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { getAssignmentsById, getAllAssignments, addAssignments, updateAssignments, deleteAssignments } = require('../models/assignments');
var express = require('express');
var assignmentsRouter = express.Router();
// get assignments by id
assignmentsRouter.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params.id;
    const data = yield getAssignmentsById(id);
    res.json({
        success: true,
        message: `Search result for specific assignments with id:${id}`,
        payload: data,
    });
}));
// get all assignments
assignmentsRouter.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const data = yield getAllAssignments();
    res.json({
        success: true,
        message: 'here is all the assignments',
        payload: data,
    });
}));
// add assignments
assignmentsRouter.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { body } = req;
    const response = yield addAssignments(body);
    res.json({
        success: true,
        message: "assignments added successfully",
        payload: response,
    });
}));
// update assignments
assignmentsRouter.put("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { body } = req;
    const response = yield updateAssignments(body);
    res.json({
        success: true,
        message: "assignments updated successfully",
        payload: response,
    });
}));
//  delete assignments
assignmentsRouter.delete("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const data = yield deleteAssignments;
    res.json({
        success: true,
        message: "assignments deleted successfully",
        payload: data,
    });
}));
module.exports = assignmentsRouter;
//# sourceMappingURL=assignments.js.map