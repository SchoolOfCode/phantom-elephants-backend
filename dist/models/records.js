"use strict";
// INNER joins for tables 
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
exports.getAllStudentRecords = void 0;
const { query } = require('../db/index');
function getAllStudentRecords() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield query('SELECT * FROM ((bootcamps INNER JOIN students ON bootcamps.id = students.bootcampId) INNER JOIN assignments ON students.id = assignments.studentsId);');
        return data.rows;
    });
}
exports.getAllStudentRecords = getAllStudentRecords;
//# sourceMappingURL=records.js.map