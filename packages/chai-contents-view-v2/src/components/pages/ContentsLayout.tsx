import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  useXapi,
  currentPageState,
} from "chai-ui-v2";
import { currentCornerIdState } from "../../state/currentCornerId";
import usePages from "../../hooks/usePages";
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
  const [, setCurrentPage] = useRecoilState(currentPageState);
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
  const { xapiProgress, xapiComplete, xapiSuspended } = useXapi();
  const { setCompletedPageComponents } = usePageCompleted();

  const exitPlayer = useCallback(() => {
    if (currentPage === undefined || currentPageIndex === undefined) return;
    let result: boolean;
    return new Promise((resolve, reject) => {
      try {
        const currentCornerIndex = corners.findIndex(
          (corner) => corner.id.toString() === currentCornerId?.toString(),
        );
        const currentCorner = corners[currentCornerIndex];
        xapiSuspended(
          currentCorner,
          currentCorner,
          currentPage,
          totalPages[currentPageIndex],
          totalPages,
        );
        result = true;
      } catch (error) {
        console.log(error);
        reject(error);
      }
      resolve(result);
    });
  }, [
    xapiSuspended,
    corners,
    currentCornerId,
    currentPage,
    currentPageIndex,
    totalPages,
  ]);

  // useUnload((event: BeforeUnloadEvent) => {
  //   exitPlayer();
  //   event.preventDefault();
  //   event.returnValue = "학습을 종료하시겠습니까?";
  //   return "학습을 종료하시겠습니까?";
  // });

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage, setCurrentPage]);

  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };

  const handleClickPrev = () => {
    if (currentPageIndex === undefined) return;
    const currentCornerIndex = corners.findIndex(
      (corner) => corner.id.toString() === currentCornerId?.toString(),
    );
    const prevCorner = corners[currentCornerIndex - 1];
    const currentCorner = corners[currentCornerIndex];
    if (isCurrentCornerFirstPage) {
      if (prevCorner && currentPage) {
        // 다음 코너가 있을때
        xapiProgress(
          currentCorner,
          prevCorner,
          currentPage,
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
    if (cornerId && courseId && lessonId && pageId && currentPage) {
      xapiProgress(
        currentCorner,
        currentCorner,
        currentPage,
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
    const currentCorner = corners[currentCornerIndex];
    if (isCurrentCornerLastPage && currentPage) {
      if (!lessonMetaData) return;
      if (!cornerMetaData) return;

      const nextCorner = corners[currentCornerIndex + 1];
      if (nextCorner) {
        // 다음 코너가 있을때
        xapiProgress(
          currentCorner,
          nextCorner,
          currentPage,
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
      xapiComplete(
        currentCorner,
        currentCorner,
        currentPage,
        currentPage.id,
        totalPages,
      );
      setIsCompleteModalOpen(true);
      return;
    }
    if (cornerId && courseId && lessonId && currentPage) {
      xapiProgress(
        currentCorner,
        currentCorner,
        currentPage,
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
        currentPage={currentPage}
        exitPlayer={exitPlayer}
      />
      {isCompleteModalOpen && (
        <ModalCompleted
          lessonCode={lessonMetaData.colorTypeCd}
          exitPlayer={exitPlayer}
        />
      )}
    </>
  );
};

export default ContentsLayout;
