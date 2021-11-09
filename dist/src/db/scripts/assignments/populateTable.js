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
const db = require('../../index');
const { data } = require('../../data');
function populateTable() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let bootcamp of data) {
            const { students } = bootcamp;
            for (let student of students) {
                const response = yield addStudentWorkToDatabase(student);
                console.log(response);
            }
        }
    });
}
function addStudentWorkToDatabase(student) {
    return __awaiter(this, void 0, void 0, function* () {
        student.work.forEach((day) => __awaiter(this, void 0, void 0, function* () {
            const assignments = createAssignmentList(day);
            if (assignments) {
                const _scoredAssignmentsResponse = yield populateScoredAssignments(student.info.id, day.date, assignments);
            }
            if (day.feedback) {
                const _feedbackResponse = yield populateFeedback(student.info.id, day.date, day.feedback);
            }
            if (day.reflection) {
                const _reflectionResponse = yield populateReflection(student.info.id, day.date, day.reflection);
            }
        }));
        return `All work for ${student.info.id} added to database`;
    });
}
function createAssignmentList({ recapTask, workshops, quiz, }) {
    let assignments;
    if (workshops) {
        assignments = [...workshops];
    }
    if (recapTask) {
        assignments = [...assignments, recapTask];
    }
    if (quiz) {
        assignments = [...assignments, quiz];
    }
    return assignments;
}
function populateScoredAssignments(student, date, assignments) {
    return __awaiter(this, void 0, void 0, function* () {
        const scoredAssignmentQuery = `INSERT INTO assignments 
  (studentid, title, type, date, score)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;`;
        assignments.forEach((assignment) => __awaiter(this, void 0, void 0, function* () {
            const _response = yield db.query(scoredAssignmentQuery, [
                student,
                assignment.title,
                assignment.type,
                date,
                assignment.score,
            ]);
        }));
        return `Scored assignments for student ${student} on ${date} completed`;
    });
}
function populateFeedback(student, date, feedback) {
    return __awaiter(this, void 0, void 0, function* () {
        feedback.forEach((submission) => __awaiter(this, void 0, void 0, function* () {
            const _response = yield db.query(`INSERT INTO assignments
    (studentid, title, type, date, timeofday, experiencerating, comment)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;`, [
                student,
                `${submission.timeOfDay}: ${date}`,
                submission.type,
                date,
                submission.timeOfDay,
                submission.experienceRating,
                submission.comment,
            ]);
        }));
        return `Feedback for student ${student} on ${date} completed`;
    });
}
function populateReflection(student, date, reflection) {
    return __awaiter(this, void 0, void 0, function* () {
        const _response = yield db.query(`INSERT INTO assignments 
  (studentid, title, type, date, content)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;`, [student, `Reflection - ${date}`, reflection.type, date, reflection.content]);
        return `Reflection for student ${student} on ${date} completed`;
    });
}
populateTable();
//# sourceMappingURL=populateTable.js.map