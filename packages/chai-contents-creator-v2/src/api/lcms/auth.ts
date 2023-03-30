import { PostAccessTokenData, TOKEN_URL } from "chai-ui-v2";
import httpLcms from "./httpLcms";

/**
 * LCMS API: 토큰 발급
 */
export const getAccessToken = async () => {
  const res = await httpLcms.post<PostAccessTokenData>(TOKEN_URL, {
    // NOTE: 아이디와 비밀번호를 따로 받을 방법이 없어서 하드코딩
    password: "test135!#%A",
    userId: "manager",
  });
  return res.data;
};
