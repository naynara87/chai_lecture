import { Page } from "chai-ui-v2";
import { useCallback, useEffect, useState } from "react";
import useCorner from "./useCorner";
import useLesson from "./useLesson";

const useInitialData = () => {
  const [initialPage, setInitialPage] = useState<Page>();

  const { corners, lessonMetaData } = useLesson(1);
  const { pages, cornerMetaData } = useCorner(1);

  const setInitialData = useCallback(() => {
    setInitialPage(pages?.[0]);
  }, [pages]);

  useEffect(() => {
    setInitialData();
  }, [setInitialData]);

  return { initialPage, corners, lessonMetaData, cornerMetaData, pages };
};

export default useInitialData;
