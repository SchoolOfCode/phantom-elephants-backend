import { fetchRepos, fetchCommitsFromRepo } from './fetchData';
import { IRepository, ICommit } from '../../types/githubData';

async function getReposByBootcamp(
  bootcampName: string
): Promise<IRepository[]> {
  const allRepos = await fetchRepos();
  const filteredRepos = allRepos.filter((repo) => {
    repo.topics.some((topic) => topic === bootcampName);
  });

  return filteredRepos;
}

async function getMostRecentCommit(repo: IRepository): Promise<ICommit> {
  const commits = await fetchCommitsFromRepo(repo.commits_url);

  return commits.reduce((mostRecentCommit, currentCommit) => {
    const dateDifference =
      currentCommit.committer.date - mostRecentCommit.committer.date;

    if (dateDifference > 0) {
      return currentCommit;
    } else {
      return mostRecentCommit;
    }
  }, commits[0]);
}
