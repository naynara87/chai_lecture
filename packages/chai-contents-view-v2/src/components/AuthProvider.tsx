import React from "react";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../api/auth";
import { clearHttpLcmsToken, setHttpLcmsToken } from "../lib/axios/httpLcms";
import { authState } from "../states/authState";

interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [, setIsAuthorized] = useRecoilState(authState);
  const fetchToken = useCallback(async () => {
    try {
      const tokenData = await getAccessToken();
      console.log("tokenData", tokenData);
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

  return <>{children}</>;
};

export default AuthProvider;
