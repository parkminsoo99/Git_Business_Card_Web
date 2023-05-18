import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

const UserFollowers = ({ username }) => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      const response = await fetch(`https://api.github.com/users/${username}/followers`);
      const followersData = await response.json();
      setFollowers(followersData);
    };

    fetchFollowers();
  }, [username]);

  return (
    <div>
      <h2>Followers:</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>{follower.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserFollowers;
