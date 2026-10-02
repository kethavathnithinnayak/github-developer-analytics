function UserProfile({ userData }) {
    return (
        <div className="profile-card">
            <h2>{userData.name || userData.login}</h2>

            <p>
                Username: {userData.login}
            </p>

            <a
                href={userData.html_url}
                target="_blank"
                rel="noreferrer"
                className="github-profile-link"
            >
                View GitHub Profile ↗
            </a>

            <div className="stats">
                <div className="stat-card">
                    <h3>Public Repositories</h3>
                    <p>{userData.public_repos}</p>
                </div>

                <div className="stat-card">
                    <h3>Followers</h3>
                    <p>{userData.followers}</p>
                </div>

                <div className="stat-card">
                    <h3>Following</h3>
                    <p>{userData.following}</p>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;