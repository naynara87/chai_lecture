import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import { TP02P } from "../../types/pageTemplate";
import { HtmlContent, SideTabsContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { changePXtoVH } from "../../utils/styles";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import SideTabs from "../molecules/SideTabs";
import SideTabsHeader from "../molecules/SideTabsHeader";
import TitleContent from "../molecules/TitleContent";

interface HtmlContainerProps {
  isSideTabOpen: boolean;
}

const sideTabOpenToHtmlCss = css`
  align-items: flex-start;
  width: 50%;
  text-align: left;
`;

const HtmlContainer = styled.div<HtmlContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease;

  > div > h1 {
    margin-bottom: ${changePXtoVH(24)};
  }

  > div > p {
    margin-bottom: ${changePXtoVH(24)};
  }

  ${(props) => props.isSideTabOpen && sideTabOpenToHtmlCss}
`;

const MainContainer = styled.div``;

const SideHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ContentsContainer = styled.div`
  display: flex;
  gap: 2%;
`;

interface TP02PComponentProps extends TemplateProps {}

const TP02PComponent = ({ setPageCompleted, page }: TP02PComponentProps) => {
  const thisPage = page as TP02P;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [openTabs, setOpenTabs] = useState(false);

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  const sideTabsContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "sideTabs") as
      | SideTabsContent
      | undefined;
  }, [thisPage.template.contents]);

  const mainContents = useMemo(() => {
    return htmlContentData?.data.map((html, index) => {
      return <HtmlContentComponent html={html.text} key={index} />;
    });
  }, [htmlContentData?.data]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP02Layout>
        <MainContainer>
          <SideHeaderContainer>
            <SideTabsHeader
              datas={sideTabsContentData?.data ?? []}
              currentIndex={currentIndex}
              openTabs={openTabs}
              setCurrentIndex={setCurrentIndex}
              setOpenTabs={setOpenTabs}
            />
          </SideHeaderContainer>
          <ContentsContainer>
            <HtmlContainer isSideTabOpen={openTabs}>{mainContents}</HtmlContainer>
            <SideTabs
              datas={sideTabsContentData?.data ?? []}
              currentIndex={currentIndex}
              openTabs={openTabs}
            />
          </ContentsContainer>
        </MainContainer>
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP02PComponent;
