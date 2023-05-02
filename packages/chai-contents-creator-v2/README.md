# 콘텐츠 저작도구

- chai-contents-creator-v2

## 개요

- 콘텐츠 저작도구(creator)를 이용해서 만든 컨텐츠를 만들고 콘텐츠 플레이어(viewer)에서 콘텐츠 학습을 합니다
- 콘텐츠 저작도구와 콘텐츠 플레이어는 공통으로 chai-ui를 사용하고 있습니다
- chai-ui는 사용자에게 보여지는 컴포넌트위주로 구성된 공통 UI 패키지(라이브러리)입니다
- 콘텐츠 저작도구에서 미리보기를 통해 콘텐츠 플레이어와 동일한 화면을 확인할 수 있습니다

## 설치 및 실행

- 프로젝트 root directory에서 아래 명령어를 실행합니다

```bash
npm install
npm run dev
```

- http://localhost:3001 에서 실행됩니다

## 빌드

- 빌드 후 빌드된 파일은 아래 경로에 생성됩니다
  - chai-content-creator: /packages/chai-content-creator/build/

```bash
npm install
npm run build
```

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
   | └─ src
   |    ├─ public
   ├─ chai-contents-view // 컨텐츠 뷰어
   └─ chai-ui // 공통 UI 패키지

```
