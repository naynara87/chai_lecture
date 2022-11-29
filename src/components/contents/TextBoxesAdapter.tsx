import React from "react";
import { TextBoxesContent } from "../../types/templateContents";
import TextBoxes from "../molecules/TextBoxes";

interface TextBoxesAdapterProps {
  content: TextBoxesContent;
}
const TextBoxesAdapter = ({ content }: TextBoxesAdapterProps) => {
  const { data } = content;

  return (
    <>
      <TextBoxes datas={data} />;
    </>
  );
};

export default TextBoxesAdapter;
