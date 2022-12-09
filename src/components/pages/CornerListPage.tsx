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
import { headerHeightNormal } from "../../constants/layout";
import { useRecoilState } from "recoil";
import { cornersState } from "../../state/corners";
import { useNavigate } from "react-router-dom";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import useCornerIconMapper from "../../hooks/useCornerIconMapper";
// import usePageList from "../../hooks/api/usePageList";

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
  width: ${changePXtoVW(200)};
  height: ${changePXtoVW(200)};
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid ${colorPalette.white};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  `;

const CornerListFooter = styled.footer`
  text-align: center;
  padding-bottom: ${changePXtoVH(80)};
`;

const cornerImageCss = css`
  width: 100%;
  height: 100%;
  filter: grayscale(1);
  object-fit: cover;
  transition: all 0.3s;
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
  background-color: ${colorPalette.confirmBtn};
  border-radius: ${changePXtoVW(40)};
  font-weight: 600;
  font-size: ${changePXtoVW(30)};
  transition: all 0.3s;
  margin-top: ${changePXtoVH(136)};
  cursor: pointer;
`;

const startTextCss = css`
  color: ${colorPalette.white};
`;

const CornerListLayout = styled.div`
  /* margin-top: ${headerHeightNormal}; */
  display: flex;
  flex-direction: column;
`;

const CornerListPage = () => {
  const { data: appData } = useQuery([QUERY_KEY.APP_DATA], getAppData);

  const [completedCorners, setCompletedCorners] = useRecoilState(cornersState);
  const [currentCorner, setCurrentCorner] = useState<Corner>();
  const [isModalCloseOpen, setIsModalCloseOpen] = useState(false);

  const { getCornerIcon } = useCornerIconMapper();

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
                      {
                      getCornerIcon(corner.title) ?
                      <ImageContentComponent
                        imageSrc={getCornerIcon(corner.title)}
                        imageAlt={corner.title}
                        filter={changeFilter(corner.id)}
                        customCss={cornerImageCss}
                        isZoom={false}
                      />
                      :
                      <ChaiSkeleton width={90} height={90} variant="circular" animation={false}/>
                    }

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
        isCornerPage={true}
      />
    </CornerListLayout>
  );
};

export default CornerListPage;
