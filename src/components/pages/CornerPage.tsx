import React, { useState } from "react";
import CommonPageLayout from "../Layouts/CommonPageLayout";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import CornerMain from "../molecules/CornerMain";
import CommonMainContainer from "../atoms/CommonMainContainer";
import useCorner from "../../hooks/useCorner";
import usePage from "../../hooks/usePage";
import { useNavigate } from "react-router-dom";

const CornerPage = () => {
  const { pageIds, cornerId } = useCorner();
  const [isPageCompleted, setIsPageCompleted] = useState(false);
  const { page: currentPage } = usePage();
  const navigate = useNavigate();

  const pageIndex = pageIds.findIndex((id) => id === currentPage?.id);

  const handleClickNext = () => {
    navigate(`/corner/${cornerId}/page/${pageIds[pageIndex + 1]}`);
    setIsPageCompleted(false);
  };

  const handleClickPrev = () => {
    navigate(`/corner/${cornerId}/page/${pageIds[pageIndex - 1]}`);
    setIsPageCompleted(false);
  };

  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };

  return (
    <CommonPageLayout>
      <Header />
      <CommonMainContainer>
        {currentPage && <CornerMain page={currentPage} setPageCompleted={setPageCompleted} />}
      </CommonMainContainer>
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
