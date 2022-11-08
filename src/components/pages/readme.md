# Pages

- pages 폴더는 페이지 단위의 컴포넌트입니다
- 파일 이름 뒤에 `Page`를 붙입니다

## 페이지 이동

```tsx
import { Link, useNavigate } from "react-router-dom";

// 방법 1.
const navigate = useNavigate();
const handleClickStart = () => {
  navigate("/corner/1");
};

// 방법 2.
<Link to="/corner/1">시작하기</Link>;
```

- react-router-dom의 useNavigate을 이용하거나
- react-router-dom의 Link컴포넌트를 이용
