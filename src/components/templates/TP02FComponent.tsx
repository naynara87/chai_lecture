import React, { useEffect, useMemo } from "react";
import { TP02F } from "../../types/pageTemplate";
import { VideoContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import VideoContentComponent from "../contents/VideoContentComponent";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import TitleContent from "../molecules/TitleContent";
import { css } from "@emotion/react";

const customVideoCss = css`
  /* width: 100%;
  max-width: 550px;
  height: 100%; */
  margin: 0 auto;
`;

interface TP02FComponentProps extends TemplateProps {}

const TP02FComponent = ({ setPageCompleted, page, showHeader = true }: TP02FComponentProps) => {
  const thisPage = page as TP02F;

  useEffect(() => {
    console.log(thisPage.template.type);
    setPageCompleted();
  }, [setPageCompleted, thisPage.template.type]);

  const videoContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "video") as
      | VideoContent
      | undefined;
  }, [thisPage.template.contents]);

  const videoUrlString = useMemo(() => {
    const videoUrlData = videoContentData?.data.find((content) => content.src);
    return videoUrlData;
  }, [videoContentData]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP02Layout>
        <VideoContentComponent videoUrl={videoUrlString?.src ?? ""} customCss={customVideoCss} />
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP02FComponent;
