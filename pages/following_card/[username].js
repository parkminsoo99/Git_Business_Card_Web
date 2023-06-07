import React, { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch';
import '../../styles/global.css';

const fetchGitHubFollowUser = async (accessToken, username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Failed to fetch GitHub user data: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to fetch GitHub user data:", error);
  }
};

export default function Following_Card({
  followingUsers,
  followingUserOrgs,
  followingUserRepos,
}) {
  const [followingList, setFollowingList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
        const updatedFollowingList = await Promise.all(
          followingUsers.map(async (followingUser) => {
            const userData = await fetchGitHubFollowUser(
              //session.accessToken,
              followingUser.login
            );
            return {
              ...followingUser,
              ...userData,
            };
          })
        );
        setFollowingList(updatedFollowingList);
        
    
    };

    fetchData();
  }, []);


  function onClick(event) {
    const element = event.currentTarget;
    if (element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    } else {
      element.style.transform = "rotateY(180deg)";
    }
  }

  return (
    <>
      <div className="content">
        {/* 동적으로 카드를 생성하는 부분 */}
        <div className="card-grid">
          {followingList.map((followingUser, index) => (
            <div
              key={followingUser.id}
              onClick={onClick}
              className="card rounded-md w-96 h-60 mb-12 bg-my-color"            >
              {/* 카드 내용 */}
              <div className="front">
                {/* 사용자 정보 */}
                <div className="profile">
                  <img
                    className="profileimg"
                    src={followingUser.avatar_url}
                    alt="profileimg"
                  />
                </div>
                <div className="introduction">{followingUser.bio}</div>

                <div className="followers_num">
                  👨‍👦‍👦 {followingUser.followers}
                </div>
                <div className="followers">followers</div>
                <div className="following_num"> {followingUser.following}</div>
                <div className="following">following</div>
                <div className="organization">🏙 {followingUser.company}</div>
                <div className="email">✉ {followingUser.email}</div>
                <div className="location">🌍 {followingUser.location}</div>
                <div className="name">{followingUser.name}</div>
                <div className="git-id">@{followingUser.login}</div>
                {followingUserOrgs[0] && (
                  <div
                    className="image2"
                    src={followingUserOrgs[0].avatar_url}
                    alt="profileimg"
                  ></div>
                )}
                {followingUserOrgs[1] && (
                  <div
                    className="image2"
                    src={followingUserOrgs[1].avatar_url}
                    alt="profileimg"
                  ></div>
                )}
                {followingUserOrgs[2] && (
                  <div
                    className="image2"
                    src={followingUserOrgs[2].avatar_url}
                    alt="profileimg"
                  ></div>
                )}
                {followingUserOrgs[3] && (
                  <div
                    className="image2"
                    src={followingUserOrgs[3].avatar_url}
                    alt="profileimg"
                  ></div>
                )}
                {followingUserOrgs[4] && (
                  <div
                    className="image2"
                    src={followingUserOrgs[4].avatar_url}
                    alt="profileimg"
                  ></div>
                )}
                <hr className="line" />
                <div className="repos1">
                  <div className="typelevel-parser1">
                    📌{followingUserRepos[index][0].name}
                  </div>
                  <div className="stars1">
                    ⭐{followingUserRepos[index][0].stargazers_count}
                  </div>
                  <div className="TypeScript1">
                    🔵{followingUserRepos[index][0].language}
                  </div>
                  <div className="text1">
                    {followingUserRepos[index][0].descriptions}
                  </div>
                </div>
                <div className="repos2">
                  <div className="typelevel-parser2">
                    📌{followingUserRepos[index][1].name}
                  </div>
                  <div className="stars2">
                    ⭐{followingUserRepos[index][1].stargazers_count}
                  </div>
                  <div className="TypeScript2">
                    🔵{followingUserRepos[index][1].language}
                  </div>
                  <div className="text2">
                    {followingUserRepos[index][1].descriptions}
                  </div>
                </div>
                {/* 추가적인 정보 표시 */}
                {/* ... */}
              </div>
              <div className="back">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex-shrink-0">
                    <img
                      src={`https://github-readme-stats.vercel.app/api?username=${followingUser.login}&show_icons=true&theme=tokyonight`}
                      className="h-40"
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${followingUser.login}&hide_progress=true&theme=tokyonight`}
                      className="h-20"
                    />
                  </div>
                </div>
                {/* 카드의 뒷면 내용 */}
                {/* ... */}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}
export async function getStaticPaths() {
    return {paths: [], fallback: 'blocking'};
};

export async function getStaticProps({params}) {
  const user = params.username;
    const response5 = await fetch(
      `https://api.github.com/users/${user}/following`
    );

    const following = await response5.json();
    // Fetch following users

    // Ensure `following` is an array
    const followingArray = Array.isArray(following) ? following : [];

    // Fetch information of following users
    const followingUsers = [];
    const followingUserOrgs = [];
    const followingUserRepos = [];
    for (const followingUser of followingArray) {
      const response = await fetch(
        `https://api.github.com/users/${followingUser.login}`
      );

      const followingUserInfo = await response.json();
      if (!followingUsers.some((user) => user.id === followingUserInfo.id)) {
        followingUsers.push(followingUserInfo);
      }

      const response1 = await fetch(
        `https://api.github.com/users/${followingUser.login}/orgs`
      );
      
      const response2 = await fetch(
        `https://api.github.com/users/${followingUser.login}/repos`
      );

      const followingUserOrgInfo = await response1.json();
      const followingUserReposInfo = await response2.json();
      followingUserOrgs.push(followingUserOrgInfo);
      followingUserRepos.push(followingUserReposInfo);

    }

    return {
      props: {
        followingUsers,
        followingUserOrgs,
        followingUserRepos,
      },
    };
}