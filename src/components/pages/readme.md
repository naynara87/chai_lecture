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

# 학습 이력 저장

## 학습 이력 저장 시점

- 페이지 첫 진입 시 저장

## 현재 학습해야할 페이지 표기

- 현재 레슨에 대한 학습 이력 조회
  - 없다 -> 첫 번째 코너
  - 있다
    - 해당 코너에서
      - 저장된 페이지가 없다 -> 첫 페이지
      - 저장된 페이지가 있다
        - 저장된 페이지가 마지막이다 -> 다음 코너
        - 저장된 페이지가 마지막이 아니다 -> 해당 페이지의 다음 페이지

## 페이지 완료 조건

- 해당 코너의 마지막 페이지에서 다음 버튼 클릭 시 완료 처리(recoil state로 관리)
