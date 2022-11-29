import { css } from "@emotion/react";
import React, { useEffect, useMemo } from "react";
import { TP09A } from "../../types/pageTemplate";
import { BottomTabsContent, HtmlContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { changePXtoVW } from "../../utils/styles";
import BottomTabs from "../contents/BottomTabs";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP09Layout from "../Layouts/TP09Layout";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import TitleContent from "../molecules/TitleContent";

const htmlCss = css`
  font-size: ${changePXtoVW(24)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: ${changePXtoVW(500)};
`;

interface TP09AComponentProps extends TemplateProps {}

const TP09AComponent = ({ setPageCompleted, page, showHeader = true }: TP09AComponentProps) => {
  const thisPage = page as TP09A;

  useEffect(() => {
    console.log(thisPage.template.type);
    setPageCompleted();
  }, [setPageCompleted, thisPage.template.type]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  const bottomTabsContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "bottomTabs") as
      | BottomTabsContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP09Layout>
        <HtmlContentComponent html={htmlContentData?.data?.[0].text ?? ""} customCss={htmlCss} />
        <BottomTabs datas={bottomTabsContentData?.data ?? []} />
      </TP09Layout>
    </TemplateCommonLayout>
  );
};

export default TP09AComponent;
