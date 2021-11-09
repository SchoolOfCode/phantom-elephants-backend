"use strict";
/* Required:
    id
    studentId
    title
    type
    date

  Optional:
    url
    score
    timeOfDay
    experienceRating
    comment
    didAttend
    content
*/
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
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlQuery = `CREATE TABLE IF NOT EXISTS assignments (
    id SERIAL PRIMARY KEY,
    studentid INTEGER NOT NULL,
    title TEXT,
    type TEXT,
    date DATE NOT NULL,
    url TEXT,
    score TEXT,
    timeofday TEXT,
    experiencerating INTEGER,
    comment TEXT,
    didattend BOOLEAN,
    content TEXT
  )`;
        try {
            const response = yield db.query(sqlQuery);
            console.log('Assignments table created');
        }
        catch (error) {
            console.log(`${error.name}: ${error.message}`);
        }
    });
}
createTable();
//# sourceMappingURL=createTable.js.map