import { fetchRepos, fetchCommitsFromRepo } from './fetchData';
import { IRepository } from '../../types/githubData';

async function getReposByBootcamp(
  bootcampName: string
): Promise<IRepository[]> {
  const allRepos = await fetchRepos();
  const filteredRepos = allRepos.filter((repo) => {
    repo.topics.some((topic) => topic === bootcampName);
  });

  return filteredRepos;
}

async function getMostRecentCommit(repo: IRepository) {
  const commits = await fetchCommitsFromRepo(repo.commits_url);
}
