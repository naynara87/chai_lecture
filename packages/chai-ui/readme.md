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

## TODO

- [ ] 리팩토링 필요
  - 안쓰는 컴포넌트 삭제
  - 미처 옮기지 못한 컴포넌트 마저 옮기기
  - creator 관련 컴포넌트도 옮기기
