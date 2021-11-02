"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listOfType = void 0;
const listOfType = (acc, cur) => {
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
exports.listOfType = listOfType;
//# sourceMappingURL=listOfType.js.map