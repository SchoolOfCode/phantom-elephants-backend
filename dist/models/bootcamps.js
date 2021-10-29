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
exports.deleteBootcamp = exports.updateBootcamp = exports.addBootcamp = exports.getAllBootcamps = exports.getBootcampById = void 0;
const { query } = require('../db/index');
// import interface for models
//get bootcamp by id
function getBootcampById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query('SELECT * FROM bootcamps WHERE id = $1', [id]);
        return data.rows;
    });
}
exports.getBootcampById = getBootcampById;
function getAllBootcamps() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Hello from the get bootcamps model');
        const data = yield query('SELECT * FROM bootcamps');
        return data.rows;
    });
}
exports.getAllBootcamps = getAllBootcamps;
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
function addBootcamp(bootcamp) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `INSERT INTO bootcamps (name, region, startDate) VALUES ($1,$2,$3) RETURNING *;`;
        const data = yield query(sqlString, [
            bootcamp.name,
            bootcamp.region,
            bootcamp.startDate
        ]);
        return data.rows[0].name;
    });
}
exports.addBootcamp = addBootcamp;
// need to add table name + insert values into sql string + await query array
function updateBootcamp(bootcamp, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `UPDATE bootcamps  SET name = '$1', region='$2' startDate= $3' WHERE id=${id} RETURNING *;`;
        console.log(bootcamp);
        const data = yield query(sqlString, [
            bootcamp.name,
            bootcamp.region,
            bootcamp.startDate
        ]);
        return data.rows[0];
    });
}
exports.updateBootcamp = updateBootcamp;
function deleteBootcamp({ id }) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlString = `DELETE FROM bootcamps  WHERE id='${id}' RETURNING *;`;
        const data = yield query(sqlString);
        return data.rows[0];
    });
}
exports.deleteBootcamp = deleteBootcamp;
//# sourceMappingURL=bootcamps.js.map