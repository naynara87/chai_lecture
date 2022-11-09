import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useLocation, useParams } from "react-router-dom";
import { getCorner } from "../../data/tempApi";
import { Corner } from "../../types/appData";
import CommonPageLayout from "../Layouts/CommonPageLayout";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import CornerMain from "../molecules/CornerMain";

const CornerMainContainer = styled.main`
  height: 100%;
`;

const CornerPage = () => {
  // get params from url => TODO: react query로 대체
  const {
    state: { appData: appDataByRouter, currentCorner: cornerByRouter },
  } = useLocation();
  const [corner, setCorner] = useState<Corner>(cornerByRouter);
  const { id: cornerId } = useParams();

  const [pageIndex, setPageIndex] = useState(0);
  const [isPageCompleted, setIsPageCompleted] = useState(false);

  const fetchCorner = useCallback(async () => {
    // NOTE: cornerByRouter가 있으면 cornerByRouter를 사용하고 없으면 cornerId로 corner를 가져옵니다
    if (!corner && cornerId) {
      const corner = await getCorner(cornerId);
      if (corner) setCorner(corner);
    }
  }, [cornerId, corner]);

  useEffect(() => {
    fetchCorner();
  }, [fetchCorner]);

  const handleClickNext = () => {
    setPageIndex((prev) => prev + 1);
    setIsPageCompleted(false);
  };

  const handleClickPrev = () => {
    setPageIndex((prev) => prev - 1);
    setIsPageCompleted(false);
  };

  return (
    <CommonPageLayout>
      <Header />
      <CornerMainContainer>
        {corner ? (
          <CornerMain page={corner.pages[pageIndex]} setIsPageCompleted={setIsPageCompleted} />
        ) : (
          <div>로딩중</div>
        )}
      </CornerMainContainer>
      <Footer
        pageIndex={pageIndex}
        appData={appDataByRouter}
        currentCorner={corner}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        isPageCompleted={isPageCompleted}
      />
    </CommonPageLayout>
  );
};

export default CornerPage;
