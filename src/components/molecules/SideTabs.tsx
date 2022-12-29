import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";
import useContentMapper from "../../hooks/useContentMapper";
import { ApproveTabsData } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

interface SideTabStylesProps {
  isOpen: boolean;
}

const SideTabStyles = styled.div<SideTabStylesProps>`
  opacity: ${(props) => (props.isOpen ? "100%" : "0%")};
  width: ${(props) => (props.isOpen ? "50%" : "0%")};
  transition: all 0.3s ease;
`;

interface SideTabMainContainerProps {
  open: boolean;
}
const SideTabMainContainer = styled.div<SideTabMainContainerProps>``;

const htmlCss = css`
  > div > h3 {
    margin-bottom: ${changePXtoVH(10)};
    font-weight: 600;
    font-size: ${changePXtoVW(30)};
  }

  > div > p {
    margin-bottom: ${changePXtoVH(8)};
    font-weight: 400;
    font-size: ${changePXtoVW(24)};
  }
`;

const SideTabContentStyles = styled.div``;

const audioCss = css`
  width: ${changePXtoVW(48)};
  height: ${changePXtoVW(48)};
  margin-bottom: ${changePXtoVH(10)};
`;

interface SideTabsProps {
  datas: ApproveTabsData[];
  currentIndex: number;
  openTabs: boolean;
}

const SideTabs = ({ datas, currentIndex, openTabs }: SideTabsProps) => {
  const { getContentComponent } = useContentMapper();

  const mainContents = useMemo(() => {
    return datas[currentIndex].contents.map((content, index) => {
      return (
        <SideTabContentStyles key={index}>
          {getContentComponent(content, index, htmlCss, audioCss)}
        </SideTabContentStyles>
      );
    });
  }, [currentIndex, datas, getContentComponent]);

  return (
    <SideTabStyles isOpen={openTabs}>
      {openTabs && <SideTabMainContainer open={openTabs}>{mainContents}</SideTabMainContainer>}
    </SideTabStyles>
  );
};

export default SideTabs;
