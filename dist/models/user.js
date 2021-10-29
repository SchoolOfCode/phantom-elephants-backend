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
exports.deleteUser = exports.updateUser = exports.addUser = exports.getAllUsers = exports.getUserById = void 0;
const { query } = require('../db/index');
// import interface for models
//get bootcamp by id
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query('SELECT * FROM user WHERE id = $1', [id]);
        return data.rows;
    });
}
exports.getUserById = getUserById;
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query('SELECT * FROM user');
        return data.rows;
    });
}
exports.getAllUsers = getAllUsers;
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `INSERT INTO user (name, bootcamperId, watchList) VALUES ($1,$2,$3) RETURNING *;`;
        const data = yield query(sqlString, [
            user.name,
            user.bootcamperId,
            user.watchList
        ]);
        return data.rows[0].name;
    });
}
exports.addUser = addUser;
// need to add table name + insert values into sql string + await query array
function updateUser(user, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `UPDATE user  SET name = '$1', watchList='$2' bootcamperId= $3' WHERE id=${id} RETURNING *;`;
        const data = yield query(sqlString, [
            user.name,
            user.bootcamperId,
            user.watchList,
        ]);
        return data.rows[0];
    });
}
exports.updateUser = updateUser;
function deleteUser({ id }) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `DELETE FROM user WHERE id='${id}' RETURNING *;`;
        const data = yield query(sqlString);
        return data.rows[0];
    });
}
exports.deleteUser = deleteUser;
// // gets all students names from all columns
// async function getAllStudents() {
//     const data = await query("SELECT * FROM students;");
//     return data.rows;
//   }
// async function getStudentsById(id:number) {
//     const data = await query("SELECT * FROM students WHERE id = $1", [id]);
//     return data.rows;
// export default {
//   getBootcampById,
//   getAllBootcamps,
// };
// need to add table name + insert values + response details
//# sourceMappingURL=user.js.map