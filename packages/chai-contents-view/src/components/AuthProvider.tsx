import React from "react";
import useToken from "../hooks/useToken";

interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  useToken();

  return <>{children}</>;
};

export default AuthProvider;
