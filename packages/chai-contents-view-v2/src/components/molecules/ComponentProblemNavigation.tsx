import React from "react";
import styled from "@emotion/styled";
import QuestionIconArrowLeft from "chai-ui-v2/dist/assets/images/icon/icon_arrow_left_question.svg";
import QuestionIconArrowRight from "chai-ui-v2/dist/assets/images/icon/icon_arrow_right_question.svg";
import { vh, vw } from "chai-ui-v2";

const NavigationWrapper = styled.div`
  position: absolute;
  top: 58%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 ${vw(100)};
  transform: translateY(-50%);
`;

const LeftNavigation = styled.div`
  width: ${vw(50)};
  height: ${vh(60)};
  padding: 0;
  appearance: none;
  outline: none;
  box-shadow: none;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  background-image: url(${QuestionIconArrowLeft});
`;
const RightNavigation = styled.div`
  width: ${vw(50)};
  height: ${vh(60)};
  padding: 0;
  appearance: none;
  outline: none;
  box-shadow: none;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  background-image: url(${QuestionIconArrowRight});
`;

interface ComponentProblemNavigationProps {
  handleClickLeftBtn: () => void;
  handleClickRightBtn: () => void;
}

const ComponentProblemNavigation = ({
  handleClickLeftBtn,
  handleClickRightBtn,
}: ComponentProblemNavigationProps) => {
  return (
    <NavigationWrapper>
      <LeftNavigation onClick={handleClickLeftBtn} />
      <RightNavigation onClick={handleClickRightBtn} />
    </NavigationWrapper>
  );
};

export default ComponentProblemNavigation;
