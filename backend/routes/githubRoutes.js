const express = require("express");

const router = express.Router();

const {
    getUser,
    getRepositories
} = require("../controllers/githubController");

const {
    getAnalytics
} = require("../controllers/analyticsController");

router.get("/user/:username", getUser);

router.get("/user/:username/repos", getRepositories);

router.get("/user/:username/analytics", getAnalytics);

module.exports = router;