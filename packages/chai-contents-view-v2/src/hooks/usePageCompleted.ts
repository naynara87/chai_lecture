import { Page } from "chai-ui-v2";
import { useRecoilState } from "recoil";
import { completePageComponentsState } from "../state/completePageComponentsState";

type CommonTemplateComponentLocation =
  | "contents"
  | "leftContents"
  | "rightContents"
  | "multiChoice"
  | "titleContents"
  | "mainContents"
  | "wordsInOrder";

const usePageCompleted = () => {
  const [completedPageComponents, setCompletedPageComponents] = useRecoilState(
    completePageComponentsState,
  );

  const setPageComponents = (
    page: Page,
    position: CommonTemplateComponentLocation,
  ) => {
    const completedPageComponentListData = [];
    if (page.type === "singlePage") {
      // @ts-ignore
      page.data[position].map((content: Content) => {});
    }
  };
};

export default usePageCompleted;
