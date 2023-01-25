# 차이홍 컨텐츠 템플릿

## 개발 환경

- Node.js : v16.17.0
- npm : 8.18.0

## 사용 방법

- 설치

  - npm ci --legacy-peer-deps

- 로컬

  - npm run start

- 빌드
  - npm run build
    - 개발용 빌드시 사용 명령어입니다. 환경변수 변경원할시에는 root 디렉토리에 .env.development REACT_APP_BASE_URL 값을 변경해주시면 됩니다.
  - npm run build:prod
    - 배포용 빌드시 사용 명령어입니다. 환경변수 변경원할시에는 root 디렉토리에 .env.production REACT_APP_BASE_URL 값을 변경해주시면 됩니다.

## 공통 UI 빌드 - FIXME

- npm run build:ui

## TODO

- [ ] 현재 ui-index.ts와 rollup 으로 직접 export 하는 것을 공통레포로 분리하기
  - 결국 분리해야 되는 것 같다. index.tsx와 index.ts를 구분 못 함
