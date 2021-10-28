const axios = require('axios').default;

const url = 'https://api.github.com';
const organisation = 'onlyasmalllizard';

async function fetchRepos() {
  const requestUrl = `${url}/users/${organisation}/repos`;
  const authString = `token ${process.env.GITHUB_API_KEY}`;
  const response = await axios.get(requestUrl, {
    method: 'GET',
    headers: { Authorization: authString },
  });

  console.log(response);
}

fetchRepos();
