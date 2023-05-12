# 미리보기 및 저장

## 미리보기

- 저작도구에서 데이터를 서버에 반영하지 않고도 실제 화면과 동일한 화면으로 미리보기를 할 수 있습니다.

### 미리보기 동작 방식

- 우측 상단의 미리보기 버튼을 클릭합니다
- 각 템플릿 및 컴포넌트를 통해 업데이트된 전역 데이터가 localStorage로 저장됩니다.
  - localStorage로 저장하는 이유
    - 새창으로 띄우는 경우 서버에서 받아오는 데이터가 아닌 state는 초기화되기 때문에 localStorage에 저장합니다.
  - 전역 데이터
    - `src/hooks/usePage.ts`
      - slides는 각 템플릿 및 컴포넌트에서 업데이트된 데이터를 받아옵니다.
      - slides가 업데이트되면 pageData도 업데이트 됩니다
    - slides와 pageData가 나눠진 이유
      - slides로 먼저 개발을 하고 나중에 pageData를 추가했습니다.(어댑터 패턴)
- 새창(팝업)으로 미리보기화면을 띄워서 localStorage에 저장된 데이터를 렌더링합니다
  - 미리보기 페이지 컴포넌트 : `src/components/pages/Preview.tsx`

## 저장

- 우측 상단의 저장 버튼을 클릭하면 현재 페이지의 데이터를 서버에 저장(업데이트)합니다.

### 저장 동작 방식

- 저장버튼 클릭 시 `src/hooks/useCreatePage.ts`에서 LCMS의 업데이트 API를 호출합니다.
  - API 문서 : https://dlcs.caihong.co.kr:8082/index.html#/
  - 저장 API : (POST) /lcms/subject/content-save
