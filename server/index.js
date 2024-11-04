const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const GITHUB_API = "https://api.github.com/users";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
console.log(GITHUB_TOKEN);
app.get("/compare/:user1/:user2", async (req, res) => {
  const { user1, user2 } = req.params;

  try {
    const [userData1, userData2] = await Promise.all([
      axios.get(`${GITHUB_API}/${user1}`, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` },
      }),
      axios.get(`${GITHUB_API}/${user2}`, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` },
      }),
    ]);

    const data = {
      user1: {
        name: userData1.data.name || "No Name",
        followers: userData1.data.followers || 0,
        following: userData1.data.following || 0,
        public_repos: userData1.data.public_repos || 0,
        avatar_url: userData1.data.avatar_url || "",
        profile_url: userData1.data.html_url || "",
      },
      user2: {
        name: userData2.data.name || "No Name",
        followers: userData2.data.followers || 0,
        following: userData2.data.following || 0,
        public_repos: userData2.data.public_repos || 0,
        avatar_url: userData2.data.avatar_url || "",
        profile_url: userData2.data.html_url || "",
      },
    };

    res.json(data);
  } catch (error) {
    // Log additional details for debugging
    if (error.response) {
      console.error(
        `GitHub API Error: Status ${error.response.status}`,
        error.response.data
      );
      return res.status(error.response.status).json({
        message: "Error fetching data from GitHub API",
        details: error.response.data,
      });
    } else {
      console.error("Server error:", error.message);
      return res.status(500).json({
        message: "Internal server error",
        details: error.message,
      });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
