import { fetchRepos, fetchCommitsFromRepo } from './fetchData';
import {
  IRepository,
  ICommit,
  IFailureResponse,
  ICommitResponse,
} from '../../types/githubData';

export async function getReposByBootcamp(
  bootcampName: string
): Promise<IRepository[]> {
  const allRepos = await fetchRepos();
  const filteredRepos = allRepos.filter((repo) => {
    repo.topics.some((topic) => topic === bootcampName);
  });

  return filteredRepos;
}

export async function getMostRecentCommit(repo: IRepository): Promise<ICommit> {
  const commits = await fetchCommitsFromRepo(repo.commits_url);

  try {
    return commits.reduce(
      (mostRecentCommit: ICommit, currentCommit: ICommit): ICommit => {
        const dateDifference =
          currentCommit.committer.date - mostRecentCommit.committer.date;

        if (dateDifference > 0) {
          return currentCommit;
        } else {
          return mostRecentCommit;
        }
      },
      commits[0]
    );
  } catch {
    return undefined;
  }
}
