# 레이아웃 및 컴포넌트 추가

- 저작도구는 아래와 같은 구조를 가지고 있습니다

  - 템플릿(레이아웃)
  - 컴포넌트

- 템플릿은 페이지의 레이아웃을 담당하고, 컴포넌트는 페이지의 내용을 담당합니다.

## 페이지 생성

- 최초 페이지 생성은 LCMS에서 생성합니다
  - https://lcs.caihong.co.kr/dev/creation?subjectId={subject아이디} 에서 iframe으로 해당 페이지가 띄워집니다
- LCMS에서 초기 페이지를 생성 할 때 Template01 데이터를 기본으로 넣어줍니다
  - 기획단계부터 최초 페이지를 생성하는 로직이 LCMS에 있기 때문에 저작도구에선 페이지를 생성하는 로직이 없습니다
  - LCMS에서 생성한 페이지를 불러와서 편집하는 앱입니다

```json
// LCMS에서 페이지를 생성할 때 넣는 초기 데이터
{
  "id": "{페이지_아이디(UUID)}",
  "data": [
    {
      "id": "{템플릿_아이디(UUID)}",
      "type": "Template01",
      "contents": []
    }
  ],
  "type": "singlePage"
}
```

## 페이지 수정(콘텐츠 저작)

- 기존에 저장된 데이터가 없이 초기 생성 직후 수정화면은 레이아웃은 Template01, 컴포넌트는 없는 상태에서 시작합니다
- 레이아웃 변경
  - 좌측 상단 레이아웃 변경 버튼을 클릭해서 레이아웃을 변경할 수 있습니다
- 컴포넌트 추가
  - 레이아웃 영역의 컴포넌트 선택 버튼으로 선택해서 추가할 수 있습니다
- 컴포넌트 삭제
  - 각 컴포넌트의 좌측 상단에 있는 햄버거 메뉴를 클릭해서 삭제할 수 있습니다

# 개발

- 타입 추가
- 기본 값 추가
- 컴포넌트 구현
- 컴포넌트(레이아웃) 팩토리(mapper)에 추가
- 선택 화면에 추가
- 뷰 구현
  - 현재 문서에선 뷰 구현에 대해선 다루지 않습니다

## 새로운 레이아웃을 추가하기

### 레이아웃 타입 추가하기

- `packages/chai-ui-v2/src/core/types/templates.ts` 에 새로운 템플릿 타입을 추가합니다

### 레이아웃 기본값 추가하기

- `src/data/appData.ts` 에서 `getTemplateDefaultValue`에 새로운 레이아웃을 추가합니다

- 해당 레이아웃의 범주에 따라 `src/data/appData.ts` 에서 추가를 해줍니다
  - 기본 레이아웃 : commonLayouts
  - 회화 레이아웃 : conversationLayouts
  - 퀴즈 레이아웃 : quizLayouts
  - 어디에서 속하지 않는 레이아웃이라면 독립적으로 만들어줍니다(e.g. 롤플레잉)
    - 이 경우 `src/components/molecules/CreateLayout.tsx`에서 해당 레이아웃을 추가해줍니다

### 레이아웃 구현

- `src/components/templates` 디렉토리에 새로운 레이아웃을 구현합니다

### 레이아웃 팩토리(mapper)에 추가

- `src/hooks/useTemplate.tsx`의 `getTemplate`에 새로운 템플릿 타입을 추가합니다

## 새로운 컴포넌트를 추가하기

### 컴포넌트 타입 추가하기

- `packages/chai-ui-v2/src/core/types/contents.ts` 에 새로운 컴포넌트 타입을 추가합니다

### 기본 값 추가

- `src/data/appData.ts` 에서

  - `contentComponents`에 새로운 컴포넌트를 추가합니다
    - 카테고리는 `contentComponentsGroupMap`을 참고해서 추가합니다
  - `contentComponentsNameMap`에 새로 추가한 컴포넌트의 한글 이름을 추가합니다

- `src/data/appData.ts` 의 `getContentComponentsDefaultValue`에 해당 컴포넌트의 기본 값을 추가합니다

### 컴포넌트 구현

- `src/components/contents` 디렉토리에 새로운 컴포넌트를 구현합니다

### 컴포넌트 팩토리(mapper)에 추가

- `src/hooks/useComponent.tsx` 에 구현한 새로운 컴포넌트를 추가합니다

### 선택 화면에 추가

- 아래 순서로 각 템플릿까지 전달되어 화면에 보여집니다
  - `src/components/pages/CreatePage.tsx` 에서 useComponent 호출 후 getTemplate을 통해 각 템플릿(레이아웃)에 전달
  - 각 레이아웃에서 저장된 데이터가 있다면 useComponent의 getComponent를 사용해서 각 컴포넌트를 렌더링
- 새로운 컴포넌트를 선택하는 경우
  - 각 템플릿에서 useComponentContext를 통해서 선택 화면을 띄웁니다
  - 선택화면은 컴포넌트 기본값인 `contentComponentsGroupMap`과 `contentComponentsNameMap`을 통해 컴포넌트 목록을 보여줍니다
  - 화면에서 레이아웃에 추가할 컴포넌트를 선택하면 `getContentComponentsDefaultValue`에 정의된 컴포넌트의 기본데이터를 통해 컴포넌트를 추가합니다
