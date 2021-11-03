// INNER joins for tables
import { Idb } from '../types/database';

const db: Idb = require('../db/index');

export async function getAllStudentRecords(): Promise<Array<any>> {
  const data = await db.query(
    'SELECT * FROM ((bootcamps INNER JOIN students ON bootcamps.id = students.bootcampid) INNER JOIN assignments ON students.id = assignments.studentid INNER JOIN comments ON assignments.bootcampid = comments.bootcampid);'
  );
  return data.rows;
}

export async function getStudentRecordsByStudentId(id: string): Promise<any> {
  const sqlString =
    'SELECT * FROM ((bootcamps INNER JOIN students ON bootcamps.id = students.bootcampid) INNER JOIN assignments ON students.id = assignments.studentid INNER JOIN comments ON assignments.bootcampid = comments.bootcampid) WHERE students.id = $1;';

  const data = await db.query(sqlString, [id]);
  return data.rows;
}
