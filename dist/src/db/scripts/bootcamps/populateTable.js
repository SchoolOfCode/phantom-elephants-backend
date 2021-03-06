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
function populateTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlQuery = `INSERT INTO bootcamps 
    (name, region, startdate) 
    VALUES ($1, $2, $3)
    RETURNING *;`;
        for (let i = 0; i < data.length; i++) {
            const response = yield db.query(sqlQuery, [
                data[i].name,
                data[i].region,
                data[i].startDate,
            ]);
            console.log(response);
        }
        console.log('Bootcamps table populated');
    });
}
populateTable();
//# sourceMappingURL=populateTable.js.map