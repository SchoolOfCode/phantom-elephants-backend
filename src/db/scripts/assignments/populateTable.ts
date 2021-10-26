import {
  Idb,
  IDataObject,
  IScoredAssignment,
  IFeedback,
  IReflection,
  IStudentWork,
} from '../../dbTypes';

const db: Idb = require('../../index');
const { data }: { data: Array<IDataObject> } = require('../../data');

async function populateTable() {
  for (let bootcamp of data) {
    const { students } = bootcamp;
    for (let student of students) {
      try {
        const response = await addStudentWorkToDatabase(student);
        console.log(response);
      } catch (error) {
        console.log(`Couldn't add student to database`);
      }
    }
  }
}

async function addStudentWorkToDatabase(student) {
  student.work.forEach(async (day: IStudentWork) => {
    const assignments = createAssignmentList(day);

    if (assignments) {
      const scoredAssignmentsResponse = await populateScoredAssignments(
        student.info.id,
        day.date,
        assignments
      );
      console.log(scoredAssignmentsResponse);
    }

    try {
      if (day.feedback.length > 0) {
        const feedbackResponse = await populateFeedback(
          student.info.id,
          day.date,
          day.feedback
        );
        console.log(feedbackResponse);
      }
    } catch (error) {
      console.log(`Couldn't add feedback to database`);
    }

    if (day.reflection) {
      const reflectionResponse = await populateReflection(
        student.info.id,
        day.date,
        day.reflection
      );
      console.log(reflectionResponse);
    }
  });
  return `All work for ${student.info.id} added to database`;
}

function createAssignmentList({
  recapTask,
  workshops,
  quiz,
}: {
  recapTask: IScoredAssignment | null;
  workshops: Array<IScoredAssignment>;
  quiz: IScoredAssignment | null;
}): Array<IScoredAssignment> {
  console.log(typeof workshops);
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
  student: number,
  date: string,
  assignments: Array<IScoredAssignment>
): Promise<string> {
  const scoredAssignmentQuery = `INSERT INTO assignments 
  (studentid, title, type, date, score)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;`;

  try {
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
  } catch (error) {
    return 'No assignments to populate';
  }
}

async function populateFeedback(
  student: number,
  date: string,
  feedback: Array<IFeedback>
): Promise<string> {
  try {
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
  } catch (error) {
    return 'No feedback to populate';
  }
}

async function populateReflection(
  student: number,
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
