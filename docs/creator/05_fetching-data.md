# 초기 데이터 가져오기

- 이 저작도구는 LCMS에서 생성한 페이지 또는 저장된 페이지를 업데이트하는 웹앱입니다([프로젝트 구조 문서 참고](./01_project.md))
- 해당 페이지를 업데이트하기 위해서 LCMS에서 해당 페이지의 데이터를 가져와야 합니다
- 편집할 페이지에 대한 정보는 production환경(운영서버)에선 php에서 hidden input으로 데이터를 넘겨줍니다
- 넘겨 받은 초기 데이터에서 cornerId와 pageId를 이용해서 이 앱에서 사용할 초기 데이터를 LCMS에서 가져옵니다

## 어떤 페이지를 편집해야하는지 알기 위해 필요한 데이터

- 편집할 페이지에 대한 정보는 production환경(운영서버)에선 php에서 hidden input으로 데이터를 넘겨줍니다
  - `src/hooks/useCreatePage.ts`의 `initialDataFromPhp`

## LCMS에서 페이지 데이터 가져오기

- LCMS에서 데이터를 조회하기 위해선 API 호출을 위한 토큰을 먼저 받아서 http header에 넣어줘야 합니다
- 앱이 처음 실행되자마자 `src/components/AuthProvider.tsx`에서 LCMS에서 토큰을 받아옵니다
  - POST /lcms/get-token
- 토큰을 헤더에 심고 초기 페이지 데이터 조회를 위한 LCMS API를 호출합니다
  - `src/hooks/usePageData.ts`에서 데이터를 가져옵니다
  - GET /lcms/subject/turn/{turnId}
- LCMS에서 가져온 페이지데이터를 이용해서 초기 화면을 렌더링합니다
