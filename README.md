# Git_Business_Card_Web
The GBC project offers for developer who want to show about oneself git profile in detail and briefly.
<<<<<<< HEAD
# To do list
- [ ] 유저 이름 검색 화면_feature_01
- [ ] 유저 이름을 기반으로 API 기본 정보 불러오기_feature_02
- [ ] API 정보 기반으로 페이지2에 정보 출력하기_feature_02
- [ ] 앱 쪽에서 유저 정보를 가져갈 수 있도록 유저 정보를 담은 링크 생성해서 javascript 변수에 넣어놓기_feature_03
- [ ] 출력한 정보를 UI 디자인으로 디자인 완성하기_feature_03
- [ ] 토큰 기반으로 사용자 추가 정보를 불러 오기_feature_04
- [ ] 추가 정보를 덧붙이기_feature_04
=======

# 수정한 부분
```
📦components
 ┣ 📂animation
 ┃ ┣ 📜card_animation.js
 ┃ ┣ 📜following_animation.js
 ┃ ┗ 📜share_link_animation.js
 ┣ 📜feature.js 
 ┣ 📜footer.js
 ┣ 📜header.js
 ┗ 📜share_link_animation.js
```
- feature.js

로그인 전/후 페이지 다르게 구성 (로그인 전 - 명함 보러가기->login page / 로그인 후 - 명함 만들러가기 -> mycard/user page)

- header.js

로그인 전/후 페이지 다르게 구성 login/logout 버튼, 현재 접속하고 있는 아이디 출력

```
📦pages
 ┣ 📂api
 ┃ ┗ 📂auth
 ┃ ┃ ┣ 📜.env
 ┃ ┃ ┗ 📜[...nextauth].js 
 ┣ 📂auth
 ┃ ┗ 📜login.js
 ┣ 📂mycard
 ┃ ┣ 📜userfollowers.js
 ┃ ┗ 📜[username].js
 ┣ 📜following_card.js
 ┣ 📜hello.js
 ┣ 📜index.js
 ┣ 📜_app.js -> next-auth 관련 수정
 ┗ 📜_document.js
 ```
- [...nextauth].js

next-auth 관련 github provider, 환경 변수 등

- login.js

로그인 페이지 (로그인 한 상태에서 접근하면 자동으로 메인 페이지(index)로 routing

- mycard

 http://localhost:3000/mycard/{username}으로 접근할 수 있도록 디렉토리로 변경
 
 - userfollower.js

user API -> user가 following 하고있는 API 
참고해서 organization, repo 등 불러오면 될듯합니다

- [username].js

 feature_03 component - card.js 코드 아예 복사해서 넣었습니다 -> {user.id}같은 정보로 다 변경함
 user별 페이지를 동적으로 만들기 위한 코드
 -> OAuth 인증된 유저이름으로 접근해야 하는데 주소창에 아무이름 쳐도 나옴 -> 안드에 쓰세염
#### 처음 접근시에는 로그인한 유저 카드로 접근
## organization 사진, repo 부분 수정 필요!!!!!!! 아무나해주세요
>>>>>>> feature_01
