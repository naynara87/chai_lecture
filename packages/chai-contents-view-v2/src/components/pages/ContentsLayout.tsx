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
import useProgressRate from "../../hooks/useProgressRate";
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
    // JavaScript를 사용하여 화면 가로 세로 비교 후 스타일 조정
    function adjustStyles() {
      const body = document.querySelector("main");

      if (!body) {
        return;
      }

      // if (window.innerWidth < window.innerHeight) {
      if (window.innerWidth < window.innerHeight) {
        // 가로가 세로보다 길 때
        body.classList.add("width_fit");
        body.classList.remove("height_fit");
      } else {
        // 세로가 가로보다 길 때는 다시 원래값으로
        body.classList.remove("width_fit");
        body.classList.add("height_fit");
      }
    }

    // 초기화 및 창 크기 변경 이벤트에 대한 리스너 등록
    adjustStyles();
    window.addEventListener("resize", adjustStyles);

    return () => {
      window.removeEventListener("resize", adjustStyles);
    };
  }, []);

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
        lessonMetaData.lessonTpCd,
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

  const { progressData } = useProgressRate({ totalPages, lessonMetaData });

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
    <div className="cai-view-yahei">
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
        lessonMetaData={lessonMetaData}
      />
      {isCompleteModalOpen && (
        <ModalCompleted
          lessonCode={lessonMetaData.colorTypeCd}
          exitPlayer={exitPlayer}
          progressData={progressData}
        />
      )}
    </div>
  );
};

export default ContentsLayout;
