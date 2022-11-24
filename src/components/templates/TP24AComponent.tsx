import { css } from "@emotion/react";
import React, { useEffect, useMemo } from "react";
import { TP24A } from "../../types/pageTemplate";
import { ImagesContent, SortWordsContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { changePXtoVW } from "../../utils/styles";
import ImageContentComponent from "../contents/ImageContentComponent";
import SortWords from "../contents/SortWords";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP24Layout from "../Layouts/TP24Layout";
import TitleContent from "../molecules/TitleContent";

const imageCss = css`
  width: ${changePXtoVW(724)};
  height: ${changePXtoVW(576)};
  object-fit: contain;
`;

interface TP24AComponentProps extends TemplateProps {}

const TP24AComponent = ({ setPageCompleted, page }: TP24AComponentProps) => {
  const thisPage = page as TP24A;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const imagesContent = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "images") as
      | ImagesContent
      | undefined;
  }, [thisPage]);

  const sortWordsContent = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "sortWords") as
      | SortWordsContent
      | undefined;
  }, [thisPage]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP24Layout>
        <ImageContentComponent
          imageSrc={imagesContent?.data?.[0].src ?? ""}
          imageAlt={""}
          filter="none"
          customCss={imageCss}
        />
        <SortWords datas={sortWordsContent?.data ?? []} />
      </TP24Layout>
    </TemplateCommonLayout>
  );
};

export default TP24AComponent;
