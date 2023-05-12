# 프로젝트 구조

## 콘텐츠 저작

- 페이지 추가는 LCMS에서 추가하며, 페이지 추가 시 LCMS가 Template01로 초기값을 생성하여 만듭니다
- LCMS 관련 정보
  - 개발서버 : https://dlcs.caihong.co.kr
  - 운영서버 : https://lcs.caihong.co.kr
  - 접속 정보
    - id : manager
    - pw : caihong1

## 콘텐츠 수정

- 사실 이 앱은 LCMS에서 생성한 페이지를 불러와서 편집하는 앱입니다

## 계층별 설명

#### App.tsx

- 전역으로 사용하는 Provider를 설정, 앱의 진입점입니다

#### AppRouter.tsx

- 각 페이지 별 라우터가 설정되어있는 파일입니다
- HashRouter를 사용한 이유
  - HashRouter는 브라우저가 아닌 서버에게 요청을 보내지 않습니다
  - php위에서 동작하는 저희 프로젝트 특성상 BrowserRouter를 사용할 수 없었습니다

#### CreatePage.tsx

- 사실상 이 앱의 본체입니다
- https://lcs.caihong.co.kr/dev/creation?subjectId={subject아이디} 에서 iframe으로 해당 페이지가 띄워집니다
- LCMS에서 생성한 페이지를 불러와서 편집할 수 있습니다
- 슬라이드를 추가할 수 있고 각 슬라이드의 레이아웃과 컴포넌트를 변경할 수 있습니다

## 데이터 가져오기(fetching data)

### 초기 데이터

- 저작도구는 LCMS에서 동작합니다
  - 앱구동에 필요한 초기 데이터는 LCMS에서 php로 보내면 php에서 hidden input으로 넣어줍니다
  - 저작도구에선 useCreatePage.ts에서 hidden input에 접근해서 데이터를 가져옵니다

### LCMS데이터 가져오기

- AuthProvider.tsx에서 `토큰`을 발급받습니다
- usePage
  - `토큰`과 `api key` 이용하여 LCMS에서 페이지 데이터를 가져옵니다
    - 토큰을 가져오기 위한 id, pw와 api key는 하드코딩되어 있습니다
- hidden input에서 가져온 lessonId 및 turnId(cornerId)를 이용해서 LCMS에서 페이지 데이터를 가져옵니다
- LCMS API 문서
  - https://dlcs.caihong.co.kr:8082/index.html
