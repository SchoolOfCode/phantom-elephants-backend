"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDaysAttended = exports.packageAttendance = exports.packageRecaps = exports.packageFeedback = exports.packageReflections = exports.packageWorkshops = exports.packageQuizzes = void 0;
const listOfType_1 = require("./listOfType");
const addNulls_1 = require("./addNulls");
function packageQuizzes(records, date) {
    // create a quiz list [{1},{2},{3},{4},{5},{6}...]
    // if there is a gap in the dates insert as many nulls
    return (0, addNulls_1.addNulls)(records.reduce((acc, cur) => cur.type === 'quiz'
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
        : acc, []), date);
}
exports.packageQuizzes = packageQuizzes;
function packageWorkshops(records, date) {
    // create a workshop list [{1},{2},{3},{4},{5},{6}...]
    const workshopsList = (0, addNulls_1.addNulls)(records.reduce((acc, cur) => cur.type === 'workshop'
        ? [
            ...acc,
            {
                type: cur.type,
                title: cur.title,
                date: cur.date,
                dateDay: cur.date.getDay(),
                score: cur.score,
            },
        ]
        : acc, []), date);
    // group workshop list in sub-arrays by date [[{1},{2},{3}], [{4},{5}], [{6}]]
    const workshopsGroupedByDate = (0, addNulls_1.addNullsEnd)(workshopsList.reduce((acc, cur, index, array) => index < 1 || cur === null || workshopsList[index - 1] === null
        ? [...acc, cur]
        : cur.date.toString().slice(0, 11) ===
            workshopsList[index - 1].date.toString().slice(0, 11)
            ? [...acc.slice(0, acc.length - 1), [...acc.slice(-1), cur]]
            : [...acc, cur], []));
    // Put any existing object that isn't in an array into one
    const workshops = workshopsGroupedByDate.map((item) => item ? (Array.isArray(item) ? item : [item]) : null);
    return workshops;
}
exports.packageWorkshops = packageWorkshops;
function packageReflections(records, date) {
    return (0, addNulls_1.addNulls)(records.reduce((acc, cur) => cur.type === 'reflection'
        ? [
            ...acc,
            {
                type: cur.type,
                title: cur.title,
                date: cur.date,
                content: cur.content,
            },
        ]
        : acc, []), date);
}
exports.packageReflections = packageReflections;
function packageFeedback(records, date) {
    const feedbackList = (0, addNulls_1.addNulls)(records.reduce((acc, cur) => cur.type === 'feedback'
        ? [
            ...acc,
            {
                type: cur.type,
                title: cur.title,
                date: cur.date,
                timeOfDay: cur.timeofday,
                experienceRating: cur.experiencerating,
                content: cur.comment,
            },
        ]
        : acc, []), date);
    const unsortedFeedback = feedbackList.reduce((acc, cur, index, array) => index < 1 || cur === null || array[index - 1] === null
        ? [...acc, cur]
        : cur.date.toString().slice(0, 11) ===
            array[index - 1].date.toString().slice(0, 11)
            ? [...acc.slice(0, acc.length - 1), [...acc.slice(-1), cur]]
            : [...acc, cur], []);
    const sortedFeedback = (0, addNulls_1.addNullsEnd)(unsortedFeedback.map((item) => item
        ? Array.isArray(item)
            ? item[0].timeOfDay === 'morning'
                ? item
                : [item[1], item[0]]
            : item.ttimeOfDay === 'morning'
                ? [item, null]
                : [null, item]
        : [null, null]));
    return sortedFeedback;
}
exports.packageFeedback = packageFeedback;
function packageRecaps(records, date) {
    return (0, addNulls_1.addNullsEnd)((0, addNulls_1.addNulls)(records.reduce(listOfType_1.listOfType, []), date));
}
exports.packageRecaps = packageRecaps;
function packageAttendance(records) {
    return records.map((quiz) => (quiz ? true : false));
}
exports.packageAttendance = packageAttendance;
function calculateDaysAttended(attendance) {
    return attendance.reduce((acc, cur) => (cur ? acc + 1 : acc), 0);
}
exports.calculateDaysAttended = calculateDaysAttended;
//# sourceMappingURL=records.js.map