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
const express = require("express");
const { getAssignmentById, getAllAssignments, addAssignment, updateAssignment, deleteAssignment, } = require('../models/assignments');
const assignmentsRouter = express.Router();
// get assignments by id
assignmentsRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const data = yield getAssignmentById(id);
        res.json({
            success: true,
            message: `Search result for specific assignments with id:${id}`,
            payload: data,
        });
    }
    catch (_a) {
        res.status(500).send({
            success: false,
            message: 'Server not available. Please try again later',
        });
    }
}));
// get all assignments
assignmentsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getAllAssignments();
        res.json({
            success: true,
            message: 'here is all the assignments',
            payload: data,
        });
    }
    catch (_b) {
        res.status(500).send({
            success: false,
            message: 'Server not available. Please try again later',
        });
    }
}));
// add assignments
assignmentsRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const response = yield addAssignment(body);
        res.json({
            success: true,
            message: 'assignments added successfully',
            payload: response,
        });
    }
    catch (_c) {
        res.status(500).send({
            success: false,
            message: 'Server not available. Please try again later',
        });
    }
}));
// update assignments
assignmentsRouter.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const response = yield updateAssignment(body);
        res.json({
            success: true,
            message: 'assignments updated successfully',
            payload: response,
        });
    }
    catch (_d) {
        res.status(500).send({
            success: false,
            message: 'Server not available. Please try again later',
        });
    }
}));
//  delete assignments
assignmentsRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const data = yield deleteAssignment(id);
        res.json({
            success: true,
            message: 'assignments deleted successfully',
            payload: data,
        });
    }
    catch (_e) {
        res.status(500).send({
            success: false,
            message: 'Server not available. Please try again later',
        });
    }
}));
exports.default = assignmentsRouter;
//# sourceMappingURL=assignments.js.map