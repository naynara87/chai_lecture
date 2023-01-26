import React, { useCallback, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { ApproveTabsData } from "../../types/templateContents";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";
import useContentMapper from "../../hooks/useContentMapper";
import { footerHeightNormal } from "../../constants/layout";

interface BottomTabsWrapperProps {
  open: boolean;
}

const BottomTabsWrapper = styled.div<BottomTabsWrapperProps>`
  position: fixed;
  top: auto;
  bottom: ${(props) => (props.open ? `${footerHeightNormal}` : 0)};
  left: 50%;
  width: ${changePXtoVW(1680)};
  height: ${(props) => (props.open ? `${changePXtoVH(451)}` : `${changePXtoVH(160)}`)};
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
`;

const TabHeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 5%;
  display: flex;
  transform: translateY(calc(-100%));
`;

interface TabHeaderProps {
  isFocus: boolean;
}
const TabHeader = styled.div<TabHeaderProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${changePXtoVW(200)};
  height: ${changePXtoVW(64)};
  border-radius: 16px 16px 0 0;
  background-color: ${(props) =>
    props.isFocus ? colorPalette.bottomTabBorder : colorPalette.disableBottomTabHeader};
  font-weight: bold;
  font-size: ${changePXtoVW(24)};
  color: ${(props) => (props.isFocus ? colorPalette.white : colorPalette.black)};
  cursor: pointer;
`;

interface BottomTabMainContainerProps {
  open: boolean;
}

const BottomTabMainContainer = styled.div<BottomTabMainContainerProps>`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding: ${changePXtoVH(25)} ${changePXtoVW(80)} ${changePXtoVH(50)};
  border: 4px solid ${colorPalette.bottomTabBorder};
  border-bottom: none;
  border-radius: ${changePXtoVW(40)} ${changePXtoVW(40)} 0 0;
  background-color: ${colorPalette.backgroundWhite};
  text-align: left;

  &::-webkit-scrollbar {
    display: none;
  }

  & img {
    width: ${changePXtoVW(300)};
  }

  > div {
    margin-top: ${changePXtoVH(24)};

    h3 {
      font-size: ${changePXtoVW(30)};
      line-height: 1.6;

      &.c2 {
        font-weight: 400;
        font-size: ${changePXtoVW(48)};
      }
    }

    p {
      margin-top: ${changePXtoVH(4)};
      font-size: ${changePXtoVW(24)};
      line-height: 1.4;
    }
  }

  & * {
    opacity: ${(props) => !props.open && 0};
    transition: all 0.3s ease-in-out;
  }
`;

interface CloseButtonProps {
  open: boolean;
}

const CloseButton = styled.button<CloseButtonProps>`
  opacity: ${(props) => !props.open && 0};
  position: absolute;
  top: 0;
  left: auto;
  right: ${changePXtoVW(24)};
  width: ${changePXtoVW(56)};
  height: ${changePXtoVW(56)};
  border-radius: 100%;
  background-color: ${colorPalette.deepBlue};
  background-image: url("${process.env.REACT_APP_BASE_URL}/images/icon/icon_close.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  transform: translateY(calc(-100% - 8px));
  transition: all 0.3s ease-in-out;
  cursor: ${(props) => props.open && "pointer"};
`;

interface BottomTabsProps {
  datas: ApproveTabsData[];
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
      return <div key={index}>{getContentComponent(content, index)}</div>;
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
