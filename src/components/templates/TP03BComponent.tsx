import React, { useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { TP03B } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TitleContent from "../molecules/TitleContent";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import TextBoxes from "../molecules/TextBoxes";
import { HtmlContent, TextBoxesContent } from "../../types/templateContents";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP03Layout from "../Layouts/TP03Layout";

interface TP0BAComponentProps extends TemplateProps {}

const HtmlWrapper = styled("div")`
  line-height: 1.5;
  font-weight: 400;
  font-size: 26px;
  color: #666666;
  white-space: pre-line;
  text-align: center;

  @media all and (max-width: 1024px) {
    font-size: 2.5vw;
  }
`;

const TP03BComponent = ({ setPageCompleted, page }: TP0BAComponentProps) => {
  const thisPage = page as TP03B;
  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  const TextBoxesContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "textBoxes") as
      | TextBoxesContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={page.title} description={page.description} />
      <TP03Layout>
        <HtmlWrapper>
          <HtmlContentComponent html={htmlContentData?.data?.text ?? ""} />
        </HtmlWrapper>
        {TextBoxesContentData ? <TextBoxes datas={TextBoxesContentData.data} /> : <></>}
      </TP03Layout>
    </TemplateCommonLayout>
  );
};

export default TP03BComponent;
