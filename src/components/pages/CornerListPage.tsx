import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getAppData } from "../../data/tempApi";
import { AppData, Corner, ID } from "../../types/appData";
import ImageContentComponent from "../atoms/ImageContentComponent";
import Header from "../molecules/Header";
import { useSetRecoilState } from "recoil";
import { courseAndLessonTitlesState } from "../../states/courseAndLessonTitlesState";
import { css } from "@emotion/react";
import { colorPalette } from "../../styles/colorPalette";
import TitleContent from "../molecules/TitleContent";
import ButtonComponent from "../atoms/ButtonComponent";
import { btnCss } from "../../styles/button";

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
  margin: 43px auto 0;

  &.layout7 {
    max-width: 581px;
  }
  @media all and (max-width: 1024px) {
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
  @media all and (max-width: 1024px) {
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
  display: block;
  margin-top: 13px;
  font-weight: 600;
  font-size: 16px;
  @media all and (max-width: 1024px) {
    margin-top: 1.25vw;
    font-size: 1.5625vw;
  }
`;

const startBtnCss = css`
  ${btnCss}
  min-width: 149px;
  height: 43px;
  background-color: #6070cf;
  border-radius: 26px;
  font-weight: 600;
  font-size: 13px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin-top: 53px;
  cursor: pointer;

  @media all and (max-width: 1024px) {
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
  height: 100vh;
`;

const CornerListPage = () => {
  const [appData, setAppData] = useState<AppData>();
  const setCourseAndLessonTitles = useSetRecoilState(courseAndLessonTitlesState);
  const fetchAppData = useCallback(async () => {
    const appData = await getAppData();
    setCourseAndLessonTitles({
      courseTitle: appData.course.title,
      lessonTitle: appData.lesson.title,
    });
    setAppData(appData);
  }, [setCourseAndLessonTitles]);

  useEffect(() => {
    fetchAppData();
  }, [fetchAppData]);

  const [currentCorner, setCurrentCorner] = useState<Corner>();

  useEffect(() => {
    if (!appData) return;
    const { corners } = appData;
    const currentCorner = corners.find((corner) => !corner.isCompleted);
    setCurrentCorner(currentCorner);
  }, [appData]);

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

  return (
    <CornerListLayout>
      <>
        <Header />
        {appData ? (
          <TitleContent title={appData.title} description={appData.description} />
        ) : (
          <TitleContent title={""} description={""} loading />
        )}
        <>
          <CornerListWrapper>
            {appData ? (
              appData.corners.map((corner) => (
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
              ))
            ) : (
              <div>"코너 로딩중"</div>
            )}
          </CornerListWrapper>
          <CornerListFooter>
            {currentCorner && appData && (
              <ButtonComponent<{ appData: AppData; currentCorner: Corner }>
                text="시작하기"
                customBtnCss={startBtnCss}
                customTextCss={startTextCss}
                linkUrl={`/corner/${currentCorner?.id}`}
                linkState={{ appData, currentCorner }}
              />
            )}
          </CornerListFooter>
        </>
      </>
    </CornerListLayout>
  );
};

export default CornerListPage;
