function SearchBar({
    username,
    setUsername,
    handleAnalyze,
    loading
}) {
    return (
        <div className="search-section">
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />

            <button
                onClick={handleAnalyze}
                disabled={loading}
            >
                {loading ? "Analyzing..." : "Analyze"}
            </button>
        </div>
    );
}

export default SearchBar;