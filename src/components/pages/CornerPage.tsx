import React, { useEffect, useState } from "react";
import CommonPageLayout from "../Layouts/CommonPageLayout";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import CornerMain from "../molecules/CornerMain";
import CommonMainContainer from "../atoms/CommonMainContainer";
import useCorner from "../../hooks/useCorner";
import usePage from "../../hooks/usePage";
import { useNavigate } from "react-router-dom";
import { getPageUrl } from "../../utils/url";
import CornerSignPost from "../atoms/CornerSignPost";
import { getCorner } from "../../data/tempApi";

const CornerPage = () => {
  const { pageIds, cornerId } = useCorner();
  const [isPageCompleted, setIsPageCompleted] = useState(false);
  const [cornerTitle, setCornerTitle] = useState("");
  const { page: currentPage } = usePage();
  const navigate = useNavigate();

  const pageIndex = pageIds.findIndex((id) => id === currentPage?.id);
  useEffect(() => {
    if (!cornerId) {
      return;
    }
    const getCurrentCorner = async () => {
      const currentCorner = await getCorner(cornerId);
      setCornerTitle(currentCorner?.title ?? "");
    };
    getCurrentCorner();
  }, [cornerId]);
  const handleClickNext = () => {
    if (cornerId) {
      navigate(getPageUrl(cornerId, pageIds[pageIndex + 1]));
    }
    setIsPageCompleted(false);
  };

  const handleClickPrev = () => {
    if (cornerId) {
      navigate(getPageUrl(cornerId, pageIds[pageIndex - 1]));
    }
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
      <CornerSignPost cornerName={cornerTitle} />
    </CommonPageLayout>
  );
};

export default CornerPage;
