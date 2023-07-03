import React, { useState } from 'react';
import axios from 'axios';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter a GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Followers: {user.followers}</p>
          <p>Public Repositories: {user.public_repos}</p>
          <p>Bio: {user.bio}</p>
          </div>
      )}
    </div>
  );
};
 
export default UserSearch;








