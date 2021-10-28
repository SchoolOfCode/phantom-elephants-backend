var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require('axios').default;
const url = 'https://api.github.com';
const repositoryOwner = 'onlyasmalllizard';
const ownerType = 'orgs';
const authString = `token ${process.env.GITHUB_API_KEY}`;
function fetchRepos() {
    return __awaiter(this, void 0, void 0, function* () {
        const requestUrl = `${url}/${ownerType}/${repositoryOwner}/repos`;
        const response = yield axios.get(requestUrl, {
            method: 'GET',
            headers: { Authorization: authString },
        });
        return response;
    });
}
function fetchTestResultFromCommit(repoName, commitRef) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestUrl = `${url}/repos/${repositoryOwner}/${repoName}/commits/${commitRef}/check-runs`;
        const response = yield axios.get(requestUrl, {
            method: 'GET',
            headers: { Authorization: authString },
        });
        console.log(response);
    });
}
console.log(fetchTestResultFromCommit('github-tests', '9b09dd4'));
//# sourceMappingURL=fetchData.js.map