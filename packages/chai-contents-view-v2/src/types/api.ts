export interface PostAccessTokenData {
  head: PostAccessTokenDataHead;
  body: PostAccessTokenDataBody;
}
interface PostAccessTokenDataHead {
  code: number;
  message: string;
  detail: string;
}
interface PostAccessTokenDataBody {
  userId: string;
  accessToken: string;
}
