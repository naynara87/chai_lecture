import React from "react";
import TextBoxesAdapter, { TextBoxesAdapterProps } from "../TextBoxesAdapter";

// 컴포넌트를 찾기 용이하기 위해 아이디가 있어야 할 것 같다
interface TextBoxesCreatorProps extends TextBoxesAdapterProps {
  onSave(): void;
}
const TextBoxesCreator = ({ content }: TextBoxesCreatorProps) => {
  return <TextBoxesAdapter content={content} />;
};

export default TextBoxesCreator;
