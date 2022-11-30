import React, { useCallback, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { BottomTabsData } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";
import useContentMapper from "../../hooks/useContentMapper";

interface BottomTabsWrapperProps {
  open: boolean;
}

const BottomTabsWrapper = styled.div<BottomTabsWrapperProps>`
  width: ${changePXtoVW(1680)};
  height: ${(props) => (props.open ? `${changePXtoVH(451)}` : `${changePXtoVH(160)}`)};
  position: fixed;
  bottom: ${(props) => (props.open ? "60px" : 0)};
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
`;

const TabHeaderContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 5%;
  transform: translateY(calc(-100%));
`;

interface TabHeaderProps {
  isFocus: boolean;
}
const TabHeader = styled.div<TabHeaderProps>`
  width: ${changePXtoVW(200)};
  height: ${changePXtoVW(64)};
  border-radius: 16px 16px 0 0;
  background-color: ${(props) =>
    props.isFocus ? colorPalette.bottomTabBorder : colorPalette.disableBottomTabHeader};
  color: ${(props) => (props.isFocus ? colorPalette.white : colorPalette.black)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

interface BottomTabMainContainerProps {
  open: boolean;
}

const BottomTabMainContainer = styled.div<BottomTabMainContainerProps>`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: ${colorPalette.backgroundWhite};
  border-radius: 40px 40px 0 0;
  border: 4px solid ${colorPalette.bottomTabBorder};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }

  & img {
    width: ${changePXtoVW(300)};
  }

  & * {
    transition: all 0.3s ease-in-out;
    opacity: ${(props) => !props.open && 0};
  }
`;

interface CloseButtonProps {
  open: boolean;
}

const CloseButton = styled.button<CloseButtonProps>`
  position: absolute;
  background-color: ${colorPalette.deepBlue};
  border-radius: 100%;
  padding: 15px;
  top: 0;
  right: 3%;
  transform: translateY(-50%);
  background-image: url("${process.env.PUBLIC_URL}/images/icon/icon_close.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  transition: all 0.3s ease-in-out;
  cursor: ${(props) => props.open && "pointer"};
  opacity: ${(props) => !props.open && 0};
`;

interface BottomTabsProps {
  datas: BottomTabsData[];
}

const BottomTabs = ({ datas }: BottomTabsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openTabs, setOpenTabs] = useState(false);

  const { getContentComponent } = useContentMapper();

  const handleClickTabHeader = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const tabHeaders = useMemo(() => {
    return datas.map((data, index) => {
      return (
        <TabHeader
          key={index}
          isFocus={index === currentIndex}
          onClick={() => {
            if (!openTabs) {
              setOpenTabs(true);
            } else if (openTabs && index === currentIndex) {
              setOpenTabs(false);
            }
            handleClickTabHeader(index);
          }}
        >
          {data.tabNames}
        </TabHeader>
      );
    });
  }, [currentIndex, datas, handleClickTabHeader, openTabs]);

  const mainContents = useMemo(() => {
    return datas[currentIndex].contents.map((content, index) => {
      return <div key={index}>{getContentComponent(content)}</div>;
    });
  }, [currentIndex, datas, getContentComponent]);

  const handleClickClose = () => {
    setOpenTabs(false);
  };

  return (
    <BottomTabsWrapper open={openTabs}>
      <TabHeaderContainer>{tabHeaders}</TabHeaderContainer>
      <BottomTabMainContainer open={openTabs}>{mainContents}</BottomTabMainContainer>
      <CloseButton open={openTabs} onClick={handleClickClose} />
    </BottomTabsWrapper>
  );
};

export default BottomTabs;
