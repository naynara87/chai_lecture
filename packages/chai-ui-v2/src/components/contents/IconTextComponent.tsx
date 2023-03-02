import styled from "@emotion/styled";
import React from "react";
import { IconTextContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import icon_tip from "../../images/icon/icon_tip.svg";
import { vw } from "../../styles";

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: ${vw(40)};
    height: ${vw(40)};
    margin-right: ${vw(14)};
  }
`;

interface IconTextComponentProps {
  contents: IconTextContentData;
}

const IconTextComponent = ({ contents }: IconTextComponentProps) => {
  return (
    <IconTextWrapper>
      <img src={icon_tip} alt="" />
      <HtmlContentComponent html={contents.data.text} />
    </IconTextWrapper>
  );
};

export default IconTextComponent;
