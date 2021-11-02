"use strict";
// INNER joins for tables
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
exports.getAllStudentRecordsByIdTypeAndDate = exports.getAllStudentsX = exports.getAllStudentRecordsById = void 0;
const { query } = require("../db/index");
function getAllStudentRecordsById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query(`SELECT * FROM bootcamps INNER JOIN students ON bootcamps.id = students.bootcampid INNER JOIN assignments ON students.id = assignments.studentid WHERE students.id = $1 ORDER BY date;`, [id]);
        return data.rows;
    });
}
exports.getAllStudentRecordsById = getAllStudentRecordsById;
function getAllStudentsX() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query("SELECT * FROM students");
        return data.rows;
    });
}
exports.getAllStudentsX = getAllStudentsX;
function getAllStudentRecordsByIdTypeAndDate(type) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query(`SELECT * FROM bootcamps INNER JOIN students ON bootcamps.id = students.bootcampid INNER JOIN assignments ON students.id = assignments.studentid WHERE assignments.type LIKE "$1";`, [type]);
        return data.rows;
    });
}
exports.getAllStudentRecordsByIdTypeAndDate = getAllStudentRecordsByIdTypeAndDate;
/* let workshops = [];
    for (let x = 1; x < workshopsSpread.length; x++) {
      if (
        workshopsSpread[x].date.toString().slice(0, 10) ===
        workshopsSpread[x - 1].date.toString().slice(0, 10)
      ) {
        workshops.push([workshopsSpread[x].title, workshopsSpread[x].title]);
      } else {
        workshops.push([workshopsSpread[x].title]);
      }
      */
//# sourceMappingURL=records.js.map