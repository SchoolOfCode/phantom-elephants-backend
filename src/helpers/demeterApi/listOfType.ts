export const listOfType = (acc, cur) => {
  return cur.type === "recap"
    ? [
        ...acc,
        {
          type: cur.type,
          title: cur.title,
          date: cur.date,
          score: cur.score,
        },
      ]
    : acc;
};
