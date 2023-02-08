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

## 로컬에서 실행 시 필독 !!

- LCMS서버의 API를 호출하기 위해 host 설정이 필요합니다
- 터미널에서 아래 명령어를 입력합니다

```
sudo vi /etc/hosts
```

- 맨 끝에 # End of section 위에 아래와 같이 추가
  - 편집 모드 진입 : i
  - 수정 후 esc 누른다음 :wq 로 저장

```bash
106.248.245.114    caihong-api.bubblecon.io
# End of section
```
