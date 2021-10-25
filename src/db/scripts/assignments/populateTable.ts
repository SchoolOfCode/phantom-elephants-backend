import { QueryArrayResult } from 'pg';
import { Idb, IDataObject } from '../../dbTypes';

const db: Idb = require('../../index');
const data: Array<IDataObject> = require('../../dummyDataStructure');

async function populateTable() {
  const scoredAssignmentQuery = `INSERT INTO assignments 
  (studentid, title, type, date, score)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;`;

  for (let bootcamp of data) {
    const { students } = bootcamp;
    for (let student of students) {
      for (let day of student.work) {
        if (day.recapTasks) {
          const recapResponse = await db.query(scoredAssignmentQuery, [
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
            const workshopResponse = await db.query(scoredAssignmentQuery, [
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
          const quizResponse = await db.query(scoredAssignmentQuery, [
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
          const morningFeedbackQuery = await db.query(feedbackQuery, [
            student.info.id,
            day.date,
            'morning',
            day.feedback.morning.experienceRating,
            day.feedback.morning.comment,
          ]);
          console.log(morningFeedbackQuery);
        }

        if (day.feedback.afternoon) {
          const afternoonFeedbackQuery = await db.query(feedbackQuery, [
            student.info.id,
            day.date,
            'afternoon',
            day.feedback.afternoon.experienceRating,
            day.feedback.afternoon.comment,
          ]);
          console.log(afternoonFeedbackQuery);
        }

        if (day.reflection) {
          const reflectionResponse = await db.query(
            `INSERT INTO assignments 
        (studentid, title, type, date, content)
        VALUES ($1, 'reflection', 'reflection', $2, $3)
        RETURNING *;`,
            [student.info.id, day.date, day.reflection]
          );
          console.log(reflectionResponse);
        }
      }
    }
  }
}

populateTable();
