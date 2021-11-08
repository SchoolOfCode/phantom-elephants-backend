import { AxiosInstance, AxiosResponse } from 'axios';
import {
  ICheckRun,
  ICommit,
  ICommitResponse,
  IRepository,
} from '../../types/githubData';

const axios: AxiosInstance = require('axios').default;

const url = 'https://api.github.com';
const authString = `token ${process.env.GITHUB_API_KEY}`;

export async function fetchRepos(): Promise<IRepository[]> {
  const requestUrl = `${url}/${process.env.OWNER_TYPE}/${process.env.REPOSITORY_OWNER}/repos`;
  const response: AxiosResponse<any, any> = await axios.get(requestUrl, {
    method: 'GET',
    headers: { Authorization: authString },
  });

  return response.data;
}

export async function fetchCommitsFromRepo(
  commitsUrl: string
): Promise<ICommit[]> {
  const response: AxiosResponse<any, any> = await axios.get(commitsUrl, {
    method: 'GET',
    headers: { Authorization: authString },
  });
  return response.data.map((item: ICommitResponse): ICommit => item.commit);
}

export async function fetchCheckRunsFromCommit(
  repoName: string,
  commitRef: string
): Promise<ICheckRun[]> {
  const requestUrl = `${url}/repos/${process.env.REPOSITORY_OWNER}/${repoName}/commits/${commitRef}/check-runs`;
  const response: AxiosResponse<any, any> = await axios.get(requestUrl, {
    method: 'GET',
    headers: { Authorization: authString },
  });

  return response.data.check_runs;
}
