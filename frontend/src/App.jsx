import { useState } from "react";
import axios from "axios";
import "./App.css";

import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import RepositoryList from "./components/RepositoryList";
import LanguageChart from "./components/LanguageChart";
import RepositoryMetricsChart from "./components/RepositoryMetricsChart";


const API_URL = import.meta.env.VITE_API_URL;

function App() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [repositories, setRepositories] = useState([]);
    const [analytics, setAnalytics] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAnalyze = async () => {
        if (!username.trim()) {
            setError("Please enter a GitHub username.");
            return;
        }

        try {
            setLoading(true);
            setError("");
            setUserData(null);
            setRepositories([]);
            setAnalytics(null);

            const userResponse = await axios.get(
                `${API_URL}/api/github/user/${username}`
            );

            const repoResponse = await axios.get(
                `${API_URL}/api/github/user/${username}/repos`
            );

            const analyticsResponse = await axios.get(
                `${API_URL}/api/github/user/${username}/analytics`
            );

            setUserData(userResponse.data);
            setRepositories(repoResponse.data);
            setAnalytics(analyticsResponse.data);

        } catch (error) {
            console.error("Error fetching GitHub data:", error);

            if (error.response) {

              if (error.response.status === 404) {
                  setError(
                      "GitHub user not found. Please check the username."
                  );
              } else if (error.response.status === 403) {
                  setError(
                      "GitHub API rate limit exceeded. Please try again later."
                  );
              } else {
                  setError(
                      "GitHub data could not be fetched. Please try again."
                  );
              }

          } else {
              setError(
                  "Unable to connect to the backend server. Make sure the backend is running."
              );
          }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app">

            {/* Header */}
            <div className="header">
                <h1>GitHub Developer Analytics</h1>

                <p>
                    Analyze GitHub activity, repositories, languages,
                    and developer statistics.
                </p>
            </div>

            {/* Search */}
            <SearchBar
                username={username}
                setUsername={setUsername}
                handleAnalyze={handleAnalyze}
                loading={loading}
            />

            {/* Error */}
            {error && (
                <p className="error">
                    {error}
                </p>
            )}

            {/* Developer Profile */}
            {userData && (
                <UserProfile userData={userData} />
            )}

            {/* Developer Analytics */}
            {analytics && (
                <div className="profile-card">
                    <h2>Developer Analytics</h2>

                    <div className="stats">

                        <div className="stat-card">
                            <h3>Total Repositories</h3>
                            <p>
                                {analytics.totalRepositories}
                            </p>
                        </div>

                        <div className="stat-card">
                            <h3>Total Stars</h3>
                            <p>
                                {analytics.totalStars}
                            </p>
                        </div>

                        <div className="stat-card">
                            <h3>Total Forks</h3>
                            <p>
                                {analytics.totalForks}
                            </p>
                        </div>

                        <div className="stat-card">
                            <h3>Average Stars</h3>
                            <p>
                                {analytics.averageStars.toFixed(2)}
                            </p>
                        </div>

                        <div className="stat-card">
                            <h3>Most Used Language</h3>
                            <p>
                                {analytics.mostUsedLanguage || "None"}
                            </p>
                        </div>

                    </div>
                </div>
            )}

            {/* Developer Insights */}
            {analytics && (
                <div className="profile-card">
                    <h2>Developer Insights</h2>

                    <div className="stats">

                        <div className="stat-card">
                            <h3>Total Languages</h3>
                            <p>
                                {analytics.totalLanguages}
                            </p>
                        </div>

                       
                        <div className="stat-card">
                            <h3>Most Starred Repository</h3>

                            <p>
                                {analytics.mostStarredRepository ? (
                                    <a
                                        href={
                                            analytics
                                                .mostStarredRepository
                                                .html_url
                                        }
                                        target="_blank"
                                        rel="noreferrer"
                                        className="repository-link"
                                    >
                                        {
                                            analytics
                                                .mostStarredRepository
                                                .name
                                        }{" "}
                                        ↗
                                    </a>
                                ) : (
                                    "None"
                                )}
                            </p>
                        </div>

                        <div className="stat-card">
                            <h3>Most Forked Repository</h3>

                            <p>
                                {analytics.mostForkedRepository ? (
                                    <a
                                        href={
                                            analytics
                                                .mostForkedRepository
                                                .html_url
                                        }
                                        target="_blank"
                                        rel="noreferrer"
                                        className="repository-link"
                                    >
                                        {
                                            analytics
                                                .mostForkedRepository
                                                .name
                                        }{" "}
                                        ↗
                                    </a>
                                ) : (
                                    "None"
                                )}
                            </p>
                        </div>

                    </div>
                </div>
            )}

            {/* Charts */}
            {analytics && (
                <div className="charts-section">

                    <LanguageChart
                        languageCount={analytics.languageCount}
                    />

                    <RepositoryMetricsChart
                        analytics={analytics}
                    />

                </div>
            )}

            {/* Repository List */}
            {userData && (
                <RepositoryList
                    repositories={repositories}
                />
            )}

        </div>
    );
}

export default App;