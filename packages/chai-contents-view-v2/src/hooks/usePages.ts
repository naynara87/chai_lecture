import { ID, Page } from "chai-ui-v2";
import { useMemo } from "react";

interface usePagesProps {
  pages: Page[];
  pageId?: ID;
}

const usePages = ({ pages, pageId }: usePagesProps) => {
  const currentPage = useMemo(() => {
    if (!pages || !pageId) {
      return undefined;
    }
    return pages.find((page) => page.id.toString() === pageId.toString());
  }, [pages, pageId]);

  const currentPageIndex = useMemo(() => {
    if (!pages || !pageId) {
      return undefined;
    }
    return pages.findIndex((page) => page.id.toString() === pageId.toString());
  }, [pages, pageId]);

  const isLastPage = useMemo(() => {
    if (!pages) return;
    return currentPageIndex === pages.length - 1;
  }, [currentPageIndex, pages]);

  const pageIds = useMemo(() => {
    return pages?.map((page) => page.id);
  }, [pages]);

  return {
    currentPage,
    isLastPage,
    pageIds,
    currentPageIndex,
  };
};

export default usePages;
