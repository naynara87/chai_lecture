import { useRecoilState } from "recoil";
import { contentLayoutState } from "../state/createContent/contentLayoutState";

const useCreateContent = () => {
  const [contentLayout, setContentLayout] = useRecoilState(contentLayoutState);

  return {
    contentLayout,
    setContentLayout,
  };
};

export default useCreateContent;
