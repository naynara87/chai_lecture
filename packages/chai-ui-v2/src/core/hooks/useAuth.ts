import { useRecoilState } from "recoil";
import { authState } from "../states/authState";
import { useCallback } from "react";
import { clearHttpLcmsToken, setHttpLcmsToken } from "../lib";
import { getAccessToken } from "../api";

const useAuth = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(authState);

  const logout = useCallback(() => {
    clearHttpLcmsToken();
    setIsAuthorized(false);
  }, [setIsAuthorized]);

  const fetchToken = useCallback(async () => {
    try {
      const tokenData = await getAccessToken();
      setHttpLcmsToken(tokenData.body.accessToken);
      setIsAuthorized(true);
    } catch (error) {
      console.log("error", error);
      logout();
    }
  }, [setIsAuthorized, logout]);

  return { isAuthorized, fetchToken, logout };
};

export default useAuth;
