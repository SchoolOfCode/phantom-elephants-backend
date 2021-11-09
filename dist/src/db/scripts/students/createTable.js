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
/*
Writing an async function called createTable
Write a SQL query string to create a table if it doesn't already exist
Pass the SQL string into the db.query function and await the response
Console.log if it was successful
Outside of the function, call the createTable function
*/
// info,id, name, username,avatar
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlQuery = `CREATE TABLE IF NOT EXISTS students (

    id SERIAL PRIMARY KEY,
    name TEXT,
    username TEXT,
    email TEXT,
    avatar TEXT,
    bootcampid INTEGER,
    
);`;
        try {
            const response = yield db.query(sqlQuery);
            console.log('Students table created');
        }
        catch (error) {
            console.log(`${error.name}: ${error.message}`);
        }
    });
}
createTable();
//# sourceMappingURL=createTable.js.map