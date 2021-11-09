import { listOfType } from './listOfType';
import { addNulls, addNullsEnd } from './addNulls';

const calcWeek = (curDate, startDate): number => {
  return (
    Math.floor(Math.ceil((curDate - startDate) / (1000 * 60 * 60 * 24)) / 5) + 1
  );
};

export function packageQuizzes(records, date) {
  // create a quiz list [{1},{2},{3},{4},{5},{6}...]
  // if there is a gap in the dates insert as many nulls

  return addNulls(
    records.reduce(
      (acc, cur) =>
        cur.type === 'quiz'
          ? [
              ...acc,
              {
                type: cur.type,
                title: cur.title,
                date: cur.date,
                dateDay: cur.date.getDay(),
                week: calcWeek(cur.date, date),
                score: cur.score,
                percentage: Math.round(eval(cur.score) * 100),
              },
            ]
          : acc,
      []
    ),
    date
  );
}

export function packageWorkshops(records, date) {
  // create a workshop list [{1},{2},{3},{4},{5},{6}...]
  const workshopsList = addNulls(
    records.reduce(
      (acc, cur) =>
        cur.type === 'workshop'
          ? [
              ...acc,
              {
                type: cur.type,
                title: cur.title,
                date: cur.date,
                dateDay: cur.date.getDay(),
                week: calcWeek(cur.date, date),
                score: cur.score,
              },
            ]
          : acc,
      []
    ),
    date
  );

  // group workshop list in sub-arrays by date [[{1},{2},{3}], [{4},{5}], [{6}]]
  const workshopsGroupedByDate = addNullsEnd(
    workshopsList.reduce(
      (acc, cur, index, array) =>
        index < 1 || cur === null || workshopsList[index - 1] === null
          ? [...acc, cur]
          : cur.date.toString().slice(0, 11) ===
            workshopsList[index - 1].date.toString().slice(0, 11)
          ? [...acc.slice(0, acc.length - 1), [...acc.slice(-1), cur]]
          : [...acc, cur],
      []
    )
  );

  // Put any existing object that isn't in an array into one
  const workshops = workshopsGroupedByDate.map((item) =>
    item ? (Array.isArray(item) ? item : [item]) : null
  );
  return workshops;
}

export function packageReflections(records, date) {
  return addNulls(
    records.reduce(
      (acc, cur) =>
        cur.type === 'reflection'
          ? [
              ...acc,
              {
                type: cur.type,
                title: cur.title,
                date: cur.date,
                dateDay: cur.date.getDay(),
                week: calcWeek(cur.date, date),
                content: cur.content,
              },
            ]
          : acc,

      []
    ),
    date
  );
}

export function packageFeedback(records, date) {
  const feedbackList = addNulls(
    records.reduce(
      (acc, cur) =>
        cur.type === 'feedback'
          ? [
              ...acc,
              {
                type: cur.type,
                title: cur.title,
                date: cur.date,
                dateDay: cur.date.getDay(),
                week: calcWeek(cur.date, date),
                timeOfDay: cur.timeofday,
                experienceRating: cur.experiencerating,
                content: cur.comment,
              },
            ]
          : acc,

      []
    ),
    date
  );

  const unsortedFeedback = feedbackList.reduce(
    (acc, cur, index, array) =>
      index < 1 || cur === null || array[index - 1] === null
        ? [...acc, cur]
        : cur.date.toString().slice(0, 11) ===
          array[index - 1].date.toString().slice(0, 11)
        ? [...acc.slice(0, acc.length - 1), [...acc.slice(-1), cur]]
        : [...acc, cur],
    []
  );

  const sortedFeedback = addNullsEnd(
    unsortedFeedback.map((item) =>
      item
        ? Array.isArray(item)
          ? item[0].timeOfDay === 'morning'
            ? item
            : [item[1], item[0]]
          : item.timeOfDay === 'morning'
          ? [item, null]
          : [null, item]
        : [null, null]
    )
  );

  return sortedFeedback;
}

export function packageRecaps(records, date) {
  return addNullsEnd(addNulls(records.reduce(listOfType, []), date));
}

export function packageAttendance(records) {
  return records.reduce(
    (acc, cur, index) =>
      cur
        ? [
            ...acc,
            {
              didAttend: true,
              date: cur.date,
              dateDay: cur.dateDay,
              week: cur.week,
            },
          ]
        : [
            ...acc,
            {
              didAttend: false,
              date: acc[index - 1].date,
              dateDay: acc[index - 1].dateDay,
              week: acc[index - 1].week,
            },
          ],
    []
  );
}

export function calculateDaysAttended(attendance) {
  return attendance.reduce((acc, cur) => (cur.didAttend ? acc + 1 : acc), 0);
}
