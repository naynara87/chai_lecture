## 프로젝트 구조

- App.tsx -> AppRouter.tsx
  - Home.tsx // 이어하기 여부
  - Layout.tsx
    - lessonTpCd === "10" // 10(콘텐츠), 20(연습문제), 30(종합테스트)
      - ContentsLayout.tsx // 콘텐츠 레슨일때 보여주는 페이지
    - lessonTpCd !== "10"
      - QuestionLayout.tsx // 문제 레슨일때 보여주는 페이지
    - LRSActivityState.correct_data 가 있으면 채점된 것이므로 채점페이지로 이동
      - QuestionScore.tsx // 문제 채점페이지

## 계층별 설명

### App.tsx

- 전역으로 사용하는 Provider를 설정, 앱의 진입점입니다

### router/AppRouter.tsx

- 각 페이지 별 라우터가 설정되어있는 파일입니다.
- HashRouter를 사용한 이유
  - HashRouter는 브라우저가 아닌 서버에게 요청을 보내지 않습니다.
  - php위에서 동작하는 저희 프로젝트 특성상 BrowserRouter를 사용할 수 없었습니다.

### components/pages/Home.tsx

- 초기로딩시 들어오는 페이지입니다.
- 로딩화면으로 구성되어있으며 lcms에서 데이터를 받고 페이지가 결정되면 Layout.tsx로 넘어갑니다.

### components/pages/Layout.tsx

- Home.tsx에서 받은 초기데이터로 앱을 보여주는 페이지입니다.
- Lesson을 조회하여 메타데이터로 받은 Lesson Type Code로 구분하여 문제페이지 혹은 콘텐츠페이지를 보여줍니다.

### components/pages/ContentsLayout.tsx

- 콘텐츠레슨일때 보여주는 페이지입니다.

### components/pages/QuestionLayout.tsx

- 문제레슨일때 보여주는 페이지입니다.

## 용어 정의

- 과정 : 과목을 구성하는 최상위 레벨
- 레슨 : 하나의 교육을 구성하는 단위 (코너로 조합된 학습 단위)
- 코너 : 학습 종류에 따른 구별단위 (페이지로 조합된 학습 단위)
- 페이지 : 슬라이드로 조합된 학습 단위
- 컬러(코드) : 빨강(10), 주황(20), 노랑(30), 초록(40), 파랑(50), 남색(60), 보라(70), 회색(80)
- 레슨코드 : 10(콘텐츠), 20(연습문제), 30(종합테스트)

## 데이터 가져오기

### 초기 데이터

- 콘텐츠 플레이어는 LMS에서 넘겨주는 데이터로 초기 페이지를 로딩합니다.
  - 자세한 더미데이터는 `useLmsInputValue.ts` 에서 볼 수 있습니다.
- 콘텐츠 레슨일때에는 turnId, pageId 가 둘다 있으면 이어보기학습이 가능합니다.

### lcms에서 데이터 가져오기

- AuthProvider.tsx에서 토큰을 발급받습니다.

  - 콘텐츠플레이어의 AuthProvider는 chai-ui-v2/src/core 폴더에 있습니다.

- useLesson

  - 초기 데이터로 입력받은 LessonId로 레슨데이터를 조회합니다.
  - lessonId, API key, lessonType 3가지가 필요합니다.

- useCorner

  - 레슨데이터를 조회하여 받은 코너 ids를 이용하여 코너를 조회합니다.
  - 초기데이터에 turnId가 있다면 코너 ids에서 해당 코너를 찾아 있다면 해당 코너를 조회합니다.
  - 코너와 페이지까지 데이터를 모두 받으면 해당 페이지를 렌더링합니다.

- api 문서
  - https://dlcs.caihong.co.kr:8082/index.html
