import { QueryResult } from 'pg';

export interface IComments {
    query: (
      text: string,
      params?: Array<any>,
      callback?: (err: Error, result: QueryResult<any>) => void
    ) => QueryResult<any>;
  }
   export interface CoachesStudentFeedback {
    id: number;
    author: string;
    comment: string;
    imageUrl: string;
    date: Date; 
    studentid: number;
  }