GitHub Developer Analytics

A full-stack web application that analyzes a GitHub developer's public profile and repositories using the GitHub REST API.

The application fetches GitHub data through a Node.js/Express backend, calculates developer and repository analytics, and displays the results in a React dashboard with interactive charts.

Features

Search for any GitHub username

Display GitHub profile information

Display public repositories

Total repository count

Total stars

Total forks

Average stars per repository

Most used programming language

Programming language distribution

Language percentage visualization

Repository metrics bar chart

Total number of languages used

Most starred repository

Most forked repository

Clickable GitHub profile and repository links

Loading state

Error handling for invalid usernames and API errors

Responsive dashboard

Tech Stack

Frontend

React

Vite

Axios

Recharts

CSS

Backend

Node.js

Express

Axios

CORS

API

GitHub REST API

Project Structure

github-developer-analytics/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.jsx
│   │   │   ├── UserProfile.jsx
│   │   │   ├── RepositoryList.jsx
│   │   │   ├── LanguageChart.jsx
│   │   │   └── RepositoryMetricsChart.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── .env
│   └── package.json
│
├── backend/
│   ├── controllers/
│   │   ├── githubController.js
│   │   └── analyticsController.js
│   │
│   ├── routes/
│   │   └── githubRoutes.js
│   │
│   ├── services/
│   │   ├── githubService.js
│   │   └── analyticsService.js
│   │
│   ├── .env
│   └── server.js
│
└── README.md

Prerequisites

Install the following before running the project:

Node.js (recommended: Node.js 20 or newer)

npm

A GitHub account

A GitHub Personal Access Token

Check Node.js and npm:

node --version
npm --version

GitHub Token Setup

The backend uses a GitHub Personal Access Token to access the GitHub API.

Create a token from your GitHub account and keep it private.

Create:

backend/.env

Add:

GITHUB_TOKEN=your_github_token_here

Do not commit this file to GitHub.

Frontend Environment Setup

Create:

frontend/.env

For local development, add:

VITE_API_URL=http://localhost:5000

Do not commit this file if it contains environment-specific configuration.

Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL
cd github-developer-analytics

Install backend dependencies

cd backend
npm install

Install frontend dependencies

Open another terminal or return to the project root:

cd frontend
npm install

Running the Project

The backend and frontend need to run separately.

1. Start the Backend

Open a terminal:

cd backend
node --env-file=.env server.js

The backend should run at:

http://localhost:5000

You can test it by opening:

http://localhost:5000/

You should see:

GitHub Developer Analytics Backend is running!

2. Start the Frontend

Open another terminal:

cd frontend
npm run dev

Vite will provide a local URL, normally:

http://localhost:5173

Open that URL in your browser.

How to Use

Open the frontend.

Enter a GitHub username.

Click Analyze.

The application fetches the developer's GitHub data.

The dashboard displays:

Developer profile

Repository statistics

Developer insights

Programming language chart

Repository metrics chart

Repository list

Click the profile or repository links to open GitHub pages.

Production Build

To create a production build of the frontend:

cd frontend
npm run build

To preview the production build locally:

npm run preview

API Endpoints

The backend exposes the following endpoints:

Get GitHub User

GET /api/github/user/:username

Example:

http://localhost:5000/api/github/user/octocat

Get Repositories

GET /api/github/user/:username/repos

Get Analytics

GET /api/github/user/:username/analytics

Analytics Calculated

The backend calculates:

Total Repositories
Total Stars
Total Forks
Average Stars
Language Distribution
Most Used Language
Most Starred Repository
Most Forked Repository
Total Languages

Security

Never commit secrets such as:

GITHUB_TOKEN

The following files should remain local:

backend/.env
frontend/.env

They should be included in .gitignore.

If a GitHub token is accidentally pushed to a public repository, revoke it immediately and create a new token.

Troubleshooting

Backend does not start

Make sure you are inside the backend directory:

cd backend

Make sure backend/.env exists and contains:

GITHUB_TOKEN=your_github_token_here

Then run:

node --env-file=.env server.js

Frontend cannot connect to backend

Make sure the backend is running on:

http://localhost:5000

Check frontend/.env:

VITE_API_URL=http://localhost:5000

After changing .env, restart the Vite development server.

GitHub user not found

Check that the GitHub username is spelled correctly.

Future Improvements

Possible future extensions include:

GitHub OAuth authentication

Commit history analysis

Contribution activity charts

Developer comparison

Historical analytics

Database-backed reports

PDF report generation

Deployment of frontend and backend

More advanced developer metrics

License

This project is intended for learning, portfolio, and educational purposes.