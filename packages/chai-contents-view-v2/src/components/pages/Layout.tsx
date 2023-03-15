import React, { useEffect, useMemo, useState } from "react";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutHeader from "../molecules/LayoutHeader";
import { useNavigate, useParams } from "react-router-dom";
import { getPageUrl } from "../../util/url";
import { useRecoilState } from "recoil";
import {
  LayoutModalIntroduction,
  LayoutSinglePage,
  LayoutMultiPage,
} from "chai-ui-v2";
import useCorner from "../../hooks/useCorner";
import useInitialData from "../../hooks/useInitialData";
import { completeCornersState } from "../../state/completeCornersState";
import { currentCornerIdState } from "../../state/currentCornerId";

const Layout = () => {
  const [isPageCompleted, setIsPageCompleted] = useState(false);
  const { corners, lessonMetaData, cornerMetaData } = useInitialData();
  const { courseId, cornerId, lessonId, pageId } = useParams();
  const { pages } = useCorner(cornerId);

  const navigate = useNavigate();

  const [isIntroductionModalOpen, setIsIntroductionModalOpen] = useState(false);

  const [, setCompletedCorners] = useRecoilState(completeCornersState);
  const [currentCornerId, setCurrentCornerId] =
    useRecoilState(currentCornerIdState);

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
    if (!pages) return;
    return currentPageIndex === pages.length - 1;
  }, [currentPageIndex, pages]);

  const pageIds = useMemo(() => {
    return pages?.map((page) => page.id);
  }, [pages]);

  const handleClickPrev = () => {
    if (currentPageIndex === undefined) return;
    if (!pageIds) return;
    if (cornerId && courseId && lessonId && pageId) {
      navigate(
        getPageUrl(courseId, lessonId, cornerId, pageIds[currentPageIndex - 1]),
      );
    }
  };

  const handleClickNext = () => {
    if (currentPageIndex === undefined) return;
    if (!pageIds) return;
    if (isLastPage) {
      setCompletedCorners((prev) => {
        return prev.map((corner) => {
          if (corner.id.toString() === cornerId?.toString()) {
            return { id: corner.id, isCompleted: true };
          }
          return corner;
        });
      });
      if (!lessonMetaData) return;
      if (!cornerMetaData) return;

      const currentCornerIndex = corners.findIndex(
        (corner) => corner.id.toString() === currentCornerId?.toString(),
      );
      const nextCorner = corners[currentCornerIndex + 1];
      const url = getPageUrl(
        lessonMetaData?.courseId,
        cornerMetaData?.lessonId,
        nextCorner.id,
        1,
      );
      navigate(url);
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
    if (currentPage?.type === "SinglePage") {
      return (
        <LayoutSinglePage
          page={currentPage}
          setPageCompleted={setPageCompleted}
        />
      );
    } else {
      return (
        <LayoutMultiPage
          page={currentPage}
          setPageCompleted={setPageCompleted}
        />
      );
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage?.introduction) {
      setIsIntroductionModalOpen(true);
    }
  }, [currentPage?.introduction]);

  useEffect(() => {
    setCurrentCornerId(cornerId);
  }, [cornerId, setCurrentCornerId]);

  const introduction = useMemo(() => {
    if (currentPage?.introduction) {
      return (
        <LayoutModalIntroduction
          isModalOpen={isIntroductionModalOpen}
          setIsModalOpen={setIsIntroductionModalOpen}
          introduction={currentPage.introduction}
        />
      );
    }
  }, [currentPage, isIntroductionModalOpen]);

  return (
    <div>
      <LayoutHeader
        corners={corners}
        cornerId={cornerId}
        currentPage={currentPage}
        lessonColorCode={lessonMetaData?.colorTypeCd}
      />
      <main className="cai-main">
        {layoutMain}
        {/* <TemplateDialogue /> */}
      </main>
      <LayoutFooter
        corners={corners}
        pages={pages}
        currentPageIndex={currentPageIndex ?? 1}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
      />
      {introduction}
    </div>
  );
};

export default Layout;
