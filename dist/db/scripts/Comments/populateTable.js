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
// const { data }: { data: Array<IDataObject> } = require('../../data');
// info,id, name, username,avatar
const data = [];
function populateCommentsTable() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < data.length; i++) {
            const { comment, studentid, author, imageUrl, date } = data[i];
            const sqlQuery = `INSERT INTO comments
       (comments, author, imageUrl, date, studentid) 
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *;`;
            const response = yield db.query(sqlQuery, [
                comment,
                author,
                imageUrl,
                date,
                studentid,
            ]);
            console.log(response);
        }
        console.log('comments table populated');
    });
}
populateCommentsTable();
//# sourceMappingURL=populateTable.js.map