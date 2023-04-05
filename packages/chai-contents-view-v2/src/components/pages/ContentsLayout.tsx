import React, { useMemo, useState } from "react";
import LayoutFooter from "../molecules/LayoutFooter";
import LayoutHeader from "../molecules/LayoutHeader";
import { useNavigate, useParams } from "react-router-dom";
import { getPageUrl } from "../../util/url";
import { useRecoilState } from "recoil";
import {
  LayoutSinglePage,
  LayoutMultiPage,
  ModalCompleted,
  Page,
  LessonMeta,
  CornerMeta,
  CornerListData,
  usePageCompleted,
} from "chai-ui-v2";
import { currentCornerIdState } from "../../state/currentCornerId";
import usePages from "../../hooks/usePages";
import useXapi from "../../hooks/useXapi";

interface ContentsLayoutProps {
  pages: Page[];
  corners: CornerListData[];
  lessonMetaData: LessonMeta;
  cornerMetaData: CornerMeta;
  totalPages: (string | number)[];
}

const ContentsLayout = ({
  pages,
  lessonMetaData,
  cornerMetaData,
  corners,
  totalPages,
}: ContentsLayoutProps) => {
  const [, setIsPageCompleted] = useState(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);
  const { courseId, cornerId, lessonId, pageId } = useParams();
  const [currentCornerId] = useRecoilState(currentCornerIdState);
  const navigate = useNavigate();
  const {
    currentPage,
    isCurrentCornerLastPage,
    isCurrentCornerFirstPage,
    currentPageIndex,
  } = usePages({
    pages,
    pageId,
    totalPages,
  });
  const { xapiProgress } = useXapi();
  const { setCompletedPageComponents } = usePageCompleted();

  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };

  const handleClickPrev = () => {
    if (currentPageIndex === undefined) return;
    const currentCornerIndex = corners.findIndex(
      (corner) => corner.id.toString() === currentCornerId?.toString(),
    );
    if (isCurrentCornerFirstPage) {
      const prevCorner = corners[currentCornerIndex - 1];
      if (prevCorner) {
        // 다음 코너가 있을때
        xapiProgress(
          prevCorner,
          totalPages[currentPageIndex],
          prevCorner.pages[prevCorner.pages.length - 1],
          totalPages,
        );
        setCompletedPageComponents([]);
        const url = getPageUrl(
          lessonMetaData?.courseId,
          cornerMetaData?.lessonId,
          prevCorner.id,
          prevCorner.pages[prevCorner.pages.length - 1],
        );
        navigate(url);
        return;
      } else {
        return;
      }
    }
    if (cornerId && courseId && lessonId && pageId) {
      const currentCorner = corners[currentCornerIndex];
      xapiProgress(
        currentCorner,
        totalPages[currentPageIndex],
        totalPages[currentPageIndex - 1],
        totalPages,
      );
      setCompletedPageComponents([]);
      navigate(
        getPageUrl(
          courseId,
          lessonId,
          cornerId,
          totalPages[currentPageIndex - 1],
        ),
      );
    }
  };

  const handleClickNext = () => {
    if (currentPageIndex === undefined) return;
    if (!pageId) return;
    const currentCornerIndex = corners.findIndex(
      (corner) => corner.id.toString() === currentCornerId?.toString(),
    );
    if (isCurrentCornerLastPage) {
      if (!lessonMetaData) return;
      if (!cornerMetaData) return;
      const nextCorner = corners[currentCornerIndex + 1];
      if (nextCorner) {
        // 다음 코너가 있을때
        xapiProgress(
          nextCorner,
          totalPages[currentPageIndex],
          nextCorner.pages[0],
          totalPages,
        );
        setCompletedPageComponents([]);
        const url = getPageUrl(
          lessonMetaData?.courseId,
          cornerMetaData?.lessonId,
          nextCorner.id,
          nextCorner.pages[0],
        );
        navigate(url);
        return;
      }
      // 마지막코너이고 모두 학습을 완료했을때 xapi completed 이벤트 발생부분 레슨의 마지막페이지일때
      setIsCompleteModalOpen(true);
      return;
    }
    if (cornerId && courseId && lessonId) {
      const currentCorner = corners[currentCornerIndex];
      xapiProgress(
        currentCorner,
        totalPages[currentPageIndex],
        totalPages[currentPageIndex + 1],
        totalPages,
      );
      setCompletedPageComponents([]);
      navigate(
        getPageUrl(
          courseId,
          lessonId,
          cornerId,
          totalPages[currentPageIndex + 1],
        ),
      );
    }
  };

  const layoutMain = useMemo(() => {
    if (!currentPage) return;
    if (currentPage?.type === "singlePage") {
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

  return (
    <>
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
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        totalPages={totalPages}
      />
      {isCompleteModalOpen && (
        <ModalCompleted lessonCode={lessonMetaData.colorTypeCd} />
      )}
    </>
  );
};

export default ContentsLayout;
