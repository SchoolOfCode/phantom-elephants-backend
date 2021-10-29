// INNER joins for tables 

const {query} = require('../db/index')

export async function getAllStudentRecords() {
    const data = await query('SELECT * FROM ((bootcamps INNER JOIN students ON bootcamps.id = students.bootcampid) INNER JOIN assignments ON students.id = assignments.studentid);');
    return data.rows;
  }
  

  