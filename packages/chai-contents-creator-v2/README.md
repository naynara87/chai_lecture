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
   |  ├─ public // 정적 파일들
   |  └─ src
   |     ├─ api // api 호출 관련 함수들 - axios instance, api 호출 함수
   |     ├─ components // 컴포넌트
   |     ├─ constants // 상수
   |     ├─ data // 앱 전역에서 사용하는 데이터 - 컴포넌트 및 레이아웃 기본값 등
   |     ├─ hooks // 커스텀 훅
   |     ├─ router // 라우터 설정
   |     ├─ states // 글로벌 상태 관리 - recoil
   |     ├─ styles // 스타일 관련 파일들
   |     ├─ types // 타입 관련 파일들
   |     └─ utils // 유틸리티 함수들
   ├─ chai-contents-view // 컨텐츠 뷰어
   └─ chai-ui // 공통 UI 패키지

```

## 상세 문서

- [1. 프로젝트 구조](../../docs/creator/01_project.md)
- [2. 레이아웃 및 컴포넌트 추가](../../docs/creator/02_add-components.md)
- [3. 에디터가 포함된 컴포넌트 추가](../../docs/creator/03_editor.md)
- [4. 미리보기 및 저장](../../docs/creator/04_preview-save.md)
