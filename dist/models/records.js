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
exports.getStudentDataById = exports.getAllStudentRecords = exports.getStudentRecordById = void 0;
const student_1 = require("./student");
const records_1 = require("../helpers/demeterApi/records");
const db = require('../db');
function getStudentRecordById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const studentData = yield getStudentDataById(id);
        const date = studentData[0].startdate;
        const quizzes = (0, records_1.packageQuizzes)(studentData, date);
        const workshops = (0, records_1.packageWorkshops)(studentData, date);
        const reflections = (0, records_1.packageReflections)(studentData, date);
        const feedback = (0, records_1.packageFeedback)(studentData, date);
        const recaps = (0, records_1.packageRecaps)(studentData, date);
        const attendance = (0, records_1.packageAttendance)(quizzes);
        const daysAttended = (0, records_1.calculateDaysAttended)(attendance);
        return {
            id: studentData[0].id,
            bootcampId: studentData[0].bootcampid,
            name: studentData[0].name,
            username: studentData[0].username,
            avatar: studentData[0].avatar,
            region: studentData[0].region,
            startDate: date,
            quizzes,
            recaps,
            workshops,
            reflections,
            feedback,
            attendance,
            daysAttended,
        };
    });
}
exports.getStudentRecordById = getStudentRecordById;
function getAllStudentRecords() {
    return __awaiter(this, void 0, void 0, function* () {
        const students = yield (0, student_1.getAllStudents)();
        const records = [];
        for (let i = 0; i < students.length; i++) {
            const singleRecord = yield getStudentRecordById(students[i].id);
            records.push(singleRecord);
        }
        return records;
    });
}
exports.getAllStudentRecords = getAllStudentRecords;
function getStudentDataById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield db.query(`SELECT * FROM bootcamps INNER JOIN students ON bootcamps.id = students.bootcampid INNER JOIN assignments ON students.id = assignments.studentid WHERE students.id = $1 ORDER BY date;`, [id]);
        return data.rows;
    });
}
exports.getStudentDataById = getStudentDataById;
// export async function getAllStudentRecordsByIdTypeAndDate(type) {
//   const data = await db.query(
//     `SELECT * FROM bootcamps INNER JOIN students ON bootcamps.id = students.bootcampid INNER JOIN assignments ON students.id = assignments.studentid WHERE assignments.type LIKE "$1";`,
//     [type]
//   );
//   return data.rows;
// }
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