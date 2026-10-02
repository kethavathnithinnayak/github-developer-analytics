const calculateRepositoryAnalytics = (repositories) => {
    const totalRepositories = repositories.length;

    const totalStars = repositories.reduce(
        (total, repo) => total + repo.stargazers_count,
        0
    );

    const totalForks = repositories.reduce(
        (total, repo) => total + repo.forks_count,
        0
    );

    const averageStars =
        totalRepositories > 0
            ? totalStars / totalRepositories
            : 0;

    // Count programming languages
    const languageCount = {};

    repositories.forEach((repo) => {
        if (repo.language) {
            languageCount[repo.language] =
                (languageCount[repo.language] || 0) + 1;
        }
    });

    // Find most used language
    let mostUsedLanguage = null;
    let highestCount = 0;

    for (const language in languageCount) {
        if (languageCount[language] > highestCount) {
            highestCount = languageCount[language];
            mostUsedLanguage = language;
        }
    }

    // Find most starred and most forked repositories
    let mostStarredRepository = null;
    let mostForkedRepository = null;

    if (repositories.length > 0) {
        mostStarredRepository = repositories.reduce(
            (max, repo) =>
                repo.stargazers_count > max.stargazers_count
                    ? repo
                    : max
        );

        mostForkedRepository = repositories.reduce(
            (max, repo) =>
                repo.forks_count > max.forks_count
                    ? repo
                    : max
        );
    }

    // Count total programming languages
    const totalLanguages = Object.keys(languageCount).length;

    return {
        totalRepositories,
        totalStars,
        totalForks,
        averageStars,
        languageCount,
        mostUsedLanguage,
        mostStarredRepository,
        mostForkedRepository,
        totalLanguages
    };
};

module.exports = {
    calculateRepositoryAnalytics
};