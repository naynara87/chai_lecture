# 차이홍 모노레포

## 차이홍 모노레포란?

- chai-ui, chai-content-view, chai-content-creator를 한번에 관리하는 레포지토리입니다
- chai-ui를 공통으로 사용하기 위해 분리하였습니다

## 실행

```bash
npm install
npm run dev
```

- chai-content-view는 http://localhost:3000 에서 실행되고
- chai-content-creator는 http://localhost:3001 에서 실행됩니다

## 빌드

```
npm install
npm run build
```

- 빌드 후 빌드된 파일은 아래 경로에 생성됩니다
  - chai-content-view: /packages/chai-content-view/build/
  - chai-content-creator: /packages/chai-content-creator/build/
  - chai-ui: /packages/chai-ui/dist/

## 폴더 구조

```
chai-monorepo
├─ .gitignore
├─ .npmrc
├─ .prettierignore
├─ .prettierrc
├─ README.md
├─ nx.json
├─ package-lock.json
├─ package.json // 공통 라이브러리
└─ packages // 여러 레포지토리를 모아놓은 폴더
   ├─ .gitkeep
   ├─ chai-contents-creator // 저작 도구
   ├─ chai-contents-view // 컨텐츠 뷰어
   └─ chai-ui // 공통 UI 패키지

```

## 로컬에서 실행 시 필독 !!

- chai-contents-view에서 LCMS서버의 API를 호출하기 위해 host 설정이 필요합니다
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
