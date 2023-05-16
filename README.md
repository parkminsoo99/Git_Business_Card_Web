# Git_Business_Card_Web
The GBC project offers for developer who want to show about oneself git profile in detail and briefly.

# 수정한 부분
📦components
 ┣ 📂animation
 ┃ ┣ 📜card_animation.js
 ┃ ┣ 📜following_animation.js
 ┃ ┗ 📜share_link_animation.js
 ┣ 📜feature.js -> 로그인 전/후 페이지 다르게 구성 (로그인 전 - 명함 보러가기->login page / 로그인 후 - 명함 만들러가기 -> mycard/user page)
 ┣ 📜footer.js
 ┣ 📜header.js -> 로그인 전/후 페이지 다르게 구성 login/logout 버튼, 현재 접속하고 있는 아이디 출력
 ┗ 📜share_link_animation.js

📦pages
 ┣ 📂api
 ┃ ┗ 📂auth
 ┃ ┃ ┣ 📜.env
 ┃ ┃ ┗ 📜[...nextauth].js -> next-auth 관련 github provider, 환경 변수 등
 ┣ 📂auth
 ┃ ┗ 📜login.js -> 로그인 페이지 (로그인 한 상태에서 접근하면 자동으로 메인 페이지(index)로 routing
 ┣ 📂mycard -> http://localhost:3000/mycard/{username}으로 접근할 수 있도록 디렉토리로 변경
 ┃ ┣ 📜userfollowers.js -> user API -> user가 following 하고있는 API (GPT에서 따온거라 이렇게 참고해서 organization, repo 등 불러오면 될듯)
 ┃ ┗ 📜[username].js -> user별 페이지를 동적으로 만들기 위한 코드 //OAuth 인증된 유저이름으로 접근해야 하는데 주소창에 아무이름 쳐도 나옴 -> 안드에 쓰세염
                        //처음 접근시에는 로그인한 유저 카드로 접근
 ┣ 📜following_card.js
 ┣ 📜hello.js
 ┣ 📜index.js
 ┣ 📜_app.js -> next-auth 관련 수정
 ┗ 📜_document.js
