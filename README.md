# GitHub User Comparison Tool

A web application that allows users to compare two GitHub profiles side by side, displaying key metrics and information about each user.

## Features

- Compare two GitHub users simultaneously
- Display user information including:
  - Profile picture
  - Name
  - Number of followers
  - Number of following
  - Number of public repositories
  - Direct link to GitHub profile
- Real-time data fetching from GitHub API
- Error handling for invalid usernames
- Responsive design

## Tech Stack

### Frontend
- React
- Axios for API calls
- CSS for styling
- Vite as build tool

### Backend
- Node.js
- Express
- Axios for GitHub API integration
- CORS for cross-origin resource sharing
- dotenv for environment variable management

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- GitHub Personal Access Token

### Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/yourusername/git_compare.git
cd git_compare
```

2. Install dependencies for both client and server
For the client:
```bash
  cd client
  npm install
```

For the server:
```bash
  cd server
  npm install
```
  
3. Set up environment variables
Create a .env file in the server directory with the following variables:
```.env
GITHUB_TOKEN=your_github_personal_access_token
PORT=5000
```

5. Start the application
Start the server:
```bash
   cd server
   npm start
```

Start the client (in a new terminal):
```bash
   cd client
   npm run dev
```

## Usage
1. Navigate to http://localhost:5173 in your web browser
2. Enter two GitHub usernames in the input fields
3. Click "Compare" to see the comparison
4. View the results displayed below
