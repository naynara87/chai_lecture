# 라이브러리 관련 문서

## lodash 라이브러리

- 사용 시 전체 import가 아닌 특정 메소드 디렉토리에서 import 해야 빌드 시 용량이 줄어든다

```ts
// bad
import { isEmpty } from "lodash";

// good
import isEmpty from "lodash/isEmpty";
```

- 관련 vscode extension : import cost
