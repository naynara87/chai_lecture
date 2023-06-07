# 차이홍 UI

- 차이홍 공통 UI 레포입니다

## 사용 방법

1. 사용하고자 하는 프로젝트의 package.json에 아래와 같이 추가합니다

```json
"dependencies": {
  // ...
  "chai-ui": "*"
}
```

2. chai-ui에서 사용하려는 컴포넌트를 import 합니다

```js
import { Button } from "chai-ui";
```

## 구조

- 크게 3부분으로 구성되어 있습니다
  - assets
  - components
  - core

### assets

- components에서 사용되는 앱에서 사용되는 정적 파일들이 위치합니다
  - ex) 이미지, 폰트, CSS, 효과음 등
- 이미지 및 css 등 경로를 통일하기 위해 assets 폴더를 만들어서 관리합니다
  - ex) `assets/images/`, `assets/scss/`

### components

- 저작도구의 미리보기와 통합학습창(view)에서 공통으로 사용할 컴포넌트들을 모아놓은 폴더입니다

### core

- 공통으로 사용되는 타입, 유틸리티 함수, api 호출 함수 등을 모아놓은 폴더입니다
- 자세한 내용은 view와 관련된 문서를 참고해주세요
  - [통합플레이어(콘텐츠 뷰어)](../../packages/chai-contents-view-v2/README.md)
