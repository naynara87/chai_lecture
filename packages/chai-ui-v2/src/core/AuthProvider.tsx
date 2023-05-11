import React from "react";
import { useEffect } from "react";
import { useAuth } from "./hooks";

interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const { isAuthorized, fetchToken } = useAuth();

  useEffect(() => {
    if (isAuthorized) {
      return;
    }
    void fetchToken();
  }, [isAuthorized, fetchToken]);

  return <>{children}</>;
};

export default AuthProvider;
