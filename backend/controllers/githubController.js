const {
    getGithubUser,
    getGithubRepositories
} = require("../services/githubService");

const getUser = async (req, res) => {
    try {
        const username = req.params.username;

        if (!username) {
            return res.status(400).json({
                message: "GitHub username is required"
            });
        }

        const userData = await getGithubUser(username);

        res.status(200).json(userData);
    } catch (error) {
        console.error("GitHub User API Error:", error.message);

        if (error.response) {
            return res.status(error.response.status).json({
                message: "Failed to fetch GitHub user data",
                githubStatus: error.response.status
            });
        }

        res.status(500).json({
            message: "Internal server error"
        });
    }
};

const getRepositories = async (req, res) => {
    try {
        const username = req.params.username;

        if (!username) {
            return res.status(400).json({
                message: "GitHub username is required"
            });
        }

        const repositories = await getGithubRepositories(username);

        res.status(200).json(repositories);
    } catch (error) {
        console.error(
            "GitHub Repository API Error:",
            error.message
        );

        if (error.response) {
            return res.status(error.response.status).json({
                message: "Failed to fetch GitHub repositories",
                githubStatus: error.response.status
            });
        }

        res.status(500).json({
            message: "Internal server error"
        });
    }
};

module.exports = {
    getUser,
    getRepositories
};