import { QueryResult, ClientBase } from 'pg';

export interface Idb {
  query: (
    text: string,
    params?: Array<string>,
    callback?: (err: Error, result: QueryResult<any>) => void
  ) => ClientBase['query'];
}
