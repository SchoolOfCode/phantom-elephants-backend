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
const { query } = require('../db/dummyDataStructure');
// import interface for models
//get bootcamp by id 
function getBootcampById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query("SELECT * FROM bootcamps WHERE id = $1", [id]);
        return data.rows;
    });
}
function getAllBootcamps() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query("SELECT * FROM bootcamps");
        return data.rows;
    });
}
// // gets all students names from all columns
// async function getAllStudents() {
//     const data = await query("SELECT * FROM students;");
//     return data.rows;
//   }
// async function getStudentsById(id:number) {
//     const data = await query("SELECT * FROM students WHERE id = $1", [id]);
//     return data.rows;
exports.default = {
    getBootcampById,
    getAllBootcamps
};
//# sourceMappingURL=bootcamps.js.map