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
exports.updateStudentComments = exports.deleteStudentComments = exports.addStudentComments = exports.getAllStudentsComments = exports.getStudentCommentById = void 0;
const { query } = require('../db/index');
// import interface for models
//get student comment by id
function getStudentCommentById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query('SELECT * FROM comments WHERE id = $1', [id]);
        return data.rows;
    });
}
exports.getStudentCommentById = getStudentCommentById;
function getAllStudentsComments() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query('SELECT * FROM comments');
        return data.rows;
    });
}
exports.getAllStudentsComments = getAllStudentsComments;
function addStudentComments(comments) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `INSERT INTO comments (comments, author, imageUrl, date, bootcampid) VALUES ($1,$2,$3,$4,$5) RETURNING *;`;
        const data = yield query(sqlString, [
            comments.comments,
            comments.author,
            comments.bootcampid,
            comments.date,
            comments.imageUrl
        ]);
        return data.rows[0].name;
    });
}
exports.addStudentComments = addStudentComments;
function deleteStudentComments({ id }) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `DELETE FROM comments WHERE id='${id}' RETURNING *;`;
        const data = yield query(sqlString);
        return data.rows[0];
    });
}
exports.deleteStudentComments = deleteStudentComments;
//Update student comments
function updateStudentComments(comments, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `UPDATE comments SET comments = '$1', author = '$2', imageUrl = '$3', date = '$4', bootcampid = '$5' WHERE id=${id} RETURNING *;`;
        const data = yield query(sqlString, [
            comments.comments
        ]);
        return data.rows[0];
    });
}
exports.updateStudentComments = updateStudentComments;
//# sourceMappingURL=studentcomments.js.map