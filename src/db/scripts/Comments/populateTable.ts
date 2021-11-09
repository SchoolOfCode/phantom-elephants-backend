import { IDataObject } from '../../../types/database';
import { IComments } from '../../../types/comments';
import { endianness } from 'os';
import { response } from 'express';
import { Pool } from 'pg';
import {CoachesStudentFeedback} from "../../../types/comments"

const db: IComments = require('../../index');
// const { data }: { data: Array<IDataObject> } = require('../../data');

// info,id, name, username,avatar

const data: Array<CoachesStudentFeedback> = []

async function populateCommentsTable(): Promise<void>{
  for (let i = 0; i < data.length; i++) {
    const { comment, studentid, author, imageUrl, date } = data[i];
  
    const sqlQuery = `INSERT INTO comments
       (comments, author, imageUrl, date, studentid) 
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *;`;
    const response = await db.query(sqlQuery, [
      comment,
      author,
      imageUrl,
      date,
      studentid,
     
    ]);

    console.log(response);
  }

  console.log('comments table populated');
}

populateCommentsTable();


