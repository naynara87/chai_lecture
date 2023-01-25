import { useRecoilState } from "recoil";
import { authState } from "../state/authState";

const useAuth = () => {
  const [isAuthorized] = useRecoilState(authState);

  return { isAuthorized };
};

export default useAuth;
