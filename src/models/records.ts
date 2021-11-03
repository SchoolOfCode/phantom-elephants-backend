// INNER joins for tables
import { Idb } from '../types/database';
import { getAllStudents } from './students';
import {
  packageQuizzes,
  packageWorkshops,
  packageReflections,
  packageFeedback,
  packageRecaps,
  packageAttendance,
  calculateDaysAttended,
} from '../helpers/demeterApi/records';

const db: Idb = require('../db');

export async function getStudentRecordById(id) {
  const studentData = await getStudentDataById(id);

  const date = studentData[0].startdate;

  const quizzes = packageQuizzes(studentData, date);

  const workshops = packageWorkshops(studentData, date);

  const reflections = packageReflections(studentData, date);

  const feedback = packageFeedback(studentData, date);

  const recaps = packageRecaps(studentData, date);

  const attendance = packageAttendance(quizzes);

  const daysAttended = calculateDaysAttended(attendance);

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
}

export async function getAllStudentRecords() {
  const students = await getAllStudents();
  const records = [];

  for (let i = 0; i < students.length; i++) {
    const singleRecord = await getStudentRecordById(students[i].id);
    records.push(singleRecord);
  }

  return records;
}

export async function getStudentDataById(id: string): Promise<Array<any>> {
  const data = await db.query(
    `SELECT * FROM bootcamps INNER JOIN students ON bootcamps.id = students.bootcampid INNER JOIN assignments ON students.id = assignments.studentid WHERE students.id = $1 ORDER BY date;`,
    [id]
  );
  return data.rows;
}

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
