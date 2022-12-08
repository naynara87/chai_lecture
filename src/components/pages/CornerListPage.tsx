import React, { useCallback, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { ID } from "../../types/appData";
import ImageContentComponent from "../contents/ImageContentComponent";
import Header from "../molecules/Header";
import { css } from "@emotion/react";
import { colorPalette } from "../../styles/colorPalette";
import TitleContent from "../molecules/TitleContent";
import ButtonComponent from "../atoms/ButtonComponent";
import { btnCss } from "../../styles/button";
import CommonMainContainer from "../atoms/CommonMainContainer";
import ChaiSkeleton from "../atoms/ChaiSkeleton";
import ModalStart from "../modal/ModalStart";
import { getPageUrl } from "../../utils/url";
import useCornerListPage from "../../hooks/useCornerListPage";
import { headerHeightNormal } from "../../constants/layout";
import { useNavigate } from "react-router-dom";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import useCornerIconMapper from "../../hooks/useCornerIconMapper";
// import usePageList from "../../hooks/api/usePageList";

const CornerListWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${changePXtoVH(80)} ${changePXtoVW(80)};
  max-width: ${changePXtoVW(792)};
  margin: 0 auto;
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
  height: ${changePXtoVH(80)};
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
  const [isModalCloseOpen, setIsModalCloseOpen] = useState(false);

  const { getCornerIcon } = useCornerIconMapper();

  const navigate = useNavigate();

  const { currentCorner, appMetaData, corners } = useCornerListPage();

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
    // TODO: 페이지 이어하기는 정책 필요 나중에 구현
    return currentCorner?.pages?.[0];
  }, [currentCorner]);

  const handleClickStart = () => {
    if (!currentCorner) return;
    if (!appMetaData) return;

    // TODO: 진도체크 API 호출 결과 반영하여 이어하기 기능 추가하기 -> useEffect로 코너 간지 거치지 않고 바로 시작
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
                        <ChaiSkeleton width={90} height={90} variant="circular" animation={false} />
                      )}
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
    </CornerListLayout>
  );
};

export default CornerListPage;
