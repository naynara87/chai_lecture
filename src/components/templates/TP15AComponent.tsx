import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import { TP15A } from "../../types/pageTemplate";
import { HtmlContent, ImagesContent } from "../../types/templateContents";
import { TabWithId, TemplateProps } from "../../types/templates";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP15Layout from "../Layouts/TP15Layout";
import ImagesContentComponent from "../molecules/ImagesContentComponent";
import TabButtons from "../molecules/TabButtons";
import TipComponent from "../molecules/TipComponent";
import TitleContent from "../molecules/TitleContent";

const HtmlContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3.3vw;
`;

interface TP15AComponentProps extends TemplateProps {}

const TP15AComponent = ({ setPageCompleted, page }: TP15AComponentProps) => {
  const thisPage = page as TP15A;
  const [tabIndex, setTabIndex] = useState<number>(0);

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const tabs = useMemo(() => {
    return thisPage.template.tabs.map((tab, index) => ({
      index,
      ...tab,
    }));
  }, [thisPage.template.tabs]);
  const handleClickTab = (tabIndex: number) => {
    setTabIndex(tabIndex);
  };

  const currentTab = useMemo(() => {
    return tabs[tabIndex];
  }, [tabs, tabIndex]);

  const imagesContent = useMemo(() => {
    return currentTab.contents.find((content) => content.type === "images");
  }, [currentTab.contents]);

  const htmlContent = useMemo(() => {
    return currentTab.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [currentTab.contents]);

  const htmlTipString = useMemo(() => {
    const htmlTipData = htmlContent?.data.find((content) => content.kind === "tip");
    return htmlTipData?.text;
  }, [htmlContent]);

  const htmlDescriptionString = useMemo(() => {
    const htmlDescriptionData = htmlContent?.data.find((content) => content.kind !== "tip");
    return htmlDescriptionData?.text;
  }, [htmlContent]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={page.title} description={page.description} />
      <TP15Layout>
        <TabButtons
          tabs={tabs as TabWithId[]}
          currentTab={currentTab as TabWithId}
          handleClickTab={handleClickTab}
        />
        <ImagesContentComponent imagesContent={imagesContent as ImagesContent} />
        <HtmlContainer>
          {htmlDescriptionString && <HtmlContentComponent html={htmlDescriptionString} />}
          {htmlTipString && <TipComponent html={htmlTipString} />}
        </HtmlContainer>
      </TP15Layout>
    </TemplateCommonLayout>
  );
};

export default TP15AComponent;
