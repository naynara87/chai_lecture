import React, { useMemo, useState } from "react";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutHeader from "../molecules/LayoutHeader";
import useInitialData from "../../hooks/useInitialData";
import LayoutSinglePage from "../molecules/LayoutSinglePage";
import { useParams } from "react-router-dom";

const Layout = () => {
  // TODO kjw page data 받아서 main page 띄우기 BBC-998
  const { initialPage, pages } = useInitialData();
  const [isPageCompleted, setIsPageCompleted] = useState(false);
  const { courseId, cornerId, lessonId, pageId } = useParams();

  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };

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

  const layoutMain = useMemo(() => {
    if (!currentPage) return;
    if (initialPage?.type === "SinglePage") {
      return (
        <LayoutSinglePage
          page={currentPage}
          setPageCompleted={setPageCompleted}
        />
      );
    }
    // else {
    //   return (
    //     <LayoutMultiPage
    //       page={initialPage}
    //       setPageCompleted={setPageCompleted}
    //     />
    //   );
    // }
  }, [initialPage, currentPage]);

  return (
    <div>
      <LayoutHeader />
      <main className="cai-main">
        {layoutMain}
        {/* <TemplateDialogue /> */}
      </main>
      <LayoutFooter pages={pages} currentPageIndex={currentPageIndex ?? 1} />
    </div>
  );
};

export default Layout;
