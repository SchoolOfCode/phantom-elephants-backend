import { QueryResult } from 'pg';

export interface Idb {
  query: (
    text: string,
    params?: Array<any>,
    callback?: (err: Error, result: QueryResult<any>) => void
  ) => QueryResult<any>;
}

interface IStudentInfo {
  id: number | string;
  name: string;
  email: string;
  username: string;
  avatar: string;
}

export interface IScoredAssignment {
  id?: number | string;
  title: string;
  score: string;
  type: string;
  date: string;
  percentage?: number;
  studentId?: number;
}

export interface IFeedback {
  id?: number | string;
  experienceRating?: number;
  comment?: string;
  title: string;
  type: string;
  date: string;
  timeOfDay: string;
  studentId?: number;
}

export interface IReflection {
  id?: number | string;
  title: string;
  type: string;
  date: string;
  content: string;
  studentId?: number;
}

export interface IStudentWork {
  date: string;
  week: number;
  day: number;
  didAttend: boolean;
  recapTask: IScoredAssignment | null;
  workshops: Array<IScoredAssignment>;
  quiz: IScoredAssignment | null;
  feedback: Array<IFeedback>;
  reflection: IReflection;
}

interface IStudentObject {
  info: IStudentInfo;
  work: Array<IStudentWork>;
}

export interface IDataObject {
  id: number | string;
  name: string;
  region: string;
  startDate: string;
  students: Array<IStudentObject>;
}

export type Assignment = IScoredAssignment | IReflection | IFeedback;
