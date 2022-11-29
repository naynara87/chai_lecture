import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getAppData } from "../../data/tempApi";
import { Corner, ID } from "../../types/appData";
import ImageContentComponent from "../contents/ImageContentComponent";
import Header from "../molecules/Header";
import { css } from "@emotion/react";
import { colorPalette } from "../../styles/colorPalette";
import TitleContent from "../molecules/TitleContent";
import ButtonComponent from "../atoms/ButtonComponent";
import { btnCss } from "../../styles/button";
import CommonMainContainer from "../atoms/CommonMainContainer";
import ChaiSkeleton from "../atoms/ChaiSkeleton";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants/queryKey";
import ModalStart from "../modal/ModalStart";
import { getPageUrl } from "../../utils/url";
import { breakPoints, headerHeightNormal } from "../../constants/layout";
import { useRecoilState } from "recoil";
import { cornersState } from "../../state/corners";
import { useNavigate } from "react-router-dom";
// import usePageList from "../../hooks/api/usePageList";

const CornerListWrapper = styled.main`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 43px;
  max-width: 553px;
  margin: 0 auto;

  &.layout7 {
    max-width: 581px;
  }
  @media all and (max-width: ${breakPoints.tablet}) {
    gap: 4.1666666667vw;
    max-width: 54.6666666667vw;
    margin-top: 4.1666666667vw;
    &.layout7 {
      max-width: 56.6666666667vw;
    }
  }
`;

const CornerImageWrapper = styled.div`
  width: 106px;
  height: 106px;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid ${colorPalette.white};
  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  @media all and (max-width: ${breakPoints.tablet}) {
    width: 10.4166666667vw;
    height: 10.4166666667vw;
    border-width: 0.8333333333vw;
  }
`;

const CornerListFooter = styled.footer`
  text-align: center;
`;

const cornerImageCss = css`
  width: 100%;
  height: 100%;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  -o-object-fit: cover;
  object-fit: cover;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`;

const CornerList = styled.div`
  text-align: center;
`;

const CornerName = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 13px;
  font-weight: 600;
  font-size: 16px;
  @media all and (max-width: ${breakPoints.tablet}) {
    margin-top: 1.25vw;
    font-size: 1.5625vw;
  }
`;

const startBtnCss = css`
  ${btnCss}
  min-width: 149px;
  height: 43px;
  background-color: ${colorPalette.confirmBtn};
  border-radius: 26px;
  font-weight: 600;
  font-size: 13px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin-top: 53px;
  cursor: pointer;

  @media all and (max-width: ${breakPoints.tablet}) {
    min-width: 14.4791666667vw;
    height: 4.1666666667vw;
    border-radius: 2.5vw;
    font-size: 1.25vw;
    margin-top: 5.2083333333vw;
  }
`;

const startTextCss = css`
  color: ${colorPalette.white};
`;

const CornerListLayout = styled.div`
  /* height: 100vh; */
  margin-top: ${headerHeightNormal};
  display: flex;
  flex-direction: column;
`;

const CornerListPage = () => {
  const { data: appData } = useQuery([QUERY_KEY.APP_DATA], getAppData);

  const [completedCorners, setCompletedCorners] = useRecoilState(cornersState);
  const [currentCorner, setCurrentCorner] = useState<Corner>();
  const [isModalCloseOpen, setIsModalCloseOpen] = useState(false);

  const navigate = useNavigate();

  // const {pageList} = usePageList(currentCorner?.id); // TODO: 실제 데이터 적용하기 => BBC-602

  // useEffect(() => {
  //   if (!appData) return;
  //   const { corners } = appData;
  //   const _currentCorner = corners.find((corner) => !corner.isCompleted);
  //   setCurrentCorner(_currentCorner);
  // }, [appData]);

  useEffect(() => {
    if (!appData) return;
    if (completedCorners.length === 0) {
      setCompletedCorners(
        appData.corners.map((corner) => ({ id: corner.id, isCompleted: corner.isCompleted })),
      );
    }
  }, [appData, setCompletedCorners, completedCorners]);

  useEffect(() => {
    if (!appData) return;
    const currentCompletedCorner = completedCorners.find((corner) => !corner.isCompleted);
    if (!currentCompletedCorner) return;
    const _currentCorner = appData.corners.find(
      (corner) => corner.id.toString() === currentCompletedCorner.id.toString(),
    );
    setCurrentCorner(_currentCorner);
  }, [appData, completedCorners]);

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

  const handleClickStart = () => {
    if (!currentCorner) return;
    if (!appData) return;
    const url = getPageUrl(
      appData.course.id,
      appData.lesson.id,
      currentCorner.id,
      currentCorner?.pages?.[0]?.id!,
      // pageList?.[0]?.id, // TODO: 실제 데이터 적용하기 => BBC-602
    );
    navigate(url);
  };

  return (
    <CornerListLayout>
      <Header />
      <CommonMainContainer>
        {appData ? (
          <TitleContent title={appData.title} description={appData.description} />
        ) : (
          <TitleContent title={""} description={""} loading />
        )}
        <CornerListWrapper>
          {appData
            ? appData.corners.map((corner) => {
                return (
                  <CornerList key={corner.id}>
                    <CornerImageWrapper>
                      <ImageContentComponent
                        imageSrc={corner.cornerIcon}
                        imageAlt={corner.title}
                        filter={changeFilter(corner.id)}
                        customCss={cornerImageCss}
                      />
                    </CornerImageWrapper>
                    <CornerName>{corner.title}</CornerName>
                  </CornerList>
                );
              })
            : Array(7)
                .fill(0)
                .map((_, index) => (
                  <CornerList key={index}>
                    <CornerImageWrapper>
                      <ChaiSkeleton width={90} height={90} variant="circular" />
                    </CornerImageWrapper>
                    <CornerName>
                      <ChaiSkeleton width={50} height={19} variant="rounded" />
                    </CornerName>
                  </CornerList>
                ))}
        </CornerListWrapper>
        <CornerListFooter>
          {currentCorner && appData && (
            <ButtonComponent
              text="시작하기"
              handleClickButton={modalOpen}
              customBtnCss={startBtnCss}
              customTextCss={startTextCss}
            />
          )}
        </CornerListFooter>
      </CommonMainContainer>
      <ModalStart
        title={currentCorner?.introduction.title ?? ""}
        description={currentCorner?.introduction.description ?? ""}
        isModalOpen={isModalCloseOpen}
        handleClickStart={handleClickStart}
        setIsModalOpen={setIsModalCloseOpen}
      />
    </CornerListLayout>
  );
};

export default CornerListPage;
