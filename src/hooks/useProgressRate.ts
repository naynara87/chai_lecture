import { useMemo } from "react";
import { ID } from "../types/appData";
import useCornerListPage from "./useCornerListPage";

const useProgressRate = () => {
  const { corners } = useCornerListPage();

  const allPageIdArray = useMemo(() => {
    const pageArr: ID[] = [];
    corners.forEach((corner) => {
      corner.pages.forEach((page) => {
        pageArr.push(page);
      });
    });
    return pageArr;
  }, [corners]);

  const currentProgress = (currentPageId: ID) => {
    const pageIdx = allPageIdArray.findIndex((pageId) => {
      return pageId === +currentPageId;
    });
    return Math.floor(((pageIdx + 1) / allPageIdArray.length) * 100);
  };

  return {
    currentProgress,
  };
};
export default useProgressRate;
