import React, { useMemo, useState } from "react";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutHeader from "../molecules/LayoutHeader";
import useInitialData from "../../hooks/useInitialData";
import LayoutSinglePage from "../molecules/LayoutSinglePage";
import { useNavigate, useParams } from "react-router-dom";
import { getPageUrl } from "../../util/url";
import { useRecoilState } from "recoil";
import { cornersState } from "../../state/corners";

const Layout = () => {
  const { initialPage, pages, initialCorner } = useInitialData();
  const [isPageCompleted, setIsPageCompleted] = useState(false);
  const { courseId, cornerId, lessonId, pageId } = useParams();
  const navigate = useNavigate();

  const [, setCompletedCorners] = useRecoilState(cornersState);

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

  const isLastPage = useMemo(() => {
    return currentPageIndex === pages.length - 1;
  }, [currentPageIndex, pages]);

  const pageIds = useMemo(() => {
    return pages?.map((page) => page.id);
  }, [pages]);

  const handleClickPrev = () => {
    if (currentPageIndex === undefined) return;
    if (cornerId && courseId && lessonId && pageId) {
      navigate(
        getPageUrl(courseId, lessonId, cornerId, pageIds[currentPageIndex - 1]),
      );
    }
  };

  const handleClickNext = () => {
    if (currentPageIndex === undefined) return;
    if (isLastPage) {
      setCompletedCorners((prev) => {
        return prev.map((corner) => {
          if (corner.id.toString() === initialCorner?.id.toString()) {
            return { id: corner.id, isCompleted: true };
          }
          return corner;
        });
      });
      navigate("/");
      return;
    }
    if (cornerId && courseId && lessonId && pageId) {
      navigate(
        getPageUrl(courseId, lessonId, cornerId, pageIds[currentPageIndex + 1]),
      );
    }
  };

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
      <LayoutFooter
        pages={pages}
        currentPageIndex={currentPageIndex ?? 1}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
      />
    </div>
  );
};

export default Layout;
