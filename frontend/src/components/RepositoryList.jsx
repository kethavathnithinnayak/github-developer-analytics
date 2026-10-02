function RepositoryList({ repositories }) {
    return (
        <div className="repositories">
            <h2>Repositories</h2>

            {repositories.length === 0 ? (
                <p>No public repositories found.</p>
            ) : (
                <div className="repository-grid">
                    {repositories.map((repo) => (
                        <div
                            className="repository-card"
                            key={repo.id}
                        >
                         <h3>
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="repository-link"
                            >
                                {repo.name} ↗
                            </a>
                        </h3>

                            <p>
                                ⭐ Stars: {repo.stargazers_count}
                            </p>

                            <p>
                                🍴 Forks: {repo.forks_count}
                            </p>

                            <p>
                                Language:{" "}
                                {repo.language || "Not specified"}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default RepositoryList;