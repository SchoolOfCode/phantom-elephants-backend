import { QueryResult, ClientBase } from 'pg';

export interface Idb {
  query: (
    text: string,
    params?: Array<any>,
    callback?: (err: Error, result: QueryResult<any>) => void
  ) => ClientBase['query'];
}

interface IStudentInfo {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

interface IGithubTasks {
  title: string;
  score: string;
}

interface IQuiz {
  title: string;
  scoreAsString: string;
  percentage: number;
}

interface IFeedback {
  experienceRating?: number;
  comment?: string;
}

interface IFeedbackObject {
  morning: IFeedback;
  afternoon: IFeedback;
}

interface IStudentWork {
  date: string;
  week: number;
  day: number;
  didAttend: boolean;
  recapTasks: IGithubTasks;
  workshops: Array<IGithubTasks>;
  quiz: IQuiz;
  feedback: IFeedbackObject;
  reflection: string;
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
