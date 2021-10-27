"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.PGURL,
    ssl: { rejectUnauthorized: false },
});
module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
};
//# sourceMappingURL=index.js.map