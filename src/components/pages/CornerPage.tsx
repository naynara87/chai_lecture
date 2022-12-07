import React, { useEffect, useMemo, useState } from "react";
import CommonPageLayout from "../Layouts/CommonPageLayout";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import CornerMain from "../molecules/CornerMain";
import CommonMainContainer from "../atoms/CommonMainContainer";
import { useNavigate, useParams } from "react-router-dom";
import { getPageUrl } from "../../utils/url";
import { useRecoilState } from "recoil";
import { cornersState } from "../../state/corners";
import useCornerPage from "../../hooks/useCornerPage";
import { CORNER_LIST_URL } from "../../constants/url";
import IframeMainContainer from "../atoms/IframeMainContainer";

const CornerPage = () => {
  const { courseId, cornerId, lessonId, pageId } = useParams();
  const [isPageCompleted, setIsPageCompleted] = useState(false);
  const [, setCompletedCorners] = useRecoilState(cornersState);

  const navigate = useNavigate();

  const { currentCorner, pages, appMetaData } = useCornerPage();

  const pageIndex = useMemo(() => {
    if (!pages || !pageId) {
      return -1;
    }
    return pages.findIndex((page) => page.id.toString() === pageId.toString());
  }, [pages, pageId]);

  const currentPage = useMemo(() => {
    if (!pages || !pageId) {
      return undefined;
    }
    return pages.find((page) => page.id.toString() === pageId.toString());
  }, [pages, pageId]);

  const pageIds = useMemo(() => {
    return pages?.map((page) => page.id);
  }, [pages]);

  const isLastPage = useMemo(() => {
    if (currentCorner === undefined) {
      return false;
    }
    return pageIndex === currentCorner.pages.length - 1;
  }, [pageIndex, currentCorner]);

  const handleClickNext = () => {
    if (isLastPage) {
      // NOTE: isCompleted를 서버에서 제공해주면 그것을 사용해야 함(현재는 클라이언트에서 관리)
      setCompletedCorners((prev) => {
        return prev.map((corner) => {
          if (corner.id.toString() === currentCorner?.id?.toString()) {
            return { id: corner.id, isCompleted: true };
          }
          return corner;
        });
      });
      navigate(CORNER_LIST_URL);
      return;
    }
    if (cornerId && courseId && lessonId && pageIds) {
      navigate(getPageUrl(courseId, lessonId, cornerId, pageIds[pageIndex + 1]));
    }
    setIsPageCompleted(false);
  };

  const handleClickPrev = () => {
    if (cornerId && courseId && lessonId && pageIds) {
      navigate(getPageUrl(courseId, lessonId, cornerId, pageIds[pageIndex - 1]));
    }
    setIsPageCompleted(false);
  };

  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };

  useEffect(() => {
    // pageId가 없으면 코너 리스트 페이지로 이동
    if (pages && pageId === "undefined") {
      navigate(CORNER_LIST_URL, { replace: true });
    }
  }, [pages, pageId, navigate]);

  useEffect(() => {
    console.log(`page: ${pageIndex + 1} / ${pages?.length}`);
  }, [pageIndex, pages]);

  const renderMainPage = useMemo(() => {
    if (currentPage) {
      return <CornerMain page={currentPage} setPageCompleted={setPageCompleted} />;
    }
  }, [currentPage]);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log(currentPage?.template.type);
    }
  }, [currentPage]);

  return (
    <CommonPageLayout>
      <Header currentCorner={currentCorner} appMetaData={appMetaData} showCornerLabel />
      {/* <CommonMainContainer>
        {currentPage && <CornerMain page={currentPage} setPageCompleted={setPageCompleted} />}
      </CommonMainContainer> */}
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
        currentCorner={currentCorner}
      />
    </CommonPageLayout>
  );
};

export default CornerPage;
