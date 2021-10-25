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
const data = require('../../dummyDataStructure');
function populateTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const scoredAssignmentQuery = `INSERT INTO assignments 
  (studentid, title, type, date, score)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;`;
        for (let bootcamp of data) {
            const { students } = bootcamp;
            for (let student of students) {
                for (let day of student.work) {
                    if (day.recapTasks) {
                        const recapResponse = yield db.query(scoredAssignmentQuery, [
                            student.info.id,
                            day.recapTasks.title,
                            'recap',
                            day.date,
                            day.recapTasks.score,
                        ]);
                        console.log(recapResponse);
                    }
                    if (day.workshops) {
                        for (let workshop of day.workshops) {
                            const workshopResponse = yield db.query(scoredAssignmentQuery, [
                                student.info.id,
                                workshop.title,
                                'workshop',
                                day.date,
                                workshop.score,
                            ]);
                            console.log(workshopResponse);
                        }
                    }
                    if (day.quiz) {
                        const quizResponse = yield db.query(scoredAssignmentQuery, [
                            student.info.id,
                            day.quiz.title,
                            'quiz',
                            day.date,
                            day.quiz.scoreAsString,
                        ]);
                        console.log(quizResponse);
                    }
                    const feedbackQuery = `INSERT INTO assignments
        (studentid, title, type, date, timeofday, experiencerating, comment)
        VALUES ($1, 'feedback', 'feedback', $2, $3, $4, $5)
        RETURNING *;`;
                    if (day.feedback.morning) {
                        const morningFeedbackQuery = yield db.query(feedbackQuery, [
                            student.info.id,
                            day.date,
                            'morning',
                            day.feedback.morning.experienceRating,
                            day.feedback.morning.comment,
                        ]);
                        console.log(morningFeedbackQuery);
                    }
                    if (day.feedback.afternoon) {
                        const afternoonFeedbackQuery = yield db.query(feedbackQuery, [
                            student.info.id,
                            day.date,
                            'afternoon',
                            day.feedback.afternoon.experienceRating,
                            day.feedback.afternoon.comment,
                        ]);
                        console.log(afternoonFeedbackQuery);
                    }
                    if (day.reflection) {
                        const reflectionResponse = yield db.query(`INSERT INTO assignments 
        (studentid, title, type, date, content)
        VALUES ($1, 'reflection', 'reflection', $2, $3)
        RETURNING *;`, [student.info.id, day.date, day.reflection]);
                        console.log(reflectionResponse);
                    }
                }
            }
        }
    });
}
populateTable();
//# sourceMappingURL=populateTable.js.map