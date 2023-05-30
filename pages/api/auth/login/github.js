import querystring from 'querystring';

export default async function handler(req, res) {
  const GITHUB_CLIENT_ID = "b2bc3e73cc39eae48072";
  const params = querystring.stringify({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: 'http://localhost:3000/api/auth/callback/github',
    scope: 'read:user', // 필요한 권한 범위 설정
  });
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`);
}
