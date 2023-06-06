import Header from "/components/header";
import Footer from "/components/footer";
import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

const fetchGitHubUser = async (accessToken) => {
  try {
      const response = await fetch("https://api.github.com/user", {
          headers: {
              Authorization: `Bearer ${accessToken}`
          }
      });

      if (response.ok) {
          const data = await response.json();
          return data.login;
      } else {
          throw new Error("Failed to fetch GitHub user data");
      }
  } catch (error) {
      console.error("Failed to fetch GitHub user data:", error);
  }
};
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
      const session = await getSession();
      if (session?.accessToken) {
        const updatedFollowingList = await Promise.all(
          followingUsers.map(async (followingUser) => {
            const userData = await fetchGitHubFollowUser(
              session.accessToken,
              followingUser.login
            );
            return {
              ...followingUser,
            };
          })
        );

        setFollowingList(updatedFollowingList);
      }
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
      <Header />
      <div className="content">
        {/* 동적으로 카드를 생성하는 부분 */}
        <div className="card-grid">
          {followingList.map((followingUser, index) => (
            <div
              key={followingUser.id}
              onClick={onClick}
              className="card rounded-md w-96 h-60 bg-black"
            >
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
                      src={`https://github-readme-stats.vercel.app/api?username=${followingUser.login}&show_icons=true&theme=`}
                      className="h-40"
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${followingUser.login}&hide_progress=true`}
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
      <style jsx="jsx">
        {`
          .content {
            display: flex;
            justify-content: center;
          }

          .card-grid {
            display: grid;
            grid-gap: 80px;
            grid-template-columns: repeat(3, 1fr);
          }

          .card {
            transition: transform 1s;
            transform-style: preserve-3d;
            cursor: pointer;
            transform: rotateY(0);
            position: relative;
          }

          .back,
          .front {
            border-radius: 7px;
            color: white;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            backface-visibility: hidden;
          }

          .back {
            transform: rotateY(180deg);
          }

          .profile {
            left: 35px;
            top: 15px;
            width: 90px;
            height: 90px;
            background: rgba(191, 255, 255, 0.800000011920929);
            opacity: 1;
            position: absolute;
            border-radius: 50%;
            overflow: hidden;
            background-position: center center;
            border: 0.5px solid rgba(61, 25, 25, 1);
          }

          .introduction {
            width: 125px;
            left: 20px;
            top: 110px;
            position: absolute;
            font-size: 5px;
            text-align: center;
          }

          .followers_num {
            left: 10px;
            top: 155px;
            position: absolute;
            font-size: 10px;
            font-family: NanumSquare Neo;
            font-weight: Regular;
            display: inline-block;
            white-space: nowrap;
          }

          .followers {
            position: absolute;
            top: 155px;
            left: 45px;
            font-size: 10px;
            opacity: 0.5;
            font-family: NanumSquare Neo;
            font-weight: Regular;
          }

          .following_num {
            left: 90px;
            top: 155px;
            position: absolute;
            font-size: 10px;
            font-family: NanumSquare Neo;
            font-weight: Regular;
          }

          .following {
            position: absolute;
            top: 155px;
            left: 110px;
            font-size: 10px;
            opacity: 0.5;
            font-family: NanumSquare Neo;
            font-weight: Regular;
          }

          .organization {
            left: 13px;
            top: 175px;
            position: absolute;
            font-size: 10px;
            font-family: NanumSquare Neo;
            font-weight: Regular;
            display: inline-block;
            white-space: nowrap;
          }

          .email {
            left: 13px;
            top: 195px;
            position: absolute;
            font-size: 10px;
            font-family: NanumSquare Neo;
            font-weight: Regular;
            display: inline-block;
            white-space: nowrap;
          }

          .location {
            left: 11px;
            top: 215px;
            position: absolute;
            font-size: 10px;
            font-family: NanumSquare Neo;
            font-weight: Regular;
            display: inline-block;
            white-space: nowrap;
          }

          .name {
            left: 160px;
            top: 20px;
            position: absolute;
            font-size: 25px;
            font-family: NanumSquare Neo;
            font-weight: Heavy;
            display: inline-block;
            white-space: nowrap;
          }

          .git-id {
            left: 160px;
            top: 50px;
            position: absolute;
            font-size: 17px;
            opacity: 0.5;
            font-family: NanumSquare Neo;
            display: inline-block;
            white-space: nowrap;
          }

          .image1 {
            position: absolute;
            width: 25px;
            height: 25px;
            border-radius: 7px;
            opacity: 0.6;
            top: 80px;
            left: 160px;
          }

          .image2 {
            position: absolute;
            width: 25px;
            height: 25px;
            border-radius: 7px;
            opacity: 0.6;
            top: 80px;
            left: 190px;
          }

          .line {
            position: absolute;
            width: 220px;
            color: #808080;
            left: 160px;
            top: 110px;
          }

          .repos1 {
            position: absolute;
            border-radius: 7px;
            border-color: gray;
            border-width: 1px;
            width: 220px;
            height: 50px;
            left: 160px;
            top: 120px;
          }

          .typelevel-parser1 {
            position: relative;
            left: 10px;
            font-size: 10px;
            color: rgb(0, 153, 255);
            font-family: NanumSquare Neo;
            font-weight: Heavy;
          }

          .stars1 {
            position: relative;
            top: -13px;
            left: 120px;
            font-size: 10px;
            font-family: NanumSquare Neo;
          }

          .TypeScript1 {
            position: relative;
            top: -28px;
            left: 155px;
            font-size: 10px;
            font-family: NanumSquare Neo;
          }

          .text1 {
            position: relative;
            left: 5px;
            top: -30px;
            font-size: 10px;
            font-family: NanumSquare Neo;
          }

          .repos2 {
            position: absolute;
            border-radius: 7px;
            border-color: gray;
            border-width: 1px;
            width: 220px;
            height: 50px;
            left: 160px;
            top: 180px;
          }

          .typelevel-parser2 {
            position: relative;
            left: 10px;
            font-size: 10px;
            color: rgb(0, 153, 255);
            font-family: NanumSquare Neo;
            font-weight: Heavy;
          }

          .stars2 {
            position: relative;
            top: -13px;
            left: 120px;
            font-size: 10px;
            font-family: NanumSquare Neo;
          }

          .TypeScript2 {
            position: relative;
            top: -28px;
            left: 155px;
            font-size: 10px;
            font-family: NanumSquare Neo;
          }

          .text2 {
            position: relative;
            left: 5px;
            top: -30px;
            font-size: 10px;
            font-family: NanumSquare Neo;
          }
        `}
      </style>
      <Footer />
      <style jsx>{`
        @media (max-width: 768px) {
          /* 너비가 768px 이하일 때 */
          .content :global(.card) {
            @apply w-1/2; /* 한 줄에 2개의 카드가 나오도록 설정 */
          }
        }

        @media (max-width: 480px) {
          /* 너비가 480px 이하일 때 */
          .content :global(.card) {
            @apply w-full; /* 한 줄에 1개의 카드가 나오도록 설정 */
          }
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session?.accessToken) {
    const user = await fetchGitHubUser(session.accessToken);
    const response5 = await fetch(
      `https://api.github.com/users/${user}/following`
    );

    const following = await response5.json();
    console.log("following123", following);

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
      console.log("followinginfo!!!", followingUserOrgInfo);
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
  return {
    props: {},
  };
}