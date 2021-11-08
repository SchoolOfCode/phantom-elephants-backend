import {
  Idb,
  IDataObject,
  IScoredAssignment,
  IFeedback,
  IReflection,
  IStudentWork,
  IStudentObject,
  ICreateAssignmentListParameters,
} from '../../../types/database';

const db: Idb = require('../../index');
const { data }: { data: Array<IDataObject> } = require('../../data');

async function populateTable() {
  for (let bootcamp of data) {
    const { students } = bootcamp;
    for (let student of students) {
      const response = await addStudentWorkToDatabase(student);
      console.log(response);
    }
  }
}

async function addStudentWorkToDatabase(student: IStudentObject) {
  student.work.forEach(async (day: IStudentWork) => {
    const assignments = createAssignmentList(day);

    if (assignments) {
      const _scoredAssignmentsResponse = await populateScoredAssignments(
        student.info.id,
        day.date,
        assignments
      );
    }

    if (day.feedback) {
      const _feedbackResponse = await populateFeedback(
        student.info.id,
        day.date,
        day.feedback
      );
    }

    if (day.reflection) {
      const _reflectionResponse = await populateReflection(
        student.info.id,
        day.date,
        day.reflection
      );
    }
  });
  return `All work for ${student.info.id} added to database`;
}

function createAssignmentList({
  recapTask,
  workshops,
  quiz,
}: ICreateAssignmentListParameters): Array<IScoredAssignment> {
  let assignments: Array<IScoredAssignment>;

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

async function populateScoredAssignments(
  student: string | number,
  date: string,
  assignments: Array<IScoredAssignment>
): Promise<string> {
  const scoredAssignmentQuery = `INSERT INTO assignments 
  (studentid, title, type, date, score)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;`;

  assignments.forEach(async (assignment) => {
    const _response = await db.query(scoredAssignmentQuery, [
      student,
      assignment.title,
      assignment.type,
      date,
      assignment.score,
    ]);
  });

  return `Scored assignments for student ${student} on ${date} completed`;
}

async function populateFeedback(
  student: string | number,
  date: string,
  feedback: Array<IFeedback>
): Promise<string> {
  feedback.forEach(async (submission) => {
    const _response = await db.query(
      `INSERT INTO assignments
    (studentid, title, type, date, timeofday, experiencerating, comment)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;`,
      [
        student,
        `${submission.timeOfDay}: ${date}`,
        submission.type,
        date,
        submission.timeOfDay,
        submission.experienceRating,
        submission.comment,
      ]
    );
  });

  return `Feedback for student ${student} on ${date} completed`;
}

async function populateReflection(
  student: string | number,
  date: string,
  reflection: IReflection
): Promise<string> {
  const _response = await db.query(
    `INSERT INTO assignments 
  (studentid, title, type, date, content)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;`,
    [student, `Reflection - ${date}`, reflection.type, date, reflection.content]
  );

  return `Reflection for student ${student} on ${date} completed`;
}

populateTable();
