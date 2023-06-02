# 통합플레이어(콘텐츠 뷰어)

- 통합플레이어(콘텐츠 뷰어)는 다양한 콘텐츠를 플레이 할 수 있는 플레이어입니다.
- 사용자가 학습을 위해 사용합니다

## 설치 및 실행

- 프로젝트 root directory에서 아래 명령어를 실행합니다

```bash
npm install
npm run dev
```

- http://localhost:3000 에서 실행됩니다

## 빌드

```bash
npm install
npm run build
```

- 빌드 후 빌드된 파일은 아래 경로에 생성됩니다
  - chai-content-creator: /packages/chai-content-creator/build/

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
   ├─ chai-contents-view-v2 // 통합플레이어(콘텐츠 뷰어)
   |  ├─ public // 정적 파일들
   |  └─ src
   |     ├─ api // api 호출 관련 함수들 - axios instance, api 호출 함수
   |     ├─ components // 컴포넌트
   |     ├─ constants // 상수
   |     ├─ data // 앱 전역에서 사용하는 데이터 - 컴포넌트 및 레이아웃 기본값 등
   |     ├─ hooks // 커스텀 훅
   |     ├─ router // 라우터 설정
   |     ├─ state // 글로벌 상태 관리 - recoil
   |     ├─ styles // 스타일 관련 파일들
   |     ├─ types // 타입 관련 파일들 - 현재는 비어있고 chai-ui-v2/core/types 에서 관리
   |     └─ util // 유틸리티 함수들
   ├─ chai-contents-creator-v2 // 콘텐츠 저작도구
   └─ chai-ui // 공통 UI 패키지

```

## 상세 문서

- [1. 프로젝트 구조](../../docs/view/01_project.md)
- [2. 컴포넌트](../../docs/view/02_컴포넌트.md)
- [3. 상태 관리](../../docs/view/03_상태관리.md)
- 4. 스타일
- 5. 라우터
- 6. API
- 7. 유틸리티 함수
- 8. 커스텀 훅
- 9. 타입
- 10. 정적 파일
- 11. 테스트
- 12. 빌드
- 13. 배포
- 14. 기타
