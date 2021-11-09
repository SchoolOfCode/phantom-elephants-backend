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
exports.getMostRecentCommit = exports.getReposByBootcamp = void 0;
const fetchData_1 = require("./fetchData");
function getReposByBootcamp(bootcampName) {
    return __awaiter(this, void 0, void 0, function* () {
        const allRepos = yield (0, fetchData_1.fetchRepos)();
        const filteredRepos = allRepos.filter((repo) => {
            repo.topics.some((topic) => topic === bootcampName);
        });
        return filteredRepos;
    });
}
exports.getReposByBootcamp = getReposByBootcamp;
function getMostRecentCommit(repo) {
    return __awaiter(this, void 0, void 0, function* () {
        const commits = yield (0, fetchData_1.fetchCommitsFromRepo)(repo.commits_url);
        try {
            return commits.reduce((mostRecentCommit, currentCommit) => {
                const dateDifference = currentCommit.committer.date - mostRecentCommit.committer.date;
                if (dateDifference > 0) {
                    return currentCommit;
                }
                else {
                    return mostRecentCommit;
                }
            }, commits[0]);
        }
        catch (_a) {
            return undefined;
        }
    });
}
exports.getMostRecentCommit = getMostRecentCommit;
//# sourceMappingURL=filterData.js.map