import express from 'express';
import session from 'express-session';
import querystring from 'querystring';

export default async function handler(req, res) {
  const GITHUB_CLIENT_ID = "b2bc3e73cc39eae48072";
  const GITHUB_CLIENT_SECRET = "fbe8005522503b684dd9f1fb8146306b90905dcc";
  const { code } = req.query;

  const accessTokenParams = querystring.stringify({
    client_id: GITHUB_CLIENT_ID,
    client_secret: GITHUB_CLIENT_SECRET,
    code,
  });

  const accessTokenResponse = await fetch(`https://github.com/login/oauth/access_token?${accessTokenParams}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const accessTokenData = await accessTokenResponse.json();
  const { access_token: accessToken } = accessTokenData;

  const userDataResponse = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const userData = await userDataResponse.json();

  // Express 앱 생성
  const app = express();

  // Express 앱에 세션 미들웨어 추가
  
  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: true,
      user:'user'
    })
  );

  // 여기서 userData를 사용하여 사용자 인증 및 로그인 로직을 처리합니다.

  // 세션에 사용자 정보 저장
  if(req && req.session && req.session.user){
    req.session.user = {
      id: userData.id,
      name: userData.login,
      email: userData.email,
      image: userData.avatar_url,
    };

      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!")
  }
  console.log("NOOOOOOOOOOOOOOOOOoo")



  res.redirect('/');
}
