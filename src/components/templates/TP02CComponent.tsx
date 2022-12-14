import { css } from "@emotion/react";
import React, { useEffect, useMemo } from "react";
import { TP02C } from "../../types/pageTemplate";
import { ImagesContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import ImageContentComponent from "../contents/ImageContentComponent";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import TitleContent from "../molecules/TitleContent";

const imageCustomCss = css`
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
`;

interface TP02CComponentProps extends TemplateProps {}

const TP02CComponent = ({ setPageCompleted, page, showHeader = true }: TP02CComponentProps) => {
  const thisPage = page as TP02C;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const imagesContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "images") as
      | ImagesContent
      | undefined;
  }, [thisPage.template.contents]);

  const imageSrc = useMemo(() => {
    if (!imagesContentData) {
      return;
    }
    const [imageData] = imagesContentData.data;
    return imageData?.src;
  }, [imagesContentData]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP02Layout>
        <ImageContentComponent
          imageSrc={imageSrc ?? ""}
          imageAlt={thisPage.title}
          filter="none"
          customCss={imageCustomCss}
        />
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP02CComponent;
