import { useRecoilState } from "recoil";
import { authState } from "../states/authState";

const useAuth = () => {
  const [isAuthorized] = useRecoilState(authState);

  return { isAuthorized };
};

export default useAuth;
