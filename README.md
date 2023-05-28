# Git_Business_Card_Web
The GBC project offers for developer who want to show about oneself git profile in detail and briefly.
<<<<<<< HEAD

# To do list
- [X] 로그인 전 메인화면_feature_01
- [ ] 로그인 후 메인화면_feature_01
- [ ] 깃 허브 oauth 로그인 기능 구현_feature_01
- [ ] API 정보 기반으로 My Card와 Following Card에 정보 넘겨주기_feature_01
- [ ] My Card 페이지 제작 - 명함 UI 디자인 기반으로 웹에서 명함 디자인 완성하기_feature_02
- [ ] My Card 페이지 제작 - 명함에 대한 마크다운 형식의 주소 나오게하기(깃 허브 readme파일에 등록하기 위해서)_feature_02
- [ ] My Card 페이지 제작 - 공유 버튼 클릭시 명함에 대한 공유 가능한 URL 주소 나오게 하기_feature_02
- [ ] Following Card 페이지 제작 - 사용자가 팔로잉한 사람의 대한 명함들을 디자인 입히고, 웹에 보여주기_feature_03
- [ ] 토큰 기반으로 사용자 추가 정보를 불러 오기_feature_04
- [ ] 추가 정보를 덧붙이기_feature_04

1. 로그인 여부 session기반으로 로그인 상태를 확인한다.
2. oauth는 토큰은 세션으로 저장한다.

# 추후 추가 가능한 사항
1. 명함 배경색 변경
2. 사용자 별로 옵션 버튼을 추가하여 명함에 보이게 하고 싶은 항목 버튼 
=======
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
>>>>>>> 7f29a545989b81f6988ff51d423f975ada188dac
