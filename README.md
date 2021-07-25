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

## Node + express + vue + webpack 프로젝트 셋팅

- [express & vue 연동1](https://mrw0119.tistory.com/136)
- [express & vue 연동2](https://mrw0119.tistory.com/137)

## Webpack

- [생활코딩 webpack](https://opentutorials.org/module/4566)

## Vue.js

- [Vue.js 공식 가이드 문서](https://kr.vuejs.org/v2/guide/)
- [생활코딩 Vue.js](https://opentutorials.org/module/4504)
- [Vue init 폴더 구조](https://k39335.tistory.com/64)
---

## 프로젝트 초기 셋팅 방법

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

express --view=ejs backend
cd backend
npm install

```

## 프로젝트 실행 방법 및 구조 설명

1. 프로젝트 실행 방법
```
[frontend]
cd frontend
npm run dev

[frontend - build]
cd frontend
npm run build

[backend]
cd backend
npm start
```

2. 프로젝트 구조

├── backend
│   └── bin						# 실행 가능한 파일 모음
|				└──	www				# Express 서버 실행 파일
│   └── data					# mock 데이터 json 파일 모음
│   └── node_modules	# npm 으로 설치된 서드파티 라이브러리 모음
│   └── public				# 서버에서 사용하는 정적 리소스 파일 모음. frontend 폴더에서 build 실행시 이쪽으로 떨어짐
│   └── routes				# 사용자가 접속한 URL 처리
│   └── views					# 사용 안함
│   └── app.js				# 미들웨어 연결. routes에서 추가한 파일 연결 필요
│   └── package.json	# 프로젝트 정보 정의, 의존 패키지 버전 정보 명시 파일
├── frontend
│   └── build					# webpack 빌드 관련 설정 파일 모음
│   └── config				# 프로젝트에서 사용되는 설정 파일 모음
│   └── dist					# 배포 버전의 Vue 어플리케이션 파일이 모여 있는곳. 현재 사용 안함. backend/public 밑으로 이전
│   └── node_modules 	# npm 으로 설치된 서드파티 라이브러리 모음
│   └── src						# 실제 작업해야 하는 소스 코드 모음
│   		└── assets			# 어플리케이션에서 사용하는 이미지, 동영상 등을 모음
│   		└── components	# Vue 컴포넌트 모음
│       └── router			# Vue Router 설정
│   		└── App.vue			# 최상위 컴포넌트
│   		└── main.js		 	# 가장 먼저 실행되는 javascript 파일. Vue 인스턴스 생성
|   └── static
|		└── index.html		# 어플리케이션 최상위 html 파일
|		└── package.json	# 프로젝트 정보 정의, 의존 패키지 버전 정보 명시 파일

