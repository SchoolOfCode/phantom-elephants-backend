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
var express = require("express");
var recordRouter = express.Router();
const { getAllStudentRecordsById, getAllStudentsX, getAllStudentRecordsByIdTypeAndDate, } = require("../models/records");
function addNulls(array, bootcampStartDate) {
    // check if the array starts on start date and add actual nulls
    let resultArray = [];
    let startDiff = +(Math.round(array[0].date - bootcampStartDate) / (1000 * 60 * 60 * 24)).toFixed(0);
    if (startDiff > 0) {
        resultArray = [...Array(startDiff - 1).fill(null)];
    }
    for (let i = 0; i < array.length - 1; i++) {
        let curr = array[i].date;
        let next = array[i + 1].date;
        const diffTime = Math.abs(next - curr);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        diffDays > 1
            ? resultArray.push(array[i], ...Array(diffDays - 1).fill(null))
            : resultArray.push(array[i]);
    }
    let endDiff = 60 - resultArray.length;
    if (endDiff > 0) {
        resultArray.push(...Array(endDiff).fill(null));
    }
    return resultArray;
}
function addNullsEnd(array) {
    let endDiff = 60 - array.length;
    if (endDiff > 0) {
        array = [...array, ...Array(endDiff).fill(null)];
    }
    return array;
}
recordRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // loop over all students and bring back records in grouped array by studentID
    const allStudents = yield getAllStudentsX();
    let allRecords = [];
    for (let id = 1; id <= allStudents.length; id++) {
        const studentRecords = yield getAllStudentRecordsById(id);
        // create a quiz list [{1},{2},{3},{4},{5},{6}...]
        // if there is a gap in the dates insert as many nulls
        // function to add nulls: is date +1 od the next ? add instance : add null
        const quizzes = addNulls(studentRecords.reduce((acc, cur) => cur.type === "quiz"
            ? [
                ...acc,
                {
                    type: cur.type,
                    title: cur.title,
                    date: cur.date,
                    dateDay: cur.date.getDay(),
                    score: cur.score,
                    percentage: Math.round(eval(cur.score) * 100),
                },
            ]
            : acc, []), studentRecords[0].startdate);
        // create a workshop list [{1},{2},{3},{4},{5},{6}...]
        // const workshopsList = addNulls(
        //   studentRecords.reduce(
        //     (acc, cur) =>
        //       cur.type === "workshop"
        //         ? [
        //             ...acc,
        //             {
        //               type: cur.type,
        //               title: cur.title,
        //               date: cur.date,
        //               dateDay: cur.date.getDay(),
        //               score: cur.score,
        //             },
        //           ]
        //         : acc,
        //     []
        //   ),
        //   studentRecords[0].startdate
        // );
        // // group workshop list in sub-arrays by date [[{1},{2},{3}], [{4},{5}], [{6}]]
        // const workshops = addNullsEnd(workshopsList.reduce(
        //   (acc, cur, index, array) =>
        //     index < 1 || cur === null || workshopsList[index - 1] === null
        //       ? [...acc, cur]
        //       : cur.date.toString().slice(0, 11) ===
        //         workshopsList[index - 1].date.toString().slice(0, 11)
        //       ? [...acc.slice(0, acc.length - 1), [...acc.slice(-1), cur]]
        //       : [...acc, cur],
        //   []
        // ));
        // reflections
        // const reflections = addNulls(
        //   studentRecords.reduce(
        //     (acc, cur) =>
        //       cur.type === "reflection"
        //         ? [
        //             ...acc,
        //             {
        //               type: cur.type,
        //               title: cur.title,
        //               date: cur.date,
        //               content: cur.content,
        //             },
        //           ]
        //         : acc,
        //     []
        //   ),
        //   studentRecords[0].startdate
        // );
        // // feedback
        // const feedbackList = addNulls(
        //   studentRecords.reduce(
        //     (acc, cur) =>
        //       cur.type === "feedback"
        //         ? [
        //             ...acc,
        //             {
        //               type: cur.type,
        //               title: cur.title,
        //               date: cur.date,
        //               timeOfDay: cur.timeofday,
        //               experienceRating: cur.experiencerating,
        //               content: cur.comment,
        //             },
        //           ]
        //         : acc,
        //     []
        //   ),
        //   studentRecords[0].startdate
        // );
        // const feedbackUnsort = feedbackList.reduce(
        //   (acc, cur, index, array) =>
        //     index < 1 || cur === null || array[index - 1] === null
        //       ? [...acc, cur]
        //       : cur.date.toString().slice(0, 11) ===
        //         array[index - 1].date.toString().slice(0, 11)
        //       ? [...acc.slice(0, acc.length - 1), [...acc.slice(-1), cur]]
        //       : [...acc, cur],
        //   []
        // );
        // const feedback = feedbackUnsort.map((item) => Array.isArray(item) ? (item[0].timeOfDay === 'morning' ? item : [item[1], item[0]]) : item)
        // // const recaps
        // const recaps = addNullsEnd(addNulls(
        //   studentRecords.reduce(listOfType, []),
        //   studentRecords[0].startdate
        // ));
        // const attendance
        const attendance = quizzes.map((quiz) => quiz ? true : false);
        const daysAttended = attendance.reduce((acc, cur) => acc + cur, 0) / attendance.filter();
    }
}));
allRecords = [
    ...allRecords,
    {
        id: studentRecords[0].id,
        bootcampId: studentRecords[0].bootcampid,
        name: studentRecords[0].name,
        username: studentRecords[0].username,
        avatar: studentRecords[0].avatar,
        region: studentRecords[0].region,
        startDate: studentRecords[0].startdate,
        // quizzes,
        // recaps,
        // workshops,
        // reflections,
        // feedback,
        attendance,
        daysAttended,
    },
];
console.log(
// quizzes.length,
// workshops.length,
// reflections.length,
// feedback.length,
// recaps.length
);
// take array of students data by id and sort into
res.json({
    success: true,
    message: `Search result for all student records`,
    payload: allRecords,
});
;
module.exports = recordRouter;
//# sourceMappingURL=records.js.map