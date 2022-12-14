import React, { useEffect, useMemo } from "react";
import { TP02F } from "../../types/pageTemplate";
import { VideoContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import VideoContentComponent from "../contents/VideoContentComponent";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import TitleContent from "../molecules/TitleContent";
import { css } from "@emotion/react";
import { changePXtoVW } from "../../utils/styles";

const customVideoCss = css`
  margin: 0 auto;
  /* height: ${changePXtoVW(600)}; */
`;

const layoutCss = css`
  height: 100%;
`;

interface TP02FComponentProps extends TemplateProps {}

const TP02FComponent = ({ setPageCompleted, page, showHeader = true }: TP02FComponentProps) => {
  const thisPage = page as TP02F;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);
  const videoContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "video") as
      | VideoContent
      | undefined;
  }, [thisPage.template.contents]);

  const videoUrlString = useMemo(() => {
    const videoUrlData = videoContentData?.data.find((content) => content.src);
    return videoUrlData;
  }, [videoContentData]);

  const videoTracks = useMemo(() => {
    const videoTracksData = videoContentData?.data.find((content) => content.tracks);
    return videoTracksData;
  }, [videoContentData]);

  return (
    <TemplateCommonLayout isOverFlowHidden={true}>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP02Layout customCss={layoutCss}>
        <VideoContentComponent
          videoId={thisPage.id}
          videoUrl={videoUrlString?.src ?? ""}
          customCss={customVideoCss}
          tracks={videoTracks?.tracks}
        />
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP02FComponent;
