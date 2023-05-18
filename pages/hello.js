import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

export default function Hello() {
  const {data:session, status} = useSession();
  console.log(session?.accessToken);
  try{
    fetchGitHubUser(session.accessToken);
  }
  catch(e){
    console.log("noooooooooooooooooooooo")
  }
  return (
    <div>hello</div>
  )
}

const fetchGitHubUser = async (accessToken) => {
  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      const username = data.login;
      console.log('GitHub Username:', username);
      // 여기서 GitHub 사용자 닉네임(유저네임)을 사용할 수 있습니다.
    } else {
      console.error('Failed to fetch GitHub user data:', response.statusText);
      // 오류 처리 로직
    }
  } catch (error) {
    console.error('Failed to fetch GitHub user data:', error);
    // 오류 처리 로직
  }
};

// 사용자 정보 요청 함수 호출

