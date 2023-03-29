import React from "react";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { clearHttpLcmsToken, setHttpLcmsToken } from "../api/lcms/httpLcms";
import { getAccessToken } from "../api/lcms/auth";
import { authState } from "../states/authState";
import styled from "@emotion/styled";
import { LoadingSpinner } from "chai-ui-v2";

const LoadingScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(authState);
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
    void fetchToken();
  }, [fetchToken]);

  return (
    <>
      {isAuthorized ? (
        children
      ) : (
        <LoadingScreen>
          <LoadingSpinner />
        </LoadingScreen>
      )}
    </>
  );
};

export default AuthProvider;
