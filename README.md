# 차이홍 모노레포

## 차이홍 모노레포란?

- chai-ui, chai-content-view, chai-content-creator를 한번에 관리하는 레포지토리입니다
- chai-ui를 공통으로 사용하기 위해 분리하였습니다

## 빌드

- npm install
- npm run build

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
