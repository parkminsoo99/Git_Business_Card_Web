import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import fetch from 'isomorphic-unfetch';
import UserFollowers from './userfollowers';
//<UserFollowers username={user.login} /> 이걸로 follow id 받아올 수 있음

import Image from 'next/image';

const UserPage = ({ user }) => {
  const router = useRouter();
  // const {session, status} = useSession();

  // console.log({status});
  // console.log(session.user.login);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  
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
      <div onClick={onClick} className="card rounded-md w-96 h-60 bg-black">
        <div className="front">
          <div className="profile">
            <img class = "profileimg" src={user.avatar_url} alt="profileimg"></img>
          </div>
          <div className="introduction">{user.bio}</div>

          <div className="followers_num">👨‍👦‍👦{user.followers}</div>
          <div className="followers">followers</div>
          <div className="following_num">{user.following}</div>
          <div className="following">following</div>
          <div className="organization">🏙 {user.company}</div>
          <div className="email">✉ {user.email}</div>
          <div className="location">🌍 {user.location}</div>

          <div className="name">{user.name}</div>
          <div className="git-id">@{user.login}</div>
          {/* organiaztion 이미지도.. API보면서 불러오기 -> Following처럼 하면 될듯 */}
          <div className="image1"></div>
          <div className="image2"></div>
          <hr className="line" />
          {/* 레포지토리 파트는 API 보면서 불러와야할듯 */}
          <div className="repos1">
            <div className="typelevel-parser1">📌typelevel-parser</div>
            <div className="stars1">⭐131</div>
            <div className="TypeScript1">🔵TypeScript</div>
            <div className="text1">Experiment to push the limits</div>
          </div>
          <div className="repos2">
            <div className="typelevel-parser2">📌typelevel-parser</div>
            <div className="stars2">⭐131</div>
            <div className="TypeScript2">🔵TypeScript</div>
            <div className="text2">
              Experiment to push the limits of TypeScript's type system
            </div>
          </div>
        </div>
        <div className="back">
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true&theme=monokai`}
              className="w-96 h-40"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user.login}&layout=compact`}
              className="w-96 h-20"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          transition: transform 1s;
          transform-style: preserve-3d;
          cursor: pointer;
          transform: rotateY(0);
          position: relative;
        }

        .front,
        .back {
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
          background-color: blue;
          position: absolute;
          width: 25px;
          height: 25px;
          border-radius: 7px;
          opacity: 0.6;
          top: 80px;
          left: 160px;
        }

        .image2 {
          background-color: purple;
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
      `}</style>
    </>
  );
};

export async function getStaticPaths() {
  // 여기에서 필요한 로직을 추가하여 사용자 목록을 가져올 수 있습니다.
  // 예시로 두 명의 사용자를 가정합니다.
  const users = ['user1', 'user2'];

  const paths = users.map((username) => ({
    params: { username },
  }));

  return {
    paths,
    fallback: true, // fallback을 true로 설정하여 정적으로 미리 생성되지 않은 페이지도 렌더링될 수 있도록 합니다.
  };
}

export async function getStaticProps({ params }) {
  const { username } = params;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  return {
    props: {
      user,
    },
    revalidate: 3600, // 1시간마다 페이지를 재생성합니다.
  };
}

export default UserPage;
