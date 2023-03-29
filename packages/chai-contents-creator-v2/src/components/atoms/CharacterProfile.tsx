import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import ImgProfileDefault from "chai-ui-v2/dist/assets/images/img/img_profile_default.png";

interface CharacterContainerProps {
  customCSS?: SerializedStyles;
}
const CharacterContainer = styled.div<CharacterContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
  ${({ customCSS }) => customCSS}
`;

const CharacterNameInput = styled.input`
  margin-top: 6px;
  background: none !important;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  width: 63px;
`;

const CharacterImgWrap = styled.div`
  width: 36px;
  height: 36px;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 0px rgba(88, 88, 88, 0.2);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface ProfileProps {
  characterUrl?: string;
  characterName?: string;
  onSaveCharacterNameInput: (name: string) => void;
  characterContainerCss?: SerializedStyles;
  readOnly?: boolean;
}
const CharacterProfile = ({
  characterUrl,
  characterName,
  onSaveCharacterNameInput,
  characterContainerCss,
  readOnly,
}: ProfileProps) => {
  const handleCharacterNameInputBlur = (
    e: React.FocusEvent<HTMLInputElement>,
  ) => {
    if (onSaveCharacterNameInput) {
      onSaveCharacterNameInput(e.target.value);
    }
  };
  return (
    <CharacterContainer customCSS={characterContainerCss}>
      <CharacterImgWrap>
        <img
          src={characterUrl || ImgProfileDefault}
          alt={"캐릭터"}
          draggable={false}
        />
      </CharacterImgWrap>
      <CharacterNameInput
        type="text"
        placeholder="화자 이름"
        onBlur={handleCharacterNameInputBlur}
        defaultValue={characterName}
        readOnly={readOnly}
      />
    </CharacterContainer>
  );
};

export default CharacterProfile;
