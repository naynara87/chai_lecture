import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import {
  Header,
  TitleContent,
  ButtonComponent,
  CommonMainContainer,
  ChaiSkeleton,
  colorPalette,
  changePXtoVH,
  changePXtoVW,
  ID,
  btnCss,
  useToast,
  getPageUrl,
} from "chai-ui";
import { css } from "@emotion/react";
import { ModalStart, ImageContentComponent, ModalConfirm as ModalContinue } from "chai-ui";
import useCornerListPage from "../../hooks/useCornerListPage";
import { useNavigate } from "react-router-dom";
import useCornerIconMapper from "../../hooks/useCornerIconMapper";
import { useRecoilState } from "recoil";
import { isAppStartedState } from "../../state/isAppStartedState";
// import usePageList from "../../hooks/api/usePageList";
import "../../styles/scss/ui.scss";

const CornerListWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${changePXtoVH(80)} ${changePXtoVW(96)};
  max-width: ${changePXtoVW(792)};
  margin: 0 auto;
  padding-top: ${changePXtoVH(40)};
`;

const CornerImageWrapper = styled.div`
  overflow: hidden;
  width: ${changePXtoVW(200)};
  height: ${changePXtoVW(200)};
  border: 8px solid ${colorPalette.white};
  border-radius: 50%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
`;

const CornerListFooter = styled.footer`
  padding-bottom: ${changePXtoVH(80)};
  text-align: center;
`;

const cornerImageCss = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
  filter: grayscale(1);
`;

const CornerList = styled.div`
  text-align: center;
`;

const CornerName = styled.span`
  display: flex;
  justify-content: center;
  margin-top: ${changePXtoVH(24)};
  font-weight: 600;
  font-size: ${changePXtoVW(30)};
`;

const startBtnCss = css`
  ${btnCss}

  min-width: ${changePXtoVW(278)};
  height: ${changePXtoVW(80)};
  margin-top: ${changePXtoVH(136)};
  border-radius: ${changePXtoVW(40)};
  background-color: ${colorPalette.confirmBtn};
  font-weight: 600;
  font-size: ${changePXtoVW(30)};
  transition: all 0.3s;
  cursor: pointer;
`;

const startTextCss = css`
  color: ${colorPalette.white};
`;

const CornerListLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const CornerListPage = () => {
  const [isModalCloseOpen, setIsModalCloseOpen] = useState(false);
  const [isContinueModalOpen, setIsContinueModalOpen] = useState(false);
  const [isAppStarted, setIsAppStarted] = useRecoilState(isAppStartedState);

  const { getCornerIcon } = useCornerIconMapper();

  const navigate = useNavigate();
  const { addToast } = useToast();

  const { currentCorner, appMetaData, corners, continueLastLearningData } = useCornerListPage();

  const changeFilter = useCallback(
    (cornerId: ID) => {
      if (currentCorner?.id === cornerId) {
        return "none";
      } else {
        return "grayscale(1)";
      }
    },
    [currentCorner],
  );

  const modalOpen = () => {
    setIsModalCloseOpen(true);
  };

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

  useEffect(() => {
    if (continueLastLearningData?.isContinue && !isAppStarted && continueLastLearningData?.pageId) {
      setIsContinueModalOpen(true);
    }
  }, [continueLastLearningData, isAppStarted]);

  const startApp = useCallback(() => setIsAppStarted(true), [setIsAppStarted]);

  const handleClickNotContinue = () => {
    startApp();
    setIsContinueModalOpen(false);
  };

  const handleClickContinue = () => {
    startApp();
    if (continueLastLearningData?.pageId && continueLastLearningData?.cornerId) {
      const url = getPageUrl(
        continueLastLearningData.courseId,
        continueLastLearningData.lessonId,
        continueLastLearningData.cornerId,
        continueLastLearningData.pageId,
      );
      navigate(url);
    } else {
      addToast("이어보기 데이터가 없습니다.", "warning");
    }
  };

  return (
    <CornerListLayout>
      <Header currentCorner={currentCorner} appMetaData={appMetaData} />
      <CommonMainContainer>
        {currentCorner ? (
          // NOTE: 앱 대제목과 소제목이 하드코딩되어 있는데 필요시 appMetaData로 같이 받아야 한다.
          <TitleContent
            title="학습 리스트"
            description="중국과 중국어에 대해 학습을 통해 알아봅시다."
          />
        ) : (
          <TitleContent title={""} description={""} loading />
        )}
        <CornerListWrapper>
          {currentCorner
            ? corners.map((corner) => {
                return (
                  <CornerList key={corner.id}>
                    <CornerImageWrapper>
                      {getCornerIcon(corner.title) ? (
                        <ImageContentComponent
                          imageSrc={getCornerIcon(corner.title)}
                          imageAlt={corner.title}
                          filter={changeFilter(corner.id)}
                          customCss={cornerImageCss}
                          isZoom={false}
                        />
                      ) : (
                        <ChaiSkeleton
                          width={changePXtoVW(200)}
                          height={changePXtoVW(200)}
                          variant="circular"
                          animation={false}
                        />
                      )}
                    </CornerImageWrapper>
                    <CornerName>{corner.title}</CornerName>
                  </CornerList>
                );
              })
            : Array(6)
                .fill(0)
                .map((_, index) => (
                  <CornerList key={index}>
                    <CornerImageWrapper>
                      <ChaiSkeleton
                        width={changePXtoVW(200)}
                        height={changePXtoVW(200)}
                        variant="circular"
                      />
                    </CornerImageWrapper>
                    <CornerName>
                      <ChaiSkeleton width={50} height={19} variant="rounded" />
                    </CornerName>
                  </CornerList>
                ))}
        </CornerListWrapper>
        <CornerListFooter>
          {currentCorner && (
            <ButtonComponent
              text="시작하기"
              handleClickButton={modalOpen}
              customBtnCss={startBtnCss}
              customTextCss={startTextCss}
            />
          )}
        </CornerListFooter>
      </CommonMainContainer>
      {currentCorner && (
        <ModalStart
          introduction={currentCorner.introduction}
          isModalOpen={isModalCloseOpen}
          handleClickStart={handleClickStart}
          setIsModalOpen={setIsModalCloseOpen}
        />
      )}
      <ModalContinue
        isModalOpen={isContinueModalOpen}
        setIsModalOpen={setIsContinueModalOpen}
        handleClickLeftButton={handleClickNotContinue}
        handleClickRightButton={handleClickContinue}
        title="이어하기"
        description={"지난 학습 이력이 있습니다.\n이어서 학습하시겠습니까?"}
      />
    </CornerListLayout>
  );
};

export default CornerListPage;
