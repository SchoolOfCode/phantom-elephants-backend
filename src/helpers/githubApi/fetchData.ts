const axios = require('axios').default;

const url = 'https://api.github.com';
const repositoryOwner = 'SchoolOfCode';
const ownerType = 'orgs';
const authString = `token ${process.env.GITHUB_API_KEY}`;

async function fetchRepos() {
  const requestUrl = `${url}/${ownerType}/${repositoryOwner}/repos`;
  const response = await axios.get(requestUrl, {
    method: 'GET',
    headers: { Authorization: authString },
  });

  return response.data;
}

async function fetchCheckRunsFromCommit(repoName: string, commitRef: string) {
  const requestUrl = `${url}/repos/${repositoryOwner}/${repoName}/commits/${commitRef}/check-runs`;
  const response = await axios.get(requestUrl, {
    method: 'GET',
    headers: { Authorization: authString },
  });

  return response.data.check_runs;
}
