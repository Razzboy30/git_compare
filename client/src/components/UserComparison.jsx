import React, { useState } from "react";
import axios from "axios";

function UserComparison() {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [comparisonData, setComparisonData] = useState(null);
  const [userNotFound, setUserNotFound] = useState("");

  const handleCompare = async () => {
    // console.log(userNotFound);
    setUserNotFound("");
    setComparisonData(null);
    // console.log(userNotFound);
    try {
      const response = await axios.get(
        `http://localhost:5000/compare/${user1}/${user2}`
      );
      setComparisonData(response.data);
    } catch (error) {
      console.error("Error fetching comparison data:", error);
      setUserNotFound("Invalid User");
    }
  };

  return (
    <div>
      <h2>GitHub User Comparison</h2>
      <input
        type="text"
        placeholder="First GitHub Username"
        value={user1}
        onChange={(e) => setUser1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Second GitHub Username"
        value={user2}
        onChange={(e) => setUser2(e.target.value)}
      />
      <button onClick={handleCompare}>Compare</button>

      {comparisonData && (
        <div>
          <h3>Comparison Results:</h3>
          <div className="user">
            <h4>{comparisonData.user1.name}</h4>
            <img
              src={comparisonData.user1.avatar_url}
              alt="Avatar"
              width="50"
            />
            <p>Followers: {comparisonData.user1.followers}</p>
            <p>Following: {comparisonData.user1.following}</p>
            <p>Repos: {comparisonData.user1.public_repos}</p>
            <a
              href={comparisonData.user1.profile_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile Link
            </a>
          </div>

          <div className="user">
            <h4>{comparisonData.user2.name}</h4>
            <img
              src={comparisonData.user2.avatar_url}
              alt="Avatar"
              width="50"
            />
            <p>Followers: {comparisonData.user2.followers}</p>
            <p>Following: {comparisonData.user2.following}</p>
            <p>Repos: {comparisonData.user2.public_repos}</p>
            <a
              href={comparisonData.user2.profile_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile Link
            </a>
          </div>
        </div>
      )}
      {userNotFound && (
        <div>
          <h1>User not found. Please enter a valid GitHub username.</h1>
        </div>
      )}
    </div>
  );
}

export default UserComparison;
