"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const filterData_1 = require("../src/helpers/githubApi/filterData");
const githubFetch = require("../src/helpers/githubApi/fetchData");
const filterDataTestObjects_1 = require("../lib/filterDataTestObjects");
describe('getMostRecentCommit', () => {
    test('Given a repository with a single commit, the function will return that commit', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const mockedCommitsFetch = jest.spyOn(githubFetch, 'fetchCommitsFromRepo');
        mockedCommitsFetch.mockImplementation((commitsUrl) => __awaiter(void 0, void 0, void 0, function* () {
            return filterDataTestObjects_1.singleCommitResponse;
        }));
        // Act
        const actual = yield (0, filterData_1.getMostRecentCommit)(filterDataTestObjects_1.repositoryWithSingleCommit);
        // Assert
        expect(actual).toStrictEqual(filterDataTestObjects_1.singleCommitCorrectResult);
        // Cleanup
        mockedCommitsFetch.mockRestore();
    }));
    test('Given a repository with multiple commits, the function will return the commit with the most recent date', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const mockedCommitsFetch = jest.spyOn(githubFetch, 'fetchCommitsFromRepo');
        mockedCommitsFetch.mockImplementation((commitsUrl) => __awaiter(void 0, void 0, void 0, function* () {
            return filterDataTestObjects_1.multipleCommitsResponse;
        }));
        // Act
        const actual = yield (0, filterData_1.getMostRecentCommit)(filterDataTestObjects_1.repositoryWithMultipleCommits);
        // Assert
        expect(actual).toStrictEqual(filterDataTestObjects_1.multipleCommitsCorrectResult);
        // Cleanup
        mockedCommitsFetch.mockRestore();
    }));
});
//# sourceMappingURL=filterData.test.js.map