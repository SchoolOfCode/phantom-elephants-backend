import { AxiosInstance, AxiosResponse } from 'axios';
import { ICheckRun, IRepository } from '../../types/githubData';

const axios: AxiosInstance = require('axios').default;

const url: string = 'https://api.github.com';
const repositoryOwner: string = 'SchoolOfCode';
const ownerType: string = 'orgs';
const authString: string = `token ${process.env.GITHUB_API_KEY}`;

export async function fetchRepos(): Promise<IRepository[]> {
  const requestUrl = `${url}/${ownerType}/${repositoryOwner}/repos`;
  const response: AxiosResponse<any, any> = await axios.get(requestUrl, {
    method: 'GET',
    headers: { Authorization: authString },
  });

  return response.data;
}

export async function fetchCheckRunsFromCommit(
  repoName: string,
  commitRef: string
): Promise<ICheckRun[]> {
  const requestUrl = `${url}/repos/${repositoryOwner}/${repoName}/commits/${commitRef}/check-runs`;
  const response: AxiosResponse<any, any> = await axios.get(requestUrl, {
    method: 'GET',
    headers: { Authorization: authString },
  });

  return response.data.check_runs;
}
