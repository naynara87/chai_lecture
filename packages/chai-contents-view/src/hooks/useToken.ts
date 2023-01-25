import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../api/auth";
import { clearHttpLcmsToken, setHttpLcmsToken } from "../lib/axios/httpLcms";
import { authState } from "../state/authState";

const useToken = () => {
  const [, setIsAuthorized] = useRecoilState(authState);
  const fetchToken = useCallback(async () => {
    try {
      const tokenData = await getAccessToken();
      setHttpLcmsToken(tokenData.body.accessToken);
      setIsAuthorized(true);
    } catch (error) {
      console.log("error", error);
      clearHttpLcmsToken();
      setIsAuthorized(false);
    }
  }, [setIsAuthorized]);

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);
};

export default useToken;
