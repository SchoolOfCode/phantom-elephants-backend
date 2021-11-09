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
const db = require('../../index');
const { data } = require('../../data');
// info,id, name, username,avatar
function populateTable() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < data.length; i++) {
            const { students, id } = data[i];
            const sqlQuery = `INSERT INTO students
       (name, username, email, avatar, bootcampid) 
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *;`;
            for (let j = 0; j < students.length; j++) {
                const response = yield db.query(sqlQuery, [
                    students[j].info.name,
                    students[j].info.username,
                    students[j].info.email,
                    students[j].info.avatar,
                    id,
                ]);
                console.log(students[i].info.name, ' populated');
            }
        }
        console.log('students table populated');
    });
}
populateTable();
//# sourceMappingURL=populateTable.js.map