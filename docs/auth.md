# 인증 관련

- API 요청 시 JWT와 apiKey를 같이 보내줘야 합니다
- 참고 : http://106.248.245.114:28123/index.html

## JWT

- 토큰 발급을 요청하고 발급받은 토큰을 header의 Authorization필드에 추가해줍니다
- 개발모드에서 토큰 발급 요청 시 get-token api를 두번 호출하는 것은 index.tsx의 Strict 모드 때문이고, 이는 빌드 시 해당 현상은 없어집니다(production 환경에선 한번만 요청함)

## apiKey

- 서버에서 정해준 고정 문자열로 프론트에서 가지고 있다가 query string으로 같이 보내줘야 합니다
