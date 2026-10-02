const {
    getGithubRepositories
} = require("../services/githubService");

const {
    calculateRepositoryAnalytics
} = require("../services/analyticsService");

const getAnalytics = async (req, res) => {
    try {
        const username = req.params.username;

        if (!username) {
            return res.status(400).json({
                message: "GitHub username is required"
            });
        }

        // Get repositories from GitHub
        const repositories = await getGithubRepositories(username);

        // Calculate analytics
        const analytics =
            calculateRepositoryAnalytics(repositories);

        res.status(200).json(analytics);

    } catch (error) {
        console.error(
            "GitHub Analytics API Error:",
            error.message
        );

        if (error.response) {
            return res.status(error.response.status).json({
                message: "Failed to fetch GitHub analytics",
                githubStatus: error.response.status
            });
        }

        res.status(500).json({
            message: "Internal server error"
        });
    }
};

module.exports = {
    getAnalytics
};