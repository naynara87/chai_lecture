import React, { useEffect, useMemo, useState } from "react";
import CommonPageLayout from "../Layouts/CommonPageLayout";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import CornerMain from "../molecules/CornerMain";
import CommonMainContainer from "../atoms/CommonMainContainer";
import useCorner from "../../hooks/useCorner";
import usePage from "../../hooks/usePage";
import { useNavigate, useParams } from "react-router-dom";
import { getPageUrl } from "../../utils/url";
import { useRecoilState } from "recoil";
import { cornersState } from "../../state/corners";
import { CORNER_LIST_URL } from "../../constants/url";
import IframeMainContainer from "../atoms/IframeMainContainer";
// import usePageLcms from "../../hooks/api/usePageLcms";

const CornerPage = () => {
  const { pageIds, cornerId } = useCorner();
  const [isPageCompleted, setIsPageCompleted] = useState(false);
  const [showLoadingPage, setShowLoadingPage] = useState(false);

  const [, setCompletedCorners] = useRecoilState(cornersState);

  // const { currentPageData, pageList } = usePageLcms(); // TODO: pageList로 부터 pageIds를 추출하자(handleClickNext, Prev에 적용) => BBC-602

  const { page: currentPage } = usePage(); // TODO: 실제 데이터 붙일 때 삭제 예정 => BBC-602
  const { currentCorner } = useCorner(); // TODO: 실제 데이터 붙일 때 삭제 예정 => BBC-602
  const navigate = useNavigate();

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log(currentPage?.template.type);
    }
  }, [currentPage]);

  const pageIndex = pageIds.findIndex((id) => id === currentPage?.id);

  const { courseId, lessonId } = useParams();

  const isLastPage = useMemo(() => {
    if (currentCorner === undefined) {
      return false;
    }
    return pageIndex === currentCorner.pages.length - 1;
  }, [pageIndex, currentCorner]);

  const handleClickNext = () => {
    if (isLastPage) {
      navigate(CORNER_LIST_URL);
      return;
    }
    if (cornerId && courseId && lessonId) {
      navigate(getPageUrl(courseId, lessonId, cornerId, pageIds[pageIndex + 1]!));
    }
    setIsPageCompleted(false);
  };

  const handleClickPrev = () => {
    if (cornerId && courseId && lessonId) {
      navigate(getPageUrl(courseId, lessonId, cornerId, pageIds[pageIndex - 1]!));
    }
    setIsPageCompleted(false);
  };

  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };

  useEffect(() => {
    if (isLastPage) {
      // TODO: post corner completed
      console.log("post corner completed");

      // FIXME: 임시로 뷰잉을 위한 로컬 완료 로직
      setCompletedCorners((prev) => {
        return prev.map((corner) => {
          if (corner.id.toString() === cornerId?.toString()) {
            return { id: corner.id, isCompleted: true };
          }
          return corner;
        });
      });
    }
  }, [isLastPage, cornerId, setCompletedCorners]);

  const renderMainPage = useMemo(() => {
    if (showLoadingPage) {
      setTimeout(() => {
        setShowLoadingPage(false);
      }, 0);
      return <div />;
    }
    if (currentPage) {
      return <CornerMain page={currentPage} setPageCompleted={setPageCompleted} />;
    }
  }, [currentPage, showLoadingPage]);

  useEffect(() => {
    setShowLoadingPage(true);
  }, [setShowLoadingPage, currentPage?.id]);

  return (
    <CommonPageLayout>
      <Header cornerName={currentCorner?.title} />
      {currentPage?.template.type === "TPIframe" ? (
        <IframeMainContainer>{renderMainPage}</IframeMainContainer>
      ) : (
        <CommonMainContainer>{renderMainPage}</CommonMainContainer>
      )}
      <Footer
        pageIndex={pageIndex}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        isPageCompleted={isPageCompleted}
      />
    </CommonPageLayout>
  );
};

export default CornerPage;
