import React from "react";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { clearHttpLcmsToken, setHttpLcmsToken } from "./lib/axios/httpLcms";
import { authState } from "./states/authState";
import { getAccessToken } from "./api";

interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
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
    void fetchToken();
  }, [fetchToken]);

  return <>{children}</>;
};

export default AuthProvider;
