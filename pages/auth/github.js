const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const app = express();

// GitHub OAuth 설정
passport.use(new GitHubStrategy({
    clientID:'b2bc3e73cc39eae48072',
    clientSecret:'fbe8005522503b684dd9f1fb8146306b90905dcc',

    callbackURL: 'http://localhost:3000/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {
    // 사용자 인증 및 프로필 처리
    // 적절한 로직을 구현해야 합니다.
}));

// GitHub 로그인 라우트
app.get('/auth/github', passport.authenticate('github'));

// GitHub 로그인 콜백 처리
app.get('/auth/github/callback',
    passport.authenticate('github', { successRedirect: '/', failureRedirect: '/login' })
);

// 서버 시작
app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});
