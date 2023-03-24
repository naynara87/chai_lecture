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
} from "chai-ui-v2";
import { currentCornerIdState } from "../../state/currentCornerId";
import usePages from "../../hooks/usePages";

interface ContentsLayoutProps {
  pages: Page[];
  corners: CornerListData[];
  lessonMetaData: LessonMeta;
  cornerMetaData: CornerMeta;
}

const ContentsLayout = ({
  pages,
  lessonMetaData,
  cornerMetaData,
  corners,
}: ContentsLayoutProps) => {
  const [, setIsPageCompleted] = useState(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);
  const { courseId, cornerId, lessonId, pageId } = useParams();
  const [currentCornerId] = useRecoilState(currentCornerIdState);

  const navigate = useNavigate();
  const { currentPage, isLastPage, pageIds, currentPageIndex } = usePages({
    pages,
    pageId,
  });

  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };

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
      if (!lessonMetaData) return;
      if (!cornerMetaData) return;

      const currentCornerIndex = corners.findIndex(
        (corner) => corner.id.toString() === currentCornerId?.toString(),
      );
      const nextCorner = corners[currentCornerIndex + 1];
      if (nextCorner) {
        // 다음 코너가 있을때
        const url = getPageUrl(
          lessonMetaData?.courseId,
          cornerMetaData?.lessonId,
          nextCorner.id,
          1,
        );
        navigate(url);
        return;
      }
      // 마지막코너이고 모두 학습을 완료했을때
      setIsCompleteModalOpen(true);
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
        currentPageIndex={currentPageIndex ?? 1}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
      />
      {isCompleteModalOpen && (
        <ModalCompleted lessonCode={lessonMetaData.colorTypeCd} />
      )}
    </>
  );
};

export default ContentsLayout;
