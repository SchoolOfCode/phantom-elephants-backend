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
exports.deleteAssignment = exports.updateAssignment = exports.addAssignment = exports.getAllAssignments = exports.getAssignmentById = void 0;
const db = require('../db/index');
// import interface for models
//get assignments by id
function getAssignmentById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield db.query('SELECT * FROM assignments WHERE id = $1', [id]);
        return data.rows[0];
    });
}
exports.getAssignmentById = getAssignmentById;
function getAllAssignments() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield db.query('SELECT * FROM assignments');
        return data.rows;
    });
}
exports.getAllAssignments = getAllAssignments;
// need to add table name + insert values + response details
function addAssignment(assignment) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `INSERT INTO assignments (studentId, title,type, date) VALUES ($1,$2,$3, $4) RETURNING *;`;
        const data = yield db.query(sqlString, [
            assignment.studentId,
            assignment.title,
            assignment.type,
            assignment.date,
        ]);
        return data.rows[0];
    });
}
exports.addAssignment = addAssignment;
// need to add table name + insert values into sql string + await query array
function updateAssignment({ id, assignment, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `UPDATE assignments SET studentId = '$1', title='$2' type= $3' date= '$4' WHERE' id=$5} RETURNING *;`;
        const data = yield db.query(sqlString, [
            assignment.studentId,
            assignment.title,
            assignment.type,
            assignment.date,
            id,
        ]);
        return data.rows[0];
    });
}
exports.updateAssignment = updateAssignment;
function deleteAssignment(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `DELETE FROM assignments  WHERE id='${id}' RETURNING *;`;
        const data = yield db.query(sqlString);
        return data.rows;
    });
}
exports.deleteAssignment = deleteAssignment;
//# sourceMappingURL=assignments.js.map