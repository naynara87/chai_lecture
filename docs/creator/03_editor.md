# 에디터가 포함된 컴포넌트 추가

## 공통 에디터 컴포넌트(TextEditorViewer)

- 저작도구에서 가장 많이 자주 사용되는 공통 컴포넌트 중 하나가 텍스트 에디터입니다
- 텍스트 에디터 컴포넌트는 아래와 같이 추상화되어 있습니다
  - TextEditor
    - `src/components/atoms/TextEditor.tsx`
    - 텍스트 에디터(Quill)를 래핑한 컴포넌트입니다
      - Quill과 관련된 공통 설정을 여기서 관리합니다
  - TextEditorViewer
    - `src/components/molecules/TextEditorViewer.tsx`
    - 텍스트 에디터 컴포넌트가 클릭 되었을 때 `TextEditor`를 렌더링하고
    - 텍스트 에디터가 아닌 다른 곳을 클릭하면 에디터에서 작성한 내용을 보여주는 컴포넌트입니다

## TextEditorViewer를 각 컴포넌트에서 사용하기

- 여기에선 NumberingTextListCreator와 TextCreator를 예시로 사용하겠습니다

### 각 컴포넌트에서 직접 text state를 관리(TextCreator)

- TextCreator에선 text state를 직접 관리합니다
- 장점 : onBlur에서 한번 업데이트 하기 때문에 성능상 이점이 있습니다
- TextEditorViewer 사용
  - text에 로컬 text state를 전달합니다
  - setText에 로컬 text state를 업데이트하는 함수를 전달합니다
  - isFocused에 에디터가 아닌 다른 곳이 클릭되어서 에디터가 포커스를 잃었는지 여부를 전달합니다
    - isFocused는 CreatePage에서 사용한 useComponent안에 있는 resetFocusedId와 setFocusedId를 통해서 관리됩니다
  - handleSubmitTextOnBlur
    - 컴포넌트에 속한 text state를 글로벌 state에 업데이트하는 함수를 전달합니다
      - 글로벌 state를 업데이트 하는 함수 : updateContent
        - 글로벌 state는 recoil의 slidesState로 관리됩니다

### 중간 state없이 에디터의 onChange에서 바로 글로벌 state를 업데이트(NumberingTextListCreator)

- NumberingTextListCreator에선 text state를 직접 관리하지 않습니다
- 장점 : text state를 관리하지 않기 때문에 코드가 간결해집니다
- 단점 : onBlur가 아닌 onChange에서 글로벌 state를 업데이트하기 때문에 약간 버벅임이 있습니다
  - 극복 방법 : debounce로 글로벌 state를 업데이트하는 함수를 감싸줍니다(현재 적용되지 않은 상태입니다)
- TextEditorViewer 사용
  - text에 글로벌 text state를 전달합니다
  - setText에 글로벌 text state를 업데이트하는 함수를 전달합니다
