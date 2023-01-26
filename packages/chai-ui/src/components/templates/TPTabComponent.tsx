import styled from "@emotion/styled";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { headerHeightNormal } from "../../constants/layout";
import { colorPalette } from "../../styles/colorPalette";
import { ID, Page } from "../../types/appData";
import { TPTab } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import { changePXtoVW } from "../../utils/styles";
import { getPageUrl } from "../../utils/url";
import TemplateTabLayout from "../Layouts/TemplateTabLayout";
import TPTabLayout from "../Layouts/TPTabLayout";
import TabButtons from "../molecules/TabButtons";
import TabMain from "../molecules/TabMain";
import TitleContent from "../molecules/TitleContent";

interface HeaderContainerProps {
  isScroll: boolean;
}

const HeaderTabContainer = styled.div`
  height: calc(${headerHeightNormal} + ${changePXtoVW(80)});
`;

const HeaderContainer = styled.div<HeaderContainerProps>`
  padding: calc(${headerHeightNormal} + ${changePXtoVW(80)}) 0 6px;
  box-shadow: ${(props) =>
    props.isScroll && `0 4px 20px -2px hsl(0deg 0% 81% / 50%)`};
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
  padding-top: ${changePXtoVW(116)};
  padding-bottom: ${changePXtoVW(50)};
`;
interface TabIndexes {
  index: number;
  id: ID;
}

interface PageHeader {
  title: string;
  description: string;
}

interface TPTabComponentProps extends TemplateProps {}

const TPTabComponent = ({ setPageCompleted, page }: TPTabComponentProps) => {
  const thisPage = page as TPTab;
  const [tabIdxToId, setTabIdxToId] = useState<TabIndexes[]>([]);
  const [pageHeader, setPageHeader] = useState<PageHeader>({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const { courseId, lessonId, cornerId, pageId } = useParams();
  const LayoutRef = useRef<HTMLDivElement>(null);
  const [isScroll, setIsScroll] = useState(false);

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

  const currentPageIdx = useCallback(() => {
    return thisPage.template.tabs.findIndex((tab) => {
      return tab.active === true;
    });
  }, [thisPage]);

  const tabIdSetting = useCallback(() => {
    if (!thisPage.id) {
      return;
    }

    setPageHeader({
      title: thisPage.template.tabs[currentPageIdx()].tabPages?.[0].title ?? "",
      description:
        thisPage.template.tabs[currentPageIdx()].tabPages?.[0].description ??
        "",
    });

    thisPage.template.tabs.forEach((_, index) => {
      if (tabIdxToId.length > thisPage.template.tabs.length) {
        return;
      }
      if (currentPageIdx() > index) {
        setTabIdxToId((prev) => [
          ...prev,
          { index: index, id: +thisPage.id! - (currentPageIdx() - index) },
        ]);
      } else {
        setTabIdxToId((prev) => [
          ...prev,
          { index: index, id: +thisPage.id! + (index - currentPageIdx()) },
        ]);
      }
    });
  }, [thisPage, tabIdxToId.length, currentPageIdx]);

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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetIndex = parseInt(entry.target.classList[1].slice(-1));
            setPageHeader({
              title:
                thisPage.template.tabs[currentPageIdx()].tabPages?.[targetIndex]
                  .title ?? "",
              description:
                thisPage.template.tabs[currentPageIdx()].tabPages?.[targetIndex]
                  .description ?? "",
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    for (let i = 0; i < LayoutRef.current?.children.length; i++) {
      const element = LayoutRef.current?.children[i];
      element.classList.add("observe" + i);
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [thisPage, currentPageIdx]);

  useEffect(() => {
    setPageCompleted();
    tabIdSetting();
    return () => {
      setTabIdxToId([]);
    };
  }, [setPageCompleted, tabIdSetting]);

  const handleClickTab = useCallback(
    (pageId?: ID) => {
      if (courseId && lessonId && cornerId && pageId) {
        navigate(getPageUrl(courseId, lessonId, cornerId, pageId));
      }
    },
    [cornerId, lessonId, courseId, navigate]
  );

  const renderTemplate = useMemo(() => {
    if (!currentTab?.tabPages) {
      return <></>;
    }

    return currentTab?.tabPages.map((tabPage, index) => {
      const page: Page = {
        id: `${thisPage.id}_${index}`,
        ...tabPage,
      } as Page;
      return (
        <PageContainer key={index}>
          <TabMain setPageCompleted={setPageCompleted} page={page} />
        </PageContainer>
      );
    });
  }, [currentTab, setPageCompleted, thisPage.id]);

  return (
    <TemplateTabLayout>
      <HeaderTabContainer>
        <HeaderContainer isScroll={isScroll}>
          <TitleContent
            title={pageHeader.title}
            description={pageHeader.description}
            isTab={true}
          />
          <TabButtons
            tabs={thisPage.template.tabs ?? []}
            tabIds={tabIdxToId}
            handleClickTab={handleClickTab}
          />
        </HeaderContainer>
      </HeaderTabContainer>
      <TPTabLayout LayoutRef={LayoutRef}>{renderTemplate}</TPTabLayout>
    </TemplateTabLayout>
  );
};

export default TPTabComponent;
