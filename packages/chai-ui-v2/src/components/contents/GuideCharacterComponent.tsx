import React from "react";
import { GuideCharacterContentData } from "../../core";
import { ImgCharacterComponent } from "../atoms";

interface GuideCharacterComponentProps {
  contents: GuideCharacterContentData;
}

const GuideCharacterComponent = ({
  contents,
}: GuideCharacterComponentProps) => {
  return (
    <div className="character-wrapper none">
      <div className="text-wrap">{contents.data.text}</div>
      <div className="character-wrap">
        <ImgCharacterComponent
          characterType="kkungiWink"
          characterAlt="꿍이윙크"
        />
      </div>
    </div>
  );
};

export default GuideCharacterComponent;
