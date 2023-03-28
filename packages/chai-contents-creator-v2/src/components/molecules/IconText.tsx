import React from "react";
import { IconTextCreatorWrapper } from "../contents/IconTextCreator";
import iconTip from "chai-ui-v2/dist/assets/images/icon/icon_tip.svg";
import { HtmlContentComponent } from "chai-ui-v2";
import TextEditor from "../atoms/TextEditor";

interface IconTextProps {
  text: string;
  setText: (text: string) => void;
  isFocused: boolean;
  handleEndEditText?: () => void;
}
const IconText = ({
  text,
  setText,
  isFocused,
  handleEndEditText,
}: IconTextProps) => {
  return (
    <IconTextCreatorWrapper onClick={() => {}}>
      <img src={iconTip} alt="" />
      {!isFocused ? (
        <div>
          {text ? (
            <HtmlContentComponent html={text} />
          ) : (
            "텍스트를 입력해주세요"
          )}
        </div>
      ) : (
        <TextEditor text={text} setText={setText} onBlur={handleEndEditText} />
      )}
    </IconTextCreatorWrapper>
  );
};

export default IconText;
