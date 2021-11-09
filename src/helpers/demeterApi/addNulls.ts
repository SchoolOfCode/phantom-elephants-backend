export const addNulls = (array: Array<any>, bootcampStartDate): Array<any> => {
  // check if the array starts on start date and add actual nulls
  let resultArray = [];
  let startDiff = +(
    Math.round(array[0].date - bootcampStartDate) /
    (1000 * 60 * 60 * 24)
  ).toFixed(0);
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
};
export const addNullsEnd = (array: Array<any>): Array<any> => {
  let endDiff = 60 - array.length;
  if (endDiff > 0) {
    array = [...array, ...Array(endDiff).fill(null)];
  }
  return array;
};
