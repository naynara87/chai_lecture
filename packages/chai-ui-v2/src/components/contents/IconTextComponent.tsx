import React from "react";
import { IconTextContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import icon_tip from "../../assets/images/icon/icon_tip.svg";

export interface IconTextComponentProps {
  contents: IconTextContentData;
}

const IconTextComponent = ({ contents }: IconTextComponentProps) => {
  return (
    <div className="icon-text-wrapper">
      <img src={icon_tip} alt="" />
      <HtmlContentComponent html={contents.data.text} />
    </div>
  );
};

export default IconTextComponent;
