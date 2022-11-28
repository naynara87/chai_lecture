import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { footerHeightNormal } from "../../constants/layout";
import { colorPalette } from "../../styles/colorPalette";
import { ID } from "../../types/appData";
import { TP15A } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import { changePXtoVW } from "../../utils/styles";
import { getPageUrl } from "../../utils/url";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP15Layout from "../Layouts/TP15Layout";
import TabButtons from "../molecules/TabButtons";
import TabMain from "../molecules/TabMain";
import TitleContent from "../molecules/TitleContent";

interface HeaderContainerProps {
  isScroll: boolean;
}

const HeaderContainer = styled.div<HeaderContainerProps>`
  padding: calc(${footerHeightNormal} + ${changePXtoVW(50)}) 0 6px;
  box-shadow: ${(props) => props.isScroll && `0 4px 20px -2px hsl(0deg 0% 81% / 50%)`};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${colorPalette.backgroundWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PageContainer = styled.div`
  /* height: auto; */
  margin-bottom: ${changePXtoVW(300)};
`;
interface TabIndexes {
  index: number;
  id: ID;
}

interface PageHeader {
  title: string;
  description: string;
}

interface TP15AComponentProps extends TemplateProps {}

const TP15AComponent = ({ setPageCompleted, page }: TP15AComponentProps) => {
  const thisPage = page as TP15A;
  const [tabIdxToId, setTabIdxToId] = useState<TabIndexes[]>([]);
  const [pageHeader, setPageHeader] = useState<PageHeader>({ title: "", description: "" });
  const navigate = useNavigate();
  const { courseId, lessonId, cornerId, pageId } = useParams();
  const LayoutRef = useRef<HTMLDivElement>(null);
  const [isScroll, setIsScroll] = useState(false);
  const currentPageIdx = thisPage.template.tabs.findIndex((tab) => {
    return tab.active === true;
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pageId]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { scrollTop } = document.documentElement;
      if (scrollTop > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const tabIdSetting = useCallback(() => {
    if (!thisPage.id) {
      return;
    }
    setPageHeader({
      title: thisPage.template.tabs[currentPageIdx].tabPages?.[0].title ?? "",
      description: thisPage.template.tabs[currentPageIdx].tabPages?.[0].description ?? "",
    });

    thisPage.template.tabs.forEach((tab, index) => {
      if (currentPageIdx > index) {
        setTabIdxToId((prev) => [
          ...prev,
          { index: index, id: +thisPage.id! - (currentPageIdx - index) },
        ]);
      } else {
        setTabIdxToId((prev) => [
          ...prev,
          { index: index, id: +thisPage.id! + (index - currentPageIdx) },
        ]);
      }
    });
  }, [thisPage, currentPageIdx]);

  const currentTab = useMemo(() => {
    return thisPage.template.tabs.find((tab) => {
      return tab.active === true;
    });
  }, [thisPage]);

  useEffect(() => {
    if (!LayoutRef.current?.children) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries, observe) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const targetIndex = parseInt(entries[0].target.classList[1].slice(-1));
            setPageHeader({
              title: thisPage.template.tabs[currentPageIdx].tabPages?.[targetIndex].title ?? "",
              description:
                thisPage.template.tabs[currentPageIdx].tabPages?.[targetIndex].description ?? "",
            });
          }
        });
      },
      { threshold: 0.5 },
    );
    for (let i = 0; i < LayoutRef.current?.children.length; i++) {
      const element = LayoutRef.current?.children[i];
      element.classList.add("observe" + i);
      observer.observe(element);
    }
  }, [currentPageIdx, thisPage]);

  useEffect(() => {
    setPageCompleted();
    tabIdSetting();
  }, [setPageCompleted, tabIdSetting]);

  const handleClickTab = (pageId?: ID) => {
    if (courseId && lessonId && cornerId && pageId) {
      navigate(getPageUrl(courseId, lessonId, cornerId, pageId));
    }
  };

  const renderTemplate = useMemo(() => {
    if (!currentTab?.tabPages) {
      return <></>;
    }

    return currentTab?.tabPages.map((tabPage, index) => {
      return (
        <PageContainer key={index}>
          <TabMain setPageCompleted={setPageCompleted} page={tabPage} />
        </PageContainer>
      );
    });
  }, [currentTab, setPageCompleted]);

  return (
    <TemplateCommonLayout>
      <HeaderContainer isScroll={isScroll}>
        <TitleContent title={pageHeader.title} description={pageHeader.description} />
        <TabButtons
          tabs={thisPage.template.tabs ?? []}
          tabIds={tabIdxToId}
          handleClickTab={handleClickTab}
        />
      </HeaderContainer>
      <TP15Layout LayoutRef={LayoutRef}>{renderTemplate}</TP15Layout>
    </TemplateCommonLayout>
  );
};

export default TP15AComponent;
