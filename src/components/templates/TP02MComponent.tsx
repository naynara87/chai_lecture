import { css } from "@emotion/react";
import React, { useEffect, useMemo } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { TP02M } from "../../types/pageTemplate";
import { HtmlContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import TitleContent from "../molecules/TitleContent";

const htmlCss = css`
  font-weight: 500;
  line-height: ${changePXtoVH(72)};
  font-size: ${changePXtoVW(48)};
  text-align: center;
  color: ${colorPalette.descriptionText};
`;

interface TP02MComponentProps extends TemplateProps {}

const TP02MComponent = ({ setPageCompleted, page, showHeader = true }: TP02MComponentProps) => {
  const thisPage = page as TP02M;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP02Layout>
        <>
          {htmlContentData?.data.map((content, index) => {
            return <HtmlContentComponent html={content.text} key={index} customCss={htmlCss} />;
          })}
        </>
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP02MComponent;
