import React, { useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { TP03A } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import ListenWordContent from "../molecules/ListenWordContent";
import TitleContent from "../molecules/TitleContent";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP03Layout from "../Layouts/TP03Layout";
import { HtmlContent, ListenWordsContent } from "../../types/templateContents";
import { colorPalette } from "../../styles/colorPalette";

interface TP03AComponentProps extends TemplateProps {}

const HtmlWrapper = styled("div")`
  line-height: 1.5;
  font-weight: 400;
  font-size: 26px;
  color: ${colorPalette.descriptionText};
  white-space: pre-line;
  text-align: center;

  @media all and (max-width: 1024px) {
    font-size: 2.5vw;
  }
`;

const TP03AComponent = ({ setPageCompleted, page }: TP03AComponentProps) => {
  const thisPage = page as TP03A;
  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  const htmlString = useMemo(() => {
    if (!htmlContentData) {
      return;
    }
    const [htmlData] = htmlContentData.data;
    return htmlData?.text;
  }, [htmlContentData]);

  const listenWordsContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "listenWords") as
      | ListenWordsContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={page.title} description={page.description} />
      <TP03Layout>
        <HtmlWrapper>
          <HtmlContentComponent html={htmlString ?? ""} />
        </HtmlWrapper>
        {listenWordsContentData ? <ListenWordContent datas={listenWordsContentData.data} /> : <></>}
      </TP03Layout>
    </TemplateCommonLayout>
  );
};

export default TP03AComponent;
