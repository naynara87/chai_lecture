import { ID } from "chai-ui-v2";

const useProgressRate = (totalPages: ID[]) => {
  const currentProgress = (currentPageId: ID) => {
    const pageIdx = totalPages.findIndex((pageId) => {
      return pageId.toString() === currentPageId.toString();
    });
    return Math.floor(((pageIdx + 1) / totalPages.length) * 100);
  };

  return {
    currentProgress,
  };
};
export default useProgressRate;
