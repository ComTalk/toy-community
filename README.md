<h1 align="center">Toy Community</h1>

# Contents

- [Background](#background)
- [Progress](#progress)

# Background

*[Developer Roadmap](https://roadmap.sh/)*
- [웹 기초 강의](#웹-기초-강의)
- [개발 환경](#개발-환경)
- [Node.js](#nodejs)

# Progress

1. Web Basic Background research & settings
	- 웹 개발 기초 다지기
	- 웹 개발 환경 세팅
	- Node.js 서버 활성("Hello World!")
		- (optional) [Node.js Google Authentication](https://opentutorials.org/course/3413)
2. Web Development Framework 
	- Frontend Framework(Vue.js)


---

## 웹 기초 강의

참고: [생활코딩](https://opentutorials.org/)
- [WEB1 - HTML & Internet](https://opentutorials.org/course/3083)
- [WEB2 - CSS](https://opentutorials.org/course/3086)
- [WEB2 - Javascript](https://opentutorials.org/course/3085)
- [WEB2 - Javascript - Ajax](https://opentutorials.org/course/3281)
- [WEB2 - Node.js](https://opentutorials.org/course/3332)
- [DATABASE - Mysql](https://opentutorials.org/course/3161)

## 개발 환경

- Intellij : 유료
- [VSCode](https://code.visualstudio.com/)
	- [웹 개발 관련 플러그인](https://velog.io/@aralaa/VScode%EC%97%90%EC%84%9C-%EC%9B%B9-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95)

## Node.js

- [환경 설정](https://kimvampa.tistory.com/101)
- [개발 환경에 대한 이해](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)


---

프로젝트 초기 셋팅 방법

```
git clone https://github.com/ComTalk/toy-community.git

npm init -y

npm install -g vue-cli

vue-init webpack frontend
# Install vue-router? (Y/n)  ==> y
# Use ESLint to lint your code? (Y/n) ==> y
# Set up unit tests (Y/n) ==> n
# Setup e2e tests with Nightwatch? (Y/n) ==> n

cd frontend
npm install

##### Front End Setting End #####

cd ..
npm install -d express-generator

cd backend
npm install

```

---

프로젝트 구조 설명 및 실행 방법

