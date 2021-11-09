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
exports.fetchCheckRunsFromCommit = exports.fetchCommitsFromRepo = exports.fetchRepos = void 0;
const axios = require('axios').default;
const url = 'https://api.github.com';
const authString = `token ${process.env.GITHUB_API_KEY}`;
function fetchRepos() {
    return __awaiter(this, void 0, void 0, function* () {
        const requestUrl = `${url}/${process.env.OWNER_TYPE}/${process.env.REPOSITORY_OWNER}/repos`;
        const response = yield axios.get(requestUrl, {
            method: 'GET',
            headers: { Authorization: authString },
        });
        return response.data;
    });
}
exports.fetchRepos = fetchRepos;
function fetchCommitsFromRepo(commitsUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios.get(commitsUrl, {
            method: 'GET',
            headers: { Authorization: authString },
        });
        return response.data.map((item) => item.commit);
    });
}
exports.fetchCommitsFromRepo = fetchCommitsFromRepo;
function fetchCheckRunsFromCommit(repoName, commitRef) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestUrl = `${url}/repos/${process.env.REPOSITORY_OWNER}/${repoName}/commits/${commitRef}/check-runs`;
        const response = yield axios.get(requestUrl, {
            method: 'GET',
            headers: { Authorization: authString },
        });
        return response.data.check_runs;
    });
}
exports.fetchCheckRunsFromCommit = fetchCheckRunsFromCommit;
//# sourceMappingURL=fetchData.js.map