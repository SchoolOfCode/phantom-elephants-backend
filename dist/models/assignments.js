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
exports.deleteAssignments = exports.updateAssignments = exports.addAssignments = exports.getAllAssignments = exports.getAssignmentsById = void 0;
const { query } = require('../db/index');
// import interface for models
//get assignments by id
function getAssignmentsById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query('SELECT * FROM assignments WHERE id = $1', [id]);
        return data.rows;
    });
}
exports.getAssignmentsById = getAssignmentsById;
function getAllAssignments() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query('SELECT * FROM assignments');
        return data.rows;
    });
}
exports.getAllAssignments = getAllAssignments;
// need to add table name + insert values + response details
function addAssignments(assignments) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `INSERT INTO assignments (studentId, title,type, date) VALUES ($1,$2,$3, $4) RETURNING *;`;
        const data = yield query(sqlString, [
            assignments.studentId,
            assignments.title,
            assignments.type,
            assignments.date,
        ]);
        return data.rows[0].name;
    });
}
exports.addAssignments = addAssignments;
// need to add table name + insert values into sql string + await query array
function updateAssignments(id, assignments) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `UPDATE assignments SET studentId = '$1', title='$2' type= $3' date= '$4' WHERE' id=${id} RETURNING *;`;
        const data = yield query(sqlString, [
            assignments.studentId,
            assignments.title,
            assignments.type,
            assignments.date,
        ]);
        return data.rows[0];
    });
}
exports.updateAssignments = updateAssignments;
function deleteAssignments({ id }) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `DELETE FROM assignments  WHERE id='${id}' RETURNING *;`;
        const data = yield query(sqlString);
        return data.rows[0];
    });
}
exports.deleteAssignments = deleteAssignments;
//# sourceMappingURL=assignments.js.map