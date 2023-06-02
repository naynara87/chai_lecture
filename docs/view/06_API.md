# API 호출 관련

- 각 도메인 별 서버 API 사용을 위해 axios 라이브러리를 사용합니다
- 서버 상태 관리를 위해 react-query를 axios와 같이 사용합니다

## API 호출 함수 계층

### 1. 도메인별 axios 인스턴스 생성

- axios 인스턴스는 도메인별로 생성합니다
  - axios 라이브러리는 src/lib/axios 에서 관리합니다
  - src/lib/axios/{각도메인}.ts 에서 axios 인스턴스를 생성합니다

### 2. API 호출 함수 생성

- axios 인스턴스를 import해서 해당 도메인에서 사용하는 api 함수를 생성합니다
  - src/api/{각도메인}.ts 에서 api 함수를 생성합니다
  - api 함수는 axios 인스턴스를 import해서 사용합니다

### 3. react-query 사용

- hooks/use{hookName}.ts 에서 react-query를 사용합니다
  - use{hookName} 함수는 `2.`에서 만든 api 함수를 import해서 사용합니다
  - use{hookName} 함수는 react-query의 useQuery, useMutation 등을 사용합니다
