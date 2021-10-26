import { QueryResult } from 'pg';

export interface Idb {
  query: (
    text: string,
    params?: Array<any>,
    callback?: (err: Error, result: QueryResult<any>) => void
  ) => QueryResult<any>;
}
interface IStudentInfo {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

export interface IScoredAssignment {
  title: string;
  score: string;
  type: string;
  percentage?: number;
}

export interface IFeedback {
  experienceRating?: number;
  comment?: string;
  type: string;
  timeOfDay: string;
}

export interface IReflection {
  type: string;
  content: string;
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
  id: number;
  name: string;
  region: string;
  startDate: string;
  students: Array<IStudentObject>;
}
