import { getMostRecentCommit } from '../src/helpers/githubApi/filterData';

import * as githubFetch from '../src/helpers/githubApi/fetchData';

import {
  repositoryWithMultipleCommits,
  multipleCommitsCorrectResult,
  multipleCommitsResponse,
  singleCommitResponse,
  singleCommitCorrectResult,
  repositoryWithSingleCommit,
} from '../lib/filterDataTestObjects';
import { ICommitResponse, ICommit } from '../src/types/githubData';

describe('getMostRecentCommit', () => {
  test('Given a repository with a single commit, the function will return that commit', async (): Promise<void> => {
    // Arrange
    const mockedCommitsFetch = jest.spyOn(githubFetch, 'fetchCommitsFromRepo');
    mockedCommitsFetch.mockImplementation(
      async (commitsUrl: string): Promise<ICommit[]> => {
        return singleCommitResponse;
      }
    );

    // Act
    const actual = await getMostRecentCommit(repositoryWithSingleCommit);

    // Assert
    expect(actual).toStrictEqual(singleCommitCorrectResult);

    // Cleanup
    mockedCommitsFetch.mockRestore();
  });

  test('Given a repository with multiple commits, the function will return the commit with the most recent date', async (): Promise<void> => {
    // Arrange
    const mockedCommitsFetch = jest.spyOn(githubFetch, 'fetchCommitsFromRepo');
    mockedCommitsFetch.mockImplementation(
      async (commitsUrl: string): Promise<ICommit[]> => {
        return multipleCommitsResponse;
      }
    );

    // Act
    const actual = await getMostRecentCommit(repositoryWithMultipleCommits);

    // Assert
    expect(actual).toStrictEqual(multipleCommitsCorrectResult);

    // Cleanup
    mockedCommitsFetch.mockRestore();
  });
});
