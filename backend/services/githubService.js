const axios = require("axios");

const githubApi = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json"
    }
});

const getGithubUser = async (username) => {
    const response = await githubApi.get(`/users/${username}`);

    return response.data;
};

const getGithubRepositories = async (username) => {
    const response = await githubApi.get(
        `/users/${username}/repos`,
        {
            params: {
                per_page: 100,
                sort: "updated"
            }
        }
    );

    return response.data;
};

module.exports = {
    getGithubUser,
    getGithubRepositories
};