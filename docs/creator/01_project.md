# 프로젝트 구조

## 콘텐츠 저작

- 페이지 추가는 LCMS에서 추가하며, 페이지 추가 시 LCMS가 Template01로 초기값을 생성하여 만듭니다

## 콘텐츠 수정

- 사실 이 앱은 LCMS에서 생성한 페이지를 불러와서 편집하는 앱입니다

## 계층별 설명

#### App.tsx

- 전역으로 사용하는 Provider를 설정, 앱의 진입점입니다

#### AppRouter.tsx

- 각 페이지 별 라우터가 설정되어있는 파일입니다
- HashRouter를 사용한 이유
  - HashRouter는 브라우저가 아닌 서버에게 요청을 보내지 않기 때문에 php위에서 동작하는 저희 프로젝트 특성상 BrowserRouter를 사용할 수 없었습니다

#### CreatePage.tsx

- 사실상 이 앱의 본체입니다
- https://lcs.caihong.co.kr/dev/creation?subjectId={subject아이디} 에서 iframe으로 해당 페이지가 띄워집니다
- LCMS에서 생성한 페이지를 불러와서 편집할 수 있습니다
- 슬라이드를 추가할 수 있고 각 슬라이드의 레이아웃과 컴포넌트를 변경할 수 있습니다

## 초기 데이터 가져오기

- AuthProvider.tsx에서 토큰을 가져받아옵니다
- useCreatePage.ts
  - 저작에 필요한 초기 데이터는 php에서 hidden input으로 가져옵니다
- usePage
  - AuthProvider에서 가져온 토큰을 이용하여 LCMS에서 페이지 데이터를 가져옵니다
