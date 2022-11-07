# Templates

- 각 템플릿 컴포넌트
- props 공통으로 TemplateProps를 상속받아서 전달해야 한다
  - `setPageCompleted: () => void` 가 포함 되어 있음

```ts
import { TemplateProps } from "../../types/templates";

interface TP01AComponentProps extends TemplateProps {}
```
