import { ID, Page } from "chai-ui-v2";
import { useMemo } from "react";

interface usePagesProps {
  pages: Page[];
  pageId?: ID;
  totalPages: (string | number)[];
}

const usePages = ({ pages, pageId, totalPages }: usePagesProps) => {
  const currentPage = useMemo(() => {
    if (!pages || !pageId) {
      return undefined;
    }
    return pages.find((page) => {
      return page.id.toString() === pageId.toString();
    });
  }, [pages, pageId]);

  const currentPageIndex = useMemo(() => {
    if (!totalPages || !pageId) {
      return undefined;
    }
    return totalPages.findIndex(
      (page) => page.toString() === pageId.toString(),
    );
  }, [pageId, totalPages]);

  const isCurrentCornerFirstPage = useMemo(() => {
    if (!pages || !pageId) return;
    return (
      pages.findIndex((page) => page.id.toString() === pageId.toString()) === 0
    );
  }, [pages, pageId]);

  const isCurrentCornerLastPage = useMemo(() => {
    if (!pages || !pageId) return;
    return (
      pages.findIndex((page) => page.id.toString() === pageId.toString()) ===
      pages.length - 1
    );
  }, [pages, pageId]);

  const pageIds = useMemo(() => {
    return pages?.map((page) => page.id);
  }, [pages]);

  return {
    currentPage,
    isCurrentCornerLastPage,
    isCurrentCornerFirstPage,
    pageIds,
    currentPageIndex,
  };
};

export default usePages;
