import React from "react";
import { IconTextContent } from "../../types/templateContents";
import IconText from "../molecules/IconText";

interface IconTextAdapterProps {
  content: IconTextContent;
}
const IconTextAdapter = ({ content }: IconTextAdapterProps) => {
  const { data } = content;

  return (
    <>
      {data.map((IconTextData, index) => {
        return <IconText key={index} text={IconTextData.text} />;
      })}
    </>
  );
};

export default IconTextAdapter;
