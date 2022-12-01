import { css } from "@emotion/react";
import React, { useEffect, useMemo } from "react";
import { TP24B } from "../../types/pageTemplate";
import { ChooseMediaTextContent, ImagesContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { changePXtoVW } from "../../utils/styles";
import ImageContentComponent from "../contents/ImageContentComponent";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP24Layout from "../Layouts/TP24Layout";
import ChooseMediaText from "../molecules/ChooseMediaText";
import TitleContent from "../molecules/TitleContent";

const imageCss = css`
  width: ${changePXtoVW(724)};
  height: ${changePXtoVW(576)};
  object-fit: contain;
`;

interface TP24BComponentProps extends TemplateProps {}

const TP24BComponent = ({ setPageCompleted, page, showHeader = true }: TP24BComponentProps) => {
  const thisPage = page as TP24B;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const imagesContent = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "images") as
      | ImagesContent
      | undefined;
  }, [thisPage]);

  const chooseTextMediaContent = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "chooseMediaText") as
      | ChooseMediaTextContent
      | undefined;
  }, [thisPage]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP24Layout>
        <ImageContentComponent
          imageSrc={imagesContent?.data?.[0].src ?? ""}
          imageAlt={""}
          filter="none"
          customCss={imageCss}
        />
        {chooseTextMediaContent?.data ? (
          <ChooseMediaText datas={chooseTextMediaContent?.data?.[0]} />
        ) : (
          <></>
        )}
      </TP24Layout>
    </TemplateCommonLayout>
  );
};

export default TP24BComponent;
