import React, { useMemo, useState } from "react";
import styled from "@emotion/styled";
import Header from "../molecules/Header";
import useCornerListPage from "../../hooks/useCornerListPage";
import { headerHeightNormal } from "../../constants/layout";
import ModalStart from "../modal/ModalStart";
import { getPageUrl } from "../../utils/url";
import { useNavigate } from "react-router-dom";
// import usePageList from "../../hooks/api/usePageList";

const CornerListLayout = styled.div`
  /* margin-top: ${headerHeightNormal}; */
  display: flex;
  flex-direction: column;
`;

const CornerListPageToQuiz = () => {
  const [isModalCloseOpen, setIsModalCloseOpen] = useState(true);

  const { currentCorner, appMetaData } = useCornerListPage();

  const navigate = useNavigate();

  const pageIdMemo = useMemo(() => {
    return currentCorner?.pages?.[0];
  }, [currentCorner]);

  const handleClickStart = () => {
    if (!currentCorner) return;
    if (!appMetaData) return;

    const url = getPageUrl(
      appMetaData.courseId,
      appMetaData.lessonId,
      currentCorner.id,
      pageIdMemo!,
    );
    navigate(url);
  };

  return (
    <CornerListLayout>
      <Header currentCorner={currentCorner} appMetaData={appMetaData} />
      {currentCorner && (
        <ModalStart
          introduction={currentCorner.introduction}
          isModalOpen={isModalCloseOpen}
          handleClickStart={handleClickStart}
          setIsModalOpen={() => {
            setIsModalCloseOpen(true);
          }}
        />
      )}
    </CornerListLayout>
  );
};

export default CornerListPageToQuiz;
